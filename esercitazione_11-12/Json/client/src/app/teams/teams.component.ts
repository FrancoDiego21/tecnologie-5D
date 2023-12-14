import { Component, Input} from '@angular/core';
import { Squadre } from '../models/models';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  @Input() squadra : Squadre[]

}
