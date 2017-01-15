import {Component, OnInit} from "@angular/core";
import {WikiSearchService} from "../services/wiki-search.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'swat-instant-search',
  template: `                  
      <ul class="list-group">
        <li>
          <input [formControl]="searchBox" 
                 placeholder="search a term...">
        </li>        
        <li class="list-group-item" *ngFor="let item of items">{{item}}</li>
      </ul>
  `
})

export class InstantSearchComponent implements OnInit {
  private items: Array<string>;
  private wiki: WikiSearchService;
  private searchBox: FormControl;

  constructor(wiki: WikiSearchService) {
    this.wiki      = wiki;
    this.searchBox = new FormControl();
  }

  ngOnInit(): void {
    this.searchBox.valueChanges
        .debounceTime(400)
        .subscribe(term => this.search(term));
  }

  private search(term: string) {
    this.wiki.search(term)
        .subscribe(results => this.items = results);
  }
}
