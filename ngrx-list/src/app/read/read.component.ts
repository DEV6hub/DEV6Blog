import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Item } from '../models/item.model';
import { AppState } from './../app.state';
import * as TodoActions from '../actions/todo.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(private store: Store<AppState>) {
    this.items = store.select('item');
  }

  ngOnInit() {
  }

}
