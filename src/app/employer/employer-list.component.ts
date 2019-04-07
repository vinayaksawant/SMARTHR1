import { Component, OnInit } from '@angular/core';

import { IEmployer } from './employer';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  pageTitle : string = "Employer List is Working";
  showImage : boolean = false;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage = '';  

  private _listFilter : string;
  public get listFilter() : string {
    return this._listFilter;
  }
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredEmployers = this.listFilter ? this.performFilter(this.listFilter) : this.employers;
  }
  filteredEmployers : IEmployer[];

  employers : IEmployer[] =  [
    {
       "employerId": 1,
       "employerName": "Dipa Internationl Ltd.",
       "employerCode": "SMART-HR-1",
       "startDate": "01/01/2011",      
       "employeeCount" : 2011 ,
       "employerRevenue" : 201100 ,
       "billingRate" : 20.11 ,
       "postalAddress1" : "",
       "postalAddress2" : "",
       "postalAddressCity" : "",
       "postalAddressState" : "",
       "postalAddressZip" : null,
       "postalAddressCountry" : "",
       "employerEmail" : "",       
       "employerPhone" : null,              
       "employerFax" : null,                     
       "originCountryFlagImageUrl" : "",       
       "employerImageUrl" : "https://openclipart.org/download/8537/Gerald-G-Simple-Fruit-FF-Menu-4.svg"
     },
     {
      "employerId": 2,
      "employerName": "Gargi world wide",
      "employerCode": "SMART-HR-2",
      "startDate": "01/01/2013",      
      "employeeCount" : 2013,
      "employerRevenue" : 201300 , 
      "billingRate" : 20.13 ,                                              
      "postalAddress1" : "",
      "postalAddress2" : "",
      "postalAddressCity" : "",
      "postalAddressState" : "",
      "postalAddressZip" : null,
      "postalAddressCountry" : "",
      "employerEmail" : "",       
      "employerPhone" : null,              
      "employerFax" : null,                     
      "originCountryFlagImageUrl" : "",
      "employerImageUrl" : "https://openclipart.org/download/194073/yellow-banana-cluster.svg"      
     },
     {
      "employerId": 3,
      "employerName": "Sawant Logistics",
      "employerCode": "SMART-HR-3",
      "startDate": "01/01/1980",      
      "employeeCount" : 1980 ,
      "employerRevenue" : 198000 ,
      "billingRate" : 19.80 ,                                   
      "postalAddress1" : "",
      "postalAddress2" : "",
      "postalAddressCity" : "",
      "postalAddressState" : "",
      "postalAddressZip" :null,
      "postalAddressCountry" : "",
      "employerEmail" : "",       
      "employerPhone" : null,              
      "employerFax" : null,                     
      "originCountryFlagImageUrl" : "",      
      "employerImageUrl" : "https://openclipart.org/download/24328/Watermelon.svg"      
     },       
     {
      "employerId": 4,
      "employerName": "Sharvil Import Exports",
      "employerCode": "SMART-HR-4",
      "startDate": "01/01/2012",      
      "employeeCount" : 2012 ,
      "employerRevenue" : 201200 , 
      "billingRate" : 20.12 ,                             
      "postalAddress1" : "",
      "postalAddress2" : "",
      "postalAddressCity" : "",
      "postalAddressState" : "",
      "postalAddressZip" : null,
      "postalAddressCountry" : "",
      "employerEmail" : "",       
      "employerPhone" : null,              
      "employerFax" : null,                     
      "originCountryFlagImageUrl" : "",            
      "employerImageUrl" : "https://openclipart.org/download/22871/chovynz-Pineapple-Icon.svg"      
     },            
     {
      "employerId": 5,
      "employerName": "Shurya Business Intelligence",
      "employerCode": "SMART-HR-5",
      "startDate": "01/01/2016",      
      "employeeCount" : 2016 ,
      "employerRevenue" : 201600 ,            
      "billingRate" : 20.16 ,                  
      "postalAddress1" : "",
      "postalAddress2" : "",
      "postalAddressCity" : "",
      "postalAddressState" : "",
      "postalAddressZip" : null,
      "postalAddressCountry" : "",
      "employerEmail" : "",       
      "employerPhone" : null,              
      "employerFax" : null,                     
      "originCountryFlagImageUrl" : "",      
      "employerImageUrl" : "https://openclipart.org/download/209684/food-strawberry.svg"      
     },                
   ];
  constructor() {
    this.filteredEmployers = this.employers;
    this.listFilter = 'dipa';
  }
  ngOnInit() {
  }

  toggleImage(): void
  {
      this.showImage = !this.showImage
  }

  performFilter(filterBy: string): IEmployer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employers.filter((employer: IEmployer)=> 
      employer.employerName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
