import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  editor1Settings = {toolbar: 'undo redo | styleselect | bold italic strikethrough | link image'};
  editor1Model = '<p><b>Hello</b> <i>World!</i></p>';
  get editor1SafeHtml(): SafeHtml {
    return this._domSanitizer.bypassSecurityTrustHtml(this.editor1Model);
  }

  editor2Settings = {toolbar: 'undo redo | bold'};
  editor2Control = new FormControl('<p><u>42</u></p>');
  get editor2SafeHtml(): SafeHtml {
    return this._domSanitizer.bypassSecurityTrustHtml(this.editor2Control.value);
  }

  constructor(private _domSanitizer: DomSanitizer) { }

}
