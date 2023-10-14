/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrandingsComponent } from './Strandings.component';

describe('StrandingsComponent', () => {
  let component: StrandingsComponent;
  let fixture: ComponentFixture<StrandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
