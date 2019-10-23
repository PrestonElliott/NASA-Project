let initialState = {
    dailyPic: {
        date: "",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: ""
    }
}

export default (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_DAILY_PIC": {
            return {...state, dailyPic: action.data}
        }
        default: {
            return state
        }
    }
    
}