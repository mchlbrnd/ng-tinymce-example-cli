import { Directive, ElementRef, forwardRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { TinymceEditorSettingsService } from './tinymce-editor-settings.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'p[tinymce], div[tinymce], textarea[tinymce]',
  exportAs: 'tinymce',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TinymceEditorDirective),
      multi: true
    }
  ]
})
export class TinymceEditorDirective implements ControlValueAccessor {

  private _tinymceEditor: any;
  private _value: string;
  private _onChange: (value: any) => void;

  @Input('tinymce') private _tinymceEditorId: string;
  @Input('settings') private _tinymceEditorSettings: {} = {};

  @Output('onInitialized') private _onInitialized = new EventEmitter<any>();

  get editor(): any {
    return this._tinymceEditor;
  }

  constructor(
    private _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef,
    private _providedSettings: TinymceEditorSettingsService) { }

  private _tinymceOnChange = (): void => {
    this._value = this._tinymceEditor.getContent();
    this._onChange(this._value);
    this._changeDetectorRef.detectChanges();
  };

  private _tinymceInitInstanceCallback = (editor: any): void => {
    this._tinymceEditor = editor;
    this._tinymceEditor.on('KeyUp', this._tinymceOnChange);
    this._tinymceEditor.on('PastePostProcess', this._tinymceOnChange);
    this._tinymceEditor.on('Change', this._tinymceOnChange);
    this.writeValue(this._value);
    this._onInitialized.emit(this._tinymceEditor);
  };

  ngOnInit(): void {
    let settings = {
      init_instance_callback: this._tinymceInitInstanceCallback,
      target: this._elementRef.nativeElement
    };
    settings = Object.assign({}, this._providedSettings, this._tinymceEditorSettings, settings);
    tinymce.init(settings);
  }

  ngOnDestroy() {
    tinymce.remove(this._tinymceEditor);
  }

  writeValue(value: string) {
    if (value) {
      this._value = value;

      if (this._tinymceEditor) {
        this._tinymceEditor.setContent(this._value, {format : 'raw'});
      }
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void { }
}
