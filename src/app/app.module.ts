import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { FeedComponent } from './components/feed/feed.component';
import { ApresentationComponentComponent } from './components/apresentation-component/apresentation-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataClientComponent } from './components/data-client/data-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FeedComponent,
    ApresentationComponentComponent,
    FooterComponent,
    DataClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
