import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },   { path: 'poker', loadChildren: './pages/poker/poker.module#PokerPageModule' },
  { path: 'career', loadChildren: './pages/career/career.module#CareerPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
