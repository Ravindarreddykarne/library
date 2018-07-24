import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  template: `
  <hr>
  <div class="row">
  <div class="col-sm-3">
  <h2> Searching results for</h2>
  <p class="p1"><b>Books</b></p>
 <a class="p2" href="#">Contemporary Fiction</a><br>
 <a href="#" class="p2">Short Stories</a> <br>
 <a href="#" class="p2">Literature & Fiction</a> <br>
 <a href="#" class="p2">Classic Fiction</a><br>
 <hr>
  </div>

  
  <div class="col-sm-9" >
  <div class="vl"></div>
  <ng-container *ngFor="let book of books" (click)="onSelect(book)" >
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="ravi">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="{{book.imageUrl}}"  class="img-rounded"/>
                    </div>
                    <div class="col-sm-6 col-md-8">
                    <div>
                      <a routerLink="/dashboard/{{book.id}}" ><h4><b>{{book.title}}</b></h4></a>
                     
                         </div>
                        
                
                        <small><cite title="San Francisco, USA"> Hachette India <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                     
                       <p><span>Author:</span>{{book.author}}</p>
                       <p><span>publisher:</span>{{book.publisher}}</p>
                       <p><span>ISBN:</span> {{book.isbnCode}}</p>
                       <label>Book Details</label>
                       <P><span>edition:</span> {{book.edition}}</P>
                       <P><span>Publication Year :</span>{{book.publishDate}}</P>
                       <P><span>bookPrice:</span> {{book.bookPrice| currency}}</P>
                      
                
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>
</ng-container>

</div>
</div>
<hr>
       
  `,
  
  styles: [
    `

    .vl {
        border-left: 1px solid green;
        height: 100%;
        position: absolute;
        left:0%;
        margin-left: 0px;
        top: 0;
        margin-top:-20px;
    }
    div.col-sm-3{
         margin-top:3px;
    }
    body{
          padding-top:30px;
        }

    .glyphicon { 
         margin-bottom: 10px;
        margin-right: 10px;
    }
    .p2{
         margin-left:28px;
        text-decoration:none;
    }
    
    small {
         display: block;
        line-height: 1.428571429;
        color: #999;
    }
    .col-sm-6{
          margin-top: 50px;
    }
   
    h2{
         font-size:21px;
    }
    .p1{
     
         margin-left: 14px;
         margin-top: 28px;
    }
    .h4, h4 {
          font-size: 18px;
          margin-top: -11px;
    }
    div.contact-details{
      
          widows: 100%;
    
    }
    .book-details{
            border: 1px solid;
            text-align: -webkit-center;
            width: 650px;
            padding-left: 221px;
            
    }
    img.img-rounded{
          margin-top: -10px;
          width: 70%;
          margin-left: 15px;
       
    }
    button.btn-primary {
           color: #fff;
          background-color: #c75a3a;
          border-color: #c75a3a;
  }
 
    `
  ]
})
export class DashboardComponent implements OnInit {
    selectedbook:any;
   
  router: any;
  public books=[]
book:any;


  constructor(private _bookservice:BookService) { }

  ngOnInit() {
    this._bookservice.getbooks()
      .subscribe(data =>this.books=data);
  }
  
onSelect(book):void{
this.book=book;
}
}
