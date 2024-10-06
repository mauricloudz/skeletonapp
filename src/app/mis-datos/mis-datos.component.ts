import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../home/home.page'; // Importa la interfaz User
import { UserService } from '../user.service';
import { ModalController } from '@ionic/angular';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

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
    private alertController: AlertController,
    private modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  async openEditModal() {
    const modal = await this.modalController.create({
      component: EditUserModalComponent,
      componentProps: { user: this.user }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.reload) {
        this.userService.getUser().subscribe(user => {
          this.user = user;
        });
      }
    });
    
    return await modal.present();
  }
}