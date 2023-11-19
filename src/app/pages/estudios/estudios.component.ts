import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudios.component.html',
  styles: `
  .estudios{ margin-left: 15vw;}
  .estudios h2{ font-size: 2em; font-weight: 450; color: #000; text-align: left; margin-top: 2vh;}
  .estudios h3{ font-size: 1.5em; font-weight: 400; color: #000; text-align: left; margin-top: 2vh;}
  .estudios p{ font-size: 1.2em; font-weight: 400; color: #000; text-align: left; margin-top: 2vh;}
  `
})
export class EstudiosComponent {
  dataService= inject(DataService);
  userData = this.dataService.getProfileData();
}
