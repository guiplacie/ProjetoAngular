import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShiPage } from './shi.page';

describe('ShiPage', () => {
  let component: ShiPage;
  let fixture: ComponentFixture<ShiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
