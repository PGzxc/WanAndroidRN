"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFab = createFab;
var _Fab = _interopRequireDefault(require("./Fab"));
var _FabLabel = _interopRequireDefault(require("./FabLabel"));
var _FabIcon = require("./FabIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createFab(_ref) {
  let {
    Root,
    Label,
    Icon
  } = _ref;
  const Fab = (0, _Fab.default)(Root);
  Fab.Label = (0, _FabLabel.default)(Label);
  Fab.Icon = (0, _FabIcon.FabIcon)(Icon);
  Fab.displayName = 'Fab';
  Fab.Icon.displayName = 'Fab.Icon';
  return Fab;
}
//# sourceMappingURL=index.js.map