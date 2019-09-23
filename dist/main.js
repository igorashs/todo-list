/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_controllers_storage_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_modules/controllers/storage-controller */ \"./src/js_modules/controllers/storage-controller.js\");\n\n\nconst storageController = new _js_modules_controllers_storage_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](localStorage);\nstorageController.init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js_modules/controllers/project-list-controller.js":
/*!***************************************************************!*\
  !*** ./src/js_modules/controllers/project-list-controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectListController; });\n/* harmony import */ var _models_project_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project-list-model */ \"./src/js_modules/models/project-list-model.js\");\n/* harmony import */ var _views_project_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/project-list-view */ \"./src/js_modules/views/project-list-view.js\");\n/* harmony import */ var _views_create_project_modal_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/create-project-modal-view */ \"./src/js_modules/views/create-project-modal-view.js\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ \"./src/js_modules/validator.js\");\n/* harmony import */ var _factories_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factories/project */ \"./src/js_modules/factories/project.js\");\n/* harmony import */ var _views_confirm_modal_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/confirm-modal-view */ \"./src/js_modules/views/confirm-modal-view.js\");\n\n\n\n\n\n\n\nclass ProjectListController {\n  constructor(storageModel) {\n    // singleton\n    if (ProjectListController.instance) {\n      return ProjectListController.instance;\n    }\n    ProjectListController.instance = this;\n\n    const _projectListModel = new _models_project_list_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](storageModel);\n    const _projectListView = new _views_project_list_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    const _crtProjectMdView = new _views_create_project_modal_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    const _confirmMdView = new _views_confirm_modal_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    const _validator = new _validator__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n    // private\n    let _confirmQueryPrjId = null;\n\n    // add handlers for ProjectListView\n    // delete prj\n    _projectListView.on('deleteProject', (id) => {\n      _confirmQueryPrjId = id;\n      _confirmMdView.displayModal();\n    });\n    // open prj\n    _projectListView.on('openProject', (id) => {\n      const prj = _projectListModel.getProjectAt(id);\n      _projectListModel.setCurrentProject(prj);\n      _projectListView.updateCurrentPrj(prj);\n    });\n\n    // add handlers for ConfirmMdView\n    // no\n    _confirmMdView.on('no', () => {\n      _confirmQueryPrjId = null;\n      _confirmMdView.closeModal();\n    });\n    // yes\n    _confirmMdView.on('yes', () => {\n      _projectListModel.removeProjectAt(_confirmQueryPrjId);\n      _confirmQueryPrjId = null;\n      _confirmMdView.closeModal();\n    });\n\n    // add handlers for CrtProjectMdView\n    // open modal\n    _crtProjectMdView.on('openModal', () => {\n      _crtProjectMdView.displayModal();\n    });\n    // cancel modal\n    _crtProjectMdView.on('cancelModal', () => {\n      _crtProjectMdView.clear();\n      _crtProjectMdView.closeModal();\n    });\n    // create project\n    _crtProjectMdView.on('createProject', () => {\n      const name = _crtProjectMdView.getPrjName();\n\n      if (_validator.isValidName(name)) {\n        // create prj\n        const id = _projectListModel.getUniqueId();\n        const prj = new _factories_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"](name, id);\n        _projectListModel.addProject(prj);\n\n        _crtProjectMdView.clear();\n        _crtProjectMdView.closeModal();\n      } else {\n        _crtProjectMdView.displayInvalidName();\n      }\n    });\n\n    // add handlers for ProjectListModel\n    // add project\n    _projectListModel.on('addProject', (prj) => {\n      _projectListView.render(_projectListModel.getProjectList());\n      _projectListModel.setCurrentProject(prj);\n      _projectListView.updateCurrentPrj(prj);\n    });\n    // remove project\n    _projectListModel.on('removeProject', (removedPrjID) => {\n      _projectListView.render(_projectListModel.getProjectList());\n      const _currentPrjId = _projectListModel.getCurrentProject().id;\n      // set another project\n      if (_currentPrjId == removedPrjID) {\n        const curPrj = _projectListModel.getFirstProject();\n        _projectListModel.setCurrentProject(curPrj);\n        _projectListView.updateCurrentPrj(curPrj);\n      }\n    });\n\n    this.init = function() {\n      _projectListView.render(_projectListModel.getProjectList());\n      const curPrj = _projectListModel.getFirstProject();\n      _projectListModel.setCurrentProject(curPrj);\n      _projectListView.updateCurrentPrj(curPrj);\n    };\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/controllers/project-list-controller.js?");

/***/ }),

