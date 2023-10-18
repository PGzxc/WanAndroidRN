import React from 'react';
export const ActionsheetContext = /*#__PURE__*/React.createContext({
  hideDragIndicator: false,
  handleClose: () => {},
  initialFocusRef: {
    current: null
  },
  finalFocusRef: {
    current: null
  },
  visible: false,
  backdropVisible: false,
  closeOnOverlayClick: false,
  handleCloseBackdrop: () => {},
  avoidKeyboard: false,
  bottomInset: 0,
  trapFocus: true,
  snapPoints: []
});
//# sourceMappingURL=context.js.map