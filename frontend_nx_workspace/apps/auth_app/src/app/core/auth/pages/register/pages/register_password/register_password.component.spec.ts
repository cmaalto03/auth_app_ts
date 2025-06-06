import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPasswordComponent } from './register_password.component';

describe('RegisterPasswordComponent', () => {
  let component: RegisterPasswordComponent;
  let fixture: ComponentFixture<RegisterPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