/***/ "./src/js_modules/controllers/storage-controller.js":
/*!**********************************************************!*\
  !*** ./src/js_modules/controllers/storage-controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StorageController; });\n/* harmony import */ var _models_project_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project-list-model */ \"./src/js_modules/models/project-list-model.js\");\n/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list-controller */ \"./src/js_modules/controllers/project-list-controller.js\");\n/* harmony import */ var _models_storage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/storage-model */ \"./src/js_modules/models/storage-model.js\");\n\n\n\n\nclass StorageController {\n  constructor(storage) {\n    // singleton\n    if (StorageController.instance) {\n      return StorageController.instance;\n    }\n    StorageController.instance = this;\n\n    // models\n    const _storageModel = new _models_storage_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](storage);\n    const _projectListModel = new _models_project_list_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_storageModel);\n\n    // add handlers for ProjectListModel\n    // save\n    _projectListModel.on('save', (prjList, uniqueId) => {\n      _storageModel.setProjectList(prjList);\n      _storageModel.setPrjUniqueID(uniqueId);\n    });\n    // changeProject\n    _projectListModel.on('changeProject', (curPrj) => {\n      if (curPrj) {\n        //! load todoList from new prj\n        console.log(curPrj.name);\n      }\n    });\n\n    // controllers\n    const _projectListController = new _project_list_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_storageModel);\n\n    this.init = function() {\n      _projectListController.init();\n    };\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/controllers/storage-controller.js?");

/***/ }),

/***/ "./src/js_modules/factories/project.js":
/*!*********************************************!*\
  !*** ./src/js_modules/factories/project.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\nclass Project {\n  constructor(name, id) {\n    this.name = name;\n    this.id = id;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/factories/project.js?");

/***/ }),

/***/ "./src/js_modules/models/project-list-model.js":
/*!*****************************************************!*\
  !*** ./src/js_modules/models/project-list-model.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectListModel; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ProjectListModel extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  constructor(storage) {\n    // singleton\n    if (ProjectListModel.instance) {\n      return ProjectListModel.instance;\n    }\n    super();\n    ProjectListModel.instance = this;\n\n    // private data\n    const _projectList = storage.getProjectList();\n    let uniqueId = storage.getPrjUniqueID();\n\n    let _currentProject = null;\n\n    this.getProjectList = function() {\n      return _projectList;\n    };\n    this.getProjectAt = function(id) {\n      return _projectList.find((prj) => prj.id == id);\n    };\n    this.getFirstProject = function() {\n      return _projectList[0];\n    };\n    this.addProject = function(prj) {\n      _projectList.unshift(prj);\n      this.emit('save', _projectList, uniqueId);\n      this.emit('addProject', prj);\n    };\n    this.removeProjectAt = function(id) {\n      const index = _projectList.findIndex((prj) => prj.id == id);\n      _projectList.splice(index, 1);\n      this.emit('save', _projectList, uniqueId);\n      this.emit('removeProject', id);\n    };\n\n    this.getUniqueId = function() {\n      return ++uniqueId;\n    };\n\n    this.getCurrentProject = function() {\n      return _currentProject;\n    };\n\n    this.setCurrentProject = function(prj) {\n      _currentProject = prj;\n      this.emit('changeProject', prj);\n    };\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/models/project-list-model.js?");

/***/ }),

/***/ "./src/js_modules/models/storage-model.js":
/*!************************************************!*\
  !*** ./src/js_modules/models/storage-model.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StorageModel; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass StorageModel extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  constructor(storage) {\n    // singleton\n    if (StorageModel.instance) {\n      return StorageModel.instance;\n    }\n    super();\n    StorageModel.instance = this;\n\n    // private data\n    const _storage = storage;\n    const _PROJECT_LIST = 'projectList';\n    const _PRJ_UNIQUE_ID = 'prjUniqueID';\n\n    const _DEFAULT = {\n      _PROJECT_LIST: [{ name: 'Default', id: 0 }],\n      _PRJ_UNIQUE_ID: 0\n    };\n\n    // private\n    const _storageIsEmpty = () => {\n      const prjList = JSON.parse(_storage.getItem(_PROJECT_LIST));\n      if (!prjList || !prjList[0]) {\n        return true;\n      }\n      return false;\n    };\n    const _evalStorage = () => {\n      if (_storageIsEmpty()) {\n        _setDefault();\n      }\n    };\n    const _setDefault = () => {\n      this.setProjectList(_DEFAULT._PROJECT_LIST);\n      this.setPrjUniqueID(_DEFAULT._PRJ_UNIQUE_ID);\n    };\n\n    this.getProjectList = function() {\n      return JSON.parse(_storage.getItem(_PROJECT_LIST));\n    };\n\n    this.getPrjUniqueID = function() {\n      return JSON.parse(_storage.getItem(_PRJ_UNIQUE_ID));\n    };\n\n    this.setProjectList = function(prjList) {\n      _storage.setItem(_PROJECT_LIST, JSON.stringify(prjList));\n    };\n\n    this.setPrjUniqueID = function(id) {\n      _storage.setItem(_PRJ_UNIQUE_ID, JSON.stringify(id));\n    };\n\n    // init\n    _evalStorage();\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/models/storage-model.js?");

/***/ }),

/***/ "./src/js_modules/validator.js":
/*!*************************************!*\
  !*** ./src/js_modules/validator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validator; });\nclass Validator {\n  constructor() {\n    // singleton\n    if (Validator.instance) {\n      return Validator.instance;\n    }\n    Validator.instance = this;\n\n    return this;\n  }\n\n  isValidName(name) {\n    if (name.length > 0 && name.length <= 20) {\n      return true;\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/validator.js?");

/***/ }),

