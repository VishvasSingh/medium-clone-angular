import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/components/topBar/topBar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, FontAwesomeModule],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
