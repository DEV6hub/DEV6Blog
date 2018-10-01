import {Action} from '@ngrx/store';
import {Item} from '../models/item.model';

export const ADD_ITEM = '[TODO] Add';

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Item) {}
}

export type Actions = AddItem;
