import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  sortBy: string = 's_alfa'

  @Output() onSort = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  sortCatalog() {
    this.onSort.emit(this.sortBy)
  }

}
