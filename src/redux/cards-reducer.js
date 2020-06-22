const SET_DATA = "SET_DATA"

const initialState = {
    cardsData: {}
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, cardsData: action.payload}
        default:
            return state
    }
}

const setCardsDataAction = (payload) => ({type: SET_DATA, payload})

export const setCardsData = (payload) => async (dispatch) => {
    try {
        await dispatch(setCardsDataAction(payload))
    } catch (e) {
        alert(e)
    }
}
