import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ForumService } from '../forum.service';
import { News } from '../news';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  public news: any = {};

  //constructor(private forumService: ForumService) { }

  ngOnInit() { };
  //ngOnInit() {
  //  this.getArticles();    
  //}

  //getArticles(): void {
  //  this.news = [];
  //  this.forumService.getArticles().subscribe((data: {}) => {
  //    console.log(data);
  //    this.news = data;
  //  });
  //};  
};
