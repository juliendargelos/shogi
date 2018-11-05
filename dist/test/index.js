(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 346);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var King = function (_Piece) {
  _inherits(King, _Piece);

  function King() {
    _classCallCheck(this, King);

    return _possibleConstructorReturn(this, (King.__proto__ || Object.getPrototypeOf(King)).apply(this, arguments));
  }

  _createClass(King, null, [{
    key: 'big',
    get: function get() {
      return true;
    }
  }, {
    key: 'movements',
    get: function get() {
      return [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
    }
  }]);

  return King;
}(_piece2.default);

exports.default = King;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoldGeneral = function (_Piece) {
  _inherits(GoldGeneral, _Piece);

  function GoldGeneral() {
    _classCallCheck(this, GoldGeneral);

    return _possibleConstructorReturn(this, (GoldGeneral.__proto__ || Object.getPrototypeOf(GoldGeneral)).apply(this, arguments));
  }

  _createClass(GoldGeneral, null, [{
    key: 'big',
    get: function get() {
      return true;
    }
  }, {
    key: 'movements',
    get: function get() {
      return [[0, 1], [-1, 1], [1, 1], [-1, 0], [1, 0], [0, -1]];
    }
  }]);

  return GoldGeneral;
}(_piece2.default);

exports.default = GoldGeneral;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SilverGeneral = function (_Piece) {
  _inherits(SilverGeneral, _Piece);

  function SilverGeneral() {
    _classCallCheck(this, SilverGeneral);

    return _possibleConstructorReturn(this, (SilverGeneral.__proto__ || Object.getPrototypeOf(SilverGeneral)).apply(this, arguments));
  }

  _createClass(SilverGeneral, null, [{
    key: 'big',
    get: function get() {
      return true;
    }
  }, {
    key: 'movements',
    get: function get() {
      return [[0, 1], [-1, 1], [1, 1], [-1, -1], [1, -1]];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return _piece2.default.GoldGeneral.movements;
    }
  }]);

  return SilverGeneral;
}(_piece2.default);

exports.default = SilverGeneral;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Knight = function (_Piece) {
  _inherits(Knight, _Piece);

  function Knight() {
    _classCallCheck(this, Knight);

    return _possibleConstructorReturn(this, (Knight.__proto__ || Object.getPrototypeOf(Knight)).apply(this, arguments));
  }

  _createClass(Knight, null, [{
    key: 'movements',
    get: function get() {
      return [[-1, 2], [1, 2]];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return _piece2.default.GoldGeneral.movements;
    }
  }]);

  return Knight;
}(_piece2.default);

exports.default = Knight;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lance = function (_Piece) {
  _inherits(Lance, _Piece);

  function Lance() {
    _classCallCheck(this, Lance);

    return _possibleConstructorReturn(this, (Lance.__proto__ || Object.getPrototypeOf(Lance)).apply(this, arguments));
  }

  _createClass(Lance, null, [{
    key: 'movements',
    get: function get() {
      return [[0, Infinity]];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return _piece2.default.GoldGeneral.movements;
    }
  }]);

  return Lance;
}(_piece2.default);

exports.default = Lance;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bishop = function (_Piece) {
  _inherits(Bishop, _Piece);

  function Bishop() {
    _classCallCheck(this, Bishop);

    return _possibleConstructorReturn(this, (Bishop.__proto__ || Object.getPrototypeOf(Bishop)).apply(this, arguments));
  }

  _createClass(Bishop, null, [{
    key: 'big',
    get: function get() {
      return true;
    }
  }, {
    key: 'movements',
    get: function get() {
      return [[-Infinity, Infinity], [Infinity, Infinity], [-Infinity, -Infinity], [Infinity, -Infinity]];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return this.movements.concat([[0, 1], [-1, 0], [1, 0], [0, -1]]);
    }
  }]);

  return Bishop;
}(_piece2.default);

exports.default = Bishop;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rook = function (_Piece) {
  _inherits(Rook, _Piece);

  function Rook() {
    _classCallCheck(this, Rook);

    return _possibleConstructorReturn(this, (Rook.__proto__ || Object.getPrototypeOf(Rook)).apply(this, arguments));
  }

  _createClass(Rook, null, [{
    key: 'big',
    get: function get() {
      return true;
    }
  }, {
    key: 'movements',
    get: function get() {
      return [[0, Infinity], [-Infinity, 0], [Infinity, 0], [0, -Infinity]];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return this.movements.concat([[-1, 1], [1, 1], [-1, -1], [1, -1]]);
    }
  }]);

  return Rook;
}(_piece2.default);

exports.default = Rook;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pawn = function (_Piece) {
  _inherits(Pawn, _Piece);

  function Pawn() {
    _classCallCheck(this, Pawn);

    return _possibleConstructorReturn(this, (Pawn.__proto__ || Object.getPrototypeOf(Pawn)).apply(this, arguments));
  }

  _createClass(Pawn, null, [{
    key: 'movements',
    get: function get() {
      return [[0, 1]];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return _piece2.default.GoldGeneral.movements;
    }
  }]);

  return Pawn;
}(_piece2.default);

exports.default = Pawn;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dimension = function () {
  function Dimension(iterator, position, delta, maximum) {
    _classCallCheck(this, Dimension);

    this.iterator = iterator;
    this.position = position;
    this.delta = delta;
    this.maximum = maximum;
  }

  _createClass(Dimension, [{
    key: "infinite",
    get: function get() {
      return Math.abs(this.delta) === Infinity;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.iterator.offset;
    }
  }, {
    key: "value",
    get: function get() {
      return 0;
    }
  }, {
    key: "valid",
    get: function get() {
      return this.value >= 0 && this.value < this.maximum;
    }
  }], [{
    key: "for",
    value: function _for(iterator, position, delta, maximum) {
      return new (Math.abs(delta) === Infinity ? this.Infinite : this.Finite)(iterator, position, delta, maximum);
    }
  }]);

  return Dimension;
}();

exports.default = Dimension;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(96);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _index2.default.Game('Jane', 'Serge');

game.start();

console.log(game.move([0, 6], [0, 5]));
//console.log(game.board.cell(0, 5))

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
  function Cell(x, y) {
    var piece = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Cell);

    this.x = x;
    this.y = y;
    this.piece = piece;
  }

  _createClass(Cell, [{
    key: 'clone',
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var cell = new this.constructor(this.x, this.y, this.piece ? this.piece.clone() : null);
      return callback ? callback.call(this, cell) : cell;
    }
  }, {
    key: 'at',
    value: function at(x, y) {
      if (x instanceof _piece2.default) return this.piece === x;else if (Array.isArray(x)) {
        ;

        var _x3 = x;

        var _x4 = _slicedToArray(_x3, 2);

        x = _x4[0];
        y = _x4[1];
      }if (x !== null && ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' || typeof x === 'function')) {
        y = x.y;
        x = x.x;
      }

      return this.x === x && this.y === y;
    }
  }], [{
    key: 'collection',
    value: function collection(_ref, generate) {
      var _this = this;

      var kingGeneral = _ref.kingGeneral,
          jeweledGeneral = _ref.jeweledGeneral,
          width = _ref.width,
          height = _ref.height;

      return generate.call(this, _piece2.default.generator(kingGeneral), _piece2.default.generator(jeweledGeneral)).map(function (piece, index) {
        return new _this(index % width, Math.floor(index / height), piece);
      });
    }
  }]);

  return Cell;
}();

