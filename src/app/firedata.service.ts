import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FiredataService {

  coursesObservable: Observable<any[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.coursesObservable = this.getCourses();
    console.info(this.coursesObservable);
  }

  getPath(listPath): Observable<any[]> {
    return this.firebase.list(listPath).valueChanges();
  }

  getCourses(): Observable<any[]> {
    return this.getPath('/courses');
  }

}
