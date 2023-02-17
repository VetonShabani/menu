import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurants } from '../../models/models';
import { MenuService } from '../../services/menu.service';
import { menu, menu2 } from '../../static/menuData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedRestaurant;
  constructor(private routes: Router, private menuService: MenuService) {}
  // menu = menu
  menu = [menu2]
  panelOpenState = false;
  ngOnInit(): void {
    this.selectedRestaurant = this.menu[0];
    this.menuService.mySubject.subscribe((data: string) => {
      console.log('x');

      // this.selectedRestaurant = data;
      console.log(this.menu);

      this.selectedRestaurant = this.menu.find(
        (x) => x.name.toLowerCase() == data.toLowerCase()
      );

      console.log(this.selectedRestaurant);
    });
  }
}
