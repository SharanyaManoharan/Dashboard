import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http : HttpClient) { }

  public getCarDetails(): Observable<any> {
    return this.http.get('../../assets/data.json');
  }

  public getRoadMapDetails(): Observable<any> {
    return this.http.get('../../assets/roadmap.json');
  }

}
