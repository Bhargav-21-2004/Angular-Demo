import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class Resourceservice {

  constructor(private http: HttpClient) {}

  apiurl: string = "https://fake-store-api.mock.beeceptor.com";

  rxResourceData = rxResource({
    stream : () => this.http.get(`${this.apiurl}/api/users`)
  });

  resourceData = resource({
    loader : () => fetch(`${this.apiurl}/api/users`).then(res => res.json() as Promise <any>)
  })
}
