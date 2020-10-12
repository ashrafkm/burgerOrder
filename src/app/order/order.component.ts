import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  form = new FormGroup({
    burger: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });
  burgerList = [
    { item_id: 1, item_text: 'burger1' },
    { item_id: 2, item_text: 'burger2' },
    { item_id: 3, item_text: 'burger3' },
    { item_id: 4, item_text: 'burger4' },
    { item_id: 5, item_text: 'burger5' }
  ];
  selectedItems = [];

  constructor(
    public service: DataStorageService
  ) { }

  ngOnInit() {

  }

  submit() {
    console.log('submit', this.form.value);
    this.service.saveData(this.form.value)
  }

}
