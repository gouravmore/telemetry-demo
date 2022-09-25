import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


const routes: Routes = [
  { path: '',   redirectTo: '/1', pathMatch: 'full' }, // redirect to `first-component`
  { path: '1', component: Page1Component },
  { path: '2', component: Page2Component },
  { path: '3', component: Page3Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
