import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../models/models';
import { MenuService } from '../../services/menu.service';
import { menu } from '../../static/menuData';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  menu = menu


  ngOnInit(): void {
  }
  updateData(restaurant) {
    const data = { message: 'New data!' };
    this.menuService.updateData(restaurant);
  }
}
