import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class CustomMaterialModule { }
