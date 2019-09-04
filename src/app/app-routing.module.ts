import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HcComponent } from './hc/hc.component';
import { importExportComponent } from './importExport/importExport.component';
import { HookComponent } from './hooks/hook.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ContactoComponent } from './Form-Contact/contacto.component';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [

  { path: 'Hc', component: HcComponent},
  { path: 'importExport', component: importExportComponent},
  { path: 'user', component: UserComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'user/edit/:id', component: UserListComponent},
  { path: 'Hooks', component: HookComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'externo', component: ExternoComponent},
  {
    path: '',
    component: HookComponent,
    children: [
     {
       path: 'battle',
       loadChildren: './modules/battle/battle.module#BattleModule'
     },
     {
       path: 'search',
       loadChildren: './modules/search/search.module#SearchModule'
     }
    ]
  },
  {  path: '**', redirectTo: 'battle' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
