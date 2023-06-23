import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mario',
    loadComponent: () => import('./mario/mario.page').then( m => m.MarioPage)
  },
  {
    path: 'princesapeach',
    loadComponent: () => import('./princesapeach/princesapeach.page').then( m => m.PrincesapeachPage)
  },
  {
    path: 'luigi',
    loadComponent: () => import('./luigi/luigi.page').then( m => m.LuigiPage)
  },
  {
    path: 'yoshi',
    loadComponent: () => import('./yoshi/yoshi.page').then( m => m.YoshiPage)
  },
  {
    path: 'bowser',
    loadComponent: () => import('./bowser/bowser.page').then( m => m.BowserPage)
  },
  {
    path: 'toad',
    loadComponent: () => import('./toad/toad.page').then( m => m.ToadPage)
  },
  {
    path: 'wario',
    loadComponent: () => import('./wario/wario.page').then( m => m.WarioPage)
  },
  {
    path: 'waluigi',
    loadComponent: () => import('./waluigi/waluigi.page').then( m => m.WaluigiPage)
  },
  {
    path: 'princesadaisy',
    loadComponent: () => import('./princesadaisy/princesadaisy.page').then( m => m.PrincesadaisyPage)
  },
  {
    path: 'rosalina',
    loadComponent: () => import('./rosalina/rosalina.page').then( m => m.RosalinaPage)
  },
  {
    path: 'donkeykong',
    loadComponent: () => import('./donkeykong/donkeykong.page').then( m => m.DonkeykongPage)
  },
  {
    path: 'diddykong',
    loadComponent: () => import('./diddykong/diddykong.page').then( m => m.DiddykongPage)
  },
  {
    path: 'lakitu',
    loadComponent: () => import('./lakitu/lakitu.page').then( m => m.LakituPage)
  },
  {
    path: 'shi',
    loadComponent: () => import('./shi/shi.page').then( m => m.ShiPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },
];
