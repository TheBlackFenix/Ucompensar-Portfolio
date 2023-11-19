import { UserData } from './../../models/user-data';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: `
  h1 {
    font-family: 'Exo-2', 'Roboto', sans-serif;
    font-size: 3em;
    font-weight: 500;
    color: #000;
    text-align: center;
    margin-top: 5vh;
  }

  h2 {
    font-family: 'Exo-2', 'Roboto', sans-serif;
    font-size: 2.5em;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-top: 5vh;
  }

  h3 {
    font-family: 'Exo-2', 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: 440;
    color: #000;
    text-align: center;
    margin-top: 5vh;
  }

  p {
    font-family: 'Exo-2', 'Roboto', sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-top: 5vh;
  }

  
  `
})
export class HomeComponent {
  dataService = inject(DataService);
  userData: UserData = this.dataService.getProfileData();
}
