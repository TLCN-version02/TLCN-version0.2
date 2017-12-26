import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';
import { GameService } from '../services/game.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Event } from '../shared/models/event.model';
import { Game } from '../shared/models/game.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'

})
export class TemplateComponent implements OnInit {

  event = new Event();
  template = new Event();
  games: Game[] = [];
  events: Event[] = [];
  isLoading = true;
  isEditing = false;
  isDetail = false;

  addEventForm: FormGroup;
  title = new FormControl('KỸ NĂNG VIẾT CV', Validators.required);
  description = new FormControl('Bạn có biết 80% CV bị loại do một lỗi rất cơ bản là… cẩu thả? Và không ít “tài năng” trong 20% còn lại trượt phỏng vấn đơn giản vì hỏi gì – đáp đó?  Viết CV và phỏng vấn là 2 “nước cờ” quan trọng để có được “tấm thẻ xanh” bước vào công ty mơ ước. Để giúp bạn trở thành lựa chọn số 1 trong mắt nhà tuyển dụng, AIM Academy sẽ tổ chức chuỗi sự kiện Master CV & Interview - Làm chủ kỹ năng viết CV & phỏng vấn với sự tham vấn của những chuyên gia nhân sự hàng đầu trong ngành Marketing & Communication.', Validators.required);
  image = new FormControl('https://tkbvn-tokyo.s3.amazonaws.com/Upload/eventcover/2017/11/29/1CF9B9.jpg', Validators.required);
  startdate = new FormControl('2018-01-13', Validators.required);
  enddate = new FormControl('2018-01-13', Validators.required);
  location = new FormControl('AIM Academy, District 1, Ho Chi Minh City', Validators.required);
  peopleamount = new FormControl('50', Validators.required);
  game_id = new FormControl('5a41c22b01a146498c91369f', Validators.required);

  constructor(private eventService: EventService,
              private gameService: GameService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              public auth: AuthService ) { }

  ngOnInit() {
    this.getEventTemplate();
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


  getEventTemplate() {
    this.template = {
    "game" : Object("5a41c22b01a146498c91369f"),
    "title" : "KỸ NĂNG VIẾT CV",
    "description" : "Bạn có biết 80% CV bị loại do một lỗi rất cơ bản là… cẩu thả? Và không ít “tài năng” trong 20% còn lại trượt phỏng vấn đơn giản vì hỏi gì – đáp đó?  Viết CV và phỏng vấn là 2 “nước cờ” quan trọng để có được “tấm thẻ xanh” bước vào công ty mơ ước. Để giúp bạn trở thành lựa chọn số 1 trong mắt nhà tuyển dụng, AIM Academy sẽ tổ chức chuỗi sự kiện Master CV & Interview - Làm chủ kỹ năng viết CV & phỏng vấn với sự tham vấn của những chuyên gia nhân sự hàng đầu trong ngành Marketing & Communication.",
    "image" : "https://tkbvn-tokyo.s3.amazonaws.com/Upload/eventcover/2017/11/29/1CF9B9.jpg",
    "startdate" : "2018-01-13",
    "enddate" : "2018-01-13",
    "location" : "AIM Academy, District 1, Ho Chi Minh City",
    "peopleamount" : "50",
  }
  
    this.event = this.template;
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

}
