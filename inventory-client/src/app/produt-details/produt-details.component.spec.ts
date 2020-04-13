import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutDetailsComponent } from './produt-details.component';

describe('ProdutDetailsComponent', () => {
  let component: ProdutDetailsComponent;
  let fixture: ComponentFixture<ProdutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});