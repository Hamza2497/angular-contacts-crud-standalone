import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'hinv-rooms-booking',
  imports: [CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0;

  constructor(private route: ActivatedRoute) { }
    
  id$!: Observable<string | null>;


  ngOnInit(): void {
    
    this.id$= this.route.paramMap.pipe(
      map(params => params.get('id'))
    );
  }

}
