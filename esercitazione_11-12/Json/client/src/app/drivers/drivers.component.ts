import { Component } from '@angular/core';
import { Piloti } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  piloti : Piloti[]

  constructor(private router : Router){
    this.piloti = this.router.getCurrentNavigation().extras.state as Piloti[]
  }
}

