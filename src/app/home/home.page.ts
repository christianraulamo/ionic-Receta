import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
import { Receta } from '../interfaces/receta';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  recetas: Receta[] = [];
  constructor(private recetaService: RecetaService, private alertController: AlertController, private navController: NavController) {
  }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.recetaService.getReceta().then(
      data => this.recetas = data 
    ); 
    console.log(this.recetas);
  }

  async deleteDialog(title: string, id: number) {
    const alert = await this.alertController.create({
      header: 'Borrar receta',
      message: '¿Estás seguro que quieres borrar la receta <strong>' + title + '</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.recetaService.borararReceta(id).then(() => this.recetaService.getReceta().then(
              data => this.recetas = data
              )
            );
            console.log('Borrar');
          }
        }
      ]
    });
    await alert.present();
  }

  editReceta(id: number) {
    this.navController.navigateForward('/edit/' + id);
  }

  infoRec(id: number) {
    this.navController.navigateForward('/info/' + id);
  }
}
