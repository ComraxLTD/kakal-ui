import { NgModule } from "@angular/core";
import { FormTexteditorComponent } from "./form-texteditor.component";
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
    declarations:[FormTexteditorComponent],
    imports:[NgxEditorModule],
    exports:[FormTexteditorComponent]
})

export class KKLFormTextEditorModule {}