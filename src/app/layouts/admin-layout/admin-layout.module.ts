import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EmployeeListComponent } from '../../employee-list/employee-list.component';
import { Project_manageComponent } from '../../project-manage/project-manage.component';
import { VacationsComponent } from '../../vacations/vacations.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatSelectModule} from '@angular/material/select';
import { CreateEmployeeComponent } from 'app/create-employee/create-employee.component';
import { EmployeeProfileComponent } from 'app/employee-profile/employee-profile.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatTableModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  declarations: [
    DashboardComponent,
    EmployeeProfileComponent,
    EmployeeListComponent,
    Project_manageComponent,
    VacationsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CreateEmployeeComponent,
  ]
})

export class AdminLayoutModule {}
