import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RecetaService implements Receta {
  id: number;
    title: string;
    tiempoPrep: string;
    categoria: string;
    description: string;
    ingredientes: string;
    ingredientesAlergenos: string;
  public recetaCounter: number = 0;

  recetas: Receta[] = [];

  constructor(private storage: Storage) {
  }

  getReceta(): Promise<Receta[]> { 
    this.storage.get('recetaCounter').then(
      data => this.recetaCounter
    );
    return this.storage.get('recetas').then(
      (data) => {
        return data;
      }
    );
  }
  

  guardarReceta(receta: Receta): Promise<any> {
    let index = this.recetas.findIndex(r => r.id === receta.id);
    this.recetas[index] = receta;

    return this.storage.set('recetas', this.recetas);
  }

  borararReceta(id: number): Promise<any> {
    this.recetas = this.recetas.filter(r => r.id !== id);
    return this.storage.set('recetas', this.recetas);
  }

  getRecetaById(id: number): Receta {
    return this.recetas.find(r => r.id === id);
  }

  nuevaReceta(receta: Receta): Promise<any> {
    this.recetas.push(receta);
    this.recetaCounter++;

    return this.storage.set('recetas', this.recetas).then(
      () => this.storage.set('recetaCounter', this.recetaCounter)
    );
  }
}
