import {Item} from '../models/item.model';
import * as TodoActions from '../actions/todo.actions';

const initialState: Item = {
  name: 'Learn ngRx'
};

export function reducer(state: Item[] = [initialState], action: TodoActions.Actions) {
  switch (action.type) {
    case TodoActions.ADD_ITEM:
      return[...state, action.payload];
    default:
      return state;
  }
}
