import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// imports these 2 models below: RouterModule , RoutingModule //
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // imports these 2 models below: RouterModule , RoutingModule //
    RouterModule,
    RoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    SearchPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
