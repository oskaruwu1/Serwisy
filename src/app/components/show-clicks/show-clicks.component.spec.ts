import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClicksComponent } from './show-clicks.component';

describe('ShowClicksComponent', () => {
  let component: ShowClicksComponent;
  let fixture: ComponentFixture<ShowClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowClicksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
