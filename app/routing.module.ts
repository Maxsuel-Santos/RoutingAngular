// import these 2 for enable routing //
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import all your components //
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SearchPageComponent } from './search-page/search-page.component';

// declare const variable for routing //
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'search-page', component: SearchPageComponent },
  { path: '**', component: HomeComponent },
];

// create for.routing and export //
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
export class RoutingModule {}
