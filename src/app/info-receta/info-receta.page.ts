import { Component, OnInit } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { RecetaService } from '../services/receta.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-receta',
  templateUrl: './info-receta.page.html',
  styleUrls: ['./info-receta.page.scss'],
})
export class InfoRecetaPage implements OnInit {

  receta: Receta;
  edit: boolean = false;

  val : any[];

  constructor(private recetaService: RecetaService, private nav: NavController, private activatedRoute: ActivatedRoute) {
    this.receta = {id: this.recetaService.recetaCounter, title: '', tiempoPrep: '', categoria: '', description: '', ingredientes: '', ingredientesAlergenos: ''};
   }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.edit = true;
      this.receta = this.recetaService.getTodoById(parseInt(id));
      console.log(this.receta);
    }    
  }

  saveTodo(receta: Receta) {
    if(this.edit) {
      this.recetaService.saveTodo(this.receta).then(
        () => this.nav.goBack(true),
        (error) => console.error('Error al guardarlo', error)
      );
    } else {
      this.receta.id = this.recetaService.recetaCounter;
      console.log(this.recetaService.recetaCounter);
      this.recetaService.newTodo(this.receta).then(
        () => this.nav.goBack(true),
        (error) => console.error('Error al guardarlo', error)
      );
    }
  }
}
