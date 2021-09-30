import { Component, OnInit } from '@angular/core';
import { MovieService, Movie} from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  movie: Movie = {
    mov_id: '',
    mov_title: '',
    mov_year: '',
    mov_time: '',
    mov_lang: '',
    mov_dt_rel: '',
    mov_rel_country: '',
  };

  constructor(private MovieService: MovieService, private router:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id =<string>this.activeRoute.snapshot.params.id;
    console.log(id);
    if (id) {
      this.MovieService.getMovie(id).subscribe(res=>{
        this.movie=res
        console.log(res)
      },
      err=>console.log(err)
      );
    }
    }


  editMovie(){
    console.log('casa')
  }
}
