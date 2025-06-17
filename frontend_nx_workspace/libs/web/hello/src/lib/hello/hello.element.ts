import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello.component';
import { Injector } from '@angular/core';

//hello
export function registerHelloElement(injector: Injector) {
  const element = createCustomElement(HelloComponent, { injector });
  if (!customElements.get('my-tag')) {
    customElements.define('my-tag', element);
  }:
}
