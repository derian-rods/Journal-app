import { types } from "../types/types"


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
})

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => ({
    type: types.uifinishLoading
})

export const controlDrawer = (drawer) => ({
    type: types.uiControlDrawer,
    payload: !drawer
})

export const setWidthScreen = () =>({
    type: types.uiSetWidthScreen,
    payload: window.screen.width
})

export const controlDropMenu = (dropMenu) =>({
    type: types.uiControlDropMenu,
    payload: !dropMenu
})