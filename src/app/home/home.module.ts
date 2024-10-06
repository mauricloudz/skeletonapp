import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MisDatosComponent } from '../mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [
    HomePage, 
    MisDatosComponent, 
    ExperienciaLaboralComponent, 
    CertificacionesComponent,
    EditUserModalComponent
  ]
})
export class HomePageModule {}
