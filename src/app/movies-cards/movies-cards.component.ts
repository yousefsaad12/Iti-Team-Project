import { Component } from '@angular/core';
import { Imovie } from './Imovie';
import { MoviesServicsService } from '../movies-servics.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.css']
})

export class MoviesCardsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';
  currentPage:number = 1;
  listofPageSize = [5, 10, 25, 100];
  pageSize:number = 5;
  allmovies:Imovie[] = [];
  totalItems:number = 0;

  constructor(private myMovie: MoviesServicsService){}

  ngOnInit():void
  {
    this.myMovie.getAllMovies(this.currentPage,this.pageSize).subscribe({next:(moviesData)=>{
      
      this.allmovies = moviesData;
       
    }})
  }


  changePage(pageData:PageEvent)
  {
    this.currentPage=pageData.pageIndex+1;
    this.pageSize=pageData.pageSize;
    this.myMovie.getAllMovies(this.currentPage,this.pageSize).subscribe({next:(movieData)=>{
      console.log(movieData);
      this.allmovies=movieData;
      this.totalItems=movieData.length;
      
    }})
  }

  addToCart(movie:Imovie)
  {
    this.myMovie.addToCart(movie).subscribe({
      next:(data)=>{
        console.log(data);
      }
    });
  }

}

