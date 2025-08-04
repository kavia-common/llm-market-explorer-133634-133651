import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CategorySidebarComponent {
  @Input() categories: string[] = [];
  @Input() selected: string | null = null;
  @Output() selectCategory = new EventEmitter<string|null>();

  // PUBLIC_INTERFACE
  select(cat: string|null) {
    this.selectCategory.emit(cat);
  }
}
