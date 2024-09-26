import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedSegment: string = 'misDatos';
  user: User | undefined; // Variable para almacenar los datos del usuario
  name: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.user = navigation.extras.state['user']; // Acceder al objeto user
      console.log(this.user); // Para verlo en la consola
    }
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