import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesComponent } from './components/references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
