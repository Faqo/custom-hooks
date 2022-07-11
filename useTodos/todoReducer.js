export const todoReducer = (initialState, action) =>{
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            //para el caso se hara de la siguiente forma el payload llevara el id solamente
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload) {
                    return {
                        ...todo, 
                        done:!todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}