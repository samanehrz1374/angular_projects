import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {HttpClient, HttpParams , HttpHeaders} from "@angular/common/http";
import { HttpService } from './http.service';
import { HttppostService } from './httppost.service';
import { Post } from './post';
 


interface Course {
  description: string;
  courseListIcon: string;
  iconUrl:string;
  longDescription:string;
  url:string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http2';

  ROOT_URL='https://jsonplaceholder.typicode.com';


  posts: Observable<any>;

  newPost: Observable<any>;
 
  constructor(private http:HttpClient){
   

  }

  getPosts(){

    // let params = new HttpParams().set('userId','1');
    let headers= new HttpHeaders().set('Authorization','auth-token');
    this.posts= this.http.get(this.ROOT_URL+ '/posts',{ headers})
  }

  createPost(){
    const data:Post={
      id:1,
      userId:23,
      title: 'My New Post',
      body:'Hello word!'

    }

    this.newPost = this.http.post(this.ROOT_URL + '/posts',data)


  }

  // updatePost(){
  //   const data:Post={
  //     id:1,
  //     userId:25,
  //     title: 'My New Post',
  //     body:'Hello wordvv!'


  //   }

  //   this.newPost = this.http.put(this.ROOT_URL + '/posts',data)

  // }


  ngOnInit(){

    
  

    // this.httppostService.posturl().subscribe(
    //   (data => console.log(data))
    // )

  

    // this.httpServise.getPost().subscribe((data => console.log(data)))
    
    
  }


}
