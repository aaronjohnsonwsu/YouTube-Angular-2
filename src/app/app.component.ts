import { Component } from '@angular/core';
import { YoutubeComponent } from './youtube/youtube.component';
import { YoutubeService } from './youtube.service'
import {Http} from '@angular/http';
import {HTTP_BINDINGS} from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [YoutubeComponent],
  providers : [YoutubeService, Http, HTTP_BINDINGS]
})

export class AppComponent {
  title = 'app works!';
}
