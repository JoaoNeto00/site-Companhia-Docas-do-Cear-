import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideComponent } from '../../slide/slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
