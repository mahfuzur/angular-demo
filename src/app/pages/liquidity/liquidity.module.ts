import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { LiquidityComponent } from './liquidity.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    LiquidityComponent,
  ],
})
export class LiquidityModule { }
