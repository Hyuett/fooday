import { Component, OnInit } from '@angular/core';
// import { FiredataService } from '../firedata.service';

import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
  // ,providers: [FiredataService]
})
export class CoursesListComponent implements OnInit {

  coursesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}


// export class CoursesListComponent implements OnInit {

//   courses: any;

//   constructor(private db: FiredataService) { }

//   ngOnInit() {
//     this.db.coursesObservable.subscribe(res => this.courses = res);
//     // this.db.getCourses();
//   }

// }