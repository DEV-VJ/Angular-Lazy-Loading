import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { SwimlaneRoutingModule } from './swimlane-routing.module';
import { SwimlaneComponent } from "./swimlane.component";
import { DatatableComponent } from './datatable/datatable.component';

//Swimlane
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

//PrimeNG
import { CardModule } from 'primeng/card';
import { CommonService } from '../services/common.service';

@NgModule({
  declarations: [
    SwimlaneComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SwimlaneRoutingModule,
    NgxDatatableModule,
    CardModule
  ],
  providers: [CommonService]
})
export class SwimlaneModule { }
