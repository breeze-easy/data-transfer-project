import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { ExportConfigurationComponent } from './export-configuration/export-configuration.component';
import { ImportConfigurationComponent } from './import-configuration/import-configuration.component';
import { StartCopyComponent } from './start-copy/start-copy.component';

const appRoutes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'home', component: ListServicesComponent },
  { path: 'export/:dataType', component: ExportConfigurationComponent },
  { path: 'import', component: ImportConfigurationComponent },
  { path: 'copy', component: StartCopyComponent },
  { path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  { path: '**', // TODO: Perhaps choose not found
    redirectTo: '/demo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }