/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

WebInspector.StyleSettingsPane = function(stylesSidebarPane)
{
    this._stylesSidebarPane = stylesSidebarPane;
    this._needsUpdate = true;
    this.element = document.createElement("div");
    this.element.className = "style-settings-pane";

    this.mainWindow = this.element.createChild("div", "style-settings-main");

    var captionWindow = this.mainWindow.createChild("div", "style-settings-caption");
    captionWindow.createChild("h1", "style-settings-window-title").textContent = WebInspector.UIString("Style Settings");
    this.contentElement = this.mainWindow.createChild("div", "style-settings-content");
    this.contentElement.tabIndex = 0;
    var doneButtonContainer = this.mainWindow.createChild("div");
    var doneButton = doneButtonContainer.createChild("button", "style-settings-done-button");
    doneButton.textContent = WebInspector.UIString("Done");
    doneButton.addEventListener("click", this._hide.bind(this), false);

    this._closeKeys = [
        WebInspector.KeyboardShortcut.Keys.Enter.code,
        WebInspector.KeyboardShortcut.Keys.Esc.code,
        WebInspector.KeyboardShortcut.Keys.Space.code,
    ];
}

WebInspector.StyleSettingsPane.ColorFormatIdPrefix = "colorFormat-";

WebInspector.StyleSettingsPane.PseudoClassesIdPrefix = "pseudoClasses-";

WebInspector.StyleSettingsPane.prototype = {
    show: function()
    {
        if (this._isShown)
            return;

        this._updateContents();

        this.element.addEventListener("click", this._inhibitClick, false);
        this.element.addEventListener("dblclick", this._inhibitClick, false);
        this.element.addStyleClass("visible");
        this._isShown = true;
    },

    _hide: function()
    {
        this._isShown = false;
        this.element.removeEventListener("click", this._inhibitClick, false);
        this.element.removeEventListener("dblclick", this._inhibitClick, false);
        this.element.removeStyleClass("visible");
        setTimeout(this._commitChanges.bind(this, this._getColorFormatValue(), this._getForcedPseudoClasses()), 0);
    },

    _inhibitClick: function(event)
    {
        event.stopPropagation();
    },

    _commitChanges: function(newColorFormat, forcedPseudoClasses)
    {
        this._stylesSidebarPane.changeColorFormat(newColorFormat);
        this._stylesSidebarPane.changeForcedPseudoClasses(forcedPseudoClasses);
    },

    _getColorFormatValue: function()
    {
        var radioButtons = this._getInputsWithIdPrefix(WebInspector.StyleSettingsPane.ColorFormatIdPrefix);
        for (var i = 0; i < radioButtons.length; ++i) {
            if (radioButtons[i].checked)
                return radioButtons[i].value;
        }

        return null;
    },

    _getForcedPseudoClasses: function()
    {
        var result = [];
        var checkboxes = this._getInputsWithIdPrefix(WebInspector.StyleSettingsPane.PseudoClassesIdPrefix);
        for (var i = 0; i < checkboxes.length; ++i) {
            if (checkboxes[i].checked)
                result.push(checkboxes[i].value);
        }

        return result;
    },

    _getInputsWithIdPrefix: function(prefix)
    {
        var result = [];
        var inputElements = this.contentElement.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; ++i) {
            if (inputElements[i].id && inputElements[i].id.indexOf(prefix) === 0)
                result.push(inputElements[i]);
        }
        return result;
    },

    _updateContents: function()
    {
        if (!this._needsUpdate)
            return;
        delete this._needsUpdate;

        const colorFormats = [{ text: WebInspector.UIString("As Authored"), value: "original" }, { text: WebInspector.UIString("Hex Colors"), value: "hex" }, { text: WebInspector.UIString("RGB Colors"), value: "rgb" }, { text: WebInspector.UIString("HSL Colors"), value: "hsl" }];
        const pseudoClasses = [":active", ":hover", ":focus", ":visited"];

        var settingsColorFormat = WebInspector.settings.colorFormat;
        var colorFormatFieldSet = this._createFieldSet(WebInspector.UIString("Color Format"));
        for (var i = 0; i < colorFormats.length; ++i) {
            var radioElement = colorFormatFieldSet.createChild("input");
            radioElement.type = "radio";
            radioElement.name = "colorFormat";
            radioElement.value = colorFormats[i].value;
            var radioId = WebInspector.StyleSettingsPane.ColorFormatIdPrefix + radioElement.value;
            radioElement.id = radioId;
            radioElement.checked = colorFormats[i].value === settingsColorFormat;
            var labelElement = colorFormatFieldSet.createChild("label");
            labelElement.htmlFor = radioId;
            labelElement.textContent = colorFormats[i].text;
            colorFormatFieldSet.createChild("br");
        }

        var forcedPseudoClasses = this._stylesSidebarPane.forcedPseudoClasses || [];
        var pseudoClassFieldSet = this._createFieldSet(WebInspector.UIString("Pseudo Classes"));
        for (var i = 0; i < pseudoClasses.length; ++i) {
            var checkboxElement = pseudoClassFieldSet.createChild("input");
            checkboxElement.type = "checkbox";
            checkboxElement.name = "pseudoClasses";
            checkboxElement.value = pseudoClasses[i].substring(1);
            checkboxElement.checked = forcedPseudoClasses.indexOf(checkboxElement.value) !== -1;
            var checkboxId = WebInspector.StyleSettingsPane.PseudoClassesIdPrefix + checkboxElement.value;
            checkboxElement.id = checkboxId;
            var labelElement = pseudoClassFieldSet.createChild("label");
            labelElement.htmlFor = checkboxId;
            labelElement.textContent = pseudoClasses[i];
            pseudoClassFieldSet.createChild("br");
        }
    },

    _createFieldSet: function(name)
    {
        var fieldSetElement = this.contentElement.createChild("fieldset");
        if (name) {
            var legendElement = fieldSetElement.createChild("legend");
            legendElement.textContent = name;
        }
        return fieldSetElement;
    }
}
