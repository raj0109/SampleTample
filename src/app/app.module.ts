import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TemplateBuilderModule } from "./page/template-builder/template-builder.module";
import { HomeModule } from "./page/home/home.module";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, TemplateBuilderModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
