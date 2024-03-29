import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { MapComponent } from './map/map.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WeathersappComponent } from './weathersapp/weathersapp.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppComponent } from './app.component';
//import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  
  {path:'weather',component: WeathersappComponent},
  {path:'map',component: MapComponent},
  {path:'todo',component: TodoComponent},
  {path:'calc',component: CalculatorComponent},
  {path:'canvas',component: CanvasComponent},
  {path:'imagegallery',component: ImagegalleryComponent},
  {path:'quiz',component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
