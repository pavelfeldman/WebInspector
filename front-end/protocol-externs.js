
var Protocol = {};
/** @typedef {string}*/
Protocol.Error;



var InspectorAgent = {};
/** @interface */
InspectorAgent.Dispatcher = function() {};
InspectorAgent.Dispatcher.prototype.frontendReused = function() {};
InspectorAgent.Dispatcher.prototype.bringToFront = function() {};
InspectorAgent.Dispatcher.prototype.disconnectFromBackend = function() {};
InspectorAgent.Dispatcher.prototype.reset = function() {};
/**
 * @param {string} panel
 */
InspectorAgent.Dispatcher.prototype.showPanel = function(panel) {};
InspectorAgent.Dispatcher.prototype.startUserInitiatedDebugging = function() {};
/**
 * @param {number} testCallId
 * @param {string} script
 */
InspectorAgent.Dispatcher.prototype.evaluateForTestInFrontend = function(testCallId, script) {};
/**
 * @param {RuntimeAgent.RemoteObject} object
 * @param {Object} hints
 */
InspectorAgent.Dispatcher.prototype.inspect = function(object, hints) {};
/**
 * @param {number} id
 * @param {string} url
 * @param {boolean} isShared
 */
InspectorAgent.Dispatcher.prototype.didCreateWorker = function(id, url, isShared) {};
/**
 * @param {number} id
 */
InspectorAgent.Dispatcher.prototype.didDestroyWorker = function(id) {};
/**
 * @param {InspectorAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerInspectorDispatcher = function(dispatcher) {}



var PageAgent = {};

/** @typedef {string} */
PageAgent.ResourceType;

/** @constructor */
PageAgent.Frame = function()
{
/** @type {string} */ this.id;
/** @type {string|undefined} */ this.parentId;
/** @type {NetworkAgent.LoaderId} */ this.loaderId;
/** @type {string|undefined} */ this.name;
/** @type {string} */ this.url;
/** @type {string} */ this.mimeType;
}

/** @constructor */
PageAgent.FrameResourceTree = function()
{
/** @type {PageAgent.Frame} */ this.frame;
/** @type {Array.<PageAgent.FrameResourceTree>|undefined} */ this.childFrames;
/** @type {Array.<Object>} */ this.resources;
}

/** @constructor */
PageAgent.SearchMatch = function()
{
/** @type {number} */ this.lineNumber;
/** @type {string} */ this.lineContent;
}

/** @constructor */
PageAgent.SearchResult = function()
{
/** @type {string} */ this.url;
/** @type {string} */ this.frameId;
/** @type {number} */ this.matchesCount;
}

/** @constructor */
PageAgent.Cookie = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.value;
/** @type {string} */ this.domain;
/** @type {string} */ this.path;
/** @type {number} */ this.expires;
/** @type {number} */ this.size;
/** @type {boolean} */ this.httpOnly;
/** @type {boolean} */ this.secure;
/** @type {boolean} */ this.session;
}

/** @typedef {string} */
PageAgent.ScriptIdentifier;

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {string} scriptSource
 * @param {function(?Protocol.Error, PageAgent.ScriptIdentifier):void=} opt_callback
 */
PageAgent.addScriptToEvaluateOnLoad = function(scriptSource, opt_callback) {}
/** @param {function(?Protocol.Error, PageAgent.ScriptIdentifier):void=} opt_callback */
PageAgent.addScriptToEvaluateOnLoad.invoke = function(obj, opt_callback) {}

/**
 * @param {PageAgent.ScriptIdentifier} identifier
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.removeScriptToEvaluateOnLoad = function(identifier, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.removeScriptToEvaluateOnLoad.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean=} opt_ignoreCache
 * @param {string=} opt_scriptToEvaluateOnLoad
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.reload = function(opt_ignoreCache, opt_scriptToEvaluateOnLoad, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.reload.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {boolean=} opt_newWindow
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.open = function(url, opt_newWindow, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.open.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<PageAgent.Cookie>, string):void=} opt_callback
 */
PageAgent.getCookies = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.Cookie>, string):void=} opt_callback */
PageAgent.getCookies.invoke = function(obj, opt_callback) {}

/**
 * @param {string} cookieName
 * @param {string} domain
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.deleteCookie = function(cookieName, domain, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.deleteCookie.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, PageAgent.FrameResourceTree):void=} opt_callback
 */
PageAgent.getResourceTree = function(opt_callback) {}
/** @param {function(?Protocol.Error, PageAgent.FrameResourceTree):void=} opt_callback */
PageAgent.getResourceTree.invoke = function(obj, opt_callback) {}

/**
 * @param {string} frameId
 * @param {string} url
 * @param {function(?Protocol.Error, string, boolean):void=} opt_callback
 */
PageAgent.getResourceContent = function(frameId, url, opt_callback) {}
/** @param {function(?Protocol.Error, string, boolean):void=} opt_callback */
PageAgent.getResourceContent.invoke = function(obj, opt_callback) {}

/**
 * @param {string} frameId
 * @param {string} url
 * @param {string} query
 * @param {boolean=} opt_caseSensitive
 * @param {boolean=} opt_isRegex
 * @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback
 */
PageAgent.searchInResource = function(frameId, url, query, opt_caseSensitive, opt_isRegex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback */
PageAgent.searchInResource.invoke = function(obj, opt_callback) {}

/**
 * @param {string} text
 * @param {boolean=} opt_caseSensitive
 * @param {boolean=} opt_isRegex
 * @param {function(?Protocol.Error, Array.<PageAgent.SearchResult>):void=} opt_callback
 */
PageAgent.searchInResources = function(text, opt_caseSensitive, opt_isRegex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.SearchResult>):void=} opt_callback */
PageAgent.searchInResources.invoke = function(obj, opt_callback) {}
/** @interface */
PageAgent.Dispatcher = function() {};
/**
 * @param {number} timestamp
 */
