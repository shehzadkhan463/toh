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

@NgModule({
  imports: [
    CommonModule, TohRoutingModule, FormsModule
  ],
  declarations: [TohComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],
  providers: [HeroService, MessageService]
})
export class TohModule { }
