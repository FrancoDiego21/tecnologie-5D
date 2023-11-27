import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-angular'
  results: string[];

  constructor(private http: HttpClient){}
  
  ngOnInit():void{
    this.http.get('https://3000-francodiego-tecnologie5-6t0ir0xc29j.ws-eu106.gitpod.io/api').subscribe(data => {
      this.results = data['results'];
    })
  }

}