PageAgent.Dispatcher.prototype.domContentEventFired = function(timestamp) {};
/**
 * @param {number} timestamp
 */
PageAgent.Dispatcher.prototype.loadEventFired = function(timestamp) {};
/**
 * @param {PageAgent.Frame} frame
 * @param {NetworkAgent.LoaderId} loaderId
 */
PageAgent.Dispatcher.prototype.frameNavigated = function(frame, loaderId) {};
/**
 * @param {string} frameId
 */
PageAgent.Dispatcher.prototype.frameDetached = function(frameId) {};
/**
 * @param {PageAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerPageDispatcher = function(dispatcher) {}



var RuntimeAgent = {};

/** @typedef {string} */
RuntimeAgent.RemoteObjectId;

/** @constructor */
RuntimeAgent.RemoteObject = function()
{
/** @type {string} */ this.type;
/** @type {string|undefined} */ this.subtype;
/** @type {string|undefined} */ this.className;
/** @type {*|undefined} */ this.value;
/** @type {string|undefined} */ this.description;
/** @type {RuntimeAgent.RemoteObjectId|undefined} */ this.objectId;
}

/** @constructor */
RuntimeAgent.PropertyDescriptor = function()
{
/** @type {string} */ this.name;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.value;
/** @type {boolean} */ this.writable;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.get;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.set;
/** @type {boolean} */ this.configurable;
/** @type {boolean} */ this.enumerable;
/** @type {boolean|undefined} */ this.wasThrown;
}

/** @constructor */
RuntimeAgent.CallArgument = function()
{
/** @type {*|undefined} */ this.value;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.objectId;
}

/**
 * @param {string} expression
 * @param {string=} opt_objectGroup
 * @param {boolean=} opt_includeCommandLineAPI
 * @param {boolean=} opt_doNotPauseOnExceptions
 * @param {string=} opt_frameId
 * @param {boolean=} opt_returnByValue
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
RuntimeAgent.evaluate = function(expression, opt_objectGroup, opt_includeCommandLineAPI, opt_doNotPauseOnExceptions, opt_frameId, opt_returnByValue, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
RuntimeAgent.evaluate.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {string} functionDeclaration
 * @param {Array.<RuntimeAgent.CallArgument>=} opt_arguments
 * @param {boolean=} opt_returnByValue
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
RuntimeAgent.callFunctionOn = function(objectId, functionDeclaration, opt_arguments, opt_returnByValue, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
RuntimeAgent.callFunctionOn.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {boolean=} opt_ownProperties
 * @param {function(?Protocol.Error, Array.<RuntimeAgent.PropertyDescriptor>):void=} opt_callback
 */
