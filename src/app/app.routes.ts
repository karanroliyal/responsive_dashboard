import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppSideLoginComponent } from './pages/authentication/side-login/side-login.component';
import { loginAuthGuard } from './guards/login-auth.guard';
import { dashboardAuthGuard } from './guards/dashboard-auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full',
  },
  {
    path: 'authentication/login',
    component: AppSideLoginComponent,
    canActivate:[dashboardAuthGuard],
    title: 'Log In',
  },
  {
    path: 'dashboard',
    component: FullComponent,
    canActivate:[loginAuthGuard],
    children: [
      {
        title: 'Dashboard',
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
      },
      {
        title: 'live monitoring',
        path: 'live-monitor',
        loadComponent: () => import('./pages/live-monitor/live-monitor.component').then(c => c.LiveMonitorComponent),
      },
      {
        title: 'PG',
        path: 'properties',
        loadComponent: () => import('./pages/properties/properties.component').then(c => c.PropertiesComponent),
      },
      {
        title: 'Pg Rooms',
        path: 'pg-rooms',
        loadComponent: () => import('./pages/rooms/rooms.component').then(c => c.RoomsComponent),
      },
       {
        title: 'Tenants',
        path: 'tenants',
        loadComponent: () => import('./pages/tenents/tenents.component').then(c => c.TenentsComponent),
      },
      {
        title: 'Owners',
        path: 'owners',
        loadComponent: () => import('./pages/owners/owners.component').then(c => c.OwnersComponent),
      },
      {
        title: 'Plans',
        path: 'plans',
        loadComponent: () => import('./pages/plans/plans.component').then(c => c.PlansComponent),
      },
      {
        title: 'Setting',
        path: 'setting',
        loadComponent: () => import('./pages/settings/settings.component').then(c => c.SettingsComponent),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },


  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
