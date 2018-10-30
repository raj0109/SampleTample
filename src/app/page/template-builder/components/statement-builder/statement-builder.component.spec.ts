import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementBuilderComponent } from './statement-builder.component';

describe('StatementBuilderComponent', () => {
  let component: StatementBuilderComponent;
  let fixture: ComponentFixture<StatementBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
