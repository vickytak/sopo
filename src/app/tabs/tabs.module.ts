import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SocialPageModule } from '../pages/social/social.module';
import { PokerPageModule } from '../pages/poker/poker.module';
import { CareerPageModule } from '../pages/career/career.module';
import { ShopPageModule } from '../pages/shop/shop.module';
import { ProfilePageModule } from '../pages/profile/profile.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,    
    ShopPageModule,
    SocialPageModule,
    PokerPageModule,
    CareerPageModule,
    ProfilePageModule

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
