import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './taskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

}
