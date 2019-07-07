import { Component, OnChanges } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnChanges{
  isExpanded = false;
  language: string; 

  constructor(private stateService: StateService) {
    this.stateService.langChange$.subscribe(lang => this.changeLanguage(lang));
  }

  ngOnChanges() {
    this.changeLanguage(this.language);
  }

  ngOnInit() {
    this.language = this.stateService.getLanguage();
  }
  
  collapse() {
    this.isExpanded = false;  
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  changeLanguage($event): void {
    this.ngOnInit()
  }

}
