import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

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
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin',
    component: EditMemberComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
