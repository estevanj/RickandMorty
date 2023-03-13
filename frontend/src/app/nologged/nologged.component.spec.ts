import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NologgedComponent } from './nologged.component';

describe('NologgedComponent', () => {
  let component: NologgedComponent;
  let fixture: ComponentFixture<NologgedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NologgedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NologgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
