import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService, Movie } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListMovie:Movie[]=[];
  constructor( private MovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.listMovies();
  }

  listMovies(){
    this.MovieService.getMovies().subscribe(res=>{
      console.log(res);
      this.ListMovie=<any>res;
    },
    err=> console.log(err)
    )
  }

  delMovie(id:string){
    this.MovieService.deleteMovie(id).subscribe(
      res=>{
      console.log('movie delted')
      this.listMovies();
    },
    err=>console.log(err)
    )
  }
  editMovie(id:string){
    this.router.navigate(['/edit/'+id])
  }

}
