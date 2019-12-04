import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { IndparentComponent } from './country/india/indparent/indparent.component';
import { IndchildComponent } from './country/india/indchild/indchild.component';
import { UschildComponent } from './country/us/uschild/uschild.component';
import { UsparentComponent } from './country/us/usparent/usparent.component';
import { ChparentComponent } from './country/china/chparent/chparent.component';
import { ChchildComponent } from './country/china/chchild/chchild.component';
import { JpchildComponent } from './country/japan/jpchild/jpchild.component';
import { JpparentComponent } from './country/japan/jpparent/jpparent.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './categories/general/general.component';
import { BuisnessComponent } from './categories/buisness/buisness.component';
import { SportsComponent } from './categories/sports/sports.component';
import { EntertainmentComponent } from './categories/entertainment/entertainment.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { ScienceComponent } from './categories/science/science.component';
import { ToiComponent } from './channels/toi/toi.component';
import { BbcComponent } from './channels/bbc/bbc.component';
import { EntertainComponent } from './channels/entertain/entertain.component';
import { FoxComponent } from './channels/fox/fox.component';
import { UsaComponent } from './channels/usa/usa.component';
import { HackerComponent } from './channels/hacker/hacker.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndparentComponent,
    IndchildComponent,
    UschildComponent,
    UsparentComponent,
    ChparentComponent,
    ChchildComponent,
    JpchildComponent,
    JpparentComponent,
    GeneralComponent,
    BuisnessComponent,
    SportsComponent,
    EntertainmentComponent,
    TechnologyComponent,
    ScienceComponent,
    ToiComponent,
    BbcComponent,
    EntertainComponent,
    FoxComponent,
    UsaComponent,
    HackerComponent,
    SearchComponent,
    HomeComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'navbar', component : NavbarComponent},
      {path : 'india', component : IndparentComponent},
      {path : 'china', component : ChparentComponent},
      {path : 'japan', component : JpparentComponent},
      {path : 'us', component : UsparentComponent},
      {path : 'buisness', component : BuisnessComponent},
      {path : 'sports', component : SportsComponent},
      {path : 'science', component : ScienceComponent},
      {path : 'entertainment', component : EntertainmentComponent},
      {path : 'general', component : GeneralComponent},
      {path : 'technology', component : TechnologyComponent},
      {path : 'bbc', component : BbcComponent},
      {path : 'entertain', component : EntertainComponent},
      {path : 'fox', component : FoxComponent},
      {path : 'hacker', component : HackerComponent},
      {path : 'toi', component : ToiComponent},
      {path : 'usa', component : UsaComponent},
      {path : 'search', component : SearchComponent},
      {path : 'home', component : HomeComponent},
      {path : 'news', component : NewsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
