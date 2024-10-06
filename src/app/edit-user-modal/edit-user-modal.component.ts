import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { User } from '../home/home.page';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  @Input() user!: User;

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async saveChanges() {
    this.userService.updateUser(this.user).subscribe(async () => {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Datos actualizados exitosamente',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.modalController.dismiss({ reload: true });
          }
        }]
      });
      await alert.present();
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}