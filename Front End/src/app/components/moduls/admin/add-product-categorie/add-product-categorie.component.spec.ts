import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCategorieComponent } from './add-product-categorie.component';

describe('AddProductCategorieComponent', () => {
  let component: AddProductCategorieComponent;
  let fixture: ComponentFixture<AddProductCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
