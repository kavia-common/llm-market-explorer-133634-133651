import { Component, Input } from '@angular/core';
import { LlmModel } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-llm-detail',
  templateUrl: './llm-detail.component.html',
  styleUrls: ['./llm-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LlmDetailComponent {
  @Input() llm: LlmModel | null = null;
}
