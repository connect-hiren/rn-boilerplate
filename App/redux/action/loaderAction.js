import { LOADER } from '../Types';

export const loader = payload => ({ type: LOADER, state: payload });

export const LOADER_SHOW = () => ({ type: LOADER, state: true });

export const LOADER_HIDE = () => ({ type: LOADER, state: false });
