/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/common/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/common/Header.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst MotionHeader = framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.header;\nconst Header = ()=>{\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const [prefersReducedMotion, setPrefersReducedMotion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mq = window.matchMedia(\"(prefers-reduced-motion: reduce)\");\n        setPrefersReducedMotion(mq.matches);\n        const handler = ()=>setPrefersReducedMotion(mq.matches);\n        mq.addEventListener(\"change\", handler);\n        return ()=>mq.removeEventListener(\"change\", handler);\n    }, []);\n    // subtle blue glow values used during motion\n    const blueGlow = \"drop-shadow(0px 10px 24px rgba(64,158,255,0.14))\";\n    const blueGlowStrong = \"drop-shadow(0px 14px 34px rgba(64,158,255,0.22))\";\n    // hover wiggle sequence\n    const handleMouseEnter = ()=>{\n        if (prefersReducedMotion) return;\n        controls.start({\n            rotate: [\n                0,\n                -8,\n                6,\n                -4,\n                0\n            ],\n            filter: [\n                \"none\",\n                blueGlow,\n                blueGlow,\n                \"none\",\n                \"none\"\n            ],\n            transition: {\n                duration: 0.9\n            }\n        });\n    };\n    // clear glow when leaving or blurring\n    const handleMouseLeave = ()=>{\n        if (prefersReducedMotion) return;\n        controls.start({\n            filter: \"none\",\n            transition: {\n                duration: 0.25\n            }\n        });\n    };\n    // click twirl (slightly slower for smoother appearance) with stronger glow\n    const handleClick = ()=>{\n        if (prefersReducedMotion) return;\n        controls.start({\n            rotate: 360,\n            scale: [\n                1,\n                1.06,\n                1\n            ],\n            filter: [\n                blueGlowStrong,\n                blueGlowStrong,\n                \"none\"\n            ],\n            transition: {\n                duration: 1.1,\n                ease: \"easeInOut\"\n            }\n        }).then(()=>controls.set({\n                rotate: 0,\n                filter: \"none\"\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionHeader, {\n        className: \"bg-black sticky top-0 z-50\",\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"container mx-auto flex justify-between items-start py-4 px-6 font-heading\",\n            style: {\n                minHeight: 120\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"text-xl font-bold text-gold hover:scale-105 transition-transform duration-300 self-end pb-3\",\n                    children: \"Malvika's Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-end space-x-6 self-end pb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/demo-reel\",\n                            className: \"text-gold hover:scale-105 transition-transform duration-300\",\n                            children: \"Demo Reel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/story-portfolio\",\n                            className: \"text-gold hover:scale-105 transition-transform duration-300\",\n                            children: \"Story Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/personal-work\",\n                            className: \"text-gold hover:scale-105 transition-transform duration-300\",\n                            children: \"Personal Work\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            className: \"text-gold hover:scale-105 transition-transform duration-300\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                            src: \"/assets/header-cat.png\",\n                            alt: \"cat\",\n                            className: \"h-16 w-auto object-contain ml-6 cursor-pointer origin-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-40\",\n                            role: \"button\",\n                            tabIndex: 0,\n                            \"aria-label\": \"Header mascot\",\n                            animate: controls,\n                            onMouseEnter: handleMouseEnter,\n                            onFocus: handleMouseEnter,\n                            onMouseLeave: handleMouseLeave,\n                            onBlur: handleMouseLeave,\n                            onClick: handleClick,\n                            onKeyDown: (e)=>{\n                                if (e.key === \"Enter\" || e.key === \" \") {\n                                    e.preventDefault();\n                                    handleClick();\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/components/common/Header.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQVEsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFdBQVdELEVBQUVDLEdBQUcsS0FBSyxLQUFLO29DQUFFRCxFQUFFRSxjQUFjO29DQUFJNUI7Z0NBQWU7NEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9HO0FBRUEsaUVBQWVwQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFsdmlrYS1wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vSGVhZGVyLnRzeD85OWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IE1vdGlvbkhlYWRlciA9IG1vdGlvbi5oZWFkZXI7XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IFtwcmVmZXJzUmVkdWNlZE1vdGlvbiwgc2V0UHJlZmVyc1JlZHVjZWRNb3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKTtcbiAgICBzZXRQcmVmZXJzUmVkdWNlZE1vdGlvbihtcS5tYXRjaGVzKTtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gc2V0UHJlZmVyc1JlZHVjZWRNb3Rpb24obXEubWF0Y2hlcyk7XG4gICAgbXEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IG1xLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgLy8gc3VidGxlIGJsdWUgZ2xvdyB2YWx1ZXMgdXNlZCBkdXJpbmcgbW90aW9uXG4gIGNvbnN0IGJsdWVHbG93ID0gJ2Ryb3Atc2hhZG93KDBweCAxMHB4IDI0cHggcmdiYSg2NCwxNTgsMjU1LDAuMTQpKSc7XG4gIGNvbnN0IGJsdWVHbG93U3Ryb25nID0gJ2Ryb3Atc2hhZG93KDBweCAxNHB4IDM0cHggcmdiYSg2NCwxNTgsMjU1LDAuMjIpKSc7XG5cbiAgLy8gaG92ZXIgd2lnZ2xlIHNlcXVlbmNlXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKSByZXR1cm47XG4gICAgY29udHJvbHMuc3RhcnQoe1xuICAgICAgcm90YXRlOiBbMCwgLTgsIDYsIC00LCAwXSxcbiAgICAgIGZpbHRlcjogWydub25lJywgYmx1ZUdsb3csIGJsdWVHbG93LCAnbm9uZScsICdub25lJ10sXG4gICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjkgfSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBjbGVhciBnbG93IHdoZW4gbGVhdmluZyBvciBibHVycmluZ1xuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbikgcmV0dXJuO1xuICAgIGNvbnRyb2xzLnN0YXJ0KHsgZmlsdGVyOiAnbm9uZScsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMjUgfSB9KTtcbiAgfTtcblxuICAvLyBjbGljayB0d2lybCAoc2xpZ2h0bHkgc2xvd2VyIGZvciBzbW9vdGhlciBhcHBlYXJhbmNlKSB3aXRoIHN0cm9uZ2VyIGdsb3dcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKSByZXR1cm47XG4gICAgY29udHJvbHNcbiAgICAgIC5zdGFydCh7IHJvdGF0ZTogMzYwLCBzY2FsZTogWzEsIDEuMDYsIDFdLCBmaWx0ZXI6IFtibHVlR2xvd1N0cm9uZywgYmx1ZUdsb3dTdHJvbmcsICdub25lJ10sIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEuMSwgZWFzZTogJ2Vhc2VJbk91dCcgfSB9KVxuICAgICAgLnRoZW4oKCkgPT4gY29udHJvbHMuc2V0KHsgcm90YXRlOiAwLCBmaWx0ZXI6ICdub25lJyB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW90aW9uSGVhZGVyXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBzdGlja3kgdG9wLTAgei01MFwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgID5cbiAgICAgIHsvKiBUYWxsZXIgaGVhZGVyOiB0aXRsZSBzdGF5cyBjZW50ZXJlZCB2ZXJ0aWNhbGx5LCBsaW5rcyBzaXQgbG93ZXIgKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHB5LTQgcHgtNiBmb250LWhlYWRpbmdcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDEyMCB9fT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1nb2xkIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgc2VsZi1lbmQgcGItM1wiXG4gICAgICAgID5cbiAgICAgICAgICBNYWx2aWthJmFwb3M7cyBQb3J0Zm9saW9cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIHNwYWNlLXgtNiBzZWxmLWVuZCBwYi0zXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvZGVtby1yZWVsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ29sZCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEZW1vIFJlZWxcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvc3RvcnktcG9ydGZvbGlvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ29sZCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdG9yeSBQb3J0Zm9saW9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvcGVyc29uYWwtd29ya1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdvbGQgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGVyc29uYWwgV29ya1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdvbGQgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICB7LyogQW5pbWF0ZWQgaGVhZGVyIGNhdDogaG92ZXIgd2lnZ2xlLCBjbGljayB0d2lybCAocmVzcGVjdHMgcHJlZmVycy1yZWR1Y2VkLW1vdGlvbikgd2l0aCBzdWJ0bGUgYmx1ZSBnbG93ICovfVxuICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2hlYWRlci1jYXQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImNhdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE2IHctYXV0byBvYmplY3QtY29udGFpbiBtbC02IGN1cnNvci1wb2ludGVyIG9yaWdpbi1jZW50ZXIgcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctYmx1ZS0zMDAgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNDBcIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIZWFkZXIgbWFzY290XCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykgeyBlLnByZXZlbnREZWZhdWx0KCk7IGhhbmRsZUNsaWNrKCk7IH0gfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvTW90aW9uSGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwiTW90aW9uSGVhZGVyIiwiaGVhZGVyIiwiSGVhZGVyIiwiY29udHJvbHMiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsInNldFByZWZlcnNSZWR1Y2VkTW90aW9uIiwibXEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJsdWVHbG93IiwiYmx1ZUdsb3dTdHJvbmciLCJoYW5kbGVNb3VzZUVudGVyIiwic3RhcnQiLCJyb3RhdGUiLCJmaWx0ZXIiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlQ2xpY2siLCJzY2FsZSIsImVhc2UiLCJ0aGVuIiwic2V0IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwibmF2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJocmVmIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0Iiwicm9sZSIsInRhYkluZGV4IiwiYXJpYS1sYWJlbCIsIm9uTW91c2VFbnRlciIsIm9uRm9jdXMiLCJvbk1vdXNlTGVhdmUiLCJvbkJsdXIiLCJvbkNsaWNrIiwib25LZXlEb3duIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Header.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/Header */ \"./src/components/common/Header.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Header__WEBPACK_IMPORTED_MODULE_2__]);\n_components_common_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            router.pathname !== \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/aziz/Desktop/malvika-portfolio/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWtCO0FBQ1Q7QUFFeEMsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIscUJBQ0U7O1lBQ0dJLE9BQU9DLFFBQVEsS0FBSyxxQkFBTyw4REFBQ04saUVBQU1BOzs7OzswQkFDbkMsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWx2aWthLXBvcnRmb2xpby8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JvdXRlci5wYXRobmFtZSAhPT0gJy8nICYmIDxIZWFkZXIgLz59XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();