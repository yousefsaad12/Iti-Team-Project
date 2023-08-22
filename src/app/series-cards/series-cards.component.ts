import { Component } from '@angular/core';
import { Iseries } from '../series-page/Iseries';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.css']
})
export class SeriesCardsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780'

  selectedpage = 1;
  allTvShows:Iseries[] = [] 
  totalPages:number = 0;
  constructor(public mySer:SeriesServiceService){}

  ngOnInit():void
  {
    this.mySer.getAllSeries(this.selectedpage).subscribe
    ({

      next:(data) =>
      {
        this.allTvShows = data.results;
        this.totalPages = data.total_results;
      }

    })
   
  }

  changePage(pageNum:PageEvent)
  {
    this.selectedpage = pageNum.pageIndex + 1;
    this.mySer.getAllSeries(this.selectedpage).subscribe
    ({
      next:(data) => 
      {
        this.allTvShows = data.results;
        this.totalPages = data.total_results;
      }
    })
  }
}
