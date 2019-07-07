import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  language: string;
  stateData: string;
  constructor(private stateService:StateService) { }

  ngOnInit() {
    this.language = this.stateService.getLanguage();
    this.stateData = document.cookie;
  }

  changeLanguage($event): void {
    this.ngOnInit();
  }
}
