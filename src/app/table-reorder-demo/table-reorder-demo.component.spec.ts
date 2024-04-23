import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReorderDemoComponent } from './table-reorder-demo.component';

describe('TableReorderDemoComponent', () => {
  let component: TableReorderDemoComponent;
  let fixture: ComponentFixture<TableReorderDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableReorderDemoComponent]
    });
    fixture = TestBed.createComponent(TableReorderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
