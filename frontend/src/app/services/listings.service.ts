import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private apiUrl = 'http://localhost:3000/data'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  getListings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Méthode pour ajouter un nouveau listing
  addListing(listing: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, listing);
  }
}

