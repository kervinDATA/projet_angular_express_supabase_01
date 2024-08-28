import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../../services/listings.service'; // Assure-toi du bon chemin

@Component({
  selector: 'app-listing-list',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Importer le CommonModule pour *ngFor et *ngIf
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']  // Correction du nom : styleUrls
})
export class ListingListComponent implements OnInit {
  listings: any[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(
      (data) => {
        this.listings = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des listings:', error);
      }
    );
  }
}

