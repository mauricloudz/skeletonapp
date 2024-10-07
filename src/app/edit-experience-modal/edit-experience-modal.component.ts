import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExperienciaLaboral } from '../home/home.page';

@Component({
  selector: 'app-edit-experience-modal',
  templateUrl: './edit-experience-modal.component.html',
  styleUrls: ['./edit-experience-modal.component.scss'],
})
export class EditExperienceModalComponent {
  @Input() id!: number;
  @Input() empresa!: string;
  @Input() anioInicio!: number;
  @Input() anioTermino!: number;
  @Input() trabajaActualmente!: boolean;
  @Input() cargo!: string;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  editExperience() {
    const updatedExperience: ExperienciaLaboral = {
      id: this.id,
      empresa: this.empresa,
      anioInicio: this.anioInicio,
      anioTermino: this.trabajaActualmente ? null : this.anioTermino,
      trabajaActualmente: this.trabajaActualmente,
      cargo: this.cargo
    };
    this.modalController.dismiss(updatedExperience);
  }
}