import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Ibooks } from '../book';
import { Observable } from 'rxjs/Observable';

import { ParamMap } from '@angular/router/src/shared';



@Component({
  selector: 'app-book2',
  template: `
  <div *ngIf="books">

  <h2>{{ books.title| uppercase }} Details</h2>
  <div><span>id: </span>{{books.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="books.title" placeholder="name">
    </label>
  </div>

</div>
  `,
  styles: [
`
h3,.h3{
  font-size: 16px;
}
div.text-center.center-block{
  margin-top:91px;
  
}
.social:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
}
.social {
  -webkit-transform: scale(0.8);
  /* Browser Variations: */
  
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
}

/*
 Multicoloured Hover Variations
*/

#social-fb:hover {
  color: #3B5998;
}
#social-tw:hover {
  color: #4099FF;
}
#social-gp:hover {
  color: #d34836;
}
#social-em:hover {
  color: #f39c12;
}

button.btn-default.btn-lg{
width: 100%;
    height: 42px;
    background-color: #F0917C;
    color: black;
    margin-bottom: 10px;
}
.p3{
  color:#e77600;
}
.db-pricing-seven {
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;
  border: 1px solid #C5C2C2;
  background-color: #EDEDED;
}
.p2{
  font-size: 100%;
    margin-top: 45px;
    margin-left:-7px;
}
h4,.h4{
  font-size:13px;
}
div.col-sm-2{
border: 1px solid #e77600;
width: 20.666667%;
margin-right:20px;
background-color:#fef8f2;
}

star-rating{
  font-family:'ionicons';
  font-size:48px;
  display:inline-flex;

}
star-rating> .star::after{
  content:'\f3ae';
}


col-sm-3{
  background-color:green;
  margin-top:14px;
}
.img1{
  width:20%;
  margin-top:84px;

}

  h1{
    margin-top:50px;
    font-size:25px;
  }
p{
  font-size:100%;
}
a{
  font-size:85%;
}
hr{
  border-top: 1px solid #b5a5a5;
}
div.db-pricing-seven{
 background-color: #ffffff;
}

`
  ]
})
export class Book2Component implements OnInit {

  public books=[]
@Input() book:Ibooks;
 
  image1:string='./assets/book1.jpg';
  constructor(private _bookservice:BookService,private route:ActivatedRoute) {
  }

  ngOnInit():void {
    this.route.params.forEach((params: ParamMap) => {

        const id = +params['id'];
  
        this._bookservice.getbooks()
            .subscribe(data =>this.books=data);
      
    });
  }}
