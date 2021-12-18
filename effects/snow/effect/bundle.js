/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Snow\n/* harmony export */ });\nclass Snow {\n  constructor (opt = {}) {\n    // 是否是雨\n    this.isRain = opt.isRain || false;\n    // 元素\n    this.el = null;\n    // 倾斜方向\n    this.dir = opt.dir || 'r';\n    // 直径\n    this.width = 0;\n    // 最大直径\n    this.maxWidth = opt.maxWidth || 80;\n    // 最小直径\n    this.minWidth = opt.minWidth || 2;\n    // 透明度\n    this.opacity = 0;\n    // 水平位置\n    this.x = 0;\n    // 重置位置\n    this.y = 0;\n    // z轴位置\n    this.z = 0;\n    // 水平速度\n    this.sx = 0;\n    // 是否左右摇摆\n    this.isSwing = false;\n    // 左右摇摆的步长\n    this.stepSx = 0.02;\n    // 左右摇摆的正弦函数x变量\n    this.swingRadian = 1;\n    // 左右摇摆的正弦x步长\n    this.swingStep = 0.01;\n    // 垂直速度\n    this.sy = 0;\n    // 最大速度\n    this.maxSpeed = opt.maxSpeed || 4;\n    // 最小速度\n    this.minSpeed = opt.minSpeed || 1;\n    // 快速划过的最大速度\n    this.quickMaxSpeed = opt.quickMaxSpeed || 10;\n    // 快速划过的最小速度\n    this.quickMinSpeed = opt.quickMinSpeed || 8;\n    // 快速划过的宽度\n    this.quickWidth = opt.quickWidth || 80;\n    // 快速划过的透明度\n    this.quickOpacity = opt.quickOpacity || 0.2;\n    // 窗口尺寸\n    this.windowWidth = window.innerWidth;\n    this.windowHeight = window.innerHeight;\n    \n    this.init();\n  }\n  \n  // 随机初始化属性\n  init (reset) {\n    let isQuick = Math.random() > 0.8;\n    this.isSwing = Math.random() > 0.8;\n    this.width = isQuick ? this.quickWidth : Math.floor(Math.random() * this.maxWidth + this.minWidth);\n    this.opacity = isQuick ? this.quickOpacity : Math.random();\n    this.x = Math.floor(Math.random() * (\n      this.windowWidth - this.width\n    ));\n    this.y = Math.floor(Math.random() * (\n      this.windowHeight - this.width\n    ));\n    if (reset && Math.random() > 0.8) {\n      this.x = -this.width;\n    } else if (reset) {\n      this.y = -this.width;\n    }\n    this.sy = isQuick ? Math.random() * this.quickMaxSpeed + this.quickMinSpeed : Math.random() * this.maxSpeed + this.minSpeed;\n    this.sx = this.dir === 'r' ? this.sy : -this.sy;\n    this.z = isQuick ? Math.random() * 300 + 200 : 0;\n    this.swingStep = 0.01 * Math.random();\n    this.swingRadian = Math.random() * (\n      1.1 - 0.9\n    ) + 0.9;\n  }\n  \n  // 设置样式\n  setStyle () {\n    this.el.style.cssText = `\n            position: fixed;\n            left: 0;\n            top: 0;\n            display: block;\n            width: ${this.isRain ? 1 : this.width}px;\n            height: ${this.width}px;\n            opacity: ${this.opacity};\n            background-image: radial-gradient(#fff 0%, rgba(255, 255, 255, 0) 60%);\n            border-radius: 50%;\n            z-index: 10;\n            pointer-events: none;\n            transform: translate(${this.x}px, ${this.y}px) ${this.getRotate(this.sy, this.sx)};\n        `;\n  }\n  \n  // 渲染\n  render () {\n    this.el = document.createElement('div');\n    this.setStyle();\n    document.body.appendChild(this.el);\n  }\n  \n  move () {\n    if (this.isSwing) {\n      // if (this.sx >= 1 || this.sx <= -1) {\n      //     this.stepSx = -this.stepSx\n      // }\n      // this.sx += this.stepSx\n      if (this.swingRadian > 1.1 || this.swingRadian < 0.9) {\n        this.swingStep = -this.swingStep;\n      }\n      this.swingRadian += this.swingStep;\n      if (this.isRain) {\n        this.x += this.sx;\n      } else {\n        this.x += this.sx * Math.sin(this.swingRadian * Math.PI);\n      }\n      this.y -= this.sy * Math.cos(this.swingRadian * Math.PI);\n    } else {\n      this.x += this.sx;\n      this.y += this.sy;\n    }\n    // 完全离开窗口就调一下初始化方法，另外还需要修改一下init方法，因为重新出现我们是希望它的y坐标为0或者小于0，这样就不会又凭空出现的感觉，而是从天上下来的\n    if (this.x < -this.width || this.x > this.windowWidth || this.y > this.windowHeight) {\n      this.init(true);\n      this.setStyle();\n    }\n    this.el.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px) ${this.getRotate(this.sy, this.sx)}`;\n  }\n  \n  getRotate (sy, sx) {\n    return this.isRain ? `rotate(${sx === 0 ? 0 : (\n      90 + Math.atan(sy / sx) * (\n      180 / Math.PI\n      )\n    )}deg)` : '';\n  }\n}\n\nclass Snows {\n  constructor (opt = {}) {\n    this.num = opt.num || 100;\n    this.opt = opt;\n    this.snowList = [];\n    this.createSnows();\n    this.moveSnow();\n  }\n  \n  createSnows () {\n    this.snowList = [];\n    for (let i = 0; i < this.num; i++) {\n      let snow = new Snow(this.opt);\n      snow.render();\n      this.snowList.push(snow);\n    }\n  }\n  \n  moveSnow () {\n    window.requestAnimationFrame(() => {\n      this.snowList.forEach((item) => {\n        item.move();\n      });\n      this.moveSnow();\n    });\n  }\n}\n\nnew Snows({\n  isRain: true,\n  num: 300,\n  maxSpeed: 15\n});\nnew Snows({\n  isRain: false,\n  num: 150\n});\n\n\n//# sourceURL=webpack://snow/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;