// tslint:disable:indent
import { NgModule } from '@angular/core'
import { CardDetailComponent } from './card-detail.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: ':id/:title', component: CardDetailComponent },
      { path: ':id/:title/:id_card', component: CardDetailComponent },
		]),
    SharedModule
  ],
  declarations: [CardDetailComponent]
})
export class CardDetailModule { }
