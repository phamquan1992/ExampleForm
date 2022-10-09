import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptemComponent } from './iptem.component';

describe('IptemComponent', () => {
  let component: IptemComponent;
  let fixture: ComponentFixture<IptemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
