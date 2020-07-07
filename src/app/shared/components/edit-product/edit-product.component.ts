import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { CatalogService } from 'src/app/services/catalog.service';
import { ActivatedRoute, Params } from '@angular/router';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editingProduct: Item
  editForm: FormGroup
  editId: number 

  @Output() onEdit: EventEmitter<Item> = new EventEmitter<Item>()
  @Output() onClose: EventEmitter<null> = new EventEmitter<null>()

  constructor(private catalogService: CatalogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
      articul: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required)
    })
    this.route.queryParams
      .pipe(
        switchMap((params: Params) => {
          console.log(params.edit)
          return this.catalogService.getItem(params.edit)
        })
      ).subscribe(n => {
        this.editingProduct = n
        this.editForm.patchValue({name: n.name, articul: n.articul, category: n.category, description: n.description, cost: n.cost})
      })
  }

  closePopup() {
    this.onClose.emit(null)
  }

  saveEdited(id) {
    let item: Item = this.editForm.value
    item.id = id
    this.onEdit.emit(item)
    this.closePopup()
  }

}
