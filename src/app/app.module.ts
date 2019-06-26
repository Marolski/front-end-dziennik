import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AccountComponent } from './account/account.component';
import { DiaryComponent } from './diary/diary.component';
import { EventComponent } from './event/event.component';
import { cardService } from './card.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CalendarComponent,
    AccountComponent,
    DiaryComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [cardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
