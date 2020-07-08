import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategory: FormGroup

  @Output() onAdd: EventEmitter<Item> = new EventEmitter<Item>()
  @Output() onClose: EventEmitter<null> = new EventEmitter<null>()

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.addCategory = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  closePopup() {
    this.onClose.emit(null)
  }

  saveAdded() {
    let item: Item = this.addCategory.value
    this.onAdd.emit(item)
    this.closePopup()
  }
  
}
