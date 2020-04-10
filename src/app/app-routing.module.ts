import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { WindowsComponent } from "./components/windows/windows.component";
import { LinuxComponent } from "./components/linux/linux.component";
import { ServicesComponent } from "./components/services/services.component";
import { FreeOfficeComponent } from "./components/free-office/free-office.component";
import { DjangoComponent } from "./components/django/django.component";
import { LaravelComponent } from "./components/laravel/laravel.component";
import { IonicComponent } from "./components/ionic/ionic.component";
import { RubyComponent } from "./components/ruby/ruby.component";
import { VideogameComponent } from "./components/videogame/videogame.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "Linux", component: LinuxComponent },
  { path: "Windows", component: WindowsComponent },
  { path: "Servicios", component: ServicesComponent },
  { path: "Free-Office", component: FreeOfficeComponent },
  { path: "Django", component: DjangoComponent },
  { path: "Laravel", component: LaravelComponent },
  { path: "Ionic", component: IonicComponent },
  { path: "Ruby", component: RubyComponent },
  { path: "VideoJuego", component: VideogameComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
