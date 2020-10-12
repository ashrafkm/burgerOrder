import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orderList;
  constructor(
    public service: DataStorageService
  ) { }

  ngOnInit() {
    this.orderList = this.service.getAllOrder();
  }

}
