import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WindowsComponent } from './components/windows/windows.component';
import { LinuxComponent } from './components/linux/linux.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Linux', component: LinuxComponent },
  { path: 'Windows', component: WindowsComponent },
  { path: 'Servicios', component: ServicesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
