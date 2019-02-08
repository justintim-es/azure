import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaschainComponent } from './maschain/maschain.component';
import { RoschoutComponent } from './roschout/roschout.component';

const routes: Routes = [
  { path: '',  component: MaschainComponent },
  { path: 'roschout', component: RoschoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
