import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HcComponent } from './hc/hc.component';
import { importExportComponent } from './importExport/importExport.component';
import { HookComponent } from './hooks/hook.component';

const routes: Routes = [
  
  { path: 'Hc', component: HcComponent},
  { path: 'importExport', component: importExportComponent},
  { path: 'Hooks', component: HookComponent},
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
