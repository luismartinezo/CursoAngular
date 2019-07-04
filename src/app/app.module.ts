import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego/videojuego.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';

// Material
import { MatInputModule, MatPaginatorModule, MatTableModule,
  MatSortModule, MatPaginatorIntl } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MenuService } from './Services/menu.service';
import { HcComponent } from './hc/hc.component';
import { importExportComponent } from './importExport/importExport.component';
import { HookComponent } from './hooks/hook.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
// dataTable
import { DataTablesModule } from 'angular-datatables';
import { CountdownComponent } from 'src/app/countdown/countdown.component';
import { ProgressBarComponent } from 'src/app/progress-bar/progress-bar.component';

// jquery
import * as $ from 'jquery';

@NgModule({

  declarations: [
    // Aca cargamos nuestros componentes pipes y directivas
    AppComponent,
    VideojuegoComponent,
    MenuComponent,
    MenuListComponent,
    HcComponent,
    importExportComponent,
    HookComponent,
    CalculadoraPipe,
    UserComponent,
    UserListComponent,
    UserEditComponent,
    ProgressBarComponent,
    CountdownComponent
  ],
  imports: [
    // Aca importamos Modulos externos instalados o creados por nosotros
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    DataTablesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // Aca cargamos servicios
  providers: [MenuService],
  // Aca se carga el componente principal que se va a cargar
  bootstrap: [AppComponent],
  entryComponents: [
    ]
})
// Exportamos el modulo para que sea utilizado
export class AppModule { }
