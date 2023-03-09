import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fav Photos';
  image1 = 'https://i.imgur.com/gYiXRR4_d.webp?maxwidth=520&shape=thumb&fidelity=high';
  image2 = 'https://i.imgur.com/GuBnykY_d.webp?maxwidth=520&shape=thumb&fidelity=high';
  image3 = 'https://i.imgur.com/C0M5m6E_d.webp?maxwidth=520&shape=thumb&fidelity=high';

  constructor() { }

  ngOnInit() {
  }

}