RuntimeAgent.getProperties = function(objectId, opt_ownProperties, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<RuntimeAgent.PropertyDescriptor>):void=} opt_callback */
RuntimeAgent.getProperties.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.releaseObject = function(objectId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.releaseObject.invoke = function(obj, opt_callback) {}

/**
 * @param {string} objectGroup
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.releaseObjectGroup = function(objectGroup, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.releaseObjectGroup.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.run = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.run.invoke = function(obj, opt_callback) {}
/** @interface */
RuntimeAgent.Dispatcher = function() {};
/**
 * @param {RuntimeAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerRuntimeDispatcher = function(dispatcher) {}



var ConsoleAgent = {};

/** @constructor */
ConsoleAgent.ConsoleMessage = function()
{
/** @type {string} */ this.source;
/** @type {string} */ this.level;
/** @type {string} */ this.text;
/** @type {string|undefined} */ this.type;
/** @type {string|undefined} */ this.url;
/** @type {number|undefined} */ this.line;
/** @type {number|undefined} */ this.repeatCount;
/** @type {Array.<RuntimeAgent.RemoteObject>|undefined} */ this.parameters;
/** @type {ConsoleAgent.StackTrace|undefined} */ this.stackTrace;
/** @type {NetworkAgent.RequestId|undefined} */ this.networkRequestId;
}

/** @constructor */
ConsoleAgent.CallFrame = function()
{
/** @type {string} */ this.functionName;
/** @type {string} */ this.url;
/** @type {string} */ this.lineNumber;
/** @type {string} */ this.columnNumber;
}

/** @typedef {Array.<ConsoleAgent.CallFrame>} */
ConsoleAgent.StackTrace;

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.clearMessages = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.clearMessages.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} enabled
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.setMonitoringXHREnabled = function(enabled, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.setMonitoringXHREnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.addInspectedNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.addInspectedNode.invoke = function(obj, opt_callback) {}
/** @interface */
ConsoleAgent.Dispatcher = function() {};
/**
 * @param {ConsoleAgent.ConsoleMessage} message
 */
ConsoleAgent.Dispatcher.prototype.messageAdded = function(message) {};
/**
 * @param {number} count
 */
ConsoleAgent.Dispatcher.prototype.messageRepeatCountUpdated = function(count) {};
ConsoleAgent.Dispatcher.prototype.messagesCleared = function() {};
/**
 * @param {ConsoleAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerConsoleDispatcher = function(dispatcher) {}



var NetworkAgent = {};

/** @typedef {string} */
NetworkAgent.LoaderId;

/** @typedef {string} */
NetworkAgent.RequestId;

/** @typedef {number} */
NetworkAgent.Timestamp;

/** @constructor */
NetworkAgent.Headers = function()
{
}

/** @constructor */
NetworkAgent.ResourceTiming = function()
{
/** @type {number} */ this.requestTime;
/** @type {number} */ this.proxyStart;
/** @type {number} */ this.proxyEnd;
/** @type {number} */ this.dnsStart;
/** @type {number} */ this.dnsEnd;
/** @type {number} */ this.connectStart;
/** @type {number} */ this.connectEnd;
/** @type {number} */ this.sslStart;
/** @type {number} */ this.sslEnd;
/** @type {number} */ this.sendStart;
/** @type {number} */ this.sendEnd;
/** @type {number} */ this.receiveHeadersEnd;
}

/** @constructor */
NetworkAgent.Request = function()
{
/** @type {string} */ this.url;
/** @type {string} */ this.method;
/** @type {NetworkAgent.Headers} */ this.headers;
/** @type {string|undefined} */ this.postData;
}

/** @constructor */
NetworkAgent.Response = function()
{
/** @type {string} */ this.url;
/** @type {number} */ this.status;
/** @type {string} */ this.statusText;
/** @type {NetworkAgent.Headers} */ this.headers;
/** @type {string|undefined} */ this.headersText;
/** @type {string} */ this.mimeType;
/** @type {NetworkAgent.Headers|undefined} */ this.requestHeaders;
/** @type {string|undefined} */ this.requestHeadersText;
/** @type {boolean} */ this.connectionReused;
/** @type {number} */ this.connectionId;
/** @type {boolean|undefined} */ this.fromDiskCache;
/** @type {NetworkAgent.ResourceTiming|undefined} */ this.timing;
}

/** @constructor */
NetworkAgent.WebSocketRequest = function()
{
/** @type {string} */ this.requestKey3;
/** @type {NetworkAgent.Headers} */ this.headers;
}

/** @constructor */
NetworkAgent.WebSocketResponse = function()
{
/** @type {number} */ this.status;
/** @type {string} */ this.statusText;
/** @type {NetworkAgent.Headers} */ this.headers;
/** @type {string} */ this.challengeResponse;
}

/** @constructor */
NetworkAgent.CachedResource = function()
{
/** @type {string} */ this.url;
/** @type {PageAgent.ResourceType} */ this.type;
/** @type {NetworkAgent.Response} */ this.response;
/** @type {number} */ this.bodySize;
}

/** @constructor */
NetworkAgent.Initiator = function()
{
/** @type {string} */ this.type;
/** @type {ConsoleAgent.StackTrace|undefined} */ this.stackTrace;
/** @type {string|undefined} */ this.url;
/** @type {number|undefined} */ this.lineNumber;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {string} userAgent
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.setUserAgentOverride = function(userAgent, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.setUserAgentOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.Headers} headers
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.setExtraHTTPHeaders = function(headers, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.setExtraHTTPHeaders.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {function(?Protocol.Error, string, boolean):void=} opt_callback
 */
NetworkAgent.getResponseBody = function(requestId, opt_callback) {}
/** @param {function(?Protocol.Error, string, boolean):void=} opt_callback */
NetworkAgent.getResponseBody.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.clearBrowserCache = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.clearBrowserCache.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.clearBrowserCookies = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.clearBrowserCookies.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} cacheDisabled
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.setCacheDisabled = function(cacheDisabled, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.setCacheDisabled.invoke = function(obj, opt_callback) {}
/** @interface */
NetworkAgent.Dispatcher = function() {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {string} frameId
 * @param {NetworkAgent.LoaderId} loaderId
 * @param {string} documentURL
 * @param {NetworkAgent.Request} request
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.Initiator} initiator
 * @param {ConsoleAgent.StackTrace=} opt_stackTrace
 * @param {NetworkAgent.Response=} opt_redirectResponse
 */
NetworkAgent.Dispatcher.prototype.requestWillBeSent = function(requestId, frameId, loaderId, documentURL, request, timestamp, initiator, opt_stackTrace, opt_redirectResponse) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 */
NetworkAgent.Dispatcher.prototype.requestServedFromCache = function(requestId) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {PageAgent.ResourceType} type
 * @param {NetworkAgent.Response} response
 */
NetworkAgent.Dispatcher.prototype.responseReceived = function(requestId, timestamp, type, response) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {number} dataLength
 * @param {number} encodedDataLength
 */
NetworkAgent.Dispatcher.prototype.dataReceived = function(requestId, timestamp, dataLength, encodedDataLength) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 */
NetworkAgent.Dispatcher.prototype.loadingFinished = function(requestId, timestamp) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {string} errorText
 * @param {boolean=} opt_canceled
 */
NetworkAgent.Dispatcher.prototype.loadingFailed = function(requestId, timestamp, errorText, opt_canceled) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {string} frameId
 * @param {NetworkAgent.LoaderId} loaderId
 * @param {string} documentURL
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.Initiator} initiator
 * @param {NetworkAgent.CachedResource} resource
 */
NetworkAgent.Dispatcher.prototype.requestServedFromMemoryCache = function(requestId, frameId, loaderId, documentURL, timestamp, initiator, resource) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.WebSocketRequest} request
 */
NetworkAgent.Dispatcher.prototype.webSocketWillSendHandshakeRequest = function(requestId, timestamp, request) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.WebSocketResponse} response
 */
NetworkAgent.Dispatcher.prototype.webSocketHandshakeResponseReceived = function(requestId, timestamp, response) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {string} url
 */
NetworkAgent.Dispatcher.prototype.webSocketCreated = function(requestId, url) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 */
NetworkAgent.Dispatcher.prototype.webSocketClosed = function(requestId, timestamp) {};
/**
 * @param {NetworkAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerNetworkDispatcher = function(dispatcher) {}



var DatabaseAgent = {};

/** @constructor */
DatabaseAgent.Database = function()
{
/** @type {string} */ this.id;
/** @type {string} */ this.domain;
/** @type {string} */ this.name;
/** @type {string} */ this.version;
}

/** @constructor */
DatabaseAgent.Error = function()
{
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DatabaseAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DatabaseAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DatabaseAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DatabaseAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {number} databaseId
 * @param {function(?Protocol.Error, Array.<string>):void=} opt_callback
 */
DatabaseAgent.getDatabaseTableNames = function(databaseId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<string>):void=} opt_callback */
DatabaseAgent.getDatabaseTableNames.invoke = function(obj, opt_callback) {}

