import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { SocialPage } from '../pages/social/social.page';
import { ShopPage } from '../pages/shop/shop.page';
import { PokerPage } from '../pages/poker/poker.page';
import { CareerPage } from '../pages/career/career.page';
import { ProfilePage } from '../pages/profile/profile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(shop:shop)',
        pathMatch: 'full',
      },
      {
        path: 'shop',
        outlet: 'shop',
        component: ShopPage
      },
      {
        path: 'social',
        outlet: 'social',
        component: SocialPage
      },
      {
        path: 'poker',
        outlet: 'poker',
        component: PokerPage
      },      
      {
        path: 'career',
        outlet: 'career',
        component: CareerPage
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      },
     
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(shop:shop)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
