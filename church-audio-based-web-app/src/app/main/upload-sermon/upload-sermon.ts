import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-upload-sermon',
  imports: [],
  templateUrl: './upload-sermon.html',
  styleUrl: './upload-sermon.scss',
})
export class UploadSermon {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
