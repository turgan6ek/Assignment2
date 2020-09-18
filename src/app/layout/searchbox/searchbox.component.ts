import {Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})

export class SearchboxComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Output() newTaskEvent = new EventEmitter<string>();

  addNewTask(value: string) {
    this.newTaskEvent.emit(value);
    alert(value + " is added to your todo list!!!");
  }
}
