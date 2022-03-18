import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';

// material UI import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

// appsed modulga 3 component import bolgan, endi owa 3 si ham asosiy app ga import bo'ladi
// RegistrationComponent,
// KassaComponent,
// ServiseComponent
import { AppsedModule } from './appsed/appsed.module';
import { TaskDialogComponent } from './home/task-dialog/task-dialog.component';
import { TaskComponent } from './home/task/task.component';
import { TabsComponent } from './home/tabs/tabs.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { BlogComponent } from './blogPage/blog/blog.component';
import { UserComponent } from './user/user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthComponent } from './user/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TabsComponent,
    TaskDialogComponent,
    MainNavComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    // RegistrationComponent,
    // KassaComponent,
    // ServiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    AppsedModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
