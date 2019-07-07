import { Injectable } from '@angular/core';
import { ARTICLES0DE } from './Articles0DE';
import { ARTICLES0EN } from './Articles0EN';
import { ARTICLES1DE } from './Articles1DE';
import { ARTICLES1EN } from './Articles1EN';
import { ARTICLES2DE } from './Articles2DE';
import { ARTICLES2EN } from './Articles2EN';
import { ARTICLES3DE } from './Articles3DE';
import { ARTICLES3EN } from './Articles3EN';
import { ARTICLES4DE } from './Articles4DE';
import { ARTICLES4EN } from './Articles4EN';
import { ARTICLES5DE } from './Articles5DE';
import { ARTICLES5EN } from './Articles5EN';
import { ARTICLES6DE } from './Articles6DE';
import { ARTICLES6EN } from './Articles6EN';
import { ARTICLES7DE } from './Articles7DE';
import { ARTICLES7EN } from './Articles7EN';
import { ARTICLES8DE } from './Articles8DE';
import { ARTICLES8EN } from './Articles8EN';
import { ARTICLES9DE } from './Articles9DE';
import { ARTICLES9EN } from './Articles9EN';
import { ARTICLES10DE } from './Articles10DE';
import { ARTICLES10EN } from './Articles10EN';
import { ARTICLES11DE } from './Articles11DE';
import { ARTICLES11EN } from './Articles11EN';
import { ARTICLES12DE } from './Articles12DE';
import { ARTICLES12EN } from './Articles12EN';
import { Article } from './article';
import { Observable } from 'rxjs/Rx'; // this line rises a tslint err
import { of } from 'rxjs/observable/of';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  private articles0de: Article[] = ARTICLES0DE;
  private articles0en: Article[] = ARTICLES0EN;
  private articles1de: Article[] = ARTICLES1DE;
  private articles1en: Article[] = ARTICLES1EN;
  private articles2de: Article[] = ARTICLES2DE;
  private articles2en: Article[] = ARTICLES2EN;
  private articles3de: Article[] = ARTICLES3DE;
  private articles3en: Article[] = ARTICLES3EN;
  private articles4de: Article[] = ARTICLES4DE;
  private articles4en: Article[] = ARTICLES4EN;
  private articles5de: Article[] = ARTICLES5DE;
  private articles5en: Article[] = ARTICLES5EN;
  private articles6de: Article[] = ARTICLES6DE;
  private articles6en: Article[] = ARTICLES6EN;
  private articles7de: Article[] = ARTICLES7DE;
  private articles7en: Article[] = ARTICLES7EN;
  private articles8de: Article[] = ARTICLES8DE;
  private articles8en: Article[] = ARTICLES8EN;
  private articles9de: Article[] = ARTICLES9DE;
  private articles9en: Article[] = ARTICLES9EN;
  private articles10de: Article[] = ARTICLES10DE;
  private articles10en: Article[] = ARTICLES10EN;
  private articles11de: Article[] = ARTICLES11DE;
  private articles11en: Article[] = ARTICLES11EN;
  private articles12de: Article[] = ARTICLES12DE;
  private articles12en: Article[] = ARTICLES12EN;

  //private articlesUrl = 'api/articles';  // URL to web api
  //constructor(private httpClient: HttpClient) { }

  getArticles(file: string): Observable<Article[]> {

    if (file === 'articles0de') return of(this.articles0de);
    else if (file === 'articles0en') return of(this.articles0en);
    else if (file === 'articles1de') return of(this.articles1de);
    else if (file === 'articles1en') return of(this.articles1en);
    else if (file === 'articles2de') return of(this.articles2de);
    else if (file === 'articles2en') return of(this.articles2en);
    else if (file === 'articles3de') return of(this.articles3de);
    else if (file === 'articles3en') return of(this.articles3en);
    else if (file === 'articles4de') return of(this.articles4de);
    else if (file === 'articles4en') return of(this.articles4en);
    else if (file === 'articles5de') return of(this.articles5de);
    else if (file === 'articles5en') return of(this.articles5en);
    else if (file === 'articles6de') return of(this.articles6de);
    else if (file === 'articles6en') return of(this.articles6en);
    else if (file === 'articles7de') return of(this.articles7de);
    else if (file === 'articles7en') return of(this.articles7en);
    else if (file === 'articles8de') return of(this.articles8de);
    else if (file === 'articles8en') return of(this.articles8en);
    else if (file === 'articles9de') return of(this.articles9de);
    else if (file === 'articles9en') return of(this.articles9en);
    else if (file === 'articles10de') return of(this.articles10de);
    else if (file === 'articles10en') return of(this.articles10en);
    else if (file === 'articles11de') return of(this.articles11de);
    else if (file === 'articles11en') return of(this.articles11en);
    else if (file === 'articles12de') return of(this.articles12de);
    else if (file === 'articles12en') return of(this.articles12en);
    else return of(this.articles1de);

    //return this.httpClient.get<Article[]>(this.articlesUrl)
  }

}
