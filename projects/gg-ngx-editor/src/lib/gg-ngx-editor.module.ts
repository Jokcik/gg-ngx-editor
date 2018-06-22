import {Injector, NgModule} from '@angular/core';
import { GGNgxEditorComponent } from './gg-ngx-editor.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuillService} from './quill-service/quill.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    GGNgxEditorComponent,
  ],
  exports: [
    GGNgxEditorComponent
  ],
  providers: [QuillService]
})
export class GGNgxEditorModule {
}
