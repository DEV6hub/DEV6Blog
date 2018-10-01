import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Item } from '../models/item.model';
import * as TodoActions from './../actions/todo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(name, $event) {
    this.store.dispatch(new TodoActions.AddItem({name: name}));
  }

  ngOnInit() {
  }

}
