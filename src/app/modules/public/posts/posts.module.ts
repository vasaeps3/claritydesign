import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostListService } from './post-list/post-list.service';
import { MutualModule } from '@app/common/modules/mutual/mutual.module';


@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule,
        MutualModule
    ],
    declarations: [
        PostListComponent
    ],
    providers: [
        PostListService
    ]
})
export class PostsModule { }
