import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  searchService: SearchService;

  submitUser() {
    this.searchService.getUser();
  }

  constructor(searchService: SearchService) {
    this.searchService = searchService;
  }

  ngOnInit(): void {}
}
