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
        this.baseUrl = "http://localhost:8080/jsd-sienge/rest/transportationCost";        
    }

    /** 
    * Calculates the transportation cost.
    */
   public calculatesTransportationCost (
                                         distanceOnPavedHighway, 
                                         distanceOnUnpavedHighway,
                                         vehicleUsed,
                                         freightCarried
                                       ) {                 
    return this.http.get<Response> (this.baseUrl + '/calculatesTransportationCost/' + distanceOnPavedHighway + '/' + distanceOnUnpavedHighway + '/' + vehicleUsed + '/' + freightCarried).pipe(map((res) => res));
   }

}