import { Component, Input } from '@angular/core';
import { BookDetails } from '../../services/api.service.types';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

 @Input({required: true}) book!: BookDetails
}