/**
 * @param {number} databaseId
 * @param {string} query
 * @param {function(?Protocol.Error, boolean, number):void=} opt_callback
 */
DatabaseAgent.executeSQL = function(databaseId, query, opt_callback) {}
/** @param {function(?Protocol.Error, boolean, number):void=} opt_callback */
DatabaseAgent.executeSQL.invoke = function(obj, opt_callback) {}
/** @interface */
DatabaseAgent.Dispatcher = function() {};
/**
 * @param {DatabaseAgent.Database} database
 */
DatabaseAgent.Dispatcher.prototype.addDatabase = function(database) {};
/**
 * @param {number} transactionId
 * @param {Array.<string>} columnNames
 * @param {Array.<*>} values
 */
DatabaseAgent.Dispatcher.prototype.sqlTransactionSucceeded = function(transactionId, columnNames, values) {};
/**
 * @param {number} transactionId
 * @param {DatabaseAgent.Error} sqlError
 */
DatabaseAgent.Dispatcher.prototype.sqlTransactionFailed = function(transactionId, sqlError) {};
/**
 * @param {DatabaseAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDatabaseDispatcher = function(dispatcher) {}



var DOMStorageAgent = {};

/** @constructor */
DOMStorageAgent.Entry = function()
{
/** @type {string} */ this.host;
/** @type {boolean} */ this.isLocalStorage;
/** @type {number} */ this.id;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMStorageAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMStorageAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMStorageAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMStorageAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {number} storageId
 * @param {function(?Protocol.Error, Array.<DOMStorageAgent.Entry>):void=} opt_callback
 */
DOMStorageAgent.getDOMStorageEntries = function(storageId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMStorageAgent.Entry>):void=} opt_callback */
DOMStorageAgent.getDOMStorageEntries.invoke = function(obj, opt_callback) {}

/**
 * @param {number} storageId
 * @param {string} key
 * @param {string} value
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DOMStorageAgent.setDOMStorageItem = function(storageId, key, value, opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DOMStorageAgent.setDOMStorageItem.invoke = function(obj, opt_callback) {}

/**
 * @param {number} storageId
 * @param {string} key
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DOMStorageAgent.removeDOMStorageItem = function(storageId, key, opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DOMStorageAgent.removeDOMStorageItem.invoke = function(obj, opt_callback) {}
/** @interface */
DOMStorageAgent.Dispatcher = function() {};
/**
 * @param {Object} storage
 */
DOMStorageAgent.Dispatcher.prototype.addDOMStorage = function(storage) {};
/**
 * @param {number} storageId
 */
DOMStorageAgent.Dispatcher.prototype.updateDOMStorage = function(storageId) {};
/**
 * @param {DOMStorageAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDOMStorageDispatcher = function(dispatcher) {}



var ApplicationCacheAgent = {};

/** @constructor */
ApplicationCacheAgent.AppCache = function()
{
}

/**
 * @param {function(?Protocol.Error, ApplicationCacheAgent.AppCache):void=} opt_callback
 */
ApplicationCacheAgent.getApplicationCaches = function(opt_callback) {}
/** @param {function(?Protocol.Error, ApplicationCacheAgent.AppCache):void=} opt_callback */
ApplicationCacheAgent.getApplicationCaches.invoke = function(obj, opt_callback) {}
/** @interface */
ApplicationCacheAgent.Dispatcher = function() {};
/**
 * @param {number} status
 */
ApplicationCacheAgent.Dispatcher.prototype.updateApplicationCacheStatus = function(status) {};
/**
 * @param {boolean} isNowOnline
 */
ApplicationCacheAgent.Dispatcher.prototype.updateNetworkState = function(isNowOnline) {};
/**
 * @param {ApplicationCacheAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerApplicationCacheDispatcher = function(dispatcher) {}



var DOMAgent = {};

/** @typedef {number} */
DOMAgent.NodeId;

/** @constructor */
DOMAgent.Node = function()
{
/** @type {DOMAgent.NodeId} */ this.nodeId;
/** @type {number} */ this.nodeType;
/** @type {string} */ this.nodeName;
/** @type {string} */ this.localName;
/** @type {string} */ this.nodeValue;
/** @type {number|undefined} */ this.childNodeCount;
/** @type {Array.<DOMAgent.Node>|undefined} */ this.children;
/** @type {Array.<string>|undefined} */ this.attributes;
/** @type {string|undefined} */ this.documentURL;
/** @type {string|undefined} */ this.publicId;
/** @type {string|undefined} */ this.systemId;
/** @type {string|undefined} */ this.internalSubset;
/** @type {string|undefined} */ this.xmlVersion;
/** @type {string|undefined} */ this.name;
/** @type {string|undefined} */ this.value;
}

/** @constructor */
DOMAgent.EventListener = function()
{
/** @type {string} */ this.type;
/** @type {boolean} */ this.useCapture;
/** @type {boolean} */ this.isAttribute;
/** @type {DOMAgent.NodeId} */ this.nodeId;
/** @type {string} */ this.handlerBody;
/** @type {DebuggerAgent.Location|undefined} */ this.location;
}

/** @constructor */
DOMAgent.RGBA = function()
{
/** @type {number} */ this.r;
/** @type {number} */ this.g;
/** @type {number} */ this.b;
/** @type {number|undefined} */ this.a;
}

/** @constructor */
DOMAgent.HighlightConfig = function()
{
/** @type {boolean|undefined} */ this.showInfo;
/** @type {DOMAgent.RGBA|undefined} */ this.contentColor;
/** @type {DOMAgent.RGBA|undefined} */ this.paddingColor;
/** @type {DOMAgent.RGBA|undefined} */ this.borderColor;
/** @type {DOMAgent.RGBA|undefined} */ this.marginColor;
}

