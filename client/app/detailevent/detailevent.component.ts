import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

import { EventService } from '../services/event.service';
import { GameService } from '../services/game.service';
import { Event } from '../shared/models/event.model';
import { Game } from '../shared/models/game.model';
@Component({
  selector: 'app-detailevent',
  templateUrl: './detailevent.component.html',
  styleUrls: ['./detailevent.component.scss']

})
export class DetailEventComponent implements OnInit {

  constructor(private eventService: EventService,
              private gameService: GameService,
              public route: Router,
              public toast: ToastComponent,
              private activatedRoute: ActivatedRoute ) { }

  event = new Event();
  game = new Game();
  ngOnInit() {
    this.getEventDetail(this.activatedRoute.snapshot.params['id']);
  }

  getEventDetail(id){

    this.eventService.getEvent(id).subscribe(
      res => {
        this.event = res
        console.log(this.event);
      },
      error => console.log(error)
    );
  }

  getGameById(id){
    this.gameService.getGame(id).subscribe(
      res => {
        this.game = res
      },
      error => console.log(error)
    );
  }


  // addToCart(event: Event) {
  //   var a;
  //   if (localStorage.getItem('cart') === null) {
  //     a = [];
  //   } else {
  //     a = JSON.parse(localStorage.getItem('cart'));
  //   }
     
  //   console.log(a)
  //   a.push(product);
  //   localStorage.setItem('cart', JSON.stringify(a));
  //   this.toast.setMessage('Add to cart!', 'success')
  // }

}
