import { Component, OnInit } from '@angular/core';
import{ShomeService} from '../../services/shome.service'

import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sh: ShomeService, private Auth: AuthService) { }

  ngOnInit() {
  }

  test(){
    /*this.sh.getProducts().subscribe((data: {}) => {
      console.log(data);
    });*/
    alert('Logged !!!');
    this.Auth.Logged= true;
  }
}
