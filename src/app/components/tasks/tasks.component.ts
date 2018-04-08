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

  originalTasks: Task[];
  tasks: Task[];

  constructor(public fireService: FireService) { }

  ngOnInit() {
    this.fireService.getAllTasks().subscribe(tasks => {
      this.originalTasks = tasks;
      this.tasks = tasks;
    });
  }

  searchTasks(tipo:number) {
    if (tipo === undefined) {
      this.tasks = this.originalTasks;
    } else {
      this.tasks = this.originalTasks.filter(function(e, i, a) {return e.type == tipo})
    }
  }

}
