import { Component, OnInit } from '@angular/core';
import { Piloti } from '../models/models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit{
  piloti : Piloti[]

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-francodiego-tecnologie5-50bu8r0msji.ws-eu107.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.piloti = data['drivers'];
    });
  }
}

