import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// MODULOS MATERIAL
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { provideNativeDateAdapter, MAT_DATE_LOCALE  } from "@angular/material/core";
import { HotelListing } from '../hotel-listing/hotel-listing';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    HotelListing
  ],
  providers:[
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  fechaEntrada: Date | null = null;
}
