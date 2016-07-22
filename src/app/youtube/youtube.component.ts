import { Component, OnInit} from '@angular/core';
import { YoutubeService } from '../youtube.service'
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-youtube',
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css'],
  providers: [YoutubeService]
})

export class YoutubeComponent implements OnInit {

  channelId;
  playlistId;
  playlists = [];
  playlistVideos;
  searchVideoResults;
  playingVideo;

  constructor(private _youtubeService: YoutubeService, private sanitizer: DomSanitizationService) {
    this.playingVideo = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/IdWZgTvf4t0");
  }

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists(){

    this._youtubeService.getPlaylists(this.channelId)
      .subscribe(
        data => this.playlists = data.items,
        error => alert(error),
        () => console.log(this.playlists)
      );
  }

  getPlaylistVideos(playlistId){
    this.playlistId = playlistId;

    this._youtubeService.getPlaylistVideos(this.playlistId, "")
      .subscribe(
        data => this.playlistVideos = data.items,
        error => alert(error),
        () => console.log(this.playlistVideos)
      );
  }

  searchVideos(keyword){
     this._youtubeService.searchVideos(keyword)
      .subscribe(
        data => this.searchVideoResults = data.items,
        error => alert(error),
        () => console.log(this.searchVideoResults)
      );

  }

  playVideo(video){
    if(video.kind == "youtube#searchResult" ){
      console.log(video.id.videoId);
      this.playingVideo = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.id.videoId + "?autoplay=1");
    }
    else{
      console.log(video.snippet.resourceId.videoId);
      this.playingVideo = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.snippet.resourceId.videoId + "?autoplay=1");
    }
  }

  addVideoToPlaylist(video){
    this.playlistVideos.push(video);
  }

}
