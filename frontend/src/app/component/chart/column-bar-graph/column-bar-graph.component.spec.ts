import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBarGraphComponent } from './column-bar-graph.component';

describe('ColumnBarGraphComponent', () => {
  let component: ColumnBarGraphComponent;
  let fixture: ComponentFixture<ColumnBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnBarGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
