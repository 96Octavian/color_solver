import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  { path: '', component: MaincontainerComponent },
  { path: 'solution', component: SolutionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
