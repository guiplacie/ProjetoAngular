import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincesapeachPage } from './princesapeach.page';

describe('PrincesapeachPage', () => {
  let component: PrincesapeachPage;
  let fixture: ComponentFixture<PrincesapeachPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincesapeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
