import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BindingComponent } from './binding/binding.component';
import { PropertyComponent } from './binding/property/property.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralComponent } from './dir/structural/structural.component';
import { NgIfComponent } from './dir/structural/ng-if/ng-if.component';
import { NgSwitchComponent } from './dir/structural/ng-switch/ng-switch.component';
import { CustomDirective } from './custom.directive';
import { RegisterComponent } from './register/register.component';
import { Form1Component } from './assignment/form1/form1.component';
import { Form2Component } from './assignment/form2/form2.component';
import { Form3Component } from './assignment/form3/form3.component';
import { Form4Component } from './assignment/form4/form4.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { DollarPipe } from './dollar.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactDirective } from './react.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    HelpComponent,
    LoginComponent,
    FooterComponent,
    BindingComponent,
    PropertyComponent,
    TwowayBindingComponent,
    StructuralComponent,
    NgIfComponent,
    NgSwitchComponent,
    CustomDirective,
    RegisterComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    RegisterPageComponent,
    ParentComponent,
    ChildComponent,
    DollarPipe,
    ReactiveComponent,
    ReactDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : '', component: HomeComponent},
      {path : 'about', component : AboutComponent},
      {path : 'help', component : HelpComponent},
      {path : 'login', component : LoginComponent},
      {path : 'property', component : PropertyComponent},
      {path : 'twoway', component : TwowayBindingComponent},
      {path : 'ng-if', component : NgIfComponent},
      {path : 'ng-switch', component : NgSwitchComponent},
      {path : 'register', component : RegisterComponent},
      {path : 'form-1', component : Form1Component },
      {path : 'form-2', component : Form2Component},
      {path : 'form-3', component : Form3Component},
      {path : 'form-4', component : Form4Component},
      {path : 'register-page', component : RegisterPageComponent },
      {path : 'parent', component : ParentComponent},
      {path : 'react', component : ReactiveComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
