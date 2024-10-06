// mis-datos.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../home/home.page'; // Importa la interfaz User
import { UserService } from '../user.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})

export class MisDatosComponent implements OnInit {
  user: User | null | undefined; // Variable para almacenar los datos del usuario
  name: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

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