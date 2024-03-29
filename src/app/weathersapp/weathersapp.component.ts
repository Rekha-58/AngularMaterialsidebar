
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { WeatherService } from '../../services/weather.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { WeatherData } from '../../models/weather.model';
import { ServiceService } from '../service.service';
import { WeatherData } from '../weathersbody/weather.model';
@Component({
  selector: 'app-weathersapp',
  templateUrl: './weathersapp.component.html',
  styleUrl: './weathersapp.component.css'

  })
export class WeathersappComponent implements OnInit, OnDestroy {

  blankPanel: boolean = true;
  initialForm: boolean = false;
  changeButton: boolean = false;
  cityForm: any;
  weatherData: WeatherData = {};
  error: any;

  constructor(private formBuilder: FormBuilder, private weatherServ: ServiceService) { }

  ngOnInit() {
    this.initForm();
  }

  openForm() {
    this.blankPanel = false;
    this.initialForm = true;
  }

  private initForm(){
    this.cityForm = this.formBuilder.group({
      'city': [null, Validators.required]
    });
  }

  onSubmit() {
    this.weatherServ.getData(this.cityForm.value).subscribe(
     ( res:any)  => {
      console.log(res);
        this.weatherData.cityName = res['name'];
        this.weatherData.temperature = res['main'].temp;
        this.weatherData.description = res['weather'][0].description;
        this.weatherData.humidity = res['main'].humidity;
        this.weatherData.wind = res['wind'].speed;
        this.weatherData.visibility = res.visibility;
        this.weatherData.icon = res['weather'][0].icon;
        this.refresh(this.cityForm.value);
        this.changeButton = true;
        this.initialForm = false;
        this.error = '';
        this.cityForm.reset();
      },
      (      err: any) => {
        console.log(err);
        this.error = 'City name is incorrect.';
      }
    );
  }

  interval: any;
  refresh(data:any) {
    this.interval = setInterval(() => {
      this.weatherServ.getData(data).subscribe(
        (res:any) => {
          console.log(1);
          this.weatherData.cityName = res['name'];
          this.weatherData.temperature = res['main'].temp;
          this.weatherData.description = res['weather'][0].description;
          this.weatherData.humidity = res['main'].humidity;
          this.weatherData.wind = res['wind'].speed;
          this.weatherData.icon = res['weather'][0].icon;
        }
      );
    }, 30000);
  }

  changeCity() {
    this.changeButton = false;
    this.initialForm = true;
    clearInterval(this.interval);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
