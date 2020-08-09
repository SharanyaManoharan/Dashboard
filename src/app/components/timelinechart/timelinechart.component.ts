import { Component, OnInit ,Input} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-timelinechart',
  templateUrl: './timelinechart.component.html',
  styleUrls: ['./timelinechart.component.css']
})
export class TimelinechartComponent implements OnInit {
  @Input() timeLineData:any;
  showSubTimeLine:boolean = false;
  SubTimeLineData:any = [];
  detailsCardData:any = [];
  parentIndex: number = null;
  childIndex: number = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   

  }

  selectedval(device,i,j){
    this.parentIndex = i;
    this.childIndex = j;
    this.showSubTimeLine = false;
    this.SubTimeLineData = [];
    this.SubTimeLineData = this.timeLineData.data[i].data[j];  
    this.showSubTimeLine = true;
  }

 

}
