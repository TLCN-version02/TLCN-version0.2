import { Component, OnInit, style } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Client } from '../shared/models/client.model';


@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
})
export class ManageUserComponent implements OnInit {
  client = new Client();
  clients: Client[] = [];
  isLoading = true;

  constructor(private clientService: ClientService,
              public toast: ToastComponent
              ) { 

              }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  
}
