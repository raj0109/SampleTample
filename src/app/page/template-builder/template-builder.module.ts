import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateBuilderComponent } from './template-builder.component';

import { SectionComponent } from "./components/section/section.component";
import { StatementComponent } from './components/statement/statement.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { StatementBuilderComponent } from './components/statement-builder/statement-builder.component';
import { TableBuilderComponent } from './components/table-builder/table-builder.component';
import { SectionBuilderComponent } from './components/section-builder/section-builder.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [TemplateBuilderComponent, SectionComponent, StatementComponent, TableComponent, StatementBuilderComponent, TableBuilderComponent, SectionBuilderComponent],
  exports: [TemplateBuilderComponent]
})
export class TemplateBuilderModule { }
