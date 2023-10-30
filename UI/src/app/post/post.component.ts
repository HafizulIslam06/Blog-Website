import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post | undefined;
  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id){
          this.postService.getPostById(id)
          .subscribe(
            Response => {
              this.post= Response;
            }
          );
        }
      }
    )
  }

}
