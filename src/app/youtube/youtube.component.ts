import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service'

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

  constructor(private _youtubeService: YoutubeService) {}

  ngOnInit() {
    this.getPlaylists(null);
  }

  getPlaylists(channelId){
    
    this.channelId = channelId;

    this._youtubeService.getPlaylists(this.channelId)
      .subscribe(
        data => this.playlists = data.items,
        error => alert(error),
        () => console.log(this.playlists)
      );
  }

  getPlaylistVideos(playlistId){
    console.log("Getting playlist videos");

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

}
