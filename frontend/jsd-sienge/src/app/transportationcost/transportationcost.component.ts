/* Copyright josivanSilva (Developer); 2018 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportationCostService } from '../services/transportationcost.service';
import { VehicleUsed} from './vehicleUsed';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Functions } from '../util/functions';

/**
 * Transportation Cost component class.
 * 
 * @author josivan@josivansilva.com
 *
 */
@Component({
  selector: 'app-transportationcost',
  templateUrl: './transportationcost.component.html'
})
export class TransportationCostComponent implements OnInit {

  /* Page form attributes */
  distanceOnPavedHighway: number;
  distanceOnUnpavedHighway: number;
  freightCarried: number;
  
  calculationResult: string;

  vehiclesUsed = [
    new VehicleUsed (1, "Caminhão Baú"),
    new VehicleUsed (2, "Caminhão Caçamba"),
    new VehicleUsed (3, "Carreta"),
  ];
  selectedVehicleUsed: VehicleUsed = new VehicleUsed (null, "");

  constructor (private transportationCostService: TransportationCostService,              
               private activatedRoute: ActivatedRoute,
               private router: Router,
               public modal: Modal) { }

  ngOnInit() {
    
  }

  /** 
  * Calculates transportation cost.
  */
 public calculatesTransportationCost () {
  
  console.log ("this.distanceOnPavedHighway: " + this.distanceOnPavedHighway);
  console.log ("this.distanceOnUnpavedHighway: " + this.distanceOnUnpavedHighway);
  console.log ("this.selectedVehicleUsed.value: " + this.selectedVehicleUsed.value);
  console.log ("this.freightCarried: " + this.freightCarried);

  if ((this.distanceOnPavedHighway == null
        && this.distanceOnUnpavedHighway == null)
        || this.selectedVehicleUsed == null
        || this.freightCarried == null) {
    Functions.createModalAlert (this.modal, 'É necessário preencher os campos Distância em Rodovia Pavimentada ou Distância em Rodovia Não Pavimentada, Veículo Utilizado e Carga Transportada.');
    return;
  }

  this.distanceOnPavedHighway = this.distanceOnPavedHighway == undefined ? 0 : this.distanceOnPavedHighway; 
  this.distanceOnUnpavedHighway = this.distanceOnUnpavedHighway == undefined ? 0 : this.distanceOnUnpavedHighway;

  this.transportationCostService.calculatesTransportationCost (
                                                                this.distanceOnPavedHighway, 
                                                                this.distanceOnUnpavedHighway,
                                                                this.selectedVehicleUsed.value,
                                                                this.freightCarried
                                                              ).subscribe(data => {
    this.calculationResult = new Number(data).toFixed(2);
    console.log (this.calculationResult);
  });
}

 /** 
* Selects a vehicle used. 
*/
 public selectVehicleUsed (value) {
  this.selectedVehicleUsed = this.vehiclesUsed.filter((item)=> item.value == value)[0];  
 }

}
