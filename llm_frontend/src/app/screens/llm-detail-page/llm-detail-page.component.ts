import { Component, OnInit } from '@angular/core';
import { LlmModel } from '../../services/api.service';
import { LlmDetailComponent } from '../../components/llm-detail/llm-detail.component';

@Component({
  selector: 'app-llm-detail-page',
  templateUrl: './llm-detail-page.component.html',
  styleUrls: ['./llm-detail-page.component.css'],
  standalone: true,
  imports: [LlmDetailComponent]
})
export class LlmDetailPageComponent implements OnInit {
  llm: LlmModel | null = null;
  loading = true;

  constructor() {}

  ngOnInit() {}
}
