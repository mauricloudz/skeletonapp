import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExperienciaLaboral } from '../home/home.page';

@Component({
  selector: 'app-add-experience-modal',
  templateUrl: './add-experience-modal.component.html',
  styleUrls: ['./add-experience-modal.component.scss'],
})
export class AddExperienceModalComponent {
  empresa!: string;
  anioInicio!: number;
  anioTermino!: number;
  trabajaActualmente: boolean = false;
  cargo!: string;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  addExperience() {
    const newExperience: ExperienciaLaboral = {
      empresa: this.empresa,
      anioInicio: this.anioInicio,
      anioTermino: this.trabajaActualmente ? null : this.anioTermino,
      trabajaActualmente: this.trabajaActualmente,
      cargo: this.cargo
    };
    this.modalController.dismiss(newExperience);
  }
}