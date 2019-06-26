import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { DiaryComponent } from './diary/diary.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path:'calendar',
    component: CalendarComponent
  },
  {
    path:'',
    component: SidebarComponent
  },
  {
    path:'account',
    component: AccountComponent
  },
  {
    path:'diary',
    component: DiaryComponent
  },
  {
    path:'event',
    component: EventComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
