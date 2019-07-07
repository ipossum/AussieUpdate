import { Injectable, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Injectable()
export class StateService {

  public langChange$:EventEmitter<string>;
  language: string;
  month: number;
  
  constructor() {
    if (window.navigator.userAgent.match(/(MSIE|Trident)/)) this.language = 'de'
    else this.language = navigator.language.split('-')[0].toLowerCase() === 'de' ? 'de' : 'en';
    this.langChange$ = new EventEmitter<string>();
  }
  
  getLanguage(): string {
    this.langChange$.emit(this.language);
    return this.language;
  }
  setLanguage(lang: string): void {
    this.langChange$.emit(lang);
    this.language = lang;
  }  
}
