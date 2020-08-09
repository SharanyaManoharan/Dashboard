import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-detailscard',
  templateUrl: './detailscard.component.html',
  styleUrls: ['./detailscard.component.css']
})
export class DetailscardComponent implements OnInit {

  @Input() horizontalCardData:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.horizontalCardData);
  }

}
