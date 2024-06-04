export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            
            // throw new Error('Action.type = ABC no esta implementado');
            return [ ...initialState, action.payload]
    
            // eliminar un todo
            case '[TODO] Delete Todo':
                return initialState.filter(todo => todo.id !== action.payload);

            //onToggleTodo para cambiar el todo del
            case '[TODO] Toggle Todo':
                return initialState.map(
                    todo => todo.id === action.payload? {...todo, done:!todo.done} : todo
                );    
        default:
            return initialState;
    }
}