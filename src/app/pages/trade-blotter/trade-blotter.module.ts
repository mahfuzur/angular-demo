import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TradeBlotterComponent } from './trade-blotter.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    TradeBlotterComponent,
  ],
})
export class TradeBlotterModule { }
