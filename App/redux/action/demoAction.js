import { LOADER_HIDE, LOADER_SHOW } from "./loaderAction"

export const dummyAction = ()=>{
    return dispatch=>{
        dispatch(LOADER_SHOW())

        setTimeout(() => {
            dispatch(LOADER_HIDE())
        }, 1200);
    }
}