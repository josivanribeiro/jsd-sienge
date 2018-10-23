/* Copyright josivanSilva (Developer); 2018 */
package com.josivansilva.sienge.service;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.math.BigDecimal;

import org.junit.Test;

import com.josivansilva.sienge.service.TransportationCostService;

/**
 * Transportation cost service unit test class.
 * 
 * @author josivan@josivansilva.com
 *
 */
public class TransportationCostServiceTests {

	private TransportationCostService transportationCostService = new TransportationCostService();
	
	@Test
	public void testCalculatesTransportationCostA () {
	
		int distanceOnPavedHighway = 100; 
		int distanceOnUnpavedHighway = 0;
		int vehicleUsed = 2;
		int freightCarried = 8;
		
		BigDecimal result = transportationCostService.calculatesTransportationCost (
																					distanceOnPavedHighway, 
																					distanceOnUnpavedHighway, 
																					vehicleUsed, 
																					freightCarried
																				   );
		System.out.println (result);
		assertNotNull (result);	
		assertTrue (result.toString().equals("62.70"));
		
	}
	
	@Test
	public void testCalculatesTransportationCostB () {
	
		int distanceOnPavedHighway = 0; 
		int distanceOnUnpavedHighway = 60;
		int vehicleUsed = 1;
		int freightCarried = 4;
		
		BigDecimal result = transportationCostService.calculatesTransportationCost (
																					distanceOnPavedHighway, 
																					distanceOnUnpavedHighway, 
																					vehicleUsed, 
																					freightCarried
																				   );
		System.out.println (result);
		assertNotNull (result);	
		assertTrue (result.toString().equals("37.20"));		
		
	}
	
	@Test
	public void testCalculatesTransportationCostC () {
	
		int distanceOnPavedHighway = 0; 
		int distanceOnUnpavedHighway = 180;
		int vehicleUsed = 3;
		int freightCarried = 12;
		
		BigDecimal result = transportationCostService.calculatesTransportationCost (
																					distanceOnPavedHighway, 
																					distanceOnUnpavedHighway, 
																					vehicleUsed, 
																					freightCarried
																				   );
		System.out.println (result);
		assertNotNull (result);	
		assertTrue (result.toString().equals("150.19"));
		
	}
	
	@Test
	public void testCalculatesTransportationCostD () {
	
		int distanceOnPavedHighway = 80; 
		int distanceOnUnpavedHighway = 20;
		int vehicleUsed = 1;
		int freightCarried = 6;
		
		BigDecimal result = transportationCostService.calculatesTransportationCost (
																					distanceOnPavedHighway, 
																					distanceOnUnpavedHighway, 
																					vehicleUsed, 
																					freightCarried
																				   );
		System.out.println (result);
		assertNotNull (result);	
		assertTrue (result.toString().equals("57.60"));
		
	}
	
	@Test
	public void testCalculatesTransportationCostE () {
	
		int distanceOnPavedHighway = 50; 
		int distanceOnUnpavedHighway = 30;
		int vehicleUsed = 2;
		int freightCarried = 5;
		
		BigDecimal result = transportationCostService.calculatesTransportationCost (
																					distanceOnPavedHighway, 
																					distanceOnUnpavedHighway, 
																					vehicleUsed, 
																					freightCarried
																				   );
		System.out.println (result);
		assertNotNull (result);	
		assertTrue (result.toString().equals("47.88"));
		
	}	
	
}
