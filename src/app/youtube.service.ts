import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {YoutubeComponent} from './youtube/youtube.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HTTP_BINDINGS} from '@angular/http';

@Injectable()
export class YoutubeService {
  

    private _url = 'https://www.googleapis.com/youtube/v3/';
    private _key = 'AIzaSyAYPrc9K2Fa2GopcBMuFNRxpAQrVJJvzC0';
 
    constructor(private http: Http) {
          console.log("YoutubeService Initialized...");
     }
    
    getPlaylists(channelId) {

        if(channelId == null || channelId == 'undefined')
        {
            channelId = "UC-9-kyTW8ZkZNDHQJ6FgpwQ";
        }

        var url = this._url + "playlists?part=snippet&channelId=" + channelId + "&key=" + this._key + "&maxResults=50";

        return this.http.get(url).map(res => res.json());
    }

    getPlaylistVideos(playlistId, pageToken){

        if(playlistId != null && playlistId != null && playlistId != "")
        {

            var url = this._url + "playlistItems?part=snippet&playlistId=" + playlistId + "&key=" + this._key + "&maxResults=50&pageToken=" + pageToken;

            return this.http.get(url).map(res => res.json());

        }

    }

    searchVideos(keyword){
        
        var url = this._url + "search?part=snippet&q=" + keyword + "&key=" + this._key + "&type=video";
        
        return this.http.get(url).map(res => res.json());
    }

}
