import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerModule } from '../shared/components/banner';
import { CardModule } from '../shared/components/card';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';

@NgModule({
  declarations: [
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    CardModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
