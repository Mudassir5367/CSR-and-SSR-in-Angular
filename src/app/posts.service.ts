import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  private url = 'https://jsonplaceholder.typicode.com/users'
  getPosts(){
    return this.http.get(this.url)
  }
}
