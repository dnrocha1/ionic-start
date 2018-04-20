import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = IntroPage;

  constructor() {

  }

  ionViewDidLoad() {
    console.log("carregou TABS");
  }
}
