import { TestBed } from '@angular/core/testing';

import { TodosEffectService } from './todos.effect.service';

describe('Todos.EffectService', () => {
  let service: TodosEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
