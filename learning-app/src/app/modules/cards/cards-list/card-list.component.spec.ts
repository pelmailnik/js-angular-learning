import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { IconRegistryService } from 'src/app/core/services/icon-registry/icon-registry.service';
import { CardsListComponent } from './cards-list.component';

describe('CardsListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule,
      ],
      declarations: [
        CardsListComponent
      ],
      providers : [ IconRegistryService ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CardsListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cards list'`, () => {
    const fixture = TestBed.createComponent(CardsListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cards list');
  });
});
