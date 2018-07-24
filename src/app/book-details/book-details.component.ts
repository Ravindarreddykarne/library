import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { BookService } from '../book.service';
import { Ibooks } from '../book';
import { Input } from '@angular/core/src/metadata/directives';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-book-details',
  template: `
  
 

  <div class="row">
  <div class="col-sm-3">
  <div class="container">
  <img src = "{{image1}}"  class="img1"/>
  </div>
  </div>
  
  <div class="col-sm-6">
 
  <h1><b>let us c </b></h1>
  <p>paperback-14 july 2017</p>
  <p>by<a>YASHVANT P. KANETKAR</a>(author)</p>
  <div class='row'>
  
  <div class="col-sm-2">
  <h4><b>kindle Edition</b></h4>
  <p> &#8377; 102</p>
  </div>
  <div class="col-sm-2">
  
  <h4><b>paperback</b></h4>
  <p class="p3"> &#8377; 200</p>
  
  
  </div>
  
  
  </div>
  
<p class="p2">Guaranteed delivery to pincode 500003 - Secunderabad by Tomorrow 11am with Morning delivery — Order in the next 9 hours and 53 minutes <a>Details</a></p>
<hr>
<h3><b>The order quantity for this product is limited to 2 units per customer</b></h3>
<p>Please note that orders which exceed the quantity limit will be auto-canceled. This is applicable across sellers.</p>
<p>For C language programmers, it is must to master the complexity of the language to deal with programming software in engineering, gaming and other fields. In order to understand each concept of the C language, it is necessary to follow a good reference book in easy-to-understand text.</p>

<h3><b>About the Author</b></h3>
<p>Yashavant Kanetkar is a computer science author of Indian origin and is well known for his work on programming languages. He obtained his B.E. degree from VJTI, Mumbai and completed his M.Tech from IIT Kanpur. He was awarded the 'Microsoft Most Valuable Profession' by Microsoft. He is currently the Director of KICIT and KSET. He also speaks on various technology subjects and has written columns for publications such as Developer 2.0 and Express Computers.</p>  

</div>

  <div class="col-sm-3">
  
 <div class="text-center center-block">     
  <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
<a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
<a href="https://plus.google.com"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
<a href="rkavi421@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
</div>
  <div class="db-wrapper">
  <div class="db-pricing-seven">
  <p class="p3"> &#8377; 200</p>
  <p>M.R.P.:&#8377;250.00</p>
  <p>You Save:&#8377;109.00 (44%)
  <br>
  <span>Inclusive of all taxes</span>
  <p><a>FREE Delivery</a>on orders over ₹599.00. Cash on Delivery eligible.</p>
  <h3><b>In stock.</b></h3>
<p>Sold by<a> Repro Books-on-Demand</a> (4.8 out of 5 | 4,761 ratings) and<a>Fulfilled by Amazon.</a> Gift-wrap available.</p>
<p>&#9990;<a>Deliver to Secunderabad 500003‌</a></p>
Quantity  <input type="number" name="quantity" min="1" max="5">
<br>
<br>


<div class="pricing-footer">
      <button href="#" class="btn btn-default btn-lg">Addtocart<span class="glyphicon">&#xe116;</span></button>
      <br>
      <br>
          <button href="#" class="btn btn-default btn-lg">Buy Now <i class="glyphicon glyphicon-play-circle"></i></button>
      </div>
  </div>
</div>
  
  
  
  </div>
</div>
<hr>

    <router-outlet></router-outlet>
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
export class BookDetailsComponent implements OnInit {

 
  image1:string='./assets/book1.jpg';
  booksUrl:string='http://192.168.1.2:9025/book/thriler/1';
   
   constructor(private route:ActivatedRoute,private _bookservice:BookService) {

   }
   ngOnInit(){
   
}

   }
 
    


    
  
  


   
  


 



  





  
 
 
