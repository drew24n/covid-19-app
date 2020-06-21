const SET_DATA = "SET_DATA"

const initialState = {
    data: {}
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, data: action.payload}
        default:
            return state
    }
}

const setDataAction = (payload) => ({type: SET_DATA, payload})

export const setData = (payload) => async (dispatch) => {
    try {
        await dispatch(setDataAction(payload))
    } catch (e) {
        alert(e)
    }
}
