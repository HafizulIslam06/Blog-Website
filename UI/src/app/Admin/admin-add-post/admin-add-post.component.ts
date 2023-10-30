import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent implements OnInit{

  constructor(private postService: PostService){}

  post: AddPostRequest= {
    title: '',
    content: '',
    summary: '',
    featuredImageUrl : '',
    author: '',
    urlHandle: '',
    visible: true ,    
    publishDate: new Date(),
    updatedDate: new Date(),
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.postService.addPost(this.post)
    .subscribe(
      response => {
        alert('success');
      }
    );
  }

}
