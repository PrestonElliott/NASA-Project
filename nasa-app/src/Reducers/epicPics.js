let initialState = {
    epicPicsData: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EPIC_PICS": {
            return {...state, epicPicsData: action.data}
        }
        default: {
            return state
        }
    }
}