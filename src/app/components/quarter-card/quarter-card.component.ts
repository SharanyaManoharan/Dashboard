import { Component, OnInit, HostListener } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quarter-card',
  templateUrl: './quarter-card.component.html',
  styleUrls: ['./quarter-card.component.css'],
 })

export class QuarterCardComponent implements OnInit {
  
  showPanelQ1 = true;
  showPanelQ2 = true;
  showPanelQ3 = true;
  showPanelQ4 = true;
  showPanel = true;
  showCarDetails = false;
  public cars = [];
  
  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.showPanelQ1 = true;
    this.showPanelQ2 = true;
    this.showPanelQ3 = true;
    this.showPanelQ4 = true;
    this.showPanel = true;
  }

  constructor(private service : CarService , private router : Router) { }

  ngOnInit(): void {
    this.service.getCarDetails().subscribe((data: any[]) => {
      this.cars = data;
      console.log(this.cars);
    });
  }

  forQ1($event){ event.stopPropagation(); this.showPanelQ1 = !this.showPanelQ1;  }

  forQ2($event){ event.stopPropagation(); this.showPanelQ2 = !this.showPanelQ2; }

  forQ3($event){ event.stopPropagation(); this.showPanelQ3 = !this.showPanelQ3; }

  forQ4($event){ event.stopPropagation(); this.showPanelQ4 = !this.showPanelQ4; }

  

}
