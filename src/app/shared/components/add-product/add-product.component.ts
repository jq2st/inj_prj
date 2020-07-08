import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../interfaces/interfaces';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup
  categoties: Category[]
  isLoaded: boolean = false

  @Output() onAdd: EventEmitter<Item> = new EventEmitter<Item>()
  @Output() onClose: EventEmitter<null> = new EventEmitter<null>()

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      articul: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required)
    })
    this.catalogService.getCategories()
      .subscribe(cat => {
        this.categoties = cat
        this.addForm.patchValue({category: cat[0].id})
        this.isLoaded = true
      })
  }

  closePopup() {
    this.onClose.emit(null)
  }

  saveAdded() {
    let item: Item = this.addForm.value
    this.onAdd.emit(item)
    this.closePopup()
  }
}