/**
 * @param {function(?Protocol.Error, DOMAgent.Node):void=} opt_callback
 */
DOMAgent.getDocument = function(opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.Node):void=} opt_callback */
DOMAgent.getDocument.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.requestChildNodes = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.requestChildNodes.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} selector
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.querySelector = function(nodeId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.querySelector.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} selector
 * @param {function(?Protocol.Error, Array.<DOMAgent.NodeId>):void=} opt_callback
 */
DOMAgent.querySelectorAll = function(nodeId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMAgent.NodeId>):void=} opt_callback */
DOMAgent.querySelectorAll.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.setNodeName = function(nodeId, name, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.setNodeName.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setNodeValue = function(nodeId, value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setNodeValue.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.removeNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.removeNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {string} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setAttributeValue = function(nodeId, name, value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setAttributeValue.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} text
 * @param {string=} opt_name
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setAttributesAsText = function(nodeId, text, opt_name, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setAttributesAsText.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.removeAttribute = function(nodeId, name, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.removeAttribute.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, Array.<DOMAgent.EventListener>):void=} opt_callback
 */
DOMAgent.getEventListenersForNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMAgent.EventListener>):void=} opt_callback */
DOMAgent.getEventListenersForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.copyNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.copyNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
DOMAgent.getOuterHTML = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
DOMAgent.getOuterHTML.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} outerHTML
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.setOuterHTML = function(nodeId, outerHTML, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.setOuterHTML.invoke = function(obj, opt_callback) {}

/**
 * @param {string} query
 * @param {boolean=} opt_runSynchronously
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.performSearch = function(query, opt_runSynchronously, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.performSearch.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.cancelSearch = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.cancelSearch.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.requestNode = function(objectId, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.requestNode.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} enabled
 * @param {DOMAgent.HighlightConfig=} opt_highlightConfig
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setInspectModeEnabled = function(enabled, opt_highlightConfig, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setInspectModeEnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {DOMAgent.RGBA=} opt_color
 * @param {DOMAgent.RGBA=} opt_outlineColor
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.highlightRect = function(x, y, width, height, opt_color, opt_outlineColor, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.highlightRect.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMAgent.HighlightConfig} highlightConfig
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.highlightNode = function(nodeId, highlightConfig, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.highlightNode.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.hideHighlight = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.hideHighlight.invoke = function(obj, opt_callback) {}

/**
 * @param {string} frameId
 * @param {DOMAgent.RGBA=} opt_contentColor
 * @param {DOMAgent.RGBA=} opt_contentOutlineColor
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.highlightFrame = function(frameId, opt_contentColor, opt_contentOutlineColor, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.highlightFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {string} path
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.pushNodeByPathToFrontend = function(path, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.pushNodeByPathToFrontend.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string=} opt_objectGroup
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback
 */
DOMAgent.resolveNode = function(nodeId, opt_objectGroup, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback */
DOMAgent.resolveNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, Array.<string>):void=} opt_callback
 */
DOMAgent.getAttributes = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<string>):void=} opt_callback */
DOMAgent.getAttributes.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMAgent.NodeId} targetNodeId
 * @param {DOMAgent.NodeId=} opt_insertBeforeNodeId
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.moveTo = function(nodeId, targetNodeId, opt_insertBeforeNodeId, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.moveTo.invoke = function(obj, opt_callback) {}
/** @interface */
DOMAgent.Dispatcher = function() {};
DOMAgent.Dispatcher.prototype.documentUpdated = function() {};
/**
 * @param {DOMAgent.NodeId} parentId
 * @param {Array.<DOMAgent.Node>} nodes
 */
DOMAgent.Dispatcher.prototype.setChildNodes = function(parentId, nodes) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {string} value
 */
DOMAgent.Dispatcher.prototype.attributeModified = function(nodeId, name, value) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 */
DOMAgent.Dispatcher.prototype.attributeRemoved = function(nodeId, name) {};
/**
 * @param {Array.<DOMAgent.NodeId>} nodeIds
 */
DOMAgent.Dispatcher.prototype.inlineStyleInvalidated = function(nodeIds) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} characterData
 */
DOMAgent.Dispatcher.prototype.characterDataModified = function(nodeId, characterData) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {number} childNodeCount
 */
DOMAgent.Dispatcher.prototype.childNodeCountUpdated = function(nodeId, childNodeCount) {};
/**
 * @param {DOMAgent.NodeId} parentNodeId
 * @param {DOMAgent.NodeId} previousNodeId
 * @param {DOMAgent.Node} node
 */
DOMAgent.Dispatcher.prototype.childNodeInserted = function(parentNodeId, previousNodeId, node) {};
/**
 * @param {DOMAgent.NodeId} parentNodeId
 * @param {DOMAgent.NodeId} nodeId
 */
DOMAgent.Dispatcher.prototype.childNodeRemoved = function(parentNodeId, nodeId) {};
/**
 * @param {Array.<DOMAgent.NodeId>} nodeIds
 */
DOMAgent.Dispatcher.prototype.searchResults = function(nodeIds) {};
/**
 * @param {DOMAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDOMDispatcher = function(dispatcher) {}



var CSSAgent = {};

/** @constructor */
CSSAgent.CSSStyleId = function()
{
/** @type {string} */ this.styleSheetId;
/** @type {number} */ this.ordinal;
}

/** @constructor */
CSSAgent.CSSRuleId = function()
{
/** @type {string} */ this.styleSheetId;
/** @type {number} */ this.ordinal;
}

