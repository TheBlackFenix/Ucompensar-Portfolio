import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path:'home', 
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'laboral',
        loadComponent: () => import('./pages/laboral/laboral.component').then(c => c.LaboralComponent)
    },
    {
        path:'estudios',
        loadComponent: () => import('./pages/estudios/estudios.component').then(c => c.EstudiosComponent)
    },
    {
        path:'habilidades',
        loadComponent: () => import('./pages/habilidades/habilidades.component').then(c => c.HabilidadesComponent)
    },
    {
        path:'**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }

];
