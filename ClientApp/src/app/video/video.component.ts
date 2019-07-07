import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  @Input()
  videoArticle: Article;
  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    //this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoArticle.picUrl);
    //this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/eQ3-qkh1xYI?autoplay=0&controls=2&autohide=1&modestbranding=1&fs=0&iv_load_policy=3&rel=0&vq=hd720");
    //this.safeSrc[1] = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VAE-u2lwSH0?autoplay=0&controls=2&autohide=1&modestbranding=1&fs=0&iv_load_policy=3&rel=0&vq=hd720");
  }

ngOnInit() {
  }

}
