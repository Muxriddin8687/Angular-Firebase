import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    constructor() { }

    // upload file example
    @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any> | any;
    @ViewChild('UploadFileInput') uploadFileInput: ElementRef | any;
    myfilename = 'Select File';

    fileChangeEvent(fileInput: any) {

        if (fileInput.target.files && fileInput.target.files[0]) {

        this.myfilename = '';
        Array.from(fileInput.target.files).forEach((file: File | any) => {
            console.log(file);
            this.myfilename += file.name + ',';
        });

        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {

            // Return Base64 Data URL
            const imgBase64Path = e.target.result;

            };
        };
        reader.readAsDataURL(fileInput.target.files[0]);

        // Reset File Input to Selct Same file again
        this.uploadFileInput.nativeElement.value = "";
        } else {
        this.myfilename = 'Select File';
        }
    }

    ngOnInit(): void{
      this.uploadFileInput._control = this._control;
    }
}
