import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[] = [];

  // menus: Menu[] = [
  //   new Menu ('1', 'Servicio'),
  //   new Menu ('2', 'Hc'),
  //   new Menu ('3', 'Otros'),
    
  // ]; 
  
  constructor( private menuService: MenuService) { }

  ngOnInit() {
    this.menus = this.menuService.getMenu();
  }

}
