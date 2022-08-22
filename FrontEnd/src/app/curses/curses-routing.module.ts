import { Routes } from '@angular/router';
import { AddComponent } from './add';
import { ListComponent } from './list';
import { EditComponent } from './edit';


export const CurseRoutes: Routes = [
    {
        path: 'curses',
        component: ListComponent
    },
    {
        path: 'curses/add',
        component: AddComponent
    },
    {
        path: 'curses/edit/:id',
        component: EditComponent
    },
]