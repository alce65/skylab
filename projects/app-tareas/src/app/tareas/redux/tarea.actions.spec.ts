import * as TareaActions from './tarea.actions';

describe('Tarea', () => {
  it('should create an instance', () => {
    expect(new TareaActions.LoadTareas()).toBeTruthy();
  });
});
