import { Injectable } from '@angular/core';
import { Imovie } from './movies-cards/Imovie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServicsService {

  [x: string]: any;

  apiKey = '0eef1278ac4121ffed668457cfa1ad2e';
  moviesApi = 'https://api.themoviedb.org/3/movie/now_playing'

  constructor(public http:HttpClient) { }

  foundedElement={}


  getAllMovies(currentPage:number, pageSize:number):Observable<Imovie[]>
  {
      return this.http.get<Imovie[]>(`http://localhost:3000/movies?page=${currentPage}&pagesize=${pageSize}`)
  }
  getMovieById(movieId:number):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`);   
  }

  addToCart(item:Imovie):Observable<any>
  {
    return this.http.post(`http://localhost:3000/addtocart`,{movieId:item.id})
    
  }
  
  getCart():Observable<any>
  {
    return this.http.get('http://localhost:3000/getCart')
  }
}
