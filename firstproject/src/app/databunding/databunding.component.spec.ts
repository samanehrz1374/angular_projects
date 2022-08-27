import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabundingComponent } from './databunding.component';

describe('DatabundingComponent', () => {
  let component: DatabundingComponent;
  let fixture: ComponentFixture<DatabundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabundingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
