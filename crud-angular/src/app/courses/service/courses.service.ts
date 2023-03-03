import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

private readonly API = '/assets/cursos.json';

  constructor(private httpClient : HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), // ou take(1) - pega somente 1 retorno
      tap(courses => console.log(courses))
    );
  }

}
