import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../mis-datos/mis-datos.component'; // Importa la interfaz User

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

}