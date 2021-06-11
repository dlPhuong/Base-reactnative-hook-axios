import DisplayService from "./LoginService";

export const ACTION_TYPES = {
    LOAD_DATA: 'display/LOAD_DATA',
    ACCOUNT: 'display/ACCOUNT',
    CREATE_DATA: 'display/CREATE_DATA',
    UPDATE_DATA: 'display/UPDATE_DATA',
    DELETE_DATA: 'display/DELETE_DATA',
};

export let initialState = {
    Token: null,
    Account: null,
  };

const DisplayReducer = (display = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.LOAD_DATA:
            return { ...display, Token:payload };
            
                
        case ACTION_TYPES.ACCOUNT:
            return { ...display, Account:payload };
            
        case ACTION_TYPES.CREATE_DATA:
            return payload;

        case ACTION_TYPES.UPDATE_DATA:
            return { ...display, payload };
        case ACTION_TYPES.DELETE_DATA:
            return display.filter(({ id }) => id !== payload.id);

        default:
            return display;
    }
};

export const loadata = () => async (dispatch) => {

    try {
        const res = await DisplayService.getAll();

        dispatch({
            type: ACTION_TYPES.LOAD_DATA,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const authentication = (data) => async (dispatch) => {
    try {
        const res = await DisplayService.Login(data);
        dispatch({
            type: ACTION_TYPES.LOAD_DATA,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};


export const getAccount = (data) => async (dispatch) => {
    try {
        const res = await DisplayService.getDataAcount(data);
        dispatch({
            type: ACTION_TYPES.ACCOUNT,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export default DisplayReducer;