import { Component, OnInit } from '@angular/core';
import { ModalUploadImageService } from './modal-upload-image.service';

@Component({
  selector: 'app-modal-upload-image',
  templateUrl: './modal-upload-image.component.html',
  styleUrls: ['./modal-upload-image.component.css']
})
export class ModalUploadImageComponent implements OnInit {

  constructor(public _mus: ModalUploadImageService) { }

  ngOnInit(): void {
  }

  

}
