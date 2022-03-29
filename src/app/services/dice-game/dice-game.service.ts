import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceGameService {

  httpOptions = {
    headers:new HttpHeaders ({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' })
  }

  level:boolean=true;
  show:boolean=false;

  constructor() { }
}
