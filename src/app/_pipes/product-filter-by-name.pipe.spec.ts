import { ProductFilterByNamePipe } from './product-filter-by-name.pipe';

describe('ProductFilterByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFilterByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
