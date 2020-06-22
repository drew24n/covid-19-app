const SET_COUNTRY = "SET_COUNTRY"

const initialState = {
    country: ""
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return {...state, country: action.payload}
        default:
            return state
    }
}

const setCountryAction = (payload) => ({type: SET_COUNTRY, payload})

export const setCountry = (payload) => async (dispatch) => {
    try {
        await dispatch(setCountryAction(payload))
    } catch (e) {
        alert(e)
    }
}
