import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MisDatosComponent } from '../mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage, MisDatosComponent, ExperienciaLaboralComponent]
})
export class HomePageModule {}
