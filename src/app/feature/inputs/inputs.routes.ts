import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent } from './parent/parent';

const routes: Routes = [];

export const PARENT_ROUTES: Routes = [
    {
        path: '', component: Parent
    },
]