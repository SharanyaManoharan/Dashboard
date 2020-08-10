import { Component, OnInit, Inject } from '@angular/core';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-device-road-map',
  templateUrl: './device-road-map.component.html',
  styleUrls: ['./device-road-map.component.css']
})
export class DeviceRoadMapComponent implements OnInit {

  headingText:String = 'Transport Roadmap';
  checkboxes:any[] =[{ id: 0 ,name:'Cars'}, { id: 1 ,name:'Bicycles'}, { id: 2 ,name:'Aeroplanes'}];
  selected: any = [];
  sampleData :  any = [];
  public openCard = false;
  horizontalCardData : any = [];
  constructor(private service : CarService) { }

  ngOnInit(): void {
    this.service.getRoadMapDetails().subscribe((data: any[]) => {
      this.sampleData = data;
      this.horizontalCardData = data;
  
    });
  }

  canbeChecked(id): boolean {
    return this.selected.includes(id);
  }

  userSelectClick(id) {
    // this.openCard = true;
    // alert("opened cars");

    if (!this.selected.includes(id)) {
        this.selected.push(id);
    }
    else {
      this.selected = this.selected.filter(item => item !== id);
    }

    console.log("this.selected",this.selected);
  }

 

}



