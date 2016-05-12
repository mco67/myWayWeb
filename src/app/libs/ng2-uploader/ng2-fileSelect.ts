import {Directive, ElementRef, EventEmitter} from '@angular/core';
import { UploadService } from '../../services/uploadService';

@Directive({
  selector: '[ng-file-select]',
  inputs: ['options: ng-file-select'],
  outputs: ['onUpload'],
  host: { '(change)': 'onFiles()' }
})

export class NgFileSelect {
  uploader: UploadService;
  options: any;
  onUpload: EventEmitter<any> = new EventEmitter();

  constructor(public el: ElementRef, private uploadService: UploadService) {
    setTimeout(() => {
      this.uploadService.setOptions(this.options);
    });

    this.uploadService._emitter.subscribe((data) => {
      this.onUpload.emit(data);
    });
  }

  onFiles(): void {
    let files = this.el.nativeElement.files;
    if (files.length) {
      this.uploadService.addFilesToQueue(files);
    }
  }
}