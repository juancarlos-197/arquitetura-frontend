import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { Dashboard } from "./dashboard/dashboard";
import { Calendar } from "./calendar/calendar";


export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayout,
        children: [
            {
                path: 'dashboard', component: Dashboard
            },
            {
                path: 'calendar', component: Calendar
            },
        ]
    },


]
