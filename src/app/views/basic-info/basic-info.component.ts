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
  bookToShow: BooksDTO = []

  page: number = 0;
  limit: number = 20

  totalElements: number = 0

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((books: BooksDTO) => {
      this.books = books;
      this.totalElements = books.length;
      this.setBookPart(0)
    })
  }

  setBookPart(page: number): void{
    this.page = page;
    this.bookToShow = this.books.filter((_: Book, index: number) => index >= page * this.limit && index < (page+1) * this.limit)
  }


}
