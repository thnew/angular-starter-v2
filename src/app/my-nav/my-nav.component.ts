import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thomas-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {
  public title: string = "Thomas Website";

  constructor() { 

        
  }

  ngOnInit() {
  }

}
