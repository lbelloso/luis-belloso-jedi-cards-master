
// tslint:disable:indent
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardsComponent } from './cards.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: ':id/:title', component: CardsComponent },
		]),
    SharedModule
  ],
  declarations: [CardsComponent]
})
export class CardsModule { }
