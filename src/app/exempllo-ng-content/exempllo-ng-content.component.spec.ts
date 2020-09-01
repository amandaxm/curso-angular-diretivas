import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplloNgContentComponent } from './exempllo-ng-content.component';

describe('ExemplloNgContentComponent', () => {
  let component: ExemplloNgContentComponent;
  let fixture: ComponentFixture<ExemplloNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplloNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplloNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
