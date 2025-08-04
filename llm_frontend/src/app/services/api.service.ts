import { Injectable } from '@angular/core';

export interface LlmModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  categories: string[];
  features: string[];
  price: number;
  currency?: string;
  [key: string]: any;
}

export interface CostComparisonEntry {
  model: string;
  provider: string;
  price: number;
  unit: string;
  note?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // No methods or properties (API communication omitted for lint-clean placeholder)
}
