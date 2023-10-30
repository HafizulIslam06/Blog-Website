import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent {
  constructor (private postService: PostService)
  {

  }

  posts: Post[] = [];

  ngOnInit(): void{
    this.postService.getAllPosts()
    .subscribe(
      response => {
        this.posts = response;
      }      
    );
  }

  } 
