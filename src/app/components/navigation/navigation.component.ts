import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  constructor(private route: Router){}
  currentRoute: string | null = null

  ngOnInit(): void {
    // Wartość początkowa
    this.currentRoute = this.route.url

    this.route.events.subscribe(event => {
      if(event instanceof NavigationEnd){
         // Wartość po zmianach
        this.currentRoute =  event.url
      }
    })
  }
}
