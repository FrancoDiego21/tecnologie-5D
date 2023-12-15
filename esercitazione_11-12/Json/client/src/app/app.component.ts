import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squadre, Piloti } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F1';
}
