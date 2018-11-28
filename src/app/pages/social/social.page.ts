import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  friendList:Array<any>;
  constructor() { 
    this.friendList =  [
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
      { userPic: './assets/img/user.png', userName: 'Wyatt Smith'},
    ]
  }

  ngOnInit() {
  }


}
