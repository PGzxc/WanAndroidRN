import {useId as $1Hnir$useId, filterDOMProps as $1Hnir$filterDOMProps, mergeProps as $1Hnir$mergeProps, useEffectEvent as $1Hnir$useEffectEvent, useLayoutEffect as $1Hnir$useLayoutEffect, useRouter as $1Hnir$useRouter, useSlotId as $1Hnir$useSlotId} from "@react-aria/utils";
import {useLocalizedStringFormatter as $1Hnir$useLocalizedStringFormatter, useLocale as $1Hnir$useLocale} from "@react-aria/i18n";
import {useLongPress as $1Hnir$useLongPress, usePress as $1Hnir$usePress, useHover as $1Hnir$useHover, isFocusVisible as $1Hnir$isFocusVisible, useKeyboard as $1Hnir$useKeyboard} from "@react-aria/interactions";
import {useOverlayTrigger as $1Hnir$useOverlayTrigger} from "@react-aria/overlays";
import {useSelectableList as $1Hnir$useSelectableList, useSelectableItem as $1Hnir$useSelectableItem} from "@react-aria/selection";
import {focusSafely as $1Hnir$focusSafely} from "@react-aria/focus";
import {getItemCount as $1Hnir$getItemCount} from "@react-stately/collections";
import {useRef as $1Hnir$useRef, useCallback as $1Hnir$useCallback} from "react";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $2cbb7ca666678a14$exports = {};
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
    "longPressMessage": `اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`
};


var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
    "longPressMessage": `Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`
};


var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
    "longPressMessage": `Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku`
};


var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
    "longPressMessage": `Langt tryk eller tryk på Alt + pil ned for at åbne menuen`
};


var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
    "longPressMessage": `Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen`
};


var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
    "longPressMessage": `Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`
};


var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};


var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú`
};


var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
    "longPressMessage": `Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool`
};


var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli`
};


var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
    "longPressMessage": `Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.`
};


var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
    "longPressMessage": `לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`
};


var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};


var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához`
};


var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
    "longPressMessage": `Premere a lungo o premere Alt + Freccia giù per aprire il menu`
};


var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
    "longPressMessage": `長押しまたは Alt+下矢印キーでメニューを開く`
};


var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
    "longPressMessage": `길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`
};


var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
    "longPressMessage": `Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`
};


var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
    "longPressMessage": `Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`
};


var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for å åpne menyen`
};


var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};


var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
    "longPressMessage": `Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu`
};


var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};


var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};


var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
    "longPressMessage": `Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul`
};


var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
    "longPressMessage": `Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`
};


var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
    "longPressMessage": `Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol`
};


var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
    "longPressMessage": `Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`
};


var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};


var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
    "longPressMessage": `Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn`
};


var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
    "longPressMessage": `Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın`
};


var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
    "longPressMessage": `Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`
};


var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
    "longPressMessage": `长按或按 Alt + 向下方向键以打开菜单`
};


var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
    "longPressMessage": `長按或按 Alt+向下鍵以開啟功能表`
};


$2cbb7ca666678a14$exports = {
    "ar-AE": $c0398ad35c3639b7$exports,
    "bg-BG": $7af657c4165927c3$exports,
    "cs-CZ": $d95d4da6d531ab81$exports,
    "da-DK": $24ebda9c775dca17$exports,
    "de-DE": $743e0dfca6cab1e9$exports,
    "el-GR": $a2f41026e05f1c84$exports,
    "en-US": $43b800e97c901737$exports,
    "es-ES": $442f5f6ac211e29f$exports,
    "et-EE": $dff280acfeb2d8ac$exports,
    "fi-FI": $51608325613944d7$exports,
    "fr-FR": $c4a1b1eabeaa87be$exports,
    "he-IL": $8c74815cdee18d1b$exports,
    "hr-HR": $fd0e9ef6a7fe0ec9$exports,
    "hu-HU": $a89a74a39eba465a$exports,
    "it-IT": $edc7c66594a0ae8a$exports,
    "ja-JP": $f1ab51510712db52$exports,
    "ko-KR": $f9b672d9b82fa3d6$exports,
    "lt-LT": $a385f3910feda499$exports,
    "lv-LV": $4f1bde932c441789$exports,
    "nb-NO": $914a51a8a594d5be$exports,
    "nl-NL": $89aaf803103bb500$exports,
    "pl-PL": $c685891476dbaaca$exports,
    "pt-BR": $885879b9b10c2959$exports,
    "pt-PT": $6b39616688a51692$exports,
    "ro-RO": $f26362aed63f47e2$exports,
    "ru-RU": $06cbade644558bf0$exports,
    "sk-SK": $0a391ff68f9d59b1$exports,
    "sl-SI": $8193cf0e649c7928$exports,
    "sr-SP": $f398debcce5a5c55$exports,
    "sv-SE": $9e9fef000aa4c013$exports,
    "tr-TR": $c016c8183bbe3d68$exports,
    "uk-UA": $ca4f6c8462244e62$exports,
    "zh-CN": $2d9960c02ccac927$exports,
    "zh-TW": $f1b682a4c8c5631c$exports
};






