import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from 'app/layouts/admin-layout/admin-layout.routing';
import { LoginLayoutRoutes } from './login-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
  
  ],
  declarations: [
    
  ]
})

export class LoginLayoutModule {}