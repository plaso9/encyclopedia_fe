import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentNewComponent } from './argument-new.component';

describe('ArgumentNewComponent', () => {
  let component: ArgumentNewComponent;
  let fixture: ComponentFixture<ArgumentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgumentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgumentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
