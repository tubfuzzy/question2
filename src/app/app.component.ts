import { Component } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pretest-section2-question2';
  categories: string[] | undefined;
  filter: string = undefined!;
  constructor(private categoriesService: CategoriesService) { }
  
  ngOnInit(): void {
    this.showCategories();
    console.log(this.categories);
  }

  showCategories() {
    this.categoriesService.getCategories()
      .subscribe((data: string[]) => this.categories = data );
  }

}
