/* Copyright josivanSilva (Developer); 2018 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse}  from '@angular/common/http';
import {Http, Response, Headers} from "@angular/http";
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

/**
 * Service class that represents Transportation Cost.
 * 
 *  @author josivan@josivansilva.com
 */
@Injectable()
export class TransportationCostService {

    private baseUrl: string;

    constructor (private http: HttpClient) {
        this.baseUrl = "http://localhost:8080/jsd-sienge/rest";        
    }

    /** 
    * Simulates the loan.
    */
   public calculatesTransportationCost (parcel, loanValue, customerRisk) {                 
    return this.http.get<Response> (this.baseUrl + '/calculatesTransportationCost/' + parcel + '/' + loanValue + '/' + customerRisk).pipe(map((res) => res));
   }

}