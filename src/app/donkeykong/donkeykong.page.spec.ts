import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonkeykongPage } from './donkeykong.page';

describe('DonkeykongPage', () => {
  let component: DonkeykongPage;
  let fixture: ComponentFixture<DonkeykongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonkeykongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
