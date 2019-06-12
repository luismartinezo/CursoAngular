import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego/videojuego.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component'

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
    UserEditComponent
    
    

  ],
  imports: [
    // Aca importamos Modulos externos instalados o creados por nosotros
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  // Aca cargamos servicios
  providers: [MenuService],
  // Aca se carga el componente principal que se va a cargar
  bootstrap: [AppComponent],
  entryComponents: [
    ]
})
// Exportamos el modulo para que sea utilizado
export class AppModule { }
