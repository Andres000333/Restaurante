import { Routes } from '@angular/router';
import { ContactComponent } from './core/contact/contact.component'
import { IndexComponent } from './core/index/index.component';
import { MenuComponent } from './core/menu/menu.component';

export const routes: Routes = [
    {path: '', title: 'index', component: MenuComponent},
    {path: 'platillo', title: 'index', component: IndexComponent}, 
    {path: 'menu', title: 'menu', component: MenuComponent}
];
