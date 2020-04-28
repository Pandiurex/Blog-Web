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
import { WindowsServerComponent } from "./components/windows-server/windows-server.component";
import { UsersWSComponent } from "./components/users-ws/users-ws.component";
import { LinuxServerComponent } from "./components/linux-server/linux-server.component";
import { LsDjRbyComponent } from "./components/ls-dj-rby/ls-dj-rby.component";
import { SambaComponent } from "./components/samba/samba.component";
import { WsDjRbyComponent } from "./components/ws-dj-rby/ws-dj-rby.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "Linux", component: LinuxComponent },
  { path: "Windows", component: WindowsComponent },
  { path: "Servicios", component: ServicesComponent },
  { path: "Free-Office", component: FreeOfficeComponent },
  { path: "Django", component: DjangoComponent },
  { path: "Samba", component: SambaComponent },
  { path: "Laravel", component: LaravelComponent },
  { path: "Ionic", component: IonicComponent },
  { path: "Ruby", component: RubyComponent },
  { path: "VideoJuego", component: VideogameComponent },
  { path: "Windows Server", component: WindowsServerComponent },
  { path: "Linux Server", component: LinuxServerComponent },
  { path: "Linux Server Django y Ruby", component: LsDjRbyComponent },
  { path: "Windows Server Django y Ruby", component: WsDjRbyComponent },
  { path: "Usuarios y Grupos Windows Server", component: UsersWSComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
