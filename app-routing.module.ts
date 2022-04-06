import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageComponent } from './pages/manage/manage.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'careers',component:CareersComponent},
  {path:'company',component:CompanyComponent},
  {path:'home',component:HomeComponent},
  {path:'manage',component:ManageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'terms',component:TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
