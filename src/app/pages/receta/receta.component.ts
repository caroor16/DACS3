import { Component, Input } from '@angular/core';
import { Receta } from '../../interfaces/recetaItem';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [],
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'] 
})
export class RecetaComponent {
  @Input() recetaInfo!: Receta;
}
