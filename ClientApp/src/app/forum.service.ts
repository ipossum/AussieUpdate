import { Injectable } from '@angular/core';
import { News } from './news';
import { Observable } from 'rxjs/Rx'; // this line rises a tslint err
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class ForumService {
  
  //private endpoint = 'https://newsapi.org/v2/top-headlines?country=au&apiKey=af4628e56e23420a910912a357d06cfa';
  //private httpOptions = {
  //  headers: new HttpHeaders({
  //    'Content-Type': 'application/json'
  //  })
  //};

  //constructor(private httpClient: HttpClient) { }

  //private extractData(res: Response) {
  //  let body = res;    
  //  return body || {};
  //}

  //getArticles(): Observable<any> {
  //  return this.httpClient.get(this.endpoint).pipe(
  //    map(this.extractData));
  //}  
}
