import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsComponent } from '../../components/book-details/book-details.component';
import { ApiService } from '../../services/api.service';
import { BookDetails } from '../../services/api.service.types';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, BookDetailsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  bookDetails: BookDetails | null = null;

  ngOnInit(){
    const {slug} = this.route.snapshot.params;
    this.apiService.getBookBySlug(slug).subscribe((book: BookDetails) => {
      this.bookDetails = book
    })
  }

}
