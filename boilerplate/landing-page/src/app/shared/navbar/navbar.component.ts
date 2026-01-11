import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = signal<boolean>(false);

  toggleMenu() {
    this.menuOpen.update((v: boolean) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
