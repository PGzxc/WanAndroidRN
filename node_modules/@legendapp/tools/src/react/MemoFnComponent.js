"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoFnComponentWithRef = exports.MemoFnComponent = exports.configureMemoFnComponent = void 0;
const react_1 = __importStar(require("react"));
let _config = {};
function configureMemoFnComponent(config) {
    _config = config || {};
}
exports.configureMemoFnComponent = configureMemoFnComponent;
class DefaultErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }
    componentDidCatch(error, info) {
        if (_config.onError) {
            try {
                let handled;
                if (this.props.onError) {
                    handled = this.props.onError(error, info);
                }
                if (!handled) {
                    _config.onError(error, info);
                }
            }
            catch (ignoredError) {
                console.log(ignoredError);
            }
        }
        this.setState({ error });
    }
    render() {
        const { children } = this.props;
        const { error } = this.state;
        if (error !== null) {
            debugger;
            return null;
        }
        return children || null;
    }
}
function MemoFnComponent(Component, onError) {
    onError = onError || _config.onError;
    let out = Component;
    if (onError) {
        const ErrorBoundary = _config.ErrorBoundary || DefaultErrorBoundary;
        out = (props) => react_1.default.createElement(ErrorBoundary, { onError: onError }, (0, react_1.createElement)(Component, props));
    }
    return (0, react_1.memo)(out);
}
exports.MemoFnComponent = MemoFnComponent;
function MemoFnComponentWithRef(Component, onError) {
    let out = Component;
    onError = onError || _config.onError;
    if (onError) {
        const ErrorBoundary = _config.ErrorBoundary || DefaultErrorBoundary;
        const Wrapped = (props, ref) => (react_1.default.createElement(ErrorBoundary, { onError: onError }, (0, react_1.createElement)(Component, Object.assign({ ref }, props))));
        out = (0, react_1.forwardRef)(Wrapped);
    }
    return (0, react_1.memo)(out);
}
exports.MemoFnComponentWithRef = MemoFnComponentWithRef;
//# sourceMappingURL=MemoFnComponent.js.map