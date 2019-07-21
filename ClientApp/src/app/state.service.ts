import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {

  language: string;
  month: number;
  
  // Observable langItem source
  private _langSource = new BehaviorSubject<string>('de');
  // Observable langItem stream
  lang$ = this._langSource.asObservable();
  // service command
  changeLang(lang) {
    this._langSource.next(lang);
  }
  
  constructor() {
    if (window.navigator.userAgent.match(/(MSIE|Trident)/)) {
      this.language = 'de';      
    }
    else {
      this.language = navigator.language.split('-')[0].toLowerCase() === 'de' ? 'de' : 'en';     
    }
  }
  
  getLanguage(): string {
    return this.language;
  }

  setLanguage(lang: string): void {
    this.language = lang;
  }  
}
