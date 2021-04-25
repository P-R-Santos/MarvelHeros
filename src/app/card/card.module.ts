import { NgModule } from '@angular/core';
import { CardComponent} from './card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
@NgModule({
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }