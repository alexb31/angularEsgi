import { SpacexApiPipe } from './spacex-api.pipe';

describe('SpacexApiPipe', () => {
  it('create an instance', () => {
    const pipe = new SpacexApiPipe();
    expect(pipe).toBeTruthy();
  });
});
