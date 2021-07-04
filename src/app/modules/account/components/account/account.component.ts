import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  power(a: number, b: number): number {
    return a ** b;
  }

}
