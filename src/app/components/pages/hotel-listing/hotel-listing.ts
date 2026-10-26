import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-hotel-listing',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './hotel-listing.html',
  styleUrl: './hotel-listing.scss',
})
export class HotelListing {
  selected = signal('default');
}
