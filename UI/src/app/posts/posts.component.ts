import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService){}

  posts : Post[] = [];

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(
      Response => {
        this.posts = Response;
      }
    );
  }

}
