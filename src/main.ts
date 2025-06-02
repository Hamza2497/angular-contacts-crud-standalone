import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAppConfig } from './app/AppConfig/appconfig.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './app/request.interceptor';
import { InitService } from './app/init.service';
import { APP_INITIALIZER } from '@angular/core';


function initFactory(initService: InitService) {
  return () => initService.init();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAppConfig(),
    provideHttpClient(
    withInterceptors([requestInterceptor])
    ),
    { provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ]
})
.catch((err) => console.error(err));