/** @constructor */
CSSAgent.CSSNodeStyles = function()
{
/** @type {CSSAgent.CSSStyle|undefined} */ this.inlineStyle;
/** @type {CSSAgent.CSSComputedStyle} */ this.computedStyle;
/** @type {Array.<CSSAgent.CSSRule>} */ this.matchedCSSRules;
/** @type {Array.<CSSAgent.CSSStyleAttribute>} */ this.styleAttributes;
/** @type {Array.<CSSAgent.PseudoIdRules>} */ this.pseudoElements;
/** @type {Array.<CSSAgent.InheritedStyleEntry>} */ this.inherited;
}

/** @constructor */
CSSAgent.PseudoIdRules = function()
{
/** @type {number} */ this.pseudoId;
/** @type {Array.<CSSAgent.CSSRule>} */ this.rules;
}

/** @constructor */
CSSAgent.InheritedStyleEntry = function()
{
/** @type {CSSAgent.CSSStyle|undefined} */ this.inlineStyle;
/** @type {Array.<CSSAgent.CSSRule>} */ this.matchedCSSRules;
}

/** @constructor */
CSSAgent.CSSStyleAttribute = function()
{
/** @type {string} */ this.name;
/** @type {CSSAgent.CSSStyle} */ this.style;
}

/** @constructor */
CSSAgent.CSSStyleSheetHeader = function()
{
/** @type {string} */ this.styleSheetId;
/** @type {string} */ this.sourceURL;
/** @type {string} */ this.title;
/** @type {boolean} */ this.disabled;
}

/** @constructor */
CSSAgent.CSSStyleSheetBody = function()
{
/** @type {string} */ this.styleSheetId;
/** @type {Array.<CSSAgent.CSSRule>} */ this.rules;
/** @type {string|undefined} */ this.text;
}

/** @constructor */
CSSAgent.CSSRule = function()
{
/** @type {CSSAgent.CSSRuleId} */ this.ruleId;
/** @type {string} */ this.selectorText;
/** @type {string|undefined} */ this.sourceURL;
/** @type {number} */ this.sourceLine;
/** @type {string} */ this.origin;
/** @type {CSSAgent.CSSStyle} */ this.style;
/** @type {CSSAgent.SourceRange|undefined} */ this.selectorRange;
}

/** @constructor */
CSSAgent.SourceRange = function()
{
/** @type {number} */ this.start;
/** @type {number} */ this.end;
}

/** @constructor */
CSSAgent.ShorthandEntry = function()
{
}

/** @constructor */
CSSAgent.CSSComputedStyle = function()
{
}

/** @constructor */
CSSAgent.CSSStyle = function()
{
/** @type {CSSAgent.CSSStyleId} */ this.styleId;
/** @type {Array.<CSSAgent.CSSProperty>} */ this.cssProperties;
/** @type {Array.<CSSAgent.ShorthandEntry>} */ this.shorthandEntries;
/** @type {string|undefined} */ this.cssText;
/** @type {CSSAgent.SourceRange|undefined} */ this.range;
/** @type {number} */ this.width;
/** @type {number} */ this.height;
}

/** @constructor */
CSSAgent.CSSProperty = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.value;
/** @type {string|undefined} */ this.priority;
/** @type {boolean|undefined} */ this.implicit;
/** @type {boolean|undefined} */ this.parsedOk;
/** @type {string|undefined} */ this.status;
/** @type {string} */ this.shorthandName;
/** @type {CSSAgent.SourceRange|undefined} */ this.range;
}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {Array.<string>=} opt_forcedPseudoClasses
 * @param {function(?Protocol.Error, CSSAgent.CSSNodeStyles):void=} opt_callback
 */
CSSAgent.getStylesForNode = function(nodeId, opt_forcedPseudoClasses, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSNodeStyles):void=} opt_callback */
CSSAgent.getStylesForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback
 */
CSSAgent.getComputedStyleForNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback */
CSSAgent.getComputedStyleForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback
 */
CSSAgent.getInlineStyleForNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback */
CSSAgent.getInlineStyleForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<CSSAgent.CSSStyleSheetHeader>):void=} opt_callback
 */
CSSAgent.getAllStyleSheets = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<CSSAgent.CSSStyleSheetHeader>):void=} opt_callback */
CSSAgent.getAllStyleSheets.invoke = function(obj, opt_callback) {}

/**
 * @param {string} styleSheetId
 * @param {function(?Protocol.Error, CSSAgent.CSSStyleSheetBody):void=} opt_callback
 */
CSSAgent.getStyleSheet = function(styleSheetId, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyleSheetBody):void=} opt_callback */
CSSAgent.getStyleSheet.invoke = function(obj, opt_callback) {}

/**
 * @param {string} styleSheetId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
CSSAgent.getStyleSheetText = function(styleSheetId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
CSSAgent.getStyleSheetText.invoke = function(obj, opt_callback) {}

/**
 * @param {string} styleSheetId
 * @param {string} text
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CSSAgent.setStyleSheetText = function(styleSheetId, text, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CSSAgent.setStyleSheetText.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.CSSStyleId} styleId
 * @param {number} propertyIndex
 * @param {string} text
 * @param {boolean} overwrite
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback
 */
CSSAgent.setPropertyText = function(styleId, propertyIndex, text, overwrite, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback */
CSSAgent.setPropertyText.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.CSSStyleId} styleId
 * @param {number} propertyIndex
 * @param {boolean} disable
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback
 */
CSSAgent.toggleProperty = function(styleId, propertyIndex, disable, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback */
CSSAgent.toggleProperty.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.CSSRuleId} ruleId
 * @param {string} selector
 * @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback
 */
CSSAgent.setRuleSelector = function(ruleId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback */
CSSAgent.setRuleSelector.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} contextNodeId
 * @param {string} selector
 * @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback
 */
CSSAgent.addRule = function(contextNodeId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback */
CSSAgent.addRule.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<string>):void=} opt_callback
 */
