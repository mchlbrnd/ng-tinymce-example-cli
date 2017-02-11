/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TinymceEditorSettingsService } from './tinymce-editor-settings.service';

describe('TinymceEditorSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TinymceEditorSettingsService]
    });
  });

  it('should ...', inject([TinymceEditorSettingsService], (service: TinymceEditorSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
