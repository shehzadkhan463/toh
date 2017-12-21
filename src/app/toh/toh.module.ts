import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TohComponent } from './toh.component';
import { TohRoutingModule } from './toh-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './messages/message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data-service';


@NgModule({
  imports: [
    // tslint:disable-next-line:max-line-length
    CommonModule, TohRoutingModule, FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  declarations: [TohComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent],
  providers: [HeroService, MessageService]
})
export class TohModule { }
