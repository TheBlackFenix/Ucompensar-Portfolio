import { DataService } from './../../services/data.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboral.component.html',
  styles: `
  .experiencia{ margin-left: 15vw;}
  .experiencia h2{ font-size: 2em; font-weight: 450; color: #000; text-align: left; margin-top: 2vh;}
  .experiencia h3{ font-size: 1.5em; font-weight: 400; color: #000; text-align: left; margin-top: 2vh;}
  .experiencia p{ font-size: 1.2em; font-weight: 400; color: #000; text-align: left; margin-top: 2vh;}
  `
})
export class LaboralComponent {

  dataService = inject(DataService);
  userData = this.dataService.getProfileData();
}
