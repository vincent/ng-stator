import { props } from '@ngrx/store';
import { createTypedAction } from './action-creators';

describe('Action Creators', () => {
  it('can create action without props', () => {
    const creator = createTypedAction('Type', 'Test');
    expect(creator).toBeTruthy();
  });

  it('can create action with props object', () => {
    const creator = createTypedAction('Type', 'Test', props<{ id: number }>());
    expect(creator).toBeTruthy();
  });

  it('can create action with props function', () => {
    const creator = createTypedAction('Type', 'Test', ({ username, password}) => ({ username }));
    expect(creator).toBeTruthy();
  });
});
