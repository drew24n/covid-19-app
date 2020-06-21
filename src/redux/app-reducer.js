const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_DATA = "SET_DATA"
const SET_ERROR = "SET_ERROR"

const initialState = {
    data: {},
    isFetching: false,
    error: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_DATA:
            return {...state, data: action.payload}
        case SET_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
const setDataAction = (payload) => ({type: SET_DATA, payload})
const setError = (error) => ({type: SET_ERROR, error})

export const setData = (payload) => async (dispatch) => {
    try {
        dispatch(setIsFetching(true))
        await dispatch(setDataAction(payload))
    } catch (e) {
        dispatch(setError(e))
    }
}
