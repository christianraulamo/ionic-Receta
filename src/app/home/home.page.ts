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
  recetasMostrar;
  constructor(private recetaService: RecetaService, private alertController: AlertController, private navController: NavController) {
  }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.recetaService.getReceta().then(
      data => {
        this.recetas = data;
        this.recetasMostrar = this.recetas;
      }
    ); 
    console.log(this.recetas);
  }

  async deleteDialog(title: string, id: number, categoria: string) {
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
            this.recetaService.borrarReceta(id).then(() => this.recetaService.getReceta().then(
              data => { this.recetas = data;
                this.ordenar(categoria);
              // this.recetasMostrar = this.recetas;
              }
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

  ordenar(categoria: string) {
    console.log(categoria);
    this.recetasMostrar= [];
    for (var i = 0; i < this.recetas.length; i++ ){
      console.log(this.recetas[i].categoria);
      if(categoria === this.recetas[i].categoria){
        this.recetasMostrar.push(this.recetas[i]);
      }
    }
    console.log(this.recetasMostrar)
  }

  mostrartodo(){
    this.recetasMostrar= [];
    this.recetasMostrar = this.recetas;
  }
}
