import { ADD_TITLE, ADD_TODO, CLEAR_TODO } from '../Actions'

const initialState = {
    title: 'My ToDo List',
    todos: []
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TITLE:
            return {
                ...state,
                title: action.payload
            }
            case ADD_TODO:
            return {
                ...state,
                todoItem: []
            }
        case CLEAR_TODO:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default reducer