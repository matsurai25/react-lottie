var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import lottie from 'lottie-web';
import * as React from 'react';
/**
 * awaitするとsleepできる関数
 */
function sleep(time) {
    return new Promise(function (r) { return setTimeout(r, time); });
}
var Lottie = /** @class */ (function (_super) {
    __extends(Lottie, _super);
    function Lottie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapper = React.createRef();
        _this.animation = null;
        /** 最初から再生 */
        _this.play = function () {
            if (_this.animation === null) {
                return;
            }
            try {
                _this.animation.goToAndPlay(0, true);
            }
            catch (_a) { }
        };
        /** 最初に戻して止める */
        _this.refresh = function () {
            if (_this.animation === null) {
                return;
            }
            _this.animation.goToAndStop(0, true);
        };
        return _this;
    }
    Lottie.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, src = _a.src, when = _a.when, autoplay = _a.autoplay, loopStartFrame = _a.loopStartFrame;
        if (this.wrapper.current == null) {
            return;
        }
        this.animation = lottie.loadAnimation({
            container: this.wrapper.current,
            renderer: 'svg',
            loop: autoplay,
            autoplay: autoplay,
            animationData: src
        });
        // マウント時にwhenがtrueの場合、既に終わっているものとして最後のフレームに移動する
        if (when) {
            this.animation.goToAndStop(this.animation.getDuration(true), true);
        }
        // loopStartFrameがある場合、complete時に指定のフレームから再生する
        if (typeof loopStartFrame !== 'undefined') {
            this.animation.addEventListener('complete', function () {
                if (_this.animation == null) {
                    return;
                }
                _this.animation.goToAndPlay(loopStartFrame, true);
            });
        }
    };
    Lottie.prototype.componentDidUpdate = function (prevProps) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, when, delay;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, when = _a.when, delay = _a.delay;
                        if (this.animation === null) {
                            return [2 /*return*/];
                        }
                        if (!(prevProps.when !== when)) return [3 /*break*/, 4];
                        if (!when) return [3 /*break*/, 3];
                        if (!delay) return [3 /*break*/, 2];
                        return [4 /*yield*/, sleep(1000 * delay)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        this.play();
                        return [3 /*break*/, 4];
                    case 3:
                        this.refresh();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Lottie.prototype.componentWillUnmount = function () {
        if (this.animation === null) {
            return;
        }
        this.animation.destroy();
    };
    Lottie.prototype.render = function () {
        var _a = this.props, when = _a.when, src = _a.src, autoplay = _a.autoplay, children = _a.children, delay = _a.delay, loopStartFrame = _a.loopStartFrame, props = __rest(_a, ["when", "src", "autoplay", "children", "delay", "loopStartFrame"]);
        return React.createElement("div", __assign({ ref: this.wrapper }, props));
    };
    return Lottie;
}(React.Component));
export default Lottie;
