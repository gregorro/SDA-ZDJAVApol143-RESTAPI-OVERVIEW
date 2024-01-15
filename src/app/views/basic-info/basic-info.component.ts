import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent implements OnInit {
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
  }


}
