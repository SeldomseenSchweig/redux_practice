const INITIAL_STATE = {count: 0}

const countReducer = (state = INITIAL_STATE, action) => {

    if (action.type === 'LOG_STATE'){
        console.log("HERE IS YOUR STATE", state)
        return state
    }
    return state
    
}


let store = Redux.createStore(countReducer)