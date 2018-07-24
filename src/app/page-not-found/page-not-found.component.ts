import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      page-not-found 
    </p>
  `,
  styles: [`
  p{
    color:green;
    margin-top:10px;
  }
  
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
