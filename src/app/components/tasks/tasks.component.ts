import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Task } from '../../models/task';
import { FireService } from '../../services/fire.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(public fireService: FireService) { }

  ngOnInit() {
    this.fireService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

}
