import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibooks } from './book';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class BookService {
  private _url:string='http://192.168.1.2:9025/book/thriler/1';
  constructor(private http:HttpClient) { }
getbooks():Observable<Ibooks[]>{
  return this.http.get<Ibooks[]>('http://192.168.1.2:9025/book/thriler/1');

}



}
