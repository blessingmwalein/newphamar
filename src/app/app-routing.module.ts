import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { AuthGuard } from "./services/auth/auth-guard.service";
import { ChemicalsComponent } from "./views/admin/chemicals/chemicals.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { RolesComponent } from "./views/admin/roles/roles.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { UsersComponent } from "./views/admin/users/users.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { ReportsComponent } from "./views/admin/reports/reports.component";


const routes: Routes = [
  // admin views

  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],

    children: [{ path: "", component: DashboardComponent }],
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "chemicals", component: ChemicalsComponent },
      { path: "reports", component: ReportsComponent },
      { path: "users", component: UsersComponent },
      { path: "roles", component: RolesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
