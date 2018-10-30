import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateSelectorComponent],
  exports: [TemplateSelectorComponent]
})
export class HomeModule { }
