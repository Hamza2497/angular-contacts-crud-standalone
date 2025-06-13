import { HoverDirective } from './hover.directive';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as any;
    const mockRenderer2 = {
      setStyle: () => {},
      removeStyle: () => {},
    } as any;
    const directive = new HoverDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
