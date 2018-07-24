import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: `
  <div class="col-sm-9" >
  <ng-container *ngFor="let book of data books">
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
               <div class="row">
                   <div class="col-sm-6 col-md-4">
                        <img src="{{book.imageUrl}}"  class="img-rounded"/>
                    </div>
            <div class="col-sm-6 col-md-8">
            <a href="#"><h4><b>{{book.title}}</b></h4></a>
  <small><cite title="San Francisco, USA"> Hachette India <i class="glyphicon glyphicon-map-marker"></i></cite></small>
          <p><span>Author:</span>{{book.author}}</p>
         <p><span>publisher:</span>{{book.publisher}}</p>
          <p><span>ISBN:</span> {{book.isbnCode}}</p>
          <p><span>ISBN:</span> {{book.id}}</p>
            <label>Book Details</label>
            <P><span>edition:</span> {{book.edition}}</P>
        <P><span>Publication Year :</span>{{book.publishDate}}</P>
          <P><span>bookPrice:</span> {{book.bookPrice}}</P>
             
          <div class="btn-group">
          <button type="button" class="btn btn-primary">
             checked out</button>
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              <span class="caret"></span><span class="sr-only">Social</span>
          </button>
          
      </div>          
             
      </div>
      </div>
  </div>
</div>
</div>
</div>
</ng-container>
</div>             
                      
                
                   
  `,
  styles: [`
  body{padding-top:30px;}

    .glyphicon { 
       margin-bottom: 10px;
      margin-right: 10px;
    }
    .vl {
      border-left: 1px solid green;
      height: 500px;
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
    div.col-sm-9{
      // background-color: lightgray;
      margin-left:130px;
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
       background-color: lightblue;
       widows: 100%;
    
    }
    .book-details{
            border: 1px solid;
            text-align: -webkit-center;
            width: 650px;
            padding-left: 221px;
            
    }
    img.img-rounded{
      margin-top: 33px;
      width: 70%;
      margin-left: 15px;
    }
   button.btn-primary {
      color: #fff;
      background-color: #c75a3a;
      border-color: #c75a3a;
  }
  
  `]
})
export class HomeComponent implements OnInit {
  data: Object;
image3:string='./assets/book1.jpg'
  constructor(private http:HttpClient) {
    console.log('haii Rkredddy');
    this.getData();
    this.getNinjas();
  }
  getData(){
    
    return this.http.get('http://192.168.1.2:9025/book/fiction/1');
  }

  getNinjas(){
this.getData().subscribe(data=>{
  console.log(data);
  this.data=data;
})
  }
  ngOnInit() {
  }
}
