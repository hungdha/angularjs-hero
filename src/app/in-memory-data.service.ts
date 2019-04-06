import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', skills: ['fly', 'run'] },
      { id: 12, name: 'Narco' , skills: ['kick', 'run'] },
      { id: 13, name: 'Bombasto', skills: ['fly', 'run'] },
      { id: 14, name: 'Celeritas', skills: ['fly', 'run'] },
      { id: 15, name: 'Magneta', skills: ['fly', 'run'] },
      { id: 16, name: 'RubberMan', skills: ['fly', 'run'] },
      { id: 17, name: 'Dynama' , skills: ['fly', 'run']},
      { id: 18, name: 'Dr IQ', skills: ['fly', 'run'] },
      { id: 19, name: 'Magma', skills: ['fly', 'wave'] },
      { id: 20, name: 'Tornado', skills: ['fly', 'run'] }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/