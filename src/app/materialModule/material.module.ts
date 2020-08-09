

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
  ],
})
export class MaterialModule { }
