import { Component, OnInit, Input } from '@angular/core';
import {cardService } from '../card.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  card:Object;
  cards:Array<object> =[];
  addPlace(place, description, dataSince, date){
    this.card = {
      place: place,
      description: description,
      date: date
    }
    this.cards.push(this.card);
  }
  returnCards(){
    return this.cards;
  }
  constructor() {}

  ngOnInit() {
    
  }

}

