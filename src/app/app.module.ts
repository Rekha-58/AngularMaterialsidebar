import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import{   MatIconModule} from '@angular/material/icon';
import{   MatSidenavModule} from '@angular/material/sidenav';
import{   MatListModule} from '@angular/material/list';
import{   MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import {LightgalleryModule} from 'lightgallery/angular';
import { MapComponent } from './map/map.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { TodoService } from './service/task.service';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ThumbComponent } from './thumb/thumb.component';
import { PreviewComponent } from './preview/preview.component';

import { WeathersappComponent } from './weathersapp/weathersapp.component';
import { WeathersbodyComponent } from './weathersbody/weathersbody.component';
import { QuizComponent } from './quiz/quiz.component';

//import {LightboxModule}  from '@ngx-gallery/lightbox'
//import { GalleryModule } from '@ngx-gallery/core';
export class MaterialModule{ }

@NgModule({
  declarations: [
      AppComponent,
      CanvasComponent,
      ImagegalleryComponent,
      MapComponent,
      AddTaskComponent,
      ViewTasksComponent,
      TodoComponent,
      CalculatorComponent,
      ThumbComponent,
      PreviewComponent,
    
      WeathersappComponent,
            WeathersbodyComponent,
            QuizComponent,
      
    
     
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    //LightgalleryModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
    //LightboxModule,
    //GalleryModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
















