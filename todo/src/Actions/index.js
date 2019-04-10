export const ADD_TODO = 'ADD_TODO'
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

// export const CLEAR_TODO = 'CLEAR_TODO'
// export function clearTodo() {
//     return {
//         type: CLEAR_TODO,
//         payload: clearTodo
//     }
// }