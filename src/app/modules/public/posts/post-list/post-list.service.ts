
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Observable } from 'rxjs/Observable';

import { Post } from '@app/common/models/post.model';


@Injectable()
export class PostListService {

    constructor(
        private apiService: ApiService
    ) { }

    public getAllPosts(): Observable<Post[]> {

        return this.apiService.get('/posts');
    }


}