CSSAgent.getSupportedCSSProperties = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<string>):void=} opt_callback */
CSSAgent.getSupportedCSSProperties.invoke = function(obj, opt_callback) {}
/** @interface */
CSSAgent.Dispatcher = function() {};
/**
 * @param {CSSAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerCSSDispatcher = function(dispatcher) {}



var TimelineAgent = {};

/** @constructor */
TimelineAgent.TimelineEvent = function()
{
/** @type {string} */ this.type;
/** @type {Object} */ this.data;
/** @type {Array.<TimelineAgent.TimelineEvent>|undefined} */ this.children;
}

/**
 * @param {number=} opt_maxCallStackDepth
 * @param {function(?Protocol.Error):void=} opt_callback
 */
TimelineAgent.start = function(opt_maxCallStackDepth, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
TimelineAgent.start.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
TimelineAgent.stop = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
TimelineAgent.stop.invoke = function(obj, opt_callback) {}
/** @interface */
TimelineAgent.Dispatcher = function() {};
TimelineAgent.Dispatcher.prototype.started = function() {};
TimelineAgent.Dispatcher.prototype.stopped = function() {};
/**
 * @param {TimelineAgent.TimelineEvent} record
 */
TimelineAgent.Dispatcher.prototype.eventRecorded = function(record) {};
/**
 * @param {TimelineAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerTimelineDispatcher = function(dispatcher) {}



var DebuggerAgent = {};

/** @typedef {string} */
DebuggerAgent.BreakpointId;

/** @typedef {string} */
DebuggerAgent.ScriptId;

/** @typedef {string} */
DebuggerAgent.CallFrameId;

/** @constructor */
DebuggerAgent.Location = function()
{
/** @type {DebuggerAgent.ScriptId} */ this.scriptId;
/** @type {number} */ this.lineNumber;
/** @type {number|undefined} */ this.columnNumber;
}

/** @constructor */
DebuggerAgent.CallFrame = function()
{
/** @type {DebuggerAgent.CallFrameId} */ this.callFrameId;
/** @type {string} */ this.functionName;
/** @type {DebuggerAgent.Location} */ this.location;
/** @type {Array.<DebuggerAgent.Scope>} */ this.scopeChain;
/** @type {RuntimeAgent.RemoteObject} */ this.this;
}

/** @constructor */
DebuggerAgent.Scope = function()
{
/** @type {string} */ this.type;
/** @type {RuntimeAgent.RemoteObject} */ this.object;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} active
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.setBreakpointsActive = function(active, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.setBreakpointsActive.invoke = function(obj, opt_callback) {}

/**
 * @param {number} lineNumber
 * @param {string=} opt_url
 * @param {string=} opt_urlRegex
 * @param {number=} opt_columnNumber
 * @param {string=} opt_condition
 * @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, Array.<DebuggerAgent.Location>=):void=} opt_callback
 */
DebuggerAgent.setBreakpointByUrl = function(lineNumber, opt_url, opt_urlRegex, opt_columnNumber, opt_condition, opt_callback) {}
/** @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, Array.<DebuggerAgent.Location>=):void=} opt_callback */
DebuggerAgent.setBreakpointByUrl.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.Location} location
 * @param {string=} opt_condition
 * @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, DebuggerAgent.Location):void=} opt_callback
 */
DebuggerAgent.setBreakpoint = function(location, opt_condition, opt_callback) {}
/** @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, DebuggerAgent.Location):void=} opt_callback */
DebuggerAgent.setBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.BreakpointId} breakpointId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.removeBreakpoint = function(breakpointId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.removeBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.Location} location
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.continueToLocation = function(location, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.continueToLocation.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.stepOver = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.stepOver.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.stepInto = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.stepInto.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.stepOut = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.stepOut.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.pause = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.pause.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.resume = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.resume.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {string} query
 * @param {boolean=} opt_caseSensitive
 * @param {boolean=} opt_isRegex
 * @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback
 */
DebuggerAgent.searchInContent = function(scriptId, query, opt_caseSensitive, opt_isRegex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback */
DebuggerAgent.searchInContent.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {string} scriptSource
 * @param {boolean=} opt_preview
 * @param {function(?Protocol.Error, Array.<DebuggerAgent.CallFrame>=, Object=):void=} opt_callback
 */
DebuggerAgent.setScriptSource = function(scriptId, scriptSource, opt_preview, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DebuggerAgent.CallFrame>=, Object=):void=} opt_callback */
DebuggerAgent.setScriptSource.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
DebuggerAgent.getScriptSource = function(scriptId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
DebuggerAgent.getScriptSource.invoke = function(obj, opt_callback) {}

/**
 * @param {string} state
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.setPauseOnExceptions = function(state, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.setPauseOnExceptions.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.CallFrameId} callFrameId
 * @param {string} expression
 * @param {string=} opt_objectGroup
 * @param {boolean=} opt_includeCommandLineAPI
 * @param {boolean=} opt_returnByValue
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
DebuggerAgent.evaluateOnCallFrame = function(callFrameId, expression, opt_objectGroup, opt_includeCommandLineAPI, opt_returnByValue, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
DebuggerAgent.evaluateOnCallFrame.invoke = function(obj, opt_callback) {}
/** @interface */
DebuggerAgent.Dispatcher = function() {};
DebuggerAgent.Dispatcher.prototype.debuggerWasEnabled = function() {};
DebuggerAgent.Dispatcher.prototype.debuggerWasDisabled = function() {};
/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {string} url
 * @param {number} startLine
 * @param {number} startColumn
 * @param {number} endLine
 * @param {number} endColumn
 * @param {boolean=} opt_isContentScript
 */
DebuggerAgent.Dispatcher.prototype.scriptParsed = function(scriptId, url, startLine, startColumn, endLine, endColumn, opt_isContentScript) {};
/**
 * @param {string} url
 * @param {string} scriptSource
 * @param {number} startLine
 * @param {number} errorLine
 * @param {string} errorMessage
 */
DebuggerAgent.Dispatcher.prototype.scriptFailedToParse = function(url, scriptSource, startLine, errorLine, errorMessage) {};
/**
 * @param {DebuggerAgent.BreakpointId} breakpointId
 * @param {DebuggerAgent.Location} location
 */
DebuggerAgent.Dispatcher.prototype.breakpointResolved = function(breakpointId, location) {};
/**
 * @param {Array.<DebuggerAgent.CallFrame>} callFrames
 * @param {string} reason
 * @param {Object=} opt_data
 */
DebuggerAgent.Dispatcher.prototype.paused = function(callFrames, reason, opt_data) {};
DebuggerAgent.Dispatcher.prototype.resumed = function() {};
/**
 * @param {DebuggerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDebuggerDispatcher = function(dispatcher) {}



var DOMDebuggerAgent = {};

/** @typedef {string} */
DOMDebuggerAgent.DOMBreakpointType;

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMDebuggerAgent.DOMBreakpointType} type
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setDOMBreakpoint = function(nodeId, type, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setDOMBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMDebuggerAgent.DOMBreakpointType} type
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeDOMBreakpoint = function(nodeId, type, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeDOMBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} eventName
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setEventListenerBreakpoint = function(eventName, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setEventListenerBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} eventName
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeEventListenerBreakpoint = function(eventName, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeEventListenerBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setXHRBreakpoint = function(url, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setXHRBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeXHRBreakpoint = function(url, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeXHRBreakpoint.invoke = function(obj, opt_callback) {}
/** @interface */
DOMDebuggerAgent.Dispatcher = function() {};
/**
 * @param {DOMDebuggerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDOMDebuggerDispatcher = function(dispatcher) {}



var ProfilerAgent = {};

/** @constructor */
ProfilerAgent.Profile = function()
{
}

/** @constructor */
ProfilerAgent.ProfileHeader = function()
{
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
ProfilerAgent.isEnabled = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
ProfilerAgent.isEnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.start = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.start.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.stop = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.stop.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<ProfilerAgent.ProfileHeader>):void=} opt_callback
 */
ProfilerAgent.getProfileHeaders = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<ProfilerAgent.ProfileHeader>):void=} opt_callback */
ProfilerAgent.getProfileHeaders.invoke = function(obj, opt_callback) {}

/**
 * @param {string} type
 * @param {number} uid
 * @param {function(?Protocol.Error, ProfilerAgent.Profile):void=} opt_callback
 */
ProfilerAgent.getProfile = function(type, uid, opt_callback) {}
/** @param {function(?Protocol.Error, ProfilerAgent.Profile):void=} opt_callback */
ProfilerAgent.getProfile.invoke = function(obj, opt_callback) {}

/**
 * @param {string} type
 * @param {number} uid
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.removeProfile = function(type, uid, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.removeProfile.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.clearProfiles = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.clearProfiles.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.takeHeapSnapshot = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.takeHeapSnapshot.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.collectGarbage = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.collectGarbage.invoke = function(obj, opt_callback) {}

/**
 * @param {number} objectId
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback
 */
ProfilerAgent.getObjectByHeapObjectId = function(objectId, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback */
ProfilerAgent.getObjectByHeapObjectId.invoke = function(obj, opt_callback) {}
/** @interface */
ProfilerAgent.Dispatcher = function() {};
ProfilerAgent.Dispatcher.prototype.profilerWasEnabled = function() {};
ProfilerAgent.Dispatcher.prototype.profilerWasDisabled = function() {};
/**
 * @param {ProfilerAgent.ProfileHeader} header
 */
ProfilerAgent.Dispatcher.prototype.addProfileHeader = function(header) {};
/**
 * @param {number} uid
 * @param {string} chunk
 */
ProfilerAgent.Dispatcher.prototype.addHeapSnapshotChunk = function(uid, chunk) {};
/**
 * @param {number} uid
 */
ProfilerAgent.Dispatcher.prototype.finishHeapSnapshot = function(uid) {};
/**
 * @param {boolean} isProfiling
 */
ProfilerAgent.Dispatcher.prototype.setRecordingProfile = function(isProfiling) {};
ProfilerAgent.Dispatcher.prototype.resetProfiles = function() {};
/**
 * @param {number} done
 * @param {number} total
 */
ProfilerAgent.Dispatcher.prototype.reportHeapSnapshotProgress = function(done, total) {};
/**
 * @param {ProfilerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerProfilerDispatcher = function(dispatcher) {}



var WorkerAgent = {};

/**
 * @param {boolean} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.setWorkerInspectionEnabled = function(value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.setWorkerInspectionEnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {number} workerId
 * @param {Object} message
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.sendMessageToWorker = function(workerId, message, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.sendMessageToWorker.invoke = function(obj, opt_callback) {}

/**
 * @param {number} workerId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.connectToWorker = function(workerId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.connectToWorker.invoke = function(obj, opt_callback) {}

/**
 * @param {number} workerId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.disconnectFromWorker = function(workerId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.disconnectFromWorker.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.setAutoconnectToWorkers = function(value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.setAutoconnectToWorkers.invoke = function(obj, opt_callback) {}
/** @interface */
WorkerAgent.Dispatcher = function() {};
/**
 * @param {number} workerId
 * @param {string} url
 * @param {boolean} inspectorConnected
 */
WorkerAgent.Dispatcher.prototype.workerCreated = function(workerId, url, inspectorConnected) {};
/**
 * @param {number} workerId
 */
WorkerAgent.Dispatcher.prototype.workerTerminated = function(workerId) {};
/**
 * @param {number} workerId
 * @param {Object} message
 */
WorkerAgent.Dispatcher.prototype.dispatchMessageFromWorker = function(workerId, message) {};
/**
 * @param {WorkerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerWorkerDispatcher = function(dispatcher) {}
