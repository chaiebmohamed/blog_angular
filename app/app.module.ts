import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './blog/add/add.component';
import { ListComponent } from './blog/list/list.component';
import { ReadmoreComponent } from './blog/readmore/readmore.component';
import { UpdateComponent } from './blog/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    ReadmoreComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
