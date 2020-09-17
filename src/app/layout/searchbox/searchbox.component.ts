import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})

export class SearchboxComponent implements OnInit {
  @Input() tasks = [];
  @Input() task = ' ';
  constructor() { }

  ngOnInit(): void {
  }
  addTasks(task): void {
    this.tasks.push(task);
    console.log(this.tasks);
    alert('New task is added to your ToDo List!');
}

}
