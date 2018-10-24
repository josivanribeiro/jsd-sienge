/* Copyright josivanSilva (Developer) 2018 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TransportationCostComponent } from './transportationcost/transportationcost.component';

const routes: Routes = [
    {
        path: 'transportationcost',
        component: TransportationCostComponent
    },
];

/**
 * AppRoutingModule module class.
 * 
 *  @author josivan@josivansilva.com
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }