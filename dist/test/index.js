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
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);

var game = new _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Game('Jane', 'Serge');
game.start();
console.log(game.move([0, 6], [0, 5])); //console.log(game.board.cell(0, 5))

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/shogi/piece.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Piece =
/*#__PURE__*/
function () {
  function Piece(owner) {
    _classCallCheck(this, Piece);

    this.owner = owner;
    if (this.promotable) this.promoted = false;
  }

  _createClass(Piece, [{
    key: "clone",
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var piece = new this.constructor(this.owner);
      piece.promoted = this.promoted;
      return callback ? callback.call(this, piece) : piece;
    }
  }, {
    key: "check",
    value: function check(attributes) {
      var value;

      for (var key in attributes) {
        if (!this.checkAttribute(key, attributes[key])) return false;
      }

      return true;
    }
  }, {
    key: "checkAttribute",
    value: function checkAttribute(key, value) {
      return _typeof(value) === 'object' && value !== null && value.hasOwnProperty('not') ? this[key] === value.not : this[key] !== value;
    }
  }, {
    key: "movements",
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
    key: "big",
    get: function get() {
      return this.constructor.big;
    }
  }, {
    key: "typeName",
    get: function get() {
      return this.constructor.typeName;
    }
  }, {
    key: "promotable",
    get: function get() {
      return this.constructor.promotable;
    }
  }, {
    key: "id",
    get: function get() {
      return this.constructor.id;
    }
  }], [{
    key: "for",
    value: function _for(id) {
      return this.all ? this.all.find(function (piece) {
        return piece.id === id;
      }) : null;
    }
  }, {
    key: "generator",
    value: function generator(owner) {
      return new Proxy({}, {
        get: function get(object, id) {
          return new (Piece.for(id))(owner);
        }
      });
    }
  }, {
    key: "big",
    get: function get() {
      return false;
    }
  }, {
    key: "id",
    get: function get() {
      return this.name.substring(0, 2).toLowerCase();
    }
  }, {
    key: "typeName",
    get: function get() {
      return this.name.replace(/([^A-Z])([A-Z]+)/, '$1-$2').toLowerCase();
    }
  }, {
    key: "movements",
    get: function get() {
      return [];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return [];
    }
  }, {
    key: "promotable",
    get: function get() {
      return !!this.promotedMovements.length;
    }
  }]);

  return Piece;
}();

/* harmony default export */ var shogi_piece = (Piece);
// CONCATENATED MODULE: ./src/shogi/cell.js
function cell_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cell_typeof = function _typeof(obj) { return typeof obj; }; } else { cell_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cell_typeof(obj); }

function cell_slicedToArray(arr, i) { return cell_arrayWithHoles(arr) || cell_iterableToArrayLimit(arr, i) || cell_nonIterableRest(); }

function cell_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function cell_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function cell_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function cell_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cell_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cell_createClass(Constructor, protoProps, staticProps) { if (protoProps) cell_defineProperties(Constructor.prototype, protoProps); if (staticProps) cell_defineProperties(Constructor, staticProps); return Constructor; }



var cell_Cell =
/*#__PURE__*/
function () {
  function Cell(x, y) {
    var piece = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    cell_classCallCheck(this, Cell);

    this.x = x;
    this.y = y;
    this.piece = piece;
  }

  cell_createClass(Cell, [{
    key: "clone",
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var cell = new this.constructor(this.x, this.y, this.piece ? this.piece.clone() : null);
      return callback ? callback.call(this, cell) : cell;
    }
  }, {
    key: "at",
    value: function at(x, y) {
      if (x instanceof shogi_piece) return this.piece === x;else if (Array.isArray(x)) {
        var _x = x;

        var _x2 = cell_slicedToArray(_x, 2);

        x = _x2[0];
        y = _x2[1];
      }

      if (x !== null && (cell_typeof(x) === 'object' || typeof x === 'function')) {
        y = x.y;
        x = x.x;
      }

      return this.x === x && this.y === y;
    }
  }], [{
    key: "collection",
    value: function collection(_ref, generate) {
      var _this = this;

      var kingGeneral = _ref.kingGeneral,
          jeweledGeneral = _ref.jeweledGeneral,
          width = _ref.width,
          height = _ref.height;
      return generate.call(this, shogi_piece.generator(kingGeneral), shogi_piece.generator(jeweledGeneral)).map(function (piece, index) {
        return new _this(index % width, Math.floor(index / height), piece);
      });
    }
  }]);

  return Cell;
}();

