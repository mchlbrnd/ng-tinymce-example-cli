import { Injectable } from '@angular/core';

import 'tinymce/plugins/link/plugin.js';
import 'tinymce/plugins/paste/plugin.js';

@Injectable()
export class TinymceEditorSettingsService {
  skin_url = '/assets/tinymce/skins/lightgray';
  toolbar = 'undo redo | styleselect | bold italic | link image';
  plugins = 'link paste';
  schema = 'html5';
}

