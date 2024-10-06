import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {
  empresa: string = '';
  anioInicio: number | null = null;
  trabajaActualmente: boolean = false;
  anioTermino: number | null = null;
  cargo: string = '';

  constructor() { }

  ngOnInit() {}

}
