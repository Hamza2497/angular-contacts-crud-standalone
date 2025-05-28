import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAppConfig } from './app/AppConfig/appconfig.service';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideAppConfig(), provideHttpClient()]
})
.catch((err) => console.error(err));
