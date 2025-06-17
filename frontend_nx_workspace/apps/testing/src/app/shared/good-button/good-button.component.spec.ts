import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodButtonComponent } from './good-button.component';

describe('GoodButtonComponent', () => {
  let component: GoodButtonComponent;
  let fixture: ComponentFixture<GoodButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
