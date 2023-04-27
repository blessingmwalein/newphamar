import { Component, Input, OnInit } from '@angular/core';
import { ChemicalsService } from 'src/app/services/chemicals/chemicals.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  reports: any[];
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private chemicalSevice: ChemicalsService) {}

  ngOnInit(): void {
    this.chemicalSevice.getReports().subscribe(
      (res: any) => {
        this.reports = res.reports;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
