import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ElementContainerComponent } from "./shared/components/element-container/element-container.component";
import { SectionComponent } from "./shared/components/section/section.component";
import { StatementComponent } from './shared/components/statement/statement.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [AppComponent, ElementContainerComponent, SectionComponent, StatementComponent, TableComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
