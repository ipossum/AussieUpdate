import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {
  articles:Article[];
  //safeSrc: SafeResourceUrl;
  language: string;  
  month: string;
  file: string;  

  constructor(private articlesService: ArticlesService, private router: Router, private stateService:StateService)  //private sanitizer: DomSanitizer, 
  {
    //this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/eQ3-qkh1xYI?autoplay=0&controls=2&autohide=1&modestbranding=1&fs=0&iv_load_policy=3&rel=0&vq=hd720");
    //this.safeSrc[1] = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VAE-u2lwSH0?autoplay=0&controls=2&autohide=1&modestbranding=1&fs=0&iv_load_policy=3&rel=0&vq=hd720");
  }  
  
  ngOnInit() {
    this.language = this.stateService.getLanguage();    
    this.month = this.getMonthNr();
    this.file = this.getFile();
    this.getArticles(this.file);

    //this.articleParent = new Article();
    //this.articleParent.picUrl = 'https://www.youtube.com/embed/eQ3-qkh1xYI?autoplay=0&controls=2&autohide=1&modestbranding=1&fs=0&iv_load_policy=3&rel=0&vq=hd720';
  }    

  getMonthNr(): string {
    var url = this.router.url;
    var month = '0';
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
    if (url === '/Januar') month = '1';
    if (url === '/Februar') month = '2';
    if (url === '/Maerz') month = '3';
    if (url === '/März') month = '3';
    if (url === '/M%C3%A4rz') month = '3';
    if (url === '/April') month = '4';
    if (url === '/Mai') month = '5';
    if (url === '/Juni') month = '6';
    if (url === '/Juli') month = '7';
    if (url === '/August') month = '8';
    if (url === '/September') month = '9';
    if (url === '/Oktober') month = '10';
    if (url === '/November') month = '11';
    if (url === '/Dezember') month = '12';
    // Support English
    if (url === '/January') month = '1';
    if (url === '/February') month = '2';
    if (url === '/March') month = '3';    
    if (url === '/April') month = '4';
    if (url === '/May') month = '5';
    if (url === '/June') month = '6';
    if (url === '/July') month = '7';
    if (url === '/August') month = '8';
    if (url === '/September') month = '9';
    if (url === '/October') month = '10';
    if (url === '/November') month = '11';
    if (url === '/December') month = '12';
    
    return month;
  }

  getFile(): string {
    return 'articles' + this.month + this.stateService.getLanguage(); 
  }

  getArticles(file: string): void {    
      this.articlesService.getArticles(file)
        .subscribe(file => this.articles = file);    
  }

  changeLanguage($event): void {
    this.ngOnInit()
  }
}
