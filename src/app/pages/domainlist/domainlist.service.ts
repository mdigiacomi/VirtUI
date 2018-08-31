import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainlistService {

  private url = 'http://home.hipsterconsulting.com:5000/api/domain';

  constructor(private http: HttpClient) {}

  getSysInfo(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
