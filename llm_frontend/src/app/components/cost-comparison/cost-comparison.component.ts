import { Component, Input, OnChanges } from '@angular/core';
import { CostComparisonEntry } from '../../services/api.service';
import { CommonModule } from '@angular/common';

// We'll use a simple SVG bar chart for cost comparison, no external dep
@Component({
  selector: 'app-cost-comparison',
  templateUrl: './cost-comparison.component.html',
  styleUrls: ['./cost-comparison.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CostComparisonComponent implements OnChanges {
  @Input() data: CostComparisonEntry[] = [];

  labels: string[] = [];
  values: number[] = [];
  maxValue = 1;

  ngOnChanges() {
    if (!this.data) return;
    this.labels = this.data.map(d => `${d.model} (${d.provider})`);
    this.values = this.data.map(d => d.price);
    this.maxValue = Math.max(1, ...this.values);
  }
}
