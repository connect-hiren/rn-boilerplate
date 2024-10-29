import { LOADER } from "../Types";

export const loader = (state = false, action:any) => {
    switch (action.type) {
        case LOADER:
            return action.state;
        default:
            return state;
    }
}
  