/***/ "./src/js_modules/views/confirm-modal-view.js":
/*!****************************************************!*\
  !*** ./src/js_modules/views/confirm-modal-view.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfirmMdView; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ConfirmMdView extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  constructor() {\n    // singleton\n    if (ConfirmMdView.instance) {\n      return ConfirmMdView.instance;\n    }\n    super();\n    ConfirmMdView.instance = this;\n\n    // assign events\n    // no\n    document\n      .querySelector('.confirmation .no-btn')\n      .addEventListener('click', () => {\n        this.emit('no');\n      });\n    // yes\n    document\n      .querySelector('.confirmation .yes-btn')\n      .addEventListener('click', () => {\n        this.emit('yes');\n      });\n\n    return this;\n  }\n\n  displayModal() {\n    const modalView = document.querySelector('.confirmation');\n    modalView.parentElement.classList.remove('display-none');\n  }\n\n  closeModal() {\n    const modalView = document.querySelector('.confirmation');\n    modalView.parentElement.classList.add('display-none');\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/views/confirm-modal-view.js?");

/***/ }),

/***/ "./src/js_modules/views/create-project-modal-view.js":
/*!***********************************************************!*\
  !*** ./src/js_modules/views/create-project-modal-view.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CrtProjectMdView; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass CrtProjectMdView extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  constructor() {\n    // singleton\n    if (CrtProjectMdView.instance) {\n      return CrtProjectMdView.instance;\n    }\n    super();\n    CrtProjectMdView.instance = this;\n\n    // assign events\n    // openModal\n    document.getElementById('new-prj-btn').addEventListener('click', () => {\n      this.emit('openModal');\n    });\n    // cancel modal\n    document\n      .querySelector('.new-project .cancel')\n      .addEventListener('click', () => {\n        this.emit('cancelModal');\n      });\n    // create project\n    document\n      .querySelector('.new-project .create')\n      .addEventListener('click', () => {\n        this.emit('createProject');\n      });\n\n    return this;\n  }\n\n  displayModal() {\n    const modalView = document.querySelector('.new-project');\n    modalView.parentElement.classList.remove('display-none');\n  }\n\n  closeModal() {\n    const modalView = document.querySelector('.new-project');\n    modalView.parentElement.classList.add('display-none');\n  }\n\n  clear() {\n    document.getElementById('new-project-name').value = '';\n    this.displayValidName();\n  }\n\n  getPrjName() {\n    return document.getElementById('new-project-name').value;\n  }\n\n  displayInvalidName() {\n    const nameLabel = document.getElementById('new-project-name-label');\n    nameLabel.classList.add('invalid');\n    nameLabel.textContent = 'Project Name length 1-20 characters';\n  }\n\n  displayValidName() {\n    const nameLabel = document.getElementById('new-project-name-label');\n    nameLabel.classList.remove('invalid');\n    nameLabel.textContent = 'Project Name';\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/views/create-project-modal-view.js?");

/***/ }),

/***/ "./src/js_modules/views/project-list-view.js":
/*!***************************************************!*\
  !*** ./src/js_modules/views/project-list-view.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectListView; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ProjectListView extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  constructor() {\n    // singleton\n    if (ProjectListView.instance) {\n      return ProjectListView.instance;\n    }\n    super();\n    ProjectListView.instance = this;\n\n    return this;\n  }\n\n  render(prjList) {\n    const listView = document.querySelector('.project-list');\n    // remove all data\n    listView.textContent = '';\n    prjList.forEach((prj) => {\n      const nodeElement = _createNodeElement(prj);\n      _assignEvents.call(this, nodeElement);\n      listView.appendChild(nodeElement);\n    });\n\n    function _assignEvents(element) {\n      element.addEventListener('click', (e) => {\n        if (e.target.classList.contains('delete')) {\n          this.emit('deleteProject', e.currentTarget.dataset.id);\n        }\n        if (e.target.classList.contains('open')) {\n          this.emit('openProject', e.currentTarget.dataset.id);\n        }\n      });\n    }\n\n    function _createNodeElement(element) {\n      const elementView = document.createElement('div');\n      elementView.innerHTML = `\n      <div class=\"project-element\" data-id=\"${element.id}\">\n      <div class=\"project-name\"><h2>${element.name}</h2></div>\n      <div class=\"project-options\">\n        <button class=\"button delete\" tabindex=\"-1\">X</button>\n        <button class=\"button open\" tabindex=\"-1\">Open</button>\n      </div>\n    </div>\n      `;\n      return elementView.firstElementChild;\n    }\n  }\n\n  updateCurrentPrj(prj) {\n    const curPrjView = document.querySelector('.current-project');\n    if (prj) {\n      curPrjView.textContent = prj.name;\n    } else {\n      curPrjView.textContent = '_NO_PROJECT_';\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js_modules/views/project-list-view.js?");

/***/ })

/******/ });