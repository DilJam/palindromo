import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', 
        loadComponent: () => import("./components/padre/padre").then(m => m.Padre) 
    }
];
