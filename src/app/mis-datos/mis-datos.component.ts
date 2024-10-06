// mis-datos.component.ts
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {
  user: User | undefined; // Variable para almacenar los datos del usuario
  name: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async showInfo() {
    const alert = await this.alertController.create({
      message: `Su nombre es: ${this.name} ${this.lastName}`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  clearFields() {
    this.name = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }
}