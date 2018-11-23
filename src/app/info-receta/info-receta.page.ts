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
}
