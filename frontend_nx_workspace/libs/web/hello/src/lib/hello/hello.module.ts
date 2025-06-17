import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
  exports: [HelloComponent],
})
export class HelloModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(HelloComponent, {
      injector: this.injector,
    });
    if (!customElements.get('my-tag')) {
      customElements.define('my-tag', element);
    }
  }
}
