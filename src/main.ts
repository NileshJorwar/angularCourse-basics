import { enableProdMode } from "@angular/core";
// change detection run once in app and should have env var set  and run before main app runs or will have it running change detection twice 
import { environment } from "./environments/environment";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from './app/app.module'

if(environment.production){
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule( AppModule )
.catch(err => console.error(err));