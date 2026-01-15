import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Features } from './pages/features/features';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'features', component: Features },
	{ path: 'about', component: About },
	{ path: 'contact', component: Contact },
	{ path: 'login', component: Login },
];
