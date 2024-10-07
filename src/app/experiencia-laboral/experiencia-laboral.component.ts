import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddExperienceModalComponent } from '../add-experience-modal/add-experience-modal.component';
import { EditExperienceModalComponent } from '../edit-experience-modal/edit-experience-modal.component';
import { ExperienciaLaboral } from '../home/home.page';
import { ExperienciaLaboralService } from '../experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent implements OnInit {
  experiencias: ExperienciaLaboral[] = [];

  constructor(
    private experienciaLaboralService: ExperienciaLaboralService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadExperiencias();
  }

  loadExperiencias() {
    this.experienciaLaboralService.getExperiencias().subscribe({
      next: (data) => {
        this.experiencias = data;
      },
      error: (error) => {
        console.error('Error loading experiencias:', error);
      }
    });
  }

  async openAddExperienceModal() {
    const modal = await this.modalController.create({
      component: AddExperienceModalComponent
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.addExperiencia(data.data);
      }
    });
    return await modal.present();
  }

  async openEditExperienceModal(experiencia: ExperienciaLaboral) {
    const modal = await this.modalController.create({
      component: EditExperienceModalComponent,
      componentProps: { ...experiencia }
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.updateExperiencia(data.data);
      }
    });
    return await modal.present();
  }

  addExperiencia(experiencia: ExperienciaLaboral) {
    this.experienciaLaboralService.addExperiencia(experiencia).subscribe({
      next: (newExperiencia) => {
        this.experiencias.push(newExperiencia);
      },
      error: (error) => {
        console.error('Error adding experiencia:', error);
      }
    });
  }

  updateExperiencia(experiencia: ExperienciaLaboral) {
    this.experienciaLaboralService.updateExperiencia(experiencia).subscribe({
      next: (updatedExperiencia) => {
        const index = this.experiencias.findIndex(exp => exp.id === updatedExperiencia.id);
        if (index > -1) {
          this.experiencias[index] = updatedExperiencia;
        }
      },
      error: (error) => {
        console.error('Error updating experiencia:', error);
      }
    });
  }
}