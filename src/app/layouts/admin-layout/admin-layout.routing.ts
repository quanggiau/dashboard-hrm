import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EmployeeProfileComponent } from '../../employee-profile/employee-profile.component';
import { EmployeeListComponent } from '../../employee-list/employee-list.component';
import { Project_manageComponent } from '../../project-manage/project-manage.component';
import { VacationsComponent } from '../../vacations/vacations.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CreateEmployeeComponent } from 'app/create-employee/create-employee.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'employee-profile/:empId',   component: EmployeeProfileComponent},
    { path: 'employee-list',     component: EmployeeListComponent },
    { path: 'project_manage',     component: Project_manageComponent },
    { path: 'vacations',          component: VacationsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'create-employee', component: CreateEmployeeComponent,}
];
