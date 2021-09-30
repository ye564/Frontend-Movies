import { Component, OnInit } from '@angular/core';
import { MovieService, Movie} from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  movie: Movie = {
    mov_id: '',
    mov_title: '',
    mov_year: '',
    mov_time: '',
    mov_lang: '',
    mov_dt_rel: '',
    mov_rel_country: '',
  };

  constructor(private MovieService: MovieService, private router:Router) { }

  ngOnInit(): void {
  }
  addMovies(){
    this.MovieService.addMovies(this.movie).subscribe();
    this.router.navigate(['/home'])
  }
}


