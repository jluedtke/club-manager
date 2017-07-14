import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailsComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
