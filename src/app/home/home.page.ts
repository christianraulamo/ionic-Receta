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
    this.recetaService.getTodos().then(
      data => this.recetas = data //El getTodo devuelve una promesa cuando se cumple la promesa entra al método, mete los datos en el data y una vez esté lo asignamos.
    ); //Accedo al servicio (donde se guardan los datos) y esto me devuelve un array de todos que se guarda aquí en esta clase
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
            this.recetaService.deleteTodo(id).then(() => this.recetaService.getTodos().then(
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

  editTodo(id: number) {
    this.navController.navigateForward('/edit/' + id);
  }

  infoRec(id: number) {
    this.navController.navigateForward('/info/' + id);
  }
}
