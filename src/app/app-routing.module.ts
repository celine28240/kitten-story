import {Routes, RouterModule} from '@angular/router';
import {ListKittenComponent} from './list-kitten/list-kitten.component';
import {UserKittenComponent} from './user-kitten/user-kitten.component';
import {CreateKittenComponent} from './create-kitten/create-kitten.component';
import {RacineComponent} from './racine/racine.component';
import { NgModule } from '@angular/core';

//creation des routes pour lier les composants

const ROUTES : Routes = [
    {path : 'list_kitten', component : ListKittenComponent},
    {path : 'user_kitten', component : UserKittenComponent},
    {path : 'create_kitten', component : CreateKittenComponent},
    {path : 'racine', component : RacineComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports : [RouterModule]
})
export class AppRoutingModule{}
