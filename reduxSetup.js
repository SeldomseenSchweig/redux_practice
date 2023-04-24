const INITIAL_STATE = {count: 0}

const countReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case "INCREMENT":
            return {...state, count:state.count + 1}
        case "DECREMEMT":
            return {...state, count:state.count - 1}
        case "RESET":
            return {...state,count:0 }
        default: 
            return state
    }
    return state
        
}


let store = Redux.createStore(countReducer)