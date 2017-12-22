import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Client } from '../shared/models/client.model';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('/api/clients');
  }

  countClients(): Observable<number> {
    return this.http.get<number>('/api/clients/count');
  }

  addClient(client: Client): Observable<Client> {
    console.log(client);
    return this.http.post<Client>('/api/client', client);
  }

  getClient(client: Client): Observable<Client> {
    return this.http.get<Client>(`/api/client/${client}`);
  }

  editClient(client: Client): Observable<string> {
    return this.http.put(`/api/client/${client._id}`, client, { responseType: 'text' });
  }

  deleteClient(client: Client): Observable<string> {
    return this.http.delete(`/api/client/${client._id}`, { responseType: 'text' });
  }

}
