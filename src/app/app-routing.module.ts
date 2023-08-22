import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';

const routes: Routes = [
  { path: '/', component: MaincontainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
