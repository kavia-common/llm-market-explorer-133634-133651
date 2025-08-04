import { Component, OnInit } from '@angular/core';
import { LlmModel, CostComparisonEntry } from '../../services/api.service';
import { CategorySidebarComponent } from '../../components/category-sidebar/category-sidebar.component';
import { LlmListComponent } from '../../components/llm-list/llm-list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CostComparisonComponent } from '../../components/cost-comparison/cost-comparison.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  standalone: true,
  imports: [
    CategorySidebarComponent,
    LlmListComponent,
    SearchBarComponent,
    CostComparisonComponent
  ]
})
export class CatalogComponent implements OnInit {
  llms: LlmModel[] = [];
  filteredLlms: LlmModel[] = [];
  categories: string[] = [];
  providers: string[] = [];
  selectedCategory: string|null = null;
  selectedProvider: string = '';
  search = '';
  isLoading = false;

  costData: CostComparisonEntry[] = [];

  // No constructor needed since 'api' is not used

  ngOnInit() {
    // this.loadData();
    // this.api.getCategories().subscribe(cats => this.categories = cats);
    // this.api.getCostComparison().subscribe(c => this.costData = c);
  }

  loadData() {
    // Method body omitted since 'api' usage is not required
  }
  // PUBLIC_INTERFACE
  setCategory(c: string|null) {
    this.selectedCategory = c;
    this.applyFilters();
  }
  setProvider(p: string) {
    this.selectedProvider = p;
    this.applyFilters();
  }
  setSearch(q: string) {
    this.search = q;
    this.applyFilters();
  }
  // PUBLIC_INTERFACE
  applyFilters() {
    this.filteredLlms = this.llms.filter(llm => {
      const matchesCat = this.selectedCategory ? llm.categories.includes(this.selectedCategory) : true;
      const matchesProv = this.selectedProvider ? llm.provider === this.selectedProvider : true;
      const matchesSearch = this.search
        ? (
            llm.name.toLowerCase().includes(this.search.toLowerCase()) ||
            llm.description?.toLowerCase().includes(this.search.toLowerCase()) ||
            (llm.features?.join(' ') || '').toLowerCase().includes(this.search.toLowerCase()) ||
            llm.provider.toLowerCase().includes(this.search.toLowerCase())
          )
        : true;
      return matchesCat && matchesProv && matchesSearch;
    });
  }
}
