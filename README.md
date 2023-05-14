# NgxPulseLib

TypeScript client library for ShieldIoT pulse API, for Angular applications.
This Angular Library is based on Angular 15.2.0

### How to use The Library

1. Add the package to your package.json file
2. In your Angular application, add the module

```TypeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PulseLibModule } from '@shieldiot/ngx-pulse-lib'; // <-- import the module

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PulseLibModule.forRoot({ // <-- include it in your app module
      api: 'http://localhost:8080/v1' // <-- configure PulseAPI url
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### PulseConfig

* **`api`** [`string`] configure Pulse API url.