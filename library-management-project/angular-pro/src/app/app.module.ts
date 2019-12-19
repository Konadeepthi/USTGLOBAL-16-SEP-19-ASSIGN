import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { RouterModule } from '@angular/router';
import { DisplayRequestedBooksComponent } from './display-requested-books/display-requested-books.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShowIssuedBooksComponent } from './show-issued-books/show-issued-books.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddbookComponent,
    IssuebookComponent,
    RequestBookComponent,
    ReturnBookComponent,
    DisplayBooksComponent,
    DisplayRequestedBooksComponent,
    RequestStatusComponent,
    SearchBookComponent,
    SearchResultComponent,
    ShowIssuedBooksComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'register' , component : RegisterComponent},
      {path : 'login', component: LoginComponent},
      {path : 'home', component: HomeComponent},
      {path : 'issue-book', component :IssuebookComponent},
      {path : 'request-book',component :RequestBookComponent},
      {path : 'return-book',component : ReturnBookComponent},
      {path : 'add-book',component: AddbookComponent},
      {path : 'display-book',component:DisplayBooksComponent},
      {path : 'display-requested-books', component:DisplayRequestedBooksComponent},
      {path : 'request-status', component:RequestStatusComponent},
      {path : 'search-book', component: SearchBookComponent},
      {path: 'search-result', component:SearchResultComponent},
      {path: 'show-issued-books', component:ShowIssuedBooksComponent},
      {path : 'logout',component :LogoutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
