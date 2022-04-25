import { Component, OnInit } from '@angular/core';
import { fa8 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  iconLogoMoney = fa8;

  constructor() { }

  ngOnInit(): void {
  }

}
