import {Routes} from '@angular/router';
import {ListKittenComponent} from './list-kitten/list-kitten.component';
import {UserKittenComponent} from './user-kitten/user-kitten.component';
import {CreateKittenComponent} from './create-kitten/create-kitten.component';

//creation des routes pour lier les composants

const ROUTES : Routes = [
    {path : 'list_kitten', component : ListKittenComponent},
    {path : 'user_kitten', component : UserKittenComponent},
    {path : 'create_kitten', component : CreateKittenComponent}
];


export {ROUTES};