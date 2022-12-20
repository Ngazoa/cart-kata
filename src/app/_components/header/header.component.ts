import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmail="ondouabenoit392@gmail.com";
  userPhone="+33 605 919 611";

  @Input() productInCart=0;
  @Input() pageTitle = "PageTitle"

  constructor() { }

  ngOnInit(): void {
  }


}
