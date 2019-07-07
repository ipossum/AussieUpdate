import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';
import { AprilComponent } from './april/april.component';
import { ArticlesService } from './articles.service';
import { VideoComponent } from './video/video.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ForumService } from './forum.service';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,       
    ContactComponent,
    ForumComponent,    
    AprilComponent,
    VideoComponent,
    ButtonsComponent   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
     // { path: '', component: AprilComponent},
      { path: '0', component: AprilComponent },
      { path: '1', component: AprilComponent },      
      { path: '2', component: AprilComponent },      
      { path: '3', component: AprilComponent },
      { path: '4', component: AprilComponent },
      { path: '5', component: AprilComponent },
      { path: '6', component: AprilComponent },
      { path: '7', component: AprilComponent },
      { path: '8', component: AprilComponent },
      { path: '9', component: AprilComponent },
      { path: '10', component: AprilComponent },
      { path: '11', component: AprilComponent },
      { path: '12', component: AprilComponent },
      { path: '13', component: ContactComponent },
      // Support previous nav
      { path: 'home', component: AprilComponent },
      { path: 'Januar', component: AprilComponent },
      { path: 'Februar', component: AprilComponent },
      { path: 'Maerz', component: AprilComponent },
      { path: 'März', component: AprilComponent },
      { path: 'April', component: AprilComponent },
      { path: 'Mai', component: AprilComponent },
      { path: 'Juni', component: AprilComponent },
      { path: 'Juli', component: AprilComponent },
      { path: 'August', component: AprilComponent },
      { path: 'September', component: AprilComponent },
      { path: 'Oktober', component: AprilComponent },
      { path: 'November', component: AprilComponent },
      { path: 'Dezember', component: AprilComponent },
      { path: 'Kontakt', component: ContactComponent },
      // Support English
      { path: 'Home', component: AprilComponent },
      { path: 'January', component: AprilComponent },
      { path: 'February', component: AprilComponent },
      { path: 'March', component: AprilComponent },      
      { path: 'April', component: AprilComponent },
      { path: 'May', component: AprilComponent },
      { path: 'June', component: AprilComponent },
      { path: 'July', component: AprilComponent },
      { path: 'August', component: AprilComponent },
      { path: 'September', component: AprilComponent },
      { path: 'October', component: AprilComponent },
      { path: 'November', component: AprilComponent },
      { path: 'December', component: AprilComponent },
      { path: 'Contact', component: ContactComponent }
    ])
  ],
  providers: [ArticlesService, ForumService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
