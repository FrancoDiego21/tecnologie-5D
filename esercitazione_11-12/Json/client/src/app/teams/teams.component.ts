import { Component, Input, OnInit} from '@angular/core';
import { Squadre } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  squadre : Squadre[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-francodiego-tecnologie5-50bu8r0msji.ws-eu107.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.squadre = data['teams'];
    });
    }

}
