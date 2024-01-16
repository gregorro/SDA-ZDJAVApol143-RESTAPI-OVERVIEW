import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Book, BooksDTO } from '../../services/api.service.types';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  books: BooksDTO = []

  ngOnInit(): void {

    this.apiService.getBooks().subscribe((books: BooksDTO) => {
      this.books = books.filter((_: Book, index: number ) => index < 100);
    })

  }


}
