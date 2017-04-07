import {createStore} from 'redux';

function todos(state=[], action){
    switch(action.type){
        case 'ADD_TODO':
        return [...state, {
            title: action.title,
            status: false
        }];
        break;

        case 'REMOVE_TODO':
        return [...state.slice(0, actionindex)
            .concat(state.slice(index+1))
        ];

        break;
        default:
        return state;
    }
}


module.exports = createStore(todos);
