import {createStore} from 'redux'

// Reducer
const rootReducer = (state: any = [], action: any) => {
    let newState = [...state]
    switch (action.type) {
        
        case 'ADD':
            return[...newState, action.payload]
            
        
        case 'UPDATE':
            newState[action.index] = action.payload;
            return newState
        case 'DELETE':
            
            let index = action.index

           return newState.filter((i:any) => i !== newState[index])
            
        default:
            return state
    }
}

// Store
export const store = createStore(rootReducer)