function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = "menu", isDisabled: isDisabled, trigger: trigger = "press" } = props;
    let menuTriggerId = (0, $1Hnir$useId)();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $1Hnir$useOverlayTrigger)({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === "longPress" && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case "Enter":
            case " ":
                if (trigger === "longPress") return;
            // fallthrough
            case "ArrowDown":
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!("continuePropagation" in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle("first");
                break;
            case "ArrowUp":
                if (!("continuePropagation" in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle("last");
                break;
            default:
                // Allow other keys.
                if ("continuePropagation" in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, $1Hnir$useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($2cbb7ca666678a14$exports))));
    let { longPressProps: longPressProps } = (0, $1Hnir$useLongPress)({
        isDisabled: isDisabled || trigger !== "longPress",
        accessibilityDescription: stringFormatter.format("longPressMessage"),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open("first");
        }
    });
    let pressProps = {
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled) // If opened with a screen reader, auto focus the first item.
            // Otherwise, the menu itself will be focused.
            state.toggle(e.pointerType === "virtual" ? "first" : null);
        },
        onPress (e) {
            if (e.pointerType === "touch" && !isDisabled) state.toggle();
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === "press" ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            "aria-labelledby": menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $d5336fe17ce95402$export$6f49b4016bfc8d56 = new WeakMap();
function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, ...otherProps } = props;
    if (!props["aria-label"] && !props["aria-labelledby"]) console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let domProps = (0, $1Hnir$filterDOMProps)(props, {
        labelable: true
    });
    let { listProps: listProps } = (0, $1Hnir$useSelectableList)({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap,
        linkBehavior: "override"
    });
    $d5336fe17ce95402$export$6f49b4016bfc8d56.set(state, {
        onClose: props.onClose,
        onAction: props.onAction
    });
    return {
        menuProps: (0, $1Hnir$mergeProps)(domProps, {
            role: "menu",
            // this forces AT to move their cursors into any open sub dialogs, the sub dialogs contain hidden close buttons in order to come back to this level of the menu
            "aria-hidden": state.expandedKeys.size > 0 ? true : undefined,
            ...listProps,
            onKeyDown: (e)=>{
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== "Escape") listProps.onKeyDown(e);
            }
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    var _item_props;
    let { key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, "aria-haspopup": hasPopup } = props;
    let { direction: direction } = (0, $1Hnir$useLocale)();
    let isTrigger = !!hasPopup;
    let isOpen = state.expandedKeys.has(key);
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    let openTimeout = (0, $1Hnir$useRef)();
    let cancelOpenTimeout = (0, $1Hnir$useCallback)(()=>{
        if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = undefined;
        }
    }, [
        openTimeout
    ]);
    let onSubmenuOpen = (0, $1Hnir$useEffectEvent)(()=>{
        cancelOpenTimeout();
        state.setExpandedKeys(new Set([
            key
        ]));
    });
    (0, $1Hnir$useLayoutEffect)(()=>{
        return ()=>cancelOpenTimeout();
    }, [
        cancelOpenTimeout
    ]);
    let data = (0, $d5336fe17ce95402$export$6f49b4016bfc8d56).get(state);
    let onClose = props.onClose || data.onClose;
    let onActionMenuDialogTrigger = (0, $1Hnir$useCallback)(()=>{
        onSubmenuOpen();
    // will need to disable this lint rule when using useEffectEvent https://react.dev/learn/separating-events-from-effects#logic-inside-effects-is-reactive
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let onAction = isTrigger ? onActionMenuDialogTrigger : props.onAction || data.onAction;
    let router = (0, $1Hnir$useRouter)();
    let performAction = (e)=>{
        if (onAction) onAction(key);
        if (e.target instanceof HTMLAnchorElement) router.open(e.target, e);
    };
    let role = "menuitem";
    if (state.selectionManager.selectionMode === "single") role = "menuitemradio";
    else if (state.selectionManager.selectionMode === "multiple") role = "menuitemcheckbox";
    let labelId = (0, $1Hnir$useSlotId)();
    let descriptionId = (0, $1Hnir$useSlotId)();
    let keyboardId = (0, $1Hnir$useSlotId)();
    let ariaProps = {
        "aria-disabled": isDisabled || undefined,
        role: role,
        "aria-label": props["aria-label"],
        "aria-labelledby": labelId,
        "aria-describedby": [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(" ") || undefined
    };
    if (state.selectionManager.selectionMode !== "none") ariaProps["aria-checked"] = isSelected;
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        ariaProps["aria-posinset"] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps["aria-setsize"] = (0, $1Hnir$getItemCount)(state.collection);
    }
    if (hasPopup != null) {
        ariaProps["aria-haspopup"] = hasPopup;
        ariaProps["aria-expanded"] = isOpen ? "true" : "false";
    }
    let onPressStart = (e)=>{
        if (e.pointerType === "keyboard") performAction(e);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== "keyboard") {
            performAction(e);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== "multiple" || state.selectionManager.isLink(key))) onClose();
        }
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, $1Hnir$useSelectableItem)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: "none"
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, $1Hnir$usePress)({
        onPressStart: onPressStart,
        onPressUp: onPressUp,
        isDisabled: isDisabled || isTrigger && state.expandedKeys.has(key)
    });
    let { hoverProps: hoverProps } = (0, $1Hnir$useHover)({
        isDisabled: isDisabled,
        onHoverStart () {
            if (!(0, $1Hnir$isFocusVisible)() && !(isTrigger && state.expandedKeys.has(key))) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
                // focus immediately so that a focus scope opened on hover has the correct restore node
                let isFocused = key === state.selectionManager.focusedKey;
                if (isFocused && state.selectionManager.isFocused && document.activeElement !== ref.current) (0, $1Hnir$focusSafely)(ref.current);
            }
        },
        onHoverChange: (isHovered)=>{
            if (isHovered && isTrigger && !state.expandedKeys.has(key)) {
                if (!openTimeout.current) openTimeout.current = setTimeout(()=>{
                    onSubmenuOpen();
                }, 200);
            } else if (!isHovered) cancelOpenTimeout();
        }
    });
    let { keyboardProps: keyboardProps } = (0, $1Hnir$useKeyboard)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case " ":
                    if (!isDisabled && state.selectionManager.selectionMode === "none" && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case "Enter":
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                case "ArrowRight":
                    if (isTrigger && direction === "ltr") onSubmenuOpen();
                    else e.continuePropagation();
                    break;
                case "ArrowLeft":
                    if (isTrigger && direction === "rtl") onSubmenuOpen();
                    else e.continuePropagation();
                    break;
                default:
                    e.continuePropagation();
                    break;
            }
        }
    });
    let domProps = (0, $1Hnir$filterDOMProps)(item.props, {
        isLink: !!(item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.href)
    });
    delete domProps.id;
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, $1Hnir$mergeProps)(domProps, itemProps, pressProps, hoverProps, keyboardProps)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading, "aria-label": ariaLabel } = props;
    let headingId = (0, $1Hnir$useId)();
    return {
        itemProps: {
            role: "presentation"
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: "presentation"
        } : {},
        groupProps: {
            role: "group",
            "aria-label": ariaLabel,
            "aria-labelledby": heading ? headingId : undefined
        }
    };
}




export {$168583247155ddda$export$dc9c12ed27dd1b49 as useMenuTrigger, $d5336fe17ce95402$export$38eaa17faae8f579 as useMenu, $a2e5df62f93c7633$export$9d32628fc2aea7da as useMenuItem, $3e5eb2498db5b506$export$73f7a44322579622 as useMenuSection};
//# sourceMappingURL=module.js.map
