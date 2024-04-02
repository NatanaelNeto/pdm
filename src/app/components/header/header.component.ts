import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getPlaceholder: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(([url]) => {
      const { path } = url
      this.getPlaceholder = path == "cartas"
        ? 'cartas'
        : path == "decks"
          ? 'decks'
          : 'cartas ou decks'
    })
  }
}
