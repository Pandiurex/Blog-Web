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
    LinuxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
