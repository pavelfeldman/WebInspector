/** @constructor */
function Foo() {}

/**
 * @constructor
 * @extends {Foo}
 */
function Bar() {
  Foo.call(this)
  if (this.baz())
    alert(1);
}

Bar.prototype = {
    baz: function()
    {
        return true;
    }
}

Bar.prototype.__proto__ = Foo.prototype;
