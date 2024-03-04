/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Card3dComponent } from './card3d.component';

describe('Card3dComponent', () => {
  let component: Card3dComponent;
  let fixture: ComponentFixture<Card3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
