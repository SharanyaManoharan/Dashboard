import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-subtimeline',
  templateUrl: './subtimeline.component.html',
  styleUrls: ['./subtimeline.component.css']
})
export class SubtimelineComponent implements OnInit {
  
  @Input() SubTimeLineData:any;

  constructor() { }

  ngOnInit(): void {
    console.log("SubTimeLineData",this.SubTimeLineData);
  }

}
