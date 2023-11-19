import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styles: `
  .tec{ margin-left: 15vw;}
  `
})
export class HabilidadesComponent {
  dataService = inject(DataService);
  userData = this.dataService.getProfileData();
}
