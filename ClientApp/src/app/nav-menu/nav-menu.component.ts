import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  language: string;
  lang: string;
  subscription: Subscription;  
  
  constructor(private stateService: StateService) {
    this.subscription = this.stateService.lang$.subscribe(item => this.ngOnInit());
  }

  ngOnInit() {
    this.language = this.stateService.getLanguage();
    this.lang = this.stateService.getLanguage();     
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    this.changeLanguage(this.language);
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
