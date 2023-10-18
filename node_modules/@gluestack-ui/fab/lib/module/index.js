import FabMain from './Fab';
import FabLabel from './FabLabel';
import { FabIcon } from './FabIcon';
export function createFab(_ref) {
  let {
    Root,
    Label,
    Icon
  } = _ref;
  const Fab = FabMain(Root);
  Fab.Label = FabLabel(Label);
  Fab.Icon = FabIcon(Icon);
  Fab.displayName = 'Fab';
  Fab.Icon.displayName = 'Fab.Icon';
  return Fab;
}
//# sourceMappingURL=index.js.map