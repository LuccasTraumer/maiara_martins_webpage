import { ApresentationComponentComponent } from './components/apresentation-component/apresentation-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataClientComponent } from './components/data-client/data-client.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [ 
  {
    path: '',
    component: ApresentationComponentComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ApresentationComponentComponent
  },
  {
    path: 'info',
    component: DataClientComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
