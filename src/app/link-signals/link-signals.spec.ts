import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSignals } from './link-signals';

describe('LinkSignals', () => {
  let component: LinkSignals;
  let fixture: ComponentFixture<LinkSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
