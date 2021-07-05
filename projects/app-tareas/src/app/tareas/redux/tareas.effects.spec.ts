import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TareasEffects } from './tareas.effects';

describe('TareasEffects', () => {
  let actions$: Observable<any>;
  let effects: TareasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TareasEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TareasEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
