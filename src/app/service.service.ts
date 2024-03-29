import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  APIKey: string = '89a74af9896c54fb270c75bd3f0db418';

  constructor(private http: HttpClient) { }

  getData(data:any):any {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=${this.APIKey}`);
    
  }

}