/* harmony default export */ var shogi_cell = (cell_Cell);
// CONCATENATED MODULE: ./src/shogi/iterator/dimension.js
function dimension_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dimension_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dimension_createClass(Constructor, protoProps, staticProps) { if (protoProps) dimension_defineProperties(Constructor.prototype, protoProps); if (staticProps) dimension_defineProperties(Constructor, staticProps); return Constructor; }

var Dimension =
/*#__PURE__*/
function () {
  function Dimension(iterator, position, delta, maximum) {
    dimension_classCallCheck(this, Dimension);

    this.iterator = iterator;
    this.position = position;
    this.delta = delta;
    this.maximum = maximum;
  }

  dimension_createClass(Dimension, [{
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

/* harmony default export */ var dimension = (Dimension);
// CONCATENATED MODULE: ./src/shogi/iterator.js
function iterator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function iterator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function iterator_createClass(Constructor, protoProps, staticProps) { if (protoProps) iterator_defineProperties(Constructor.prototype, protoProps); if (staticProps) iterator_defineProperties(Constructor, staticProps); return Constructor; }



var iterator_Iterator =
/*#__PURE__*/
function () {
  function Iterator(board, cell, x, y) {
    iterator_classCallCheck(this, Iterator);

    this.board = board;
    this.offset = 0;
    this.x = dimension.for(this, cell.x, x, board.width);
    this.y = dimension.for(this, cell.y, y, board.height);
  }

  iterator_createClass(Iterator, [{
    key: "forEach",
    value: function forEach(callback) {
      var movement;

      for (this.offset = 1; this.valid; this.offset++) {
        movement = this.board.cell(this.x.value, this.y.value);
        if (movement && callback.call(this, movement) === false) break;
      }
    }
  }, {
    key: "infinite",
    get: function get() {
      return this.x.infinite || this.y.infinite;
    }
  }, {
    key: "valid",
    get: function get() {
      return this.x.valid && this.y.valid;
    }
  }]);

  return Iterator;
}();

/* harmony default export */ var iterator = (iterator_Iterator);
// CONCATENATED MODULE: ./src/shogi/board.js
function board_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function board_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function board_createClass(Constructor, protoProps, staticProps) { if (protoProps) board_defineProperties(Constructor.prototype, protoProps); if (staticProps) board_defineProperties(Constructor, staticProps); return Constructor; }





var board_Board =
/*#__PURE__*/
function () {
  function Board() {
    board_classCallCheck(this, Board);

    this.cells = [];
  }

  board_createClass(Board, [{
    key: "clone",
    value: function clone() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var board = new this.constructor();
      board.cells = this.cells.map(function (cell) {
        return cell.clone();
      });
      return callback ? callback.call(this, board) : board;
    }
  }, {
    key: "cell",
    value: function cell(x, y) {
      return this.cells.find(function (cell) {
        return cell.at(x, y);
      });
    }
  }, {
    key: "row",
    value: function row(y) {
      return this.cells.filter(function (cell) {
        return cell.y === y;
      });
    }
  }, {
    key: "col",
    value: function col(x) {
      return this.cells.filter(function (cell) {
        return cell.x === x;
      });
    }
  }, {
    key: "move",
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
    key: "resolve",
    value: function resolve(object) {
      var cell = this.cell(object);
      var piece = cell ? cell.piece : object instanceof shogi_piece ? piece : null;
      return {
        cell: cell,
        piece: piece
      };
    }
  }, {
    key: "init",
    value: function init(_ref) {
      var kingGeneral = _ref.kingGeneral,
          jeweledGeneral = _ref.jeweledGeneral;
      this.cells = shogi_cell.collection({
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
    key: "width",
    get: function get() {
      return this.constructor.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.constructor.height;
    }
  }], [{
    key: "width",
    get: function get() {
      return 9;
    }
  }, {
    key: "height",
    get: function get() {
      return 9;
    }
  }]);

  return Board;
}();

/* harmony default export */ var shogi_board = (board_Board);
// CONCATENATED MODULE: ./src/shogi/player.js
function player_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function player_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function player_createClass(Constructor, protoProps, staticProps) { if (protoProps) player_defineProperties(Constructor.prototype, protoProps); if (staticProps) player_defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(name) {
    player_classCallCheck(this, Player);

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

  player_createClass(Player, [{
    key: "reverse",
    value: function reverse() {
      this.type = this.oppositeType;
      return this;
    }
  }, {
    key: "randomize",
    value: function randomize() {
      this.type = this.constructor.types[Math.floor(Math.random() * this.constructor.types.length)];
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "kingGeneral",
    get: function get() {
      return this.type === this.constructor.kingGeneral;
    }
  }, {
    key: "jeweledGeneral",
    get: function get() {
      return this.type === this.constructor.jeweledGeneral;
    }
  }, {
    key: "oppositeType",
    get: function get() {
      return this.constructor["".concat(this.kingGeneral ? 'jeweled' : 'king', "General")];
    }
  }, {
    key: "typeName",
    get: function get() {
      return this.kingGeneral ? 'king-general' : 'jeweled-general';
    }
  }], [{
    key: "from",
    value: function from(name) {
      return name instanceof this ? name : new this(name);
    }
  }, {
    key: "kingGeneral",
    get: function get() {
      return 0;
    }
  }, {
    key: "jeweledGeneral",
    get: function get() {
      return 1;
    }
  }, {
    key: "types",
    get: function get() {
      return [this.kingGeneral, this.jeweledGeneral];
    }
  }]);

  return Player;
}();

/* harmony default export */ var player = (Player);
// CONCATENATED MODULE: ./src/shogi/game.js
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function game_createClass(Constructor, protoProps, staticProps) { if (protoProps) game_defineProperties(Constructor.prototype, protoProps); if (staticProps) game_defineProperties(Constructor, staticProps); return Constructor; }






var game_Game =
/*#__PURE__*/
function () {
  function Game(player1, player2) {
    game_classCallCheck(this, Game);

    this.player1 = player.from(player1);
    this.player2 = player.from(player2);
    this.currentPlayer = null;
    this.board = new shogi_board();
    this.pieces = [];
    this.randomizePlayers();
  }

  game_createClass(Game, [{
    key: "piecesOf",
    value: function piecesOf(player) {
      return this.pieces.filter(function (piece) {
        return piece.owner === player;
      });
    }
  }, {
    key: "piecesUsedBy",
    value: function piecesUsedBy(player) {
      return this.usedPieces.filter(function (piece) {
        return piece.owner === player;
      });
    }
  }, {
    key: "piecesCapturedBy",
    value: function piecesCapturedBy(player) {
      return this.capturedPieces.filter(function (piece) {
        return piece.owner === player;
      });
    }
  }, {
    key: "stateOf",
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
    key: "move",
    value: function move(origin, destination) {
      var promote = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      origin = this.board.resolve(origin);
      destination = this.board.resolve(destination);
      return !this.over && origin.piece && origin.piece.owner === this.currentPlayer && (!promote || this.promotable(origin.piece, destination.cell)) && this.movements(origin.piece).includes(destination.cell) && this.board.move(origin.piece, destination.cell, promote) && (this.currentPlayer = this.nextPlayer) && true;
    }
  }, {
    key: "movements",
    value: function movements(origin) {
      var _this2 = this;

      var checkmate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _this$board$resolve = this.board.resolve(origin),
          piece = _this$board$resolve.piece,
          cell = _this$board$resolve.cell;

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
    key: "movementsForUsed",
    value: function movementsForUsed(piece, cell) {
      var _this3 = this;

      return piece.movements.reduce(function (movements, movement) {
        _construct(iterator, [_this3.board, cell].concat(_toConsumableArray(movement))).forEach(function (destination) {
          if (destination.piece && destination.piece.owner === piece.owner) return false;
          if (!destination.piece || destination.piece.owner !== piece.owner) movements.push(destination); //if(destination.piece && destination.piece.owner !== piece.owner) return false
        });

        return movements;
      }, []);
    }
  }, {
    key: "movementsForCaptured",
    value: function movementsForCaptured(piece) {
      var _this4 = this;

      var movements = this.board.cells.filter(function (cell) {
        return !cell.piece;
      });

      if (piece.pawn) {
        movements = movements.filter(function (cell) {
          return !_this4.board.col(cell.x).find(function (c) {
            return c.piece && c.piece.check({
              pawn: true,
              owner: piece.owner,
              promoted: false
            });
          });
        }).filter(function (cell) {
          return !function (c) {
            return c && c.piece && c.piece.check({
              king: true,
              owner: {
                not: piece.owner
              }
            });
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
    key: "promotable",
    value: function promotable(piece, destination) {
      return piece.promotable && !piece.promoted && this.board.cell(piece) && (piece.owner.jeweledGeneral && destination.y > this.board.height - 4 || piece.owner.kingGeneral && destination.y < 3);
    }
  }, {
    key: "clone",
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
    key: "reversePlayers",
    value: function reversePlayers() {
      this.player1.type = this.player2.reverse().oppositeType;
      return this;
    }
  }, {
    key: "randomizePlayers",
    value: function randomizePlayers() {
      this.player1.type = this.player2.randomize().oppositeType;
      return this;
    }
  }, {
    key: "start",
    value: function start() {
      this.board.init({
        kingGeneral: this.kingGeneral,
        jeweledGeneral: this.jeweledGeneral
      });
      this.pieces = this.usedPieces;
      this.currentPlayer = this.firstPlayer;
      return this;
    }
  }, {
    key: "players",
    get: function get() {
      return [this.player1, this.player2];
    }
  }, {
    key: "kingGeneral",
    get: function get() {
      return this.players.find(function (player) {
        return player.kingGeneral;
      });
    }
  }, {
    key: "jeweledGeneral",
    get: function get() {
      return this.players.find(function (player) {
        return player.jeweledGeneral;
      });
    }
  }, {
    key: "firstPlayer",
    get: function get() {
      return this.kingGeneral;
    }
  }, {
    key: "secondPlayer",
    get: function get() {
      var _this5 = this;

      return this.players.find(function (player) {
        return player !== _this5.firstPlayer;
      });
    }
  }, {
    key: "nextPlayer",
    get: function get() {
      var _this6 = this;

      return this.players.find(function (player) {
        return player !== _this6.currentPlayer;
      });
    }
  }, {
    key: "state",
    get: function get() {
      return this.stateOf(this.player1) || this.stateOf(this.player2);
    }
  }, {
    key: "over",
    get: function get() {
      return this.state === this.constructor.checkmate;
    }
  }, {
    key: "usedPieces",
    get: function get() {
      return this.board.cells.reduce(function (pieces, cell) {
        if (cell.piece) pieces.push(cell.piece);
        return pieces;
      }, []);
    }
  }, {
    key: "capturedPieces",
    get: function get() {
      var usedPieces = this.usedPieces;
      return this.pieces.filter(function (piece) {
        return !usedPieces.includes(piece);
      });
    }
  }], [{
    key: "states",
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

/* harmony default export */ var game = (game_Game);
// CONCATENATED MODULE: ./src/shogi/iterator/dimension/finite.js
function finite_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { finite_typeof = function _typeof(obj) { return typeof obj; }; } else { finite_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return finite_typeof(obj); }

function finite_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function finite_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function finite_createClass(Constructor, protoProps, staticProps) { if (protoProps) finite_defineProperties(Constructor.prototype, protoProps); if (staticProps) finite_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (finite_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) finite_setPrototypeOf(subClass, superClass); }

function finite_setPrototypeOf(o, p) { finite_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return finite_setPrototypeOf(o, p); }



var Finite =
/*#__PURE__*/
function (_Dimension) {
  _inherits(Finite, _Dimension);

  function Finite() {
    finite_classCallCheck(this, Finite);

    return _possibleConstructorReturn(this, _getPrototypeOf(Finite).apply(this, arguments));
  }

  finite_createClass(Finite, [{
    key: "value",
    get: function get() {
      return this.position + this.delta;
    }
  }, {
    key: "valid",
    get: function get() {
      return (this.iterator.infinite || this.offset === 1) && _get(_getPrototypeOf(Finite.prototype), "valid", this);
    }
  }]);

  return Finite;
}(dimension);

/* harmony default export */ var finite = (Finite);
// CONCATENATED MODULE: ./src/shogi/iterator/dimension/infinite.js
function infinite_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { infinite_typeof = function _typeof(obj) { return typeof obj; }; } else { infinite_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return infinite_typeof(obj); }

function infinite_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function infinite_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function infinite_createClass(Constructor, protoProps, staticProps) { if (protoProps) infinite_defineProperties(Constructor.prototype, protoProps); if (staticProps) infinite_defineProperties(Constructor, staticProps); return Constructor; }

function infinite_possibleConstructorReturn(self, call) { if (call && (infinite_typeof(call) === "object" || typeof call === "function")) { return call; } return infinite_assertThisInitialized(self); }

function infinite_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function infinite_getPrototypeOf(o) { infinite_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return infinite_getPrototypeOf(o); }

function infinite_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) infinite_setPrototypeOf(subClass, superClass); }

function infinite_setPrototypeOf(o, p) { infinite_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return infinite_setPrototypeOf(o, p); }



var Infinite =
/*#__PURE__*/
function (_Dimension) {
  infinite_inherits(Infinite, _Dimension);

  function Infinite() {
    infinite_classCallCheck(this, Infinite);

    return infinite_possibleConstructorReturn(this, infinite_getPrototypeOf(Infinite).apply(this, arguments));
  }

  infinite_createClass(Infinite, [{
    key: "sign",
    get: function get() {
      return this.delta < 0 ? -1 : 1;
    }
  }, {
    key: "value",
    get: function get() {
      return this.position + this.sign * this.offset;
    }
  }]);

  return Infinite;
}(dimension);

/* harmony default export */ var infinite = (Infinite);
// CONCATENATED MODULE: ./src/shogi/piece/king.js
function king_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { king_typeof = function _typeof(obj) { return typeof obj; }; } else { king_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return king_typeof(obj); }

function king_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function king_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function king_createClass(Constructor, protoProps, staticProps) { if (protoProps) king_defineProperties(Constructor.prototype, protoProps); if (staticProps) king_defineProperties(Constructor, staticProps); return Constructor; }

function king_possibleConstructorReturn(self, call) { if (call && (king_typeof(call) === "object" || typeof call === "function")) { return call; } return king_assertThisInitialized(self); }

function king_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function king_getPrototypeOf(o) { king_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return king_getPrototypeOf(o); }

function king_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) king_setPrototypeOf(subClass, superClass); }

function king_setPrototypeOf(o, p) { king_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return king_setPrototypeOf(o, p); }



var King =
/*#__PURE__*/
function (_Piece) {
  king_inherits(King, _Piece);

  function King() {
    king_classCallCheck(this, King);

    return king_possibleConstructorReturn(this, king_getPrototypeOf(King).apply(this, arguments));
  }

  king_createClass(King, null, [{
    key: "big",
    get: function get() {
      return true;
    }
  }, {
    key: "movements",
    get: function get() {
      return [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
    }
  }]);

  return King;
}(shogi_piece);

/* harmony default export */ var king = (King);
// CONCATENATED MODULE: ./src/shogi/piece/gold-general.js
function gold_general_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { gold_general_typeof = function _typeof(obj) { return typeof obj; }; } else { gold_general_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return gold_general_typeof(obj); }

function gold_general_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function gold_general_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function gold_general_createClass(Constructor, protoProps, staticProps) { if (protoProps) gold_general_defineProperties(Constructor.prototype, protoProps); if (staticProps) gold_general_defineProperties(Constructor, staticProps); return Constructor; }

function gold_general_possibleConstructorReturn(self, call) { if (call && (gold_general_typeof(call) === "object" || typeof call === "function")) { return call; } return gold_general_assertThisInitialized(self); }

function gold_general_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function gold_general_getPrototypeOf(o) { gold_general_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gold_general_getPrototypeOf(o); }

function gold_general_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) gold_general_setPrototypeOf(subClass, superClass); }

function gold_general_setPrototypeOf(o, p) { gold_general_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gold_general_setPrototypeOf(o, p); }



var GoldGeneral =
/*#__PURE__*/
function (_Piece) {
  gold_general_inherits(GoldGeneral, _Piece);

  function GoldGeneral() {
    gold_general_classCallCheck(this, GoldGeneral);

    return gold_general_possibleConstructorReturn(this, gold_general_getPrototypeOf(GoldGeneral).apply(this, arguments));
  }

  gold_general_createClass(GoldGeneral, null, [{
    key: "big",
    get: function get() {
      return true;
    }
  }, {
    key: "movements",
    get: function get() {
      return [[0, 1], [-1, 1], [1, 1], [-1, 0], [1, 0], [0, -1]];
    }
  }]);

  return GoldGeneral;
}(shogi_piece);

/* harmony default export */ var gold_general = (GoldGeneral);
// CONCATENATED MODULE: ./src/shogi/piece/silver-general.js
function silver_general_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { silver_general_typeof = function _typeof(obj) { return typeof obj; }; } else { silver_general_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return silver_general_typeof(obj); }

function silver_general_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function silver_general_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function silver_general_createClass(Constructor, protoProps, staticProps) { if (protoProps) silver_general_defineProperties(Constructor.prototype, protoProps); if (staticProps) silver_general_defineProperties(Constructor, staticProps); return Constructor; }

function silver_general_possibleConstructorReturn(self, call) { if (call && (silver_general_typeof(call) === "object" || typeof call === "function")) { return call; } return silver_general_assertThisInitialized(self); }

function silver_general_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function silver_general_getPrototypeOf(o) { silver_general_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return silver_general_getPrototypeOf(o); }

function silver_general_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) silver_general_setPrototypeOf(subClass, superClass); }

function silver_general_setPrototypeOf(o, p) { silver_general_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return silver_general_setPrototypeOf(o, p); }



var silver_general_SilverGeneral =
/*#__PURE__*/
function (_Piece) {
  silver_general_inherits(SilverGeneral, _Piece);

  function SilverGeneral() {
    silver_general_classCallCheck(this, SilverGeneral);

    return silver_general_possibleConstructorReturn(this, silver_general_getPrototypeOf(SilverGeneral).apply(this, arguments));
  }

  silver_general_createClass(SilverGeneral, null, [{
    key: "big",
    get: function get() {
      return true;
    }
  }, {
    key: "movements",
    get: function get() {
      return [[0, 1], [-1, 1], [1, 1], [-1, -1], [1, -1]];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return shogi_piece.GoldGeneral.movements;
    }
  }]);

  return SilverGeneral;
}(shogi_piece);

/* harmony default export */ var silver_general = (silver_general_SilverGeneral);
// CONCATENATED MODULE: ./src/shogi/piece/knight.js
function knight_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { knight_typeof = function _typeof(obj) { return typeof obj; }; } else { knight_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return knight_typeof(obj); }

function knight_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function knight_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function knight_createClass(Constructor, protoProps, staticProps) { if (protoProps) knight_defineProperties(Constructor.prototype, protoProps); if (staticProps) knight_defineProperties(Constructor, staticProps); return Constructor; }

function knight_possibleConstructorReturn(self, call) { if (call && (knight_typeof(call) === "object" || typeof call === "function")) { return call; } return knight_assertThisInitialized(self); }

function knight_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function knight_getPrototypeOf(o) { knight_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return knight_getPrototypeOf(o); }

function knight_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) knight_setPrototypeOf(subClass, superClass); }

function knight_setPrototypeOf(o, p) { knight_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return knight_setPrototypeOf(o, p); }



var knight_Knight =
/*#__PURE__*/
function (_Piece) {
  knight_inherits(Knight, _Piece);

  function Knight() {
    knight_classCallCheck(this, Knight);

    return knight_possibleConstructorReturn(this, knight_getPrototypeOf(Knight).apply(this, arguments));
  }

  knight_createClass(Knight, null, [{
    key: "movements",
    get: function get() {
      return [[-1, 2], [1, 2]];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return shogi_piece.GoldGeneral.movements;
    }
  }]);

  return Knight;
}(shogi_piece);

/* harmony default export */ var knight = (knight_Knight);
// CONCATENATED MODULE: ./src/shogi/piece/lance.js
function lance_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lance_typeof = function _typeof(obj) { return typeof obj; }; } else { lance_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lance_typeof(obj); }

function lance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lance_createClass(Constructor, protoProps, staticProps) { if (protoProps) lance_defineProperties(Constructor.prototype, protoProps); if (staticProps) lance_defineProperties(Constructor, staticProps); return Constructor; }

function lance_possibleConstructorReturn(self, call) { if (call && (lance_typeof(call) === "object" || typeof call === "function")) { return call; } return lance_assertThisInitialized(self); }

function lance_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function lance_getPrototypeOf(o) { lance_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return lance_getPrototypeOf(o); }

function lance_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) lance_setPrototypeOf(subClass, superClass); }

function lance_setPrototypeOf(o, p) { lance_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return lance_setPrototypeOf(o, p); }



var lance_Lance =
/*#__PURE__*/
function (_Piece) {
  lance_inherits(Lance, _Piece);

  function Lance() {
    lance_classCallCheck(this, Lance);

    return lance_possibleConstructorReturn(this, lance_getPrototypeOf(Lance).apply(this, arguments));
  }

  lance_createClass(Lance, null, [{
    key: "movements",
    get: function get() {
      return [[0, Infinity]];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return shogi_piece.GoldGeneral.movements;
    }
  }]);

  return Lance;
}(shogi_piece);

/* harmony default export */ var lance = (lance_Lance);
// CONCATENATED MODULE: ./src/shogi/piece/bishop.js
function bishop_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bishop_typeof = function _typeof(obj) { return typeof obj; }; } else { bishop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bishop_typeof(obj); }

function bishop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bishop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bishop_createClass(Constructor, protoProps, staticProps) { if (protoProps) bishop_defineProperties(Constructor.prototype, protoProps); if (staticProps) bishop_defineProperties(Constructor, staticProps); return Constructor; }

function bishop_possibleConstructorReturn(self, call) { if (call && (bishop_typeof(call) === "object" || typeof call === "function")) { return call; } return bishop_assertThisInitialized(self); }

function bishop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bishop_getPrototypeOf(o) { bishop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bishop_getPrototypeOf(o); }

function bishop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bishop_setPrototypeOf(subClass, superClass); }

function bishop_setPrototypeOf(o, p) { bishop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bishop_setPrototypeOf(o, p); }



var Bishop =
/*#__PURE__*/
function (_Piece) {
  bishop_inherits(Bishop, _Piece);

  function Bishop() {
    bishop_classCallCheck(this, Bishop);

    return bishop_possibleConstructorReturn(this, bishop_getPrototypeOf(Bishop).apply(this, arguments));
  }

  bishop_createClass(Bishop, null, [{
    key: "big",
    get: function get() {
      return true;
    }
  }, {
    key: "movements",
    get: function get() {
      return [[-Infinity, Infinity], [Infinity, Infinity], [-Infinity, -Infinity], [Infinity, -Infinity]];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return this.movements.concat([[0, 1], [-1, 0], [1, 0], [0, -1]]);
    }
  }]);

  return Bishop;
}(shogi_piece);

/* harmony default export */ var bishop = (Bishop);
// CONCATENATED MODULE: ./src/shogi/piece/rook.js
function rook_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { rook_typeof = function _typeof(obj) { return typeof obj; }; } else { rook_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return rook_typeof(obj); }

function rook_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rook_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rook_createClass(Constructor, protoProps, staticProps) { if (protoProps) rook_defineProperties(Constructor.prototype, protoProps); if (staticProps) rook_defineProperties(Constructor, staticProps); return Constructor; }

function rook_possibleConstructorReturn(self, call) { if (call && (rook_typeof(call) === "object" || typeof call === "function")) { return call; } return rook_assertThisInitialized(self); }

function rook_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function rook_getPrototypeOf(o) { rook_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rook_getPrototypeOf(o); }

function rook_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) rook_setPrototypeOf(subClass, superClass); }

function rook_setPrototypeOf(o, p) { rook_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rook_setPrototypeOf(o, p); }



var Rook =
/*#__PURE__*/
function (_Piece) {
  rook_inherits(Rook, _Piece);

  function Rook() {
    rook_classCallCheck(this, Rook);

    return rook_possibleConstructorReturn(this, rook_getPrototypeOf(Rook).apply(this, arguments));
  }

  rook_createClass(Rook, null, [{
    key: "big",
    get: function get() {
      return true;
    }
  }, {
    key: "movements",
    get: function get() {
      return [[0, Infinity], [-Infinity, 0], [Infinity, 0], [0, -Infinity]];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return this.movements.concat([[-1, 1], [1, 1], [-1, -1], [1, -1]]);
    }
  }]);

  return Rook;
}(shogi_piece);

/* harmony default export */ var rook = (Rook);
// CONCATENATED MODULE: ./src/shogi/piece/pawn.js
function pawn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pawn_typeof = function _typeof(obj) { return typeof obj; }; } else { pawn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pawn_typeof(obj); }

function pawn_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pawn_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pawn_createClass(Constructor, protoProps, staticProps) { if (protoProps) pawn_defineProperties(Constructor.prototype, protoProps); if (staticProps) pawn_defineProperties(Constructor, staticProps); return Constructor; }

function pawn_possibleConstructorReturn(self, call) { if (call && (pawn_typeof(call) === "object" || typeof call === "function")) { return call; } return pawn_assertThisInitialized(self); }

function pawn_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pawn_getPrototypeOf(o) { pawn_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pawn_getPrototypeOf(o); }

function pawn_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pawn_setPrototypeOf(subClass, superClass); }

