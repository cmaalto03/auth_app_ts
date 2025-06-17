import { registerHelloElement } from '@frontend-nx-workspace/hello'; // use actual path

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).then((appRef) => {
  const injector = appRef.injector;
  registerHelloElement(injector); // 👈 Register the custom element
});
