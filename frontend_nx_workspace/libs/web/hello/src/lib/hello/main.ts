import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello.component';

createApplication()
  .then((app) => {
    const MyComponent = createCustomElement(HelloComponent, {
      injector: app.injector,
    });
    customElements.define('hello', MyComponent);
  })
  .catch((err) => console.error(err));
