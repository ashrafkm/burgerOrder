import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }
  currentOrder;
  AllOrder: Array<any>
  saveData(data) {
    this.currentOrder = data
    this.AllOrder.push(data)
  }
  getAllOrder() {
    return this.AllOrder;
  }

}
