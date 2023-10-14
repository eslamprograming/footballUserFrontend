import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Response } from 'src/modelVM/Response';

@Component({
  selector: 'app-Strandings',
  templateUrl: './Strandings.component.html',
  styleUrls: ['./Strandings.component.css']
})
export class StrandingsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  responseobj:Response=new Response();

  ngOnInit() {
    this.League();
  }
  league2:number=0;
  League(){
    this.http.get<any>(`${environment.apiUrl}api/League/GetAllLeague?GroupCount=1`).subscribe(res=>{
      this.responseobj=res;
      
    },error=>{
      alert("error");
    })
  }
  responseStranding:Response=new Response();
  Stranding(){
    this.http.get<any>(`${environment.apiUrl}api/Standings/GetAllStandings?GroupCount=${this.league2}`).subscribe(res=>{
      console.log(res);
      this.responseStranding=res;
    },error=>{
      alert("error");
    })
  }


}
