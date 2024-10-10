import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    BannerComponent,
    EditCharacterComponent,
    HomeComponent,
    CharacterCardComponent,
    CharacterFormComponent,
    CardDetailComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
        
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