function pawn_setPrototypeOf(o, p) { pawn_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pawn_setPrototypeOf(o, p); }



var pawn_Pawn =
/*#__PURE__*/
function (_Piece) {
  pawn_inherits(Pawn, _Piece);

  function Pawn() {
    pawn_classCallCheck(this, Pawn);

    return pawn_possibleConstructorReturn(this, pawn_getPrototypeOf(Pawn).apply(this, arguments));
  }

  pawn_createClass(Pawn, null, [{
    key: "movements",
    get: function get() {
      return [[0, 1]];
    }
  }, {
    key: "promotedMovements",
    get: function get() {
      return shogi_piece.GoldGeneral.movements;
    }
  }]);

  return Pawn;
}(shogi_piece);

/* harmony default export */ var pawn = (pawn_Pawn);
// CONCATENATED MODULE: ./src/index.js

















Object.assign(shogi_piece, {
  King: king,
  GoldGeneral: gold_general,
  SilverGeneral: silver_general,
  Knight: knight,
  Lance: lance,
  Bishop: bishop,
  Rook: rook,
  Pawn: pawn
});
shogi_piece.all = Object.values(shogi_piece);
shogi_piece.all.forEach(function (piece) {
  Object.defineProperty(shogi_piece.prototype, piece.name[0].toLowerCase() + piece.name.substring(1), {
    get: function get() {
      return this.constructor === piece;
    }
  });
});
Object.assign(dimension, {
  Finite: finite,
  Infinite: infinite
});
/* harmony default export */ var src = __webpack_exports__["default"] = ({
  Game: game,
  Player: player,
  Board: shogi_board,
  Cell: shogi_cell,
  Piece: shogi_piece,
  Iterator: iterator
});

/***/ })

/******/ })["default"]));