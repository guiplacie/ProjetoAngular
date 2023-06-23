import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincesadaisyPage } from './princesadaisy.page';

describe('PrincesadaisyPage', () => {
  let component: PrincesadaisyPage;
  let fixture: ComponentFixture<PrincesadaisyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincesadaisyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
