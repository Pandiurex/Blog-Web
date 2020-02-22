import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { DropSoftComponent } from './components/drop-soft/drop-soft.component';
import { ImagesComponent } from './components/images/images.component';
import { WindowsComponent } from './components/windows/windows.component';
import { LinuxComponent } from './components/linux/linux.component';
import { ServicesComponent } from './components/services/services.component';
import { FreeOfficeComponent } from './components/free-office/free-office.component';
<<<<<<< HEAD
import { JavaComponent } from './components/java/java.component';
=======
import { DjangoComponent } from './components/django/django.component';
import { LaravelComponent } from './components/laravel/laravel.component';
>>>>>>> Tarea-5

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DropdownComponent,
    SearchComponent,
    DropSoftComponent,
    ImagesComponent,
    WindowsComponent,
    LinuxComponent,
    ServicesComponent,
    FreeOfficeComponent,
<<<<<<< HEAD
    JavaComponent
=======
    DjangoComponent,
    LaravelComponent
>>>>>>> Tarea-5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
