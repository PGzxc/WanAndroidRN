import React, {useEffect} from 'react'
import {Toast, useToast} from "react-native-toast-notifications";

/**
 * @desc：土司工具类
 * @param info
 */

function infoToast(info: String) {

    // @ts-ignore
    Toast.show(info, {
        type: "normal",
        placement: "bottom",
        duration: 1000,
        animationType: "slide-in"
    });

}

function successToast(info: String) {
    // @ts-ignore
    Toast.show(info, {
        type: "success",
        placement: "bottom",
        duration: 1000,
        animationType: "zoom-in",
    });
}


function failToast(info: String) {
    // @ts-ignore
    Toast.show(info, {
        type: "danger",
        placement: "bottom",
        duration: 1000,
        animationType: "zoom-in",
    });
}

function offline(info: String) {
    // @ts-ignore
    Toast.show(info, {
        type: "warning",
        placement: "bottom",
        duration: 1000,
        animationType: "zoom-in",
    });
}

function loadingToast() {
    Toast.show('Loading...', {
        type: "normal",
        placement: "bottom",
        animationType: "zoom-in",
        duration: 5000,
        onClose: () => console.log('Load complete !!!'),
    })
}

export {
    infoToast,
    successToast,
    failToast,
    offline,
    loadingToast,
}