exports.default = Cell;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dimension = __webpack_require__(30);

var _dimension2 = _interopRequireDefault(_dimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterator = function () {
  function Iterator(board, cell, x, y) {
    _classCallCheck(this, Iterator);

    this.board = board;
    this.offset = 0;
    this.x = _dimension2.default.for(this, cell.x, x, board.width);
    this.y = _dimension2.default.for(this, cell.y, y, board.height);
  }

  _createClass(Iterator, [{
    key: 'forEach',
    value: function forEach(callback) {
      var movement;

      for (this.offset = 1; this.valid; this.offset++) {
        movement = this.board.cell(this.x.value, this.y.value);
        if (movement && callback.call(this, movement) === false) break;
      }
    }
  }, {
    key: 'infinite',
    get: function get() {
      return this.x.infinite || this.y.infinite;
    }
  }, {
    key: 'valid',
    get: function get() {
      return this.x.valid && this.y.valid;
    }
  }]);

  return Iterator;
}();

exports.default = Iterator;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cell = __webpack_require__(44);

var _cell2 = _interopRequireDefault(_cell);

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

var _iterator = __webpack_require__(45);

var _iterator2 = _interopRequireDefault(_iterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.cells = [];
  }

  _createClass(Board, [{
    key: 'clone',
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var board = new this.constructor();
      board.cells = this.cells.map(function (cell) {
        return cell.clone();
      });
      return callback ? callback.call(this, board) : board;
    }
  }, {
    key: 'cell',
    value: function cell(x, y) {
      return this.cells.find(function (cell) {
        return cell.at(x, y);
      });
    }
  }, {
    key: 'row',
    value: function row(y) {
      return this.cells.filter(function (cell) {
        return cell.y === y;
      });
    }
  }, {
    key: 'col',
    value: function col(x) {
      return this.cells.filter(function (cell) {
        return cell.x === x;
      });
    }
  }, {
    key: 'move',
    value: function move(origin, destination) {
      var promote = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      origin = this.resolve(origin);
      destination = this.resolve(destination);

      if (!origin.piece || !destination.cell) return false;

      if (destination.piece) {
        destination.piece.owner = origin.piece.owner;
        if (destination.piece.promoted) destination.piece.promoted = false;
      }

      destination.cell.piece = origin.piece;
      if (promote) origin.piece.promoted = true;
      if (origin.cell) origin.cell.piece = null;

      return true;
    }
  }, {
    key: 'resolve',
    value: function resolve(object) {
      var cell = this.cell(object);
      var piece = cell ? cell.piece : object instanceof _piece2.default ? piece : null;

      return { cell: cell, piece: piece };
    }
  }, {
    key: 'init',
    value: function init(_ref) {
      var kingGeneral = _ref.kingGeneral,
          jeweledGeneral = _ref.jeweledGeneral;

      this.cells = _cell2.default.collection({
        kingGeneral: kingGeneral,
        jeweledGeneral: jeweledGeneral,
        width: this.width,
        height: this.height
      }, function (k, j) {
        return [j.la, j.kn, j.si, j.go, j.ki, j.go, j.si, j.kn, j.la, null, j.ro, null, null, null, null, null, j.bi, null, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, j.pa, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, k.pa, null, k.bi, null, null, null, null, null, k.ro, null, k.la, k.kn, k.si, k.go, k.ki, k.go, k.si, k.kn, k.la];
      });

      return this;
    }
  }, {
    key: 'width',
    get: function get() {
      return this.constructor.width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.constructor.height;
    }
  }], [{
    key: 'width',
    get: function get() {
      return 9;
    }
  }, {
    key: 'height',
    get: function get() {
      return 9;
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this.name = name;
    var type;

    Object.defineProperties(this, {
      type: {
        get: function get() {
          return type;
        },
        set: function set(v) {
          type = this.constructor.types.includes(v) ? v : this.constructor.kingGeneral;
        }
      }
    });
  }

  _createClass(Player, [{
    key: 'reverse',
    value: function reverse() {
      this.type = this.oppositeType;
      return this;
    }
  }, {
    key: 'randomize',
    value: function randomize() {
      this.type = this.constructor.types[Math.floor(Math.random() * this.constructor.types.length)];
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.name;
    }
  }, {
    key: 'kingGeneral',
    get: function get() {
      return this.type === this.constructor.kingGeneral;
    }
  }, {
    key: 'jeweledGeneral',
    get: function get() {
      return this.type === this.constructor.jeweledGeneral;
    }
  }, {
    key: 'oppositeType',
    get: function get() {
      return this.constructor[(this.kingGeneral ? 'jeweled' : 'king') + 'General'];
    }
  }, {
    key: 'typeName',
    get: function get() {
      return this.kingGeneral ? 'king-general' : 'jeweled-general';
    }
  }], [{
    key: 'from',
    value: function from(name) {
      return name instanceof this ? name : new this(name);
    }
  }, {
    key: 'kingGeneral',
    get: function get() {
      return 0;
    }
  }, {
    key: 'jeweledGeneral',
    get: function get() {
      return 1;
    }
  }, {
    key: 'types',
    get: function get() {
      return [this.kingGeneral, this.jeweledGeneral];
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function () {
  function Piece(owner) {
    _classCallCheck(this, Piece);

    this.owner = owner;
    if (this.promotable) this.promoted = false;
  }

  _createClass(Piece, [{
    key: 'clone',
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var piece = new this.constructor(this.owner);
      piece.promoted = this.promoted;
      return callback ? callback.call(this, piece) : piece;
    }
  }, {
    key: 'check',
    value: function check(attributes) {
      var value;

      for (var key in attributes) {
        if (!this.checkAttribute(key, attributes[key])) return false;
      }

      return true;
    }
  }, {
    key: 'checkAttribute',
    value: function checkAttribute(key, value) {
      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && value.hasOwnProperty('not') ? this[key] === value.not : this[key] !== value;
    }
  }, {
    key: 'movements',
    get: function get() {
      var movements = this.constructor[this.promoted ? 'promotedMovements' : 'movements'];
      return this.owner.kingGeneral ? movements.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return [x, -y];
      }) : movements;
    }
  }, {
    key: 'big',
    get: function get() {
      return this.constructor.big;
    }
  }, {
    key: 'typeName',
    get: function get() {
      return this.constructor.typeName;
    }
  }, {
    key: 'promotable',
    get: function get() {
      return this.constructor.promotable;
    }
  }, {
    key: 'id',
    get: function get() {
      return this.constructor.id;
    }
  }], [{
    key: 'for',
    value: function _for(id) {
      return this.all ? this.all.find(function (piece) {
        return piece.id === id;
      }) : null;
    }
  }, {
    key: 'generator',
    value: function generator(owner) {
      return new Proxy({}, {
        get: function get(object, id) {
          return new (Piece.for(id))(owner);
        }
      });
    }
  }, {
    key: 'big',
    get: function get() {
      return false;
    }
  }, {
    key: 'id',
    get: function get() {
      return this.name.substring(0, 2).toLowerCase();
    }
  }, {
    key: 'typeName',
    get: function get() {
      return this.name.replace(/([^A-Z])([A-Z]+)/, '$1-$2').toLowerCase();
    }
  }, {
    key: 'movements',
    get: function get() {
      return [];
    }
  }, {
    key: 'promotedMovements',
    get: function get() {
      return [];
    }
  }, {
    key: 'promotable',
    get: function get() {
      return !!this.promotedMovements.length;
    }
  }]);

  return Piece;
}();

exports.default = Piece;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _game = __webpack_require__(97);

var _game2 = _interopRequireDefault(_game);

var _player = __webpack_require__(54);

var _player2 = _interopRequireDefault(_player);

var _board = __webpack_require__(53);

var _board2 = _interopRequireDefault(_board);

var _cell = __webpack_require__(44);

var _cell2 = _interopRequireDefault(_cell);

var _iterator = __webpack_require__(45);

var _iterator2 = _interopRequireDefault(_iterator);

var _dimension = __webpack_require__(30);

var _dimension2 = _interopRequireDefault(_dimension);

var _finite = __webpack_require__(98);

var _finite2 = _interopRequireDefault(_finite);

var _infinite = __webpack_require__(99);

var _infinite2 = _interopRequireDefault(_infinite);

var _piece = __webpack_require__(6);

var _piece2 = _interopRequireDefault(_piece);

var _king = __webpack_require__(100);

var _king2 = _interopRequireDefault(_king);

var _goldGeneral = __webpack_require__(101);

var _goldGeneral2 = _interopRequireDefault(_goldGeneral);

var _silverGeneral = __webpack_require__(102);

var _silverGeneral2 = _interopRequireDefault(_silverGeneral);

var _knight = __webpack_require__(103);

var _knight2 = _interopRequireDefault(_knight);

var _lance = __webpack_require__(104);

var _lance2 = _interopRequireDefault(_lance);

var _bishop = __webpack_require__(105);

var _bishop2 = _interopRequireDefault(_bishop);

var _rook = __webpack_require__(106);

var _rook2 = _interopRequireDefault(_rook);

var _pawn = __webpack_require__(107);

var _pawn2 = _interopRequireDefault(_pawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_piece2.default, {
  King: _king2.default,
  GoldGeneral: _goldGeneral2.default,
  SilverGeneral: _silverGeneral2.default,
  Knight: _knight2.default,
  Lance: _lance2.default,
  Bishop: _bishop2.default,
  Rook: _rook2.default,
  Pawn: _pawn2.default
});

_piece2.default.all = Object.values(_piece2.default);
_piece2.default.all.forEach(function (piece) {
  Object.defineProperty(_piece2.default.prototype, piece.name[0].toLowerCase() + piece.name.substring(1), {
    get: function get() {
      return this.constructor === piece;
    }
  });
});

Object.assign(_dimension2.default, {
  Finite: _finite2.default,
  Infinite: _infinite2.default
});

exports.default = {
  Game: _game2.default,
  Player: _player2.default,
  Board: _board2.default,
  Cell: _cell2.default,
  Piece: _piece2.default,
  Iterator: _iterator2.default
};

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(53);

var _board2 = _interopRequireDefault(_board);

var _cell = __webpack_require__(44);

var _cell2 = _interopRequireDefault(_cell);

var _iterator = __webpack_require__(45);

var _iterator2 = _interopRequireDefault(_iterator);

var _player = __webpack_require__(54);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(player1, player2) {
    _classCallCheck(this, Game);

    this.player1 = _player2.default.from(player1);
    this.player2 = _player2.default.from(player2);
    this.currentPlayer = null;
    this.board = new _board2.default();
    this.pieces = [];
    this.randomizePlayers();
  }

  _createClass(Game, [{
    key: 'piecesOf',
    value: function piecesOf(player) {
      return this.pieces.filter(function (piece) {
        return piece.owner === player;
      });
    }
  }, {
    key: 'piecesUsedBy',
    value: function piecesUsedBy(player) {
      return this.usedPieces.filter(function (piece) {
        return piece.owner === player;
      });
    }
  }, {
    key: 'piecesCapturedBy',
    value: function piecesCapturedBy(player) {
      return this.capturedPieces.filter(function (piece) {
        return piece.owner === player;
      });
    }
  }, {
    key: 'stateOf',
    value: function stateOf(player) {
      var _this = this;

      var checkmate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.clone(function (game, reset) {
        var state = _this.constructor.states.normal;
        var kingCell = game.board.cells.find(function (cell) {
          return cell.piece && cell.piece.king && cell.piece.owner === player;
        });
        var kingMovements = game.movements(kingCell, null, false);

        game.board.cells.find(function (cell) {
          if (!cell.piece || cell.piece.owner === player) return false;
          var movements = game.movements(cell, null, false);
          if (!movements.includes(kingCell)) return false;
          if (checkmate) {
            state = _this.constructor.states.checkmate;
            kingMovements.find(function (movement) {
              movement.piece = kingCell.piece;
              kingCell.piece = null;

              if (game.stateOf(player, false) === _this.constructor.states.normal) {
                state = _this.constructor.states.check;
                return true;
              }

              reset();
            });
          } else state = _this.constructor.states.check;

          return true;
        });

        return state;
      });
    }
  }, {
    key: 'move',
    value: function move(origin, destination) {
      var promote = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      origin = this.board.resolve(origin);
      destination = this.board.resolve(destination);

      return !this.over && origin.piece && origin.piece.owner === this.currentPlayer && (!promote || this.promotable(origin.piece, destination.cell)) && this.movements(origin.piece).includes(destination.cell) && this.board.move(origin.piece, destination.cell, promote) && (this.currentPlayer = this.nextPlayer) && true;
    }
  }, {
    key: 'movements',
    value: function movements(origin) {
      var _this2 = this;

      var checkmate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _board$resolve = this.board.resolve(origin),
          piece = _board$resolve.piece,
          cell = _board$resolve.cell;

      var movements;

      if (cell) movements = this.movementsForUsed(piece, cell);else movements = this.movementsForCaptured(piece);

      if (checkmate) {
        movements = movements.filter(function (destination) {
          return _this2.clone(function (game) {
            game.board.move(cell || piece, destination);
            return game.stateOf(piece.owner, false) === _this2.constructor.states.normal;
          });
        });
      }

      return movements;
    }
  }, {
    key: 'movementsForUsed',
    value: function movementsForUsed(piece, cell) {
      var _this3 = this;

      return piece.movements.reduce(function (movements, movement) {
        new (Function.prototype.bind.apply(_iterator2.default, [null].concat([_this3.board, cell], _toConsumableArray(movement))))().forEach(function (destination) {
          if (destination.piece && destination.piece.owner === piece.owner) return false;
          if (!destination.piece || destination.piece.owner !== piece.owner) movements.push(destination);
          //if(destination.piece && destination.piece.owner !== piece.owner) return false
        });

        return movements;
      }, []);
    }
  }, {
    key: 'movementsForCaptured',
    value: function movementsForCaptured(piece) {
      var _this4 = this;

      var movements = this.board.cells.filter(function (cell) {
        return !cell.piece;
      });

      if (piece.pawn) {
        movements = movements.filter(function (cell) {
          return !_this4.board.col(cell.x).find(function (c) {
            return c.piece && c.piece.check({ pawn: true, owner: piece.owner, promoted: false });
          });
        }).filter(function (cell) {
          return !function (c) {
            return c && c.piece && c.piece.check({ king: true, owner: { not: piece.owner } });
          }(_this4.board.cell(cell.x, cell.y + (piece.owner.jeweledGeneral ? 1 : -1)));
        });
      }

      if (piece.pawn || piece.lance || piece.knight) {
        var offset = piece.knight ? 2 : 1;
        movements = movements.filter(piece.owner.jeweledGeneral ? function (cell) {
          return cell.y < _this4.board.height - offset;
        } : function (cell) {
          return cell.y > offset - 1;
        });
      }

      return movements;
    }
  }, {
    key: 'promotable',
    value: function promotable(piece, destination) {
      return piece.promotable && !piece.promoted && this.board.cell(piece) && (piece.owner.jeweledGeneral && destination.y > this.board.height - 4 || piece.owner.kingGeneral && destination.y < 3);
    }
  }, {
    key: 'clone',
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var game = new this.constructor(this.player1, this.player2);
      game.currentPlayer = this.currentPlayer;
      game.board = this.board.clone();
      game.pieces = game.usedPieces.concat(this.capturedPieces.map(function (piece) {
        return piece.clone();
      }));
      return callback ? callback.call(this, game) : game;
    }
  }, {
    key: 'reversePlayers',
    value: function reversePlayers() {
      this.player1.type = this.player2.reverse().oppositeType;
      return this;
    }
  }, {
    key: 'randomizePlayers',
    value: function randomizePlayers() {
      this.player1.type = this.player2.randomize().oppositeType;
      return this;
    }
  }, {
    key: 'start',
    value: function start() {
      this.board.init({ kingGeneral: this.kingGeneral, jeweledGeneral: this.jeweledGeneral });
      this.pieces = this.usedPieces;
      this.currentPlayer = this.firstPlayer;
      return this;
    }
  }, {
    key: 'players',
    get: function get() {
      return [this.player1, this.player2];
    }
  }, {
    key: 'kingGeneral',
    get: function get() {
      return this.players.find(function (player) {
        return player.kingGeneral;
      });
    }
  }, {
    key: 'jeweledGeneral',
    get: function get() {
      return this.players.find(function (player) {
        return player.jeweledGeneral;
      });
    }
  }, {
    key: 'firstPlayer',
    get: function get() {
      return this.kingGeneral;
    }
  }, {
    key: 'secondPlayer',
    get: function get() {
      var _this5 = this;

      return this.players.find(function (player) {
        return player !== _this5.firstPlayer;
      });
    }
  }, {
    key: 'nextPlayer',
    get: function get() {
      var _this6 = this;

      return this.players.find(function (player) {
        return player !== _this6.currentPlayer;
      });
    }
  }, {
    key: 'state',
    get: function get() {
      return this.stateOf(this.player1) || this.stateOf(this.player2);
    }
  }, {
    key: 'over',
    get: function get() {
      return this.state === this.constructor.checkmate;
    }
  }, {
    key: 'usedPieces',
    get: function get() {
      return this.board.cells.reduce(function (pieces, cell) {
        if (cell.piece) pieces.push(cell.piece);
        return pieces;
      }, []);
    }
  }, {
    key: 'capturedPieces',
    get: function get() {
      var usedPieces = this.usedPieces;
      return this.pieces.filter(function (piece) {
        return !usedPieces.includes(piece);
      });
    }
  }], [{
    key: 'states',
    get: function get() {
      return {
        normal: 0,
        check: 1,
        checkmate: 2
      };
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dimension = __webpack_require__(30);

var _dimension2 = _interopRequireDefault(_dimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Finite = function (_Dimension) {
  _inherits(Finite, _Dimension);

  function Finite() {
    _classCallCheck(this, Finite);

    return _possibleConstructorReturn(this, (Finite.__proto__ || Object.getPrototypeOf(Finite)).apply(this, arguments));
  }

  _createClass(Finite, [{
    key: 'value',
    get: function get() {
      return this.position + this.delta;
    }
  }, {
    key: 'valid',
    get: function get() {
      return (this.iterator.infinite || this.offset === 1) && _get(Finite.prototype.__proto__ || Object.getPrototypeOf(Finite.prototype), 'valid', this);
    }
  }]);

  return Finite;
}(_dimension2.default);

exports.default = Finite;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dimension = __webpack_require__(30);

var _dimension2 = _interopRequireDefault(_dimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Infinite = function (_Dimension) {
  _inherits(Infinite, _Dimension);

  function Infinite() {
    _classCallCheck(this, Infinite);

    return _possibleConstructorReturn(this, (Infinite.__proto__ || Object.getPrototypeOf(Infinite)).apply(this, arguments));
  }

  _createClass(Infinite, [{
    key: 'sign',
    get: function get() {
      return this.delta < 0 ? -1 : 1;
    }
  }, {
    key: 'value',
    get: function get() {
      return this.position + this.sign * this.offset;
    }
  }]);

  return Infinite;
}(_dimension2.default);

exports.default = Infinite;

/***/ })

/******/ })["default"]));