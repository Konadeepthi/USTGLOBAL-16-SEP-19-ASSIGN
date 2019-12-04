import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeparentComponent } from './Assignment/bikes/bikeparent/bikeparent.component';
import { BikechildComponent } from './Assignment/bikes/bikechild/bikechild.component';
import { LapchildComponent } from './Assignment/laptops/lapchild/lapchild.component';
import { LapparentComponent } from './Assignment/laptops/lapparent/lapparent.component';
import { MobileparentComponent } from './Assignment/mobiles/mobileparent/mobileparent.component';
import { MobilechildComponent } from './Assignment/mobiles/mobilechild/mobilechild.component';
import { MoviechildComponent } from './Assignment/movies/moviechild/moviechild.component';
import { MovieparentComponent } from './Assignment/movies/movieparent/movieparent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ComparentComponent } from './comparent/comparent.component';
import { ComchildComponent } from './comchild/comchild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TemplateComponent } from './forms/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeparentComponent,
    BikechildComponent,
    LapchildComponent,
    LapparentComponent,
    MobileparentComponent,
    MobilechildComponent,
    MoviechildComponent,
    MovieparentComponent,
    NavbarComponent,
    FooterComponent,
    ComparentComponent,
    ComchildComponent,
    ReactiveComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'bike', component : BikeparentComponent},
      {path : 'laptop', component : LapparentComponent},
      {path : 'mobile', component : MobileparentComponent},
      {path : 'movie', component : MovieparentComponent},
      {path : 'comment', component : ComparentComponent},
      {path : 'react', component : ReactiveComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
