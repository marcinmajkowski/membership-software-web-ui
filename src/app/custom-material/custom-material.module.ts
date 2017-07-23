import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule } from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdToolbarModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class CustomMaterialModule { }
