import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EmployeeListComponent } from '../../employee-list/employee-list.component';
import { TypographyComponent } from '../../typography/typography.component';
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
    MatAutocompleteModule
  ],
  declarations: [
    DashboardComponent,
    EmployeeProfileComponent,
    EmployeeListComponent,
    TypographyComponent,
    VacationsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CreateEmployeeComponent,
  ]
})

export class AdminLayoutModule {}
