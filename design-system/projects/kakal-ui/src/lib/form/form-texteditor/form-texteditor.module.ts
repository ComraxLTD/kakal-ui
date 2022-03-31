import { NgModule } from "@angular/core";
import { FormTextEditorComponent } from "./form-texteditor.component";
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
    declarations:[FormTextEditorComponent],
    imports:[NgxEditorModule],
    exports:[FormTextEditorComponent]
})

export class KKLFormTextEditorModule {}
