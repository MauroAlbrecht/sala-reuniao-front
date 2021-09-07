import {CreateRoomComponent} from './create-room/create-room.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomUpdateComponent} from './room-update/room-update.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: 'rooms', component: RoomListComponent},
  {path: 'add', component: CreateRoomComponent},
  {path: 'update/:id', component: RoomUpdateComponent},
  {path: 'details/:id', component: RoomDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
