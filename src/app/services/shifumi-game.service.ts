import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShifumiGameService {

  httpOptions = {
    headers:new HttpHeaders ({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' })
  }

  level:boolean=true;
  show:boolean=false;
  // endPage:boolean=false;

  constructor(
    private http: HttpClient,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  shifumiLevelOne(){
    return this.http.get("http://localhost:8000/api/wins1"); 
  }

  
}
