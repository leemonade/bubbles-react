Object.defineProperty(exports,"__esModule",{value:true});exports.Select=void 0;var SelectRadix=_interopRequireWildcard(require("@radix-ui/react-select"));var _jsxRuntime=require("react/jsx-runtime");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}var Select=exports.Select=function Select(){return(0,_jsxRuntime.jsxs)(SelectRadix.Root,{children:[(0,_jsxRuntime.jsxs)(SelectRadix.Trigger,{children:[(0,_jsxRuntime.jsx)(SelectRadix.Value,{placeholder:"Pick an option"}),(0,_jsxRuntime.jsx)(SelectRadix.Icon,{})]}),(0,_jsxRuntime.jsx)(SelectRadix.Portal,{children:(0,_jsxRuntime.jsxs)(SelectRadix.Content,{children:[(0,_jsxRuntime.jsx)(SelectRadix.ScrollUpButton,{}),(0,_jsxRuntime.jsxs)(SelectRadix.Viewport,{children:[(0,_jsxRuntime.jsxs)(SelectRadix.Item,{value:"united-kingdom",children:[(0,_jsxRuntime.jsx)(SelectRadix.ItemText,{children:"United Kingdom"}),(0,_jsxRuntime.jsx)(SelectRadix.ItemIndicator,{})]}),(0,_jsxRuntime.jsx)(SelectRadix.Group,{children:(0,_jsxRuntime.jsxs)(SelectRadix.Item,{value:"united-kingdom 2",children:[(0,_jsxRuntime.jsx)(SelectRadix.ItemText,{children:"United Kingdom 2"}),(0,_jsxRuntime.jsx)(SelectRadix.ItemIndicator,{})]})}),(0,_jsxRuntime.jsx)(SelectRadix.Separator,{})]}),(0,_jsxRuntime.jsx)(SelectRadix.ScrollDownButton,{}),(0,_jsxRuntime.jsx)(SelectRadix.Arrow,{})]})})]});};