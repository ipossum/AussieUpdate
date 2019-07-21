import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output()
  langChange = new EventEmitter<string>();

  constructor(private router : Router, private stateService:StateService) {}

  langChangeComplete() {
    this.langChange.emit('complete');
  }

  public open(event, button) {
    var url = this.router.url;    
    if (button === 'home') this.router.navigate(['/'])
    else if (button === 'forward' || button === 'back') this.router.navigate([this.getDest(url, button)])
    else if (button === 'ch') {
      this.stateService.setLanguage('de');      
      this.langChangeComplete();
      
      this.stateService.changeLang('de');
    }
    else if (button === 'au') {
      this.stateService.setLanguage('en');       
      this.langChangeComplete();
      
      this.stateService.changeLang('en');
    }
  } 
   
  getDest(url:string, button:string) {
    var month = this.getMonthNr(url)

    if (button === 'back') month--
    else if (button === 'forward') month++
    else month = 0;

    //TBD with each new post    0 1 2 3 4 5 6 13
    if (month === -1) month = 13;
    if (month === 12) month = 6;
    if (month === 7) month = 13;
    if (month === 14) month = 0;

    //TBD with each new post    1 2 3 4 5
    //if (month === 0) month = 5;
    //if (month === 6) month = 1;

    return this.getUrl(month)
  }
  
  getMonthNr(url: string) {
    var month;
    if (url === '/') month = 0;
    if (url === '/Home') month = 0;
    if (url === '/') month = '0';
    if (url === '/Home') month = '0';
    if (url === '/1') month = '1';
    if (url === '/2') month = '2';
    if (url === '/3') month = '3';
    if (url === '/4') month = '4';
    if (url === '/5') month = '5';
    if (url === '/6') month = '6';
    if (url === '/7') month = '7';
    if (url === '/8') month = '8';
    if (url === '/9') month = '9';
    if (url === '/10') month = '10';
    if (url === '/11') month = '11';
    if (url === '/12') month = '12';
    // Support for previous nav
    if (url === '/Januar') month = 1;
    if (url === '/Februar') month = 2;
    if (url === '/Maerz') month = 3;
    if (url === '/März') month = 3;
    if (url === '/M%C3%A4rz') month = 3;
    if (url === '/April') month = 4;
    if (url === '/Mai') month = 5;
    if (url === '/Juni') month = 6;
    if (url === '/Juli') month = 7;
    if (url === '/August') month = 8;
    if (url === '/September') month = 9;
    if (url === '/Oktober') month = 10;
    if (url === '/November') month = 11;
    if (url === '/Dezember') month = 12;
    if (url === '/Kontakt') month = 13;
    // Support English
    if (url === '/January') month = 1;
    if (url === '/February') month = 2;
    if (url === '/March') month = 3;    
    if (url === '/April') month = 4;
    if (url === '/May') month = 5;
    if (url === '/June') month = 6;
    if (url === '/July') month = 7;
    if (url === '/August') month = 8;
    if (url === '/September') month = 9;
    if (url === '/October') month = 10;
    if (url === '/November') month = 11;
    if (url === '/December') month = 12;    
    if (url === '/Contact') month = 13;

    return month;
  }

  getUrl(nbr: number) {
    var url;
    if (nbr === 0) url = '/';
    if (nbr === 1) url = '/1';
    if (nbr === 2) url = '/2';
    if (nbr === 3) url = '/3';
    if (nbr === 4) url = '/4';
    if (nbr === 5) url = '/5';
    if (nbr === 6) url = '/6';
    if (nbr === 7) url = '/7';
    if (nbr === 8) url = '/8';
    if (nbr === 9) url = '/9';
    if (nbr === 10) url = '/10';
    if (nbr === 11) url = '/11';
    if (nbr === 12) url = '/12';
    if (nbr === 13) url = '/Contact';

    return url;
  }

  ngOnInit() {
  }
}
