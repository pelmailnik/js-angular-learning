import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderService } from 'src/app/core/services/header-service/header-service.service';
import { IconRegistryService } from 'src/app/core/services/icon-registry/icon-registry.service';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  const testTitle = 'Test title';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatIconModule,
      ],
      declarations: [
        HeaderComponent
      ],
      providers : [
        IconRegistryService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '${testTitle}'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    const headerService = TestBed.inject(HeaderService);

    app.ngOnInit();
    headerService.setTitle(testTitle);

    expect(app.title).toEqual(testTitle);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;
    const headerService = TestBed.inject(HeaderService);

    app.ngOnInit();
    headerService.setTitle(testTitle);
    fixture.detectChanges();

    expect(compiled.querySelector('.header-title').textContent).toContain(testTitle);
  });
});
