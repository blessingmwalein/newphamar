import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";



import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./services/auth/auth-guard.service";
import { AuthInterceptorService } from "./services/auth/auth-interceptor.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from "./views/admin/users/users.component";
import { RolesComponent } from "./views/admin/roles/roles.component";
import { ChemicalsComponent } from "./views/admin/chemicals/chemicals.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    RolesComponent,
    ChemicalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
