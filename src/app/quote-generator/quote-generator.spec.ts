import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteGeneratorComponent } from './quote-generator';
import { QuoteService } from '../quote.service';

describe('QuoteGeneratorComponent', () => {
  let component: QuoteGeneratorComponent;
  let fixture: ComponentFixture<QuoteGeneratorComponent>;
  let quoteServiceSpy: jasmine.SpyObj<QuoteService>;

  beforeEach(async () => {
    quoteServiceSpy = jasmine.createSpyObj(
      'QuoteService',
      ['getRandomQuote']
    );

    quoteServiceSpy.getRandomQuote.and.returnValue(
      'Believe in yourself and keep moving forward.'
    );

    await TestBed.configureTestingModule({
      imports: [QuoteGeneratorComponent],
      providers: [
        {
          provide: QuoteService,
          useValue: quoteServiceSpy
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteGeneratorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRandomQuote when ngOnInit executes', () => {
    fixture.detectChanges();

    expect(quoteServiceSpy.getRandomQuote).toHaveBeenCalled();
  });

  it('should update text with the returned quote', () => {
    fixture.detectChanges();

    expect(component.text).toBe(
      'Believe in yourself and keep moving forward.'
    );
  });

  it('should display the quote in the HTML template', () => {
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain(
      'Believe in yourself and keep moving forward.'
    );
  });
});