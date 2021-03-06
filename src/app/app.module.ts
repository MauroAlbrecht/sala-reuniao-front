import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateRoomComponent} from './create-room/create-room.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomUpdateComponent} from './room-update/room-update.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomUpdateComponent,
    RoomDetailComponent,
    RoomListComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
