import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {  
      path: '',
      redirectTo: 'login'
    },
{
path: 'login', component: LoginComponent,
data: {
  title: 'login'
}
},
{
path: 'register', component: RegisterComponent,
data: {
  title: 'register'
}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPagesRoutingModule { }
