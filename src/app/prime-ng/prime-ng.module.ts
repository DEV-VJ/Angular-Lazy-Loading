import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGRoutingModule } from './prime-ng-routing.module';
import { PrimeNGComponent } from "./prime-ng.component";
import { DatatablesComponent } from "./datatables/datatables.component";

//Prime Modules
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CommonService } from '../services/common.service';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    PrimeNGComponent,
    DatatablesComponent
  ],
  imports: [
    CommonModule,
    PrimeNGRoutingModule,
    TableModule,
    CardModule,
    PaginatorModule,
    InputTextModule,
    MultiSelectModule,
    RippleModule,
    ButtonModule,
    TooltipModule
  ],
  providers: [CommonService]
})
export class PrimeNGModule { }
