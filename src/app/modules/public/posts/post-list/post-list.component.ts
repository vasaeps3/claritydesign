import { Component, OnInit } from '@angular/core';

import { PostListService } from '@app/modules/public/posts/post-list/post-list.service';
import { Post } from '@app/common/models/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private posts: Post[];
  constructor(
    private postListService: PostListService
  ) { }

  ngOnInit() {
    this.postListService.getAllPosts()
      .subscribe(
        posts => { this.posts = posts; }
      );
  }

}
