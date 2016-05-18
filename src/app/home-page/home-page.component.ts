import { Component, NgZone } from '@angular/core';
import { NgFileSelect } from '../libs/ng2-uploader/ng2-fileSelect';
import { ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css'],
  directives: [NgFileSelect, ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  pipes: []
})

export class HomePageComponent {

  zone: NgZone;
  options: Object = {
    url: 'http://localhost:8080/api/v1.0/user/avatar'
  };
  basicProgress: number = 0;
  basicResp: Object;
  multipleProgress: number = 0;
  multipleResp: any[] = [];
  dropProgress: number = 0;
  dropResp: any[] = [];

lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  handleBasicUpload(data): void {
    this.basicResp = data;
    this.zone.run(() => {
      this.basicProgress = data.progress.percent;
    });
  }

  handleMultipleUpload(data): void {
    let index = this.multipleResp.findIndex(x => x.id === data.id);
    if (index === -1) {
      this.multipleResp.push(data);
    }
    else {
      this.zone.run(() => {
        this.multipleResp[index] = data;
      });
    }

    let total = 0, uploaded = 0;
    this.multipleResp.forEach(resp => {
      total += resp.progress.total;
      uploaded += resp.progress.loaded;
    });

    this.multipleProgress = Math.floor(uploaded / (total / 100));
  }

  handleDropUpload(data): void {
    let index = this.dropResp.findIndex(x => x.id === data.id);
    if (index === -1) {
      this.dropResp.push(data);
    }
    else {
      this.zone.run(() => {
        this.dropResp[index] = data;
      });
    }

    let total = 0, uploaded = 0;
    this.dropResp.forEach(resp => {
      total += resp.progress.total;
      uploaded += resp.progress.loaded;
    });

    this.dropProgress = Math.floor(uploaded / (total / 100));
  }

}
