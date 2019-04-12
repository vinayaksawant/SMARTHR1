import { Component, OnInit } from '@angular/core';

import { IEmployer } from './employer';
import { EmployerService } from './employer.service';

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

  employers : IEmployer[];

  constructor(private empService : EmployerService) {
    //this.listFilter = 'dipa';
  }
  ngOnInit() {
    this.empService.getEmployers().subscribe(
      employers => {
                  this.employers = employers
                  this.filteredEmployers = this.employers
                  },
      error => this.errorMessage = <any>error
    );
  }

  toggleImage(): void  {
      this.showImage = !this.showImage
  }

  performFilter(filterBy: string): IEmployer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employers.filter((employer: IEmployer)=> 
      employer.employerName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
