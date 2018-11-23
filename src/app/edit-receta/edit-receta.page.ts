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

  private receta: any;

  constructor(private activatedRoute: ActivatedRoute,
    private recetaService: RecetaService,
    private navController: NavController) 
    {this.receta = {
      id: this.recetaService.recetas.length,
      title : '',
      tiempoPrep: '',
      categoria: '',
      description: '',
      ingredientes: '',
      ingredientesAlergenos: ''
    };
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.receta = this.recetaService.getReceta(+id);
    } else {
      this.receta = {};
      this.receta.title = '';
      this.receta.tiempoPrep = '';
      this.receta.categoria = '';
      this.receta.description = '';
      this.receta.ingredientes = '';
      this.receta.ingredientesAlergenos = '';
    }    
  }

  guardarReceta() {
    this.recetaService.guardarReceta(this.receta).then(
      () => this.navController.goBack(true)
    );
  }
}
