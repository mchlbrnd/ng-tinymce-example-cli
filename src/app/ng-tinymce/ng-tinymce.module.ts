import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinymceEditorDirective } from './tinymce-editor.directive';
import { TinymceEditorSettingsService } from './tinymce-editor-settings.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TinymceEditorDirective
  ],
  providers: [
    TinymceEditorSettingsService
  ],
  exports: [
    TinymceEditorDirective
  ]
})
export class NgTinymceModule { }
