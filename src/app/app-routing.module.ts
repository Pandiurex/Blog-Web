import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Linux', component: LinuxComponent },
  { path: 'Windows', component: WindowsComponent },
  { path: 'Servicios', component: ServicesComponent },
  { path: 'Free-Office', component: FreeOfficeComponent },
<<<<<<< HEAD
  { path: 'Java', component: JavaComponent },
=======
  { path: 'Django', component: DjangoComponent },
  { path: 'Laravel', component: LaravelComponent },
>>>>>>> Tarea-5
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
