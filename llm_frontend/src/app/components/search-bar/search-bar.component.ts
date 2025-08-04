import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SearchBarComponent {
  @Input() search = '';
  @Input() provider = '';
  @Input() availableProviders: string[] = [];
  @Output() searchChange = new EventEmitter<string>();
  @Output() providerChange = new EventEmitter<string>();

  // PUBLIC_INTERFACE
  onInput(event: Event) {
    const input = event.target as HTMLInputElement | null;
    this.searchChange.emit(input?.value ?? '');
  }
  onProviderChange(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    this.providerChange.emit(select?.value ?? '');
  }
}
