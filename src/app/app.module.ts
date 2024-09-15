import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialAuthService, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleSigninComponent } from './security/auth/google-signin/google-signin.component';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas HTTP
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms'; // Si usas ngModel en el componente

describe('GoogleSigninComponent', () => {
  let component: GoogleSigninComponent;
  let fixture: ComponentFixture<GoogleSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleSigninComponent],
      imports: [HttpClientTestingModule, FormsModule], // Añade HttpClientTestingModule y FormsModule si es necesario
      providers: [
        SocialAuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  environment.googleAuthClientId
                ),
              },
            ],
          },
        },
      ],
    });
    fixture = TestBed.createComponent(GoogleSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
