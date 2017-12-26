import { Component, OnInit, style } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../shared/models/client.model';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  
  client = new Client();
  clients: Client[] = [];

  isLoading = true;
  isEditing = false;
  isDetail = false;
  
  addClientForm: FormGroup;
  fullname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  phonenumber = new FormControl('', Validators.required);
  job = new FormControl('', Validators.required);
  skill = new FormControl('', Validators.required);
  event = new FormControl('', Validators.required);

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              public route: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getClients();
    this.addClientForm = this.formBuilder.group({
      fullname: this.fullname,
      email: this.email,
      phonenumber: this.phonenumber,
      job: this.job,
      skill: this.skill,
      event: this.activatedRoute.snapshot.params['id']
    })
    this.activatedRoute.snapshot.params['id'];
    console.log(this.activatedRoute.snapshot.params['id']);
    console.log('tuan', this.addClientForm.value);
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addClient(){
    this.clientService.addClient(this.addClientForm.value).subscribe(
      res => {
        this.clients.push(res);
        this.addClientForm.reset();
        this.toast.setMessage('You have been checkout success', 'success');
      },
      error => console.log(error)
    );
  }
}
