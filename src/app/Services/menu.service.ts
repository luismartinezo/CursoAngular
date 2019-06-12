import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus:Menu[] = [
    new Menu ('1', 'importExport','importExport'),
    new Menu ('2', 'Hc','Hc'),
    new Menu ('3', 'user','user'),
    new Menu ('4', 'user-list','user-list'),
    new Menu ('5', 'Hooks','Hooks'),
    new Menu ('6', 'battle','battle'),
    new Menu ('7', 'search','search')
    
  ]; 
  constructor() { }

  getMenu(){
    return this.menus;
  }
}
