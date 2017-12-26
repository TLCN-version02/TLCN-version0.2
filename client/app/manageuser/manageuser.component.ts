import { Component, OnInit, style } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Client } from '../shared/models/client.model';

import { EventService } from '../services/event.service';
import { Event } from '../shared/models/event.model';
import { Game } from '../shared/models/game.model';
import { GameService } from '../services/game.service';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
})
export class ManageUserComponent implements OnInit {


  client = new Client();
  clients: Client[] = [];
  event = new Event();
  games: Game[] = [];
  events: Event[] = [];
  isLoading = true;

  constructor(private clientService: ClientService,
              private eventService: EventService,
              private gameService: GameService,
              public toast: ToastComponent,
              public auth: AuthService
              ) { }

  ngOnInit() {
    this.getClients();
    this.getEvents();
    this.getGames();
    // this.getClientByEvent("5a32a5487676514ad0e4217d");
  }

  filterEvent(filterEvent: Event) {
    this.clientService.getClients().subscribe(
      data => {
        var filterClient = []
        console.log('tuan', data)
        data.forEach(client => {
          if (client.event === filterEvent._id) {
            filterClient.push(client)
          }
        });
        this.clients = filterClient;
        () => console.log('123', this.clients);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }
   getGames() {
    this.gameService.getGames().subscribe(
      data => {
        var filter_data = []

        for(let g of data) {
          if (g["user"]._id == this.auth.currentUser._id) {
            filter_data.push(g)
          }
        }

        this.games = filter_data
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  
  getEvents() {
    this.eventService.getEvents().subscribe(
      data => {
        var filter_data = []

        for(let e of data) {
          if (e["game"]["user"]._id == this.auth.currentUser._id) {
            filter_data.push(e)
          }
        }

        this.events = filter_data
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  // getClientByEvent(id) {
  //   this.clientService.getClientByEvent(id).subscribe( res => {
  //       this.clients = res;
  //       console.log(this.clients);
  //     }
  //   );
  // }


  
}
