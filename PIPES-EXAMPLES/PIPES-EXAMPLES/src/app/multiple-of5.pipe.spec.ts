import { MultipleOf5Pipe } from './multiple-of5.pipe';

describe('MultipleOf5Pipe', () => {
  it('create an instance', () => {
    const pipe = new MultipleOf5Pipe();
    expect(pipe).toBeTruthy();
  });
});
