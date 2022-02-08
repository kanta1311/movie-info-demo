import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  list() {
    return [
      {
        id: 1,
        title: 'Iron Man',
        imageUrl: 'https://www.joblo.com/wp-content/uploads/2010/05/2008-iron_man-4-1.jpg',
        director: 'Director x',
        casts: 'cast x, cast y , cast x',
        year: 2009,
        genre: 'action, sci-fi'
      },
      {
        id: 2,
        title: 'Spider Man',
        imageUrl: 'https://media.vanityfair.com/photos/592592596736887ada186bcd/master/w_1600%2Cc_limit/spider-man-homecoming-SMH_DOM_Online_FNL_1SHT_3DRD3DIMX_AOJ_300dpi_01_rgb.jpg'

        ,
        director: 'Director e',
        casts: 'cast x, cast y , cast x',
        year: 2020,
        genre: 'action, sci-fi'
      },
      {
        id: 3,
        title: 'Ant Man',
        imageUrl: 'https://cdn.europosters.eu/image/750/posters/ant-man-grow-i24750.jpg',
        director: 'Director s',
        casts: 'cast x, cast y , cast x',
        year: 2011,
        genre: 'action, sci-fi'
      },
      {
        id: 4,
        title: 'Captan Marvel',
        imageUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg',
        director: 'Director xs',
        casts: 'cast x, cast y , cast x',
        year: 2002,
        genre: 'action, sci-fi'
      },
      {
        id: 5,
        title: 'Thor: The dark world',
        imageUrl: 'https://m.media-amazon.com/images/I/51Gl0SXKRHL._SY445_.jpg',
        director: 'Director xw',
        casts: 'cast x, cast y , cast x',
        year: 2003,
        genre: 'action, sci-fi'
      },
      {
        id: 6,
        title: 'Black Widow',
        imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
        director: 'Director ax',
        casts: 'cast x, cast y , cast x',
        year: 20019,
        genre: 'action, sci-fi'
      }
    ]
  }
}
