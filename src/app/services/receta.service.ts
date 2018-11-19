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

  getTodos(): Promise<Receta[]> { 
    this.storage.get('recetaCounter').then(
      data => this.recetaCounter
    );
    return this.storage.get('recetas').then(
      (data) => {
        return data;
      }
    );
  }
  

  saveTodo(receta: Receta): Promise<any> {
    let index = this.recetas.findIndex(t => t.id === receta.id);
    this.recetas[index] = receta;

    return this.storage.set('recetas', this.recetas);
  }

  deleteTodo(id: number): Promise<any> {
    this.recetas = this.recetas.filter(t => t.id !== id);
    return this.storage.set('recetas', this.recetas);
  }

  getTodoById(id: number): Receta {
    return this.recetas.find(t => t.id === id);
  }

  newTodo(receta: Receta): Promise<any> {
    this.recetas.push(receta);
    this.recetaCounter++;

    return this.storage.set('recetas', this.recetas).then(
      () => this.storage.set('recetaCounter', this.recetaCounter)
    );
  }
}
