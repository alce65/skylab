import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{
	  path: 'home', 
	  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'tareas-base',
		loadChildren: () => import('./tareas-base/tareas-base.module').then(m => m.TareasBaseModule)
	},
	{
		path: 'tareas', 
		loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule)
	  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
