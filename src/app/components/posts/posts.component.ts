import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  public posts:any[] = []
  constructor(private service:PostsService){}

  ngOnInit() {
    console.log('posts');
    
    this.service.getPosts().subscribe(
      (res:any)=>{
        this.posts = res
        
      }
    )
  }

}
