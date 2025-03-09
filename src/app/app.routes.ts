import { Routes } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { SignUpComponent } from "./page/sign-up/sign-up.component";
import { LogInComponent } from "./page/log-in/log-in.component";
import { SignUpEmailComponent } from "./page/sign-up-email/sign-up-email.component";
import { VerificationComponent } from "./page/verification/verification.component";
import { SuccessfulComponent } from "./page/successful/successful.component";
import { ForgotPasswordComponent } from "./page/forgot-password/forgot-password.component";
import { CheckMailComponent } from "./page/check-mail/check-mail.component";
import { CreatePasswordComponent } from "./page/create-password/create-password.component";
import { NewPasswordCreatedComponent } from "./page/new-password-created/new-password-created.component";
import { LandingPageComponent } from "./page/landing-page/landing-page.component";
import { StudentListComponent } from "./page/student-list/student-list.component";
import { StudentDetailsComponent } from "./page/student-details/student-details.component";
import { StudentRegComponent } from "./page/student-reg/student-reg.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'log-in',
        component: LogInComponent
    },
    {
        path: 'sign-up-email',
        component: SignUpEmailComponent
    },
    {
        path: 'verification',
        component: VerificationComponent
    },
    {
        path: 'successful',
        component: SuccessfulComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'check-mail',
        component: CheckMailComponent
    },
    {
        path: 'create-password',
        component: CreatePasswordComponent
    },
    {
        path: 'new-password-created',
        component: NewPasswordCreatedComponent
    },
    {
        path: 'landing-page',
        component: LandingPageComponent
    },
    {
        path: 'student-list',
        component: StudentListComponent
    },
    {
        path: 'student-details',
        component: StudentDetailsComponent
    },
    {
        path: 'student-reg',
        component: StudentRegComponent
    },
]