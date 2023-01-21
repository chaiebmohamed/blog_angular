import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './blog/add/add.component';
import { ListComponent } from './blog/list/list.component';
import { ReadmoreComponent } from './blog/readmore/readmore.component';
import { UpdateComponent } from './blog/update/update.component';

const routes: Routes = [
  {path:"", component:ListComponent},
  {path:'add', component:AddComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'readmore/:id', component:ReadmoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
