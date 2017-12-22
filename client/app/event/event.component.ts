import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EventService } from '../services/event.service';
import { GameService } from '../services/game.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Event } from '../shared/models/event.model';
import { Game } from '../shared/models/game.model';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event = new Event();
  games: Game[] = [];
  events: Event[] = [];
  isLoading = true;
  isEditing = false;
  isDetail = false;
  filesToUpload: Array<File>;

  addEventForm: FormGroup;
  title = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  image = new FormControl('', Validators.required);
  startdate = new FormControl('', Validators.required);
  enddate = new FormControl('', Validators.required);
  location = new FormControl('', Validators.required);
  peopleamount = new FormControl('', Validators.required);
  game_id = new FormControl('', Validators.required);

  constructor(private eventService: EventService,
              private gameService: GameService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              public auth: AuthService ) { 
                this.filesToUpload = [];
              }

  upload() {
    // this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
    //   console.log(result);
    // }, (error) => {
    //   console.error(error);
    // });
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  ngOnInit() {
    this.getEvents();
    this.getGames();
    this.addEventForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      image: this.image,
      startdate: this.startdate,
      enddate: this.enddate,
      location: this.location,
      peopleamount: this.peopleamount,
      game_id: this.game_id
    });
  }

  getGames() {
    this.gameService.getGames().subscribe(
      data => {
        this.games = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      data => this.events = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addEvent() {
    this.eventService.addEvent(this.addEventForm.value).subscribe(
      res => {
        this.events.push(res);
        this.addEventForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(event: Event) {
    this.isEditing = true;
    this.event = event;
  }

  enableDetail(event: Event) {
    this.isDetail = true;
    this.event = event;
  }

  cancelEditing() {
    this.isEditing = false;
    this.event = new Event();
    this.toast.setMessage('item editing cancelled.', 'warning');
    this.getEvents();
  }

  editEvent(event: Event) {
    this.eventService.editEvent(event).subscribe(
      () => {
        this.isEditing = false;
        this.event = event;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteEvent(event: Event) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.eventService.deleteEvent(event).subscribe(
        () => {
          const pos = this.events.map(elem => elem._id).indexOf(event._id);
          this.events.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
