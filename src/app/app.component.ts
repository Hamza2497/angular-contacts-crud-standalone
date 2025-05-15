import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent} from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: []
})
export class AppComponent implements AfterViewInit {

  title = 'hotelinventoryapp';

  @ViewChild('user', {read: ViewContainerRef} ) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
  this.vcr.createComponent(RoomsComponent);
}

}