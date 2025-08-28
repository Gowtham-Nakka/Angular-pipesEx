import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsplaylistComponent } from './songsplaylist.component';

describe('SongsplaylistComponent', () => {
  let component: SongsplaylistComponent;
  let fixture: ComponentFixture<SongsplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsplaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
