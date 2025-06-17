import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from '../tabs/account/account.component';
import { DummyDataComponent } from '../tabs/dummy-data/dummy-data.component';

@Component({
  selector: 'app-tab-manager',
  imports: [CommonModule],
  templateUrl: './tab-manager.component.html',
  styleUrl: './tab-manager.component.css',
})
export class TabManagerComponent {
  tabs: Array<{ title: string; component: Type<any> }> = [
    { title: 'Account', component: AccountComponent },
    { title: 'Dummy Data', component: DummyDataComponent },
  ];

  selectedTab = this.tabs[0];
  selectedTabIndex = 0;

  public selectTab(index: number): void {
    this.selectedTab = this.tabs[index];
    this.selectedTabIndex = index;
  }
}
