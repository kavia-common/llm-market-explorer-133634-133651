import { Component, Input } from '@angular/core';
import { LlmModel } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-llm-list',
  templateUrl: './llm-list.component.html',
  styleUrls: ['./llm-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LlmListComponent {
  @Input() llms: LlmModel[] = [];
  @Input() isLoading = false;

  // PUBLIC_INTERFACE
  gotoDetails() {
    // Placeholder: navigation disabled/lint clean
  }
}
