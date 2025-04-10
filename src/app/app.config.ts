import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, } from '@angular/core';
import { provideHttpClient, withInterceptors,withInterceptorsFromDi,} from '@angular/common/http';
import { routes } from './app.routes';
import {provideRouter, withComponentInputBinding,withInMemoryScrolling,} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { addHeaderInterceptor } from './interceptor/add-header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,   withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled',  }),
    withComponentInputBinding()),
    provideHttpClient(withInterceptors([addHeaderInterceptor])),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
