function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { AccessibilityInfo } from 'react-native';
export function ToastTitle(StyledToastTitle) {
  return /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
      children,
      ...props
    } = _ref;
    React.useEffect(() => {
      // Issue from react-native side
      // Hack for now, will fix this later
      AccessibilityInfo.announceForAccessibility(children);
    });
    return /*#__PURE__*/React.createElement(StyledToastTitle, _extends({}, props, {
      ref: ref,
      accessibilityLiveRegion: "assertive",
      "aria-atomic": "true",
      accessibilityRole: "alert"
    }), children);
  });
}
//# sourceMappingURL=ToastTitle.js.map