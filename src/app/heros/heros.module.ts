import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [
    HerosComponent,
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class HerosModule { }
