import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { FeedComponent } from './components/feed/feed.component';
import { ApresentationComponentComponent } from './components/apresentation-component/apresentation-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataClientComponent } from './components/data-client/data-client.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: ApresentationComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ApresentationComponentComponent
  },
  {
    path: 'info',
    component: DataClientComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FeedComponent,
    ApresentationComponentComponent,
    FooterComponent,
    DataClientComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
