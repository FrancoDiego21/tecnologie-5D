import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squadre, Piloti } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'F1';
  piloti : Piloti[];
  squadre : Squadre[];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  // Make the HTTP request:
  this.http.get('https://3000-francodiego-tecnologie5-50bu8r0msji.ws-eu107.gitpod.io/api').subscribe(data => {
  // Read the result field from the JSON response.
  this.piloti = data["piloti"];
  this.squadre = data["squadre"];

  });
  }
  }
