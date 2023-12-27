import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboardPage.component.html',
  styleUrls: ['./dashboardPage.component.scss'],
  standalone: true,
  imports: [HeaderComponent, SideNavComponent, MainComponent]
})
export class DashboardPageComponent {
  title = 'dashboard';
}
