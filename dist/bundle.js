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

/***/ "./src/creature.js":
/*!*************************!*\
  !*** ./src/creature.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Creature; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Creature = /*#__PURE__*/function (_Entity) {
  _inherits(Creature, _Entity);

  var _super = _createSuper(Creature);

  function Creature(options) {
    _classCallCheck(this, Creature);

    return _super.call(this, options); // this.pos
    // this.dim
    // this.image
    // this.hitboxCenter
    // this.hitboxRadius
  }

  _createClass(Creature, [{
    key: "move",
    value: function move() {// Do not move because the player should be in the center of the frame of
      // reference
    }
  }]);

  return Creature;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  function Entity(options) {
    _classCallCheck(this, Entity);

    // pos is an array with x and y coordinates [x, y]
    this.pos = options.pos; // dim is an array with width and height [width, height]

    this.dim = options.dim;
    this.image = new Image();
    this.image.src = options.src; // Instantiate hitbox

    this.hitboxCenter = this.hitboxCenter();
    this.hitboxRadius = this.hitboxRadius();
  }

  _createClass(Entity, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.pos[0], this.pos[1], this.dim[0], this.dim[1]); // // ! for testing
      // this.drawHitbox();
    }
  }, {
    key: "move",
    value: function move(dx, dy) {
      this.pos[0] += dx;
      this.pos[1] += dy;
      this.hitboxCenter[0] += dx;
      this.hitboxCenter[1] += dy;

      if (this.isCollision(arguments.length <= 2 ? undefined : arguments[2])) {
        // undo move with a little bounce back
        this.pos[0] -= 1.1 * dx;
        this.pos[1] -= 1.1 * dy;
        this.hitboxCenter[0] -= 1.1 * dx;
        this.hitboxCenter[1] -= 1.1 * dy;
      }
    }
  }, {
    key: "hitboxCenter",
    value: function hitboxCenter() {
      var _this = this;

      var hitboxCenter = this.pos.map(function (_, i) {
        return _this.pos[i] + _this.dim[i] / 2;
      });
      return hitboxCenter;
    }
  }, {
    key: "hitboxRadius",
    value: function hitboxRadius() {
      return this.dim[0] < this.dim[1] ? this.dim[0] / 2 : this.dim[1] / 2;
    } // // ! for testing
    // drawHitbox() {
    //   const canvas = document.getElementById("canvas");
    //   const ctx = canvas.getContext("2d");
    //   ctx.beginPath();
    //   ctx.arc(
    //     this.hitboxCenter[0],
    //     this.hitboxCenter[1],
    //     this.hitboxRadius,
    //     0,
    //     2 * Math.PI,
    //     false
    //   );
    //   ctx.stroke();
    //   return true;
    // }

  }, {
    key: "isCollision",
    value: function isCollision(entity) {
      var dx = this.hitboxCenter[0] - entity.hitboxCenter[0];
      var dy = this.hitboxCenter[1] - entity.hitboxCenter[1];
      var distance = Math.sqrt(dx * dx + dy * dy);
      var minDistance = this.hitboxRadius + entity.hitboxRadius;
      if (distance < minDistance) return true;else return false;
    }
  }]);

  return Entity;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
/* harmony import */ var _slime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slime */ "./src/slime.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game(options) {
    _classCallCheck(this, Game);

    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.entities = [];
    this.creatures = [];
    this.moveDirX = 0;
    this.moveDirY = 0;
  }

  _createClass(Game, [{
    key: "createPlayer",
    value: function createPlayer() {
      // center pos in the middle of the canvas object
      var pos = [this.DIM_X / 2, this.DIM_Y / 2];
      this.player = new _slime__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: pos,
        dim: [20, 20],
        src: "assets/sprites/test-slime.png"
      }); // this.entities.push(this.player);

      this.creatures.push(this.player);
    }
  }, {
    key: "generateMap",
    value: function generateMap() {}
  }, {
    key: "generateEntities",
    value: function generateEntities() {
      // * For testing
      this.rock = new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
        pos: [500, 500],
        dim: [200, 150],
        src: 'assets/sprites/rock.jpg'
      });
      this.entities.push(this.rock);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      this.entities.forEach(function (entity) {
        return entity.draw(ctx);
      });
      this.creatures.forEach(function (creature) {
        return creature.draw(ctx);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.setKeyBinds();
      this.generateEntities();
      this.createPlayer(); // refresh 60 times per second

      setInterval(function () {
        _this.render(_this.ctx);

        _this.moveEntities();
      }, 16.667);
    }
  }, {
    key: "setKeyBinds",
    value: function setKeyBinds() {
      var _this2 = this;

      // handle keydownfor arrow keys
      document.addEventListener('keydown', function (e) {
        e.preventDefault();

        switch (e.key) {
          case 'ArrowUp':
            _this2.moveDirY = 10;
            break;

          case 'ArrowDown':
            _this2.moveDirY = -10;
            break;

          case 'ArrowLeft':
            _this2.moveDirX = 10;
            break;

          case 'ArrowRight':
            _this2.moveDirX = -10;
            break;

          default:
            break;
        }
      }); // handle keyup for arrow keys

      document.addEventListener('keyup', function (e) {
        e.preventDefault();
        var horKeys = ['ArrowLeft', 'ArrowRight'];
        var verKeys = ['ArrowUp', 'ArrowDown'];

        if (horKeys.includes(e.key)) {
          _this2.moveDirX = 0;
        }

        if (verKeys.includes(e.key)) {
          _this2.moveDirY = 0;
        }
      });
    }
  }, {
    key: "moveEntities",
    value: function moveEntities() {
      var _this3 = this;

      // * testing
      // check collision with player
      this.entities.forEach(function (entity) {
        return entity.move(_this3.moveDirX, _this3.moveDirY, _this3.player);
      }); // this.player.move();
      // this.creatures.forEach(creature => creature.move(this.moveDirX, this.moveDirY));
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  var DIM_X = 1200;
  var DIM_Y = 900;
  var ctx = canvas.getContext('2d');
  canvas.width = DIM_X;
  canvas.height = DIM_Y;
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]({
    DIM_X: DIM_X,
    DIM_Y: DIM_Y,
    ctx: ctx
  });
  game.start();
});

/***/ }),

/***/ "./src/slime.js":
/*!**********************!*\
  !*** ./src/slime.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slime; });
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creature */ "./src/creature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Slime = /*#__PURE__*/function (_Creature) {
  _inherits(Slime, _Creature);

  var _super = _createSuper(Slime);

  function Slime(options) {
    _classCallCheck(this, Slime);

    return _super.call(this, options);
  }

  _createClass(Slime, [{
    key: "move",
    value: function move() {// Do not move because the player should be in the center of the frame of
      // reference
    }
  }]);

  return Slime;
}(_creature__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map