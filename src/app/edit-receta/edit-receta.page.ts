import { Component, OnInit } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { RecetaService } from '../services/receta.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-receta',
  templateUrl: './edit-receta.page.html',
  styleUrls: ['./edit-receta.page.scss'],
})
export class EditRecetaPage implements OnInit {

  receta: Receta;
  edit: boolean = false;

  val : any[];

  constructor(private RecetaService: RecetaService, private nav: NavController, private activatedRoute: ActivatedRoute) {
    this.receta = {id: this.RecetaService.recetaCounter, title: '', tiempoPrep: '', categoria: '', description: '', ingredientes: '', ingredientesAlergenos: ''};
   }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.edit = true;
      this.receta = this.RecetaService.getTodoById(parseInt(id));
      console.log(this.receta);
    }    
  }

  saveTodo(receta: Receta) {
    if(this.edit) {
      this.RecetaService.saveTodo(this.receta).then(
        () => this.nav.goBack(true),
        (error) => console.error('Error al guardarlo', error)
      );
    } else {
      
      this.receta.id = this.RecetaService.recetaCounter;
      console.log(this.RecetaService.recetaCounter);
      this.RecetaService.newTodo(this.receta).then(
        () => this.nav.goBack(true),
        (error) => console.error('Error al guardarlo', error)
      );
    }
  }
}
