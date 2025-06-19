import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'rooms',
        loadComponent: () =>
        import('./rooms/rooms.component').then(m => m.RoomsComponent),
        children : [
            {path: 'add', loadComponent: () =>
        import('./rooms/rooms-add/rooms-add.component').then(m => m.RoomsAddComponent)},
            {path: ':id', loadComponent: () =>
        import('./rooms/rooms-booking/rooms-booking.component').then(m => m.RoomsBookingComponent)}
        ]
    },
    {path: 'employee', loadComponent: () =>
        import('./employee/employee.component').then(m => m.EmployeeComponent)},
    {path: 'login', loadComponent: () =>
        import('./login/login.component').then(m => m.LoginComponent)},
    {path: '', redirectTo: 'login', pathMatch: 'full'}, // Redirect to login by default
    {path: '**',loadComponent: () =>
      import('./notfound/notfound.component').then(m => m.NotfoundComponent)} // Wildcard route for a 404 page
];