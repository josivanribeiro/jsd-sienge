/* Copyright josivanSilva (Developer); 2018 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportationCostService } from '../services/transportationcost.service';
import { CustomerType} from './customerType';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Functions } from '../util/functions';
import { Constants } from '../util/constants';

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
  customerForm: FormGroup;
  customerId: string;
  customerName: FormControl;
  customerType: FormControl;
  customerMonthlyIncome: FormControl;
  customerRisk: FormControl;
  customerAddress: FormControl;
  customerTotalPatrimony: FormControl;
  customerCurrentDebts: FormControl;
  customerEmployed: FormControl;

  loanValue: number;
  parcel: number;
  calculationResult: number;

  customerTypes = [
    new CustomerType ("Special", "Especial"),
    new CustomerType ("Potential", "Potencial"),
    new CustomerType ("Common", "Comum"),
  ];
  selectedCustomerType: CustomerType = new CustomerType ("","");

  /* Edit mode attributes */
  isAdd: boolean = false;
  isEdit: boolean = false;

  subscribe: any;

  constructor (private transportationCostService: TransportationCostService,              
               private activatedRoute: ActivatedRoute,
               private router: Router,
               public modal: Modal) { }

  ngOnInit() {
    
    this.createFormControls();
    this.createForm();    

  }

  /** 
  * Simulates a loan.
  */
 public onSimulatesLoan () {
  
  console.log ("this.parcel: " + this.parcel);
  console.log ("this.loanValue: " + this.loanValue);
  console.log ("this.customerRisk.value: " + this.customerRisk.value);

  if (this.parcel == null
        || this.loanValue == null
        || this.customerRisk.value == null) {
    Functions.createModalAlert (this.modal, 'É necessário preencher o Valor e a Duração do Empréstimo.');
    return;
  }
  
  this.transportationCostService.calculatesTransportationCost (this.parcel, this.loanValue, this.customerRisk.value).subscribe(data => {
    this.calculationResult = parseFloat (data.toString());     
  });
}

 /** 
  * Creates the form controls.
  */
 private createFormControls() {
  this.customerName = new FormControl('', Validators.required);
  this.customerType = new FormControl('', Validators.required);
  this.customerMonthlyIncome = new FormControl('', Validators.required);
  this.customerRisk = new FormControl('', Validators.required);
  this.customerAddress = new FormControl('', Validators.required);
  this.customerTotalPatrimony = new FormControl();
  this.customerCurrentDebts = new FormControl();
  this.customerEmployed = new FormControl();  
 }

/** 
* Creates the form.
*/
private createForm() {
  this.customerForm = new FormGroup({
    customerName: this.customerName,
    customerType: this.customerType,
    customerMonthlyIncome: this.customerMonthlyIncome,
    customerRisk: this.customerRisk,
    customerAddress: this.customerAddress,
    customerTotalPatrimony: this.customerTotalPatrimony,
    customerCurrentDebts: this.customerCurrentDebts,
    customerEmployed: this.customerEmployed,
  });
} 

/** 
* Selects a customer type. 
*/
 public selectCustomerType (value) {
  this.selectedCustomerType = this.customerTypes.filter((item)=> item.value == value)[0];  
 } 

}
