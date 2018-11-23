import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  recetas: Receta[] = [];
  recetasCounter = 0;

  constructor(private storage: Storage) {
    this.getRecetas().then(
      data => {
        this.recetas = data;
        this.recetas.forEach(
          t => {
            if (t.id > this.recetasCounter) {
              this.recetasCounter++;
            }
          });
        this.recetasCounter++;
      }
    );
  }

  getRecetas(): Promise<Receta[]> {
    return this.storage.get('recetas');
  }

  getReceta(id: number): Receta {
    return this.recetas.find(r => r.id == id);
  }

  guardarReceta(r: any): Promise<boolean> {
    if (r.id) {
      let index = this.recetas.findIndex(receta => receta.id === r.id);
      this.recetas[index] = {
        id: r.id,
        title: r.title,
        tiempoPrep: r.tiempoPrep,
        categoria: r.categoria,
        description: r.description,
        ingredientes: r.ingredientes,
        ingredientesAlergenos: r.ingredientesAlergenos
      }
    } else {
      r.id = this.recetasCounter;
      this.recetas.push(r);
      this.recetasCounter++;
    }
    
    return this.storage.set('recetas', this.recetas);
  }

  borrarReceta(id: number): Promise<boolean> {
    this.recetas = this.recetas.filter(r => r.id != id);
    return this.storage.set('recetas', this.recetas);
  }
}