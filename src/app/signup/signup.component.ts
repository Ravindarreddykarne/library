import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  template: `
  <img src="{{image1}}" class="img1">
  <div class="container">    
      <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
          <div class="panel panel-info" >
         <div class="panel-heading">
            <div class="panel-title">Sign In</div>
            </div> 
                    
        <div  class="panel-body">
           <div id="liginform">
             <div class="input-group">   
   <input type="text"   class="form-control" id="username"  (keyup)="onNameKeyUp($event)" value="" placeholder="username or email" 
             ></div>            
  <div  class="input-group">
     <input type="password" value="" class="form-control" id="password"  (keyup)="onNameKeyUp($event)"  placeholder="password"  required >
         </div>
                         
        <div class="panel-heading">
         <div  class="forgot" ><a href="#">Forgot password?</a></div>                            
              

         <div class="input-group">
         <div class="checkbox">                     
<label><input id="login-remember" type="checkbox" name="remember" value="1"> Remember me </label>               </div>
  </div>
                <div  class="form-group">
                   <div class="col-sm-12 controls">
                                      
  
  <a id="btn-login" href="/dashboard" class="btn btn-success" name="submit" value="login"   type="submit" (click)="postProfile()">Login </a>
  <a id="btn-fblogin"  value="login" class="btn btn-primary"   (click)="getProfile()" >Login with Facebook</a>
                       </div>
                      </div>     
                  
          <div class="form-group">
             <div class="col-md-12 control">
                <div class="ravi">
                    Don't have an account! 
             <a href="#">Sign Up Here </a>
                             
                    </div>
                        </div>
                </div>                       
              </div>

              </div> 
           </div>  
     </div>
    </div>

             
  `,
  styles: [
    
    `
    .container-fluid{

        max-width: 500px;
       border: 1px solid lightgray;
       margin-top: 50px;
  }
  img {
       vertical-align: middle;
       border-style: none;
       margin-left: 450px;
        width: 18%;
  }
  
  .forgot{
       float:right; 
       font-size: 80%; 
       position: relative; 
       margin-top:-10px
  }
  .panel-body{
  
       padding-top:30px
  }
  .input-group{
      margin-bottom: 25px
  }
  .form-group{ 
  
      margin-top:10px
  }
  .ravi{
      padding-top: 15px;
      font-size: 85%;
      color: slategray;
  }
  
  .alert alert-danger col-sm-12{
         display:none
  }
  
  
  input#username.form-control {
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      padding-right: 124px;
  }
  
  input#password.form-control {
      display: block;
      width: 100%;
      padding: .375rem .75rem;
     
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      padding-right: 124px;
  }
  
  .checkbox label, .radio label {
      min-height: 20px;
      padding-left: 20px;
      margin-bottom: 0;
      font-weight: 400;
      cursor: pointer;
      color: slategray;
  }
  
  .panel-body{
      padding-top: 30px;
      margin-bottom: 25px;
      padding-bottom: 42px;
  }
  div#loginbox.mainbox.col-md-6.col-md-offset-3.col-sm-8.col-sm-offset-2{
      margin-top:10px;
      margin-bottom: 112px;
  }
  
  .img1{
    vertical-align: middle;
    border-style: none;
    margin-left: 475px;
    width: 20%;
    margin-bottom: -28px;
    margin-top: 13px;
  }
    `
  ]
})
export class SignupComponent implements OnInit {
name:string='';
  image1:string='./assets/mybook.png'
 

  constructor(private httpClient:HttpClient){}
  onNameKeyUp(event:any){
    this.name=event.target.value;
  }
  getProfile(){
 this.httpClient.get('http://192.168.0.6:8000/api/userlogin',
 {
 })
 .subscribe(
   (data:any[])=>{
     console.log(data);
   }
 )

  }

  postProfile(){
      
    this.httpClient.post ('http://192.168.0.14:9025/login',
    
     {
    
    name:"you",
    password:"tejaswichava"
   
    },

    {
        headers:
     {
         'Authorization': 'Basic cmFuZ2FtMDM2QGdtYWlsLmNvbTpwYXNzd29yZA',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Access-Control-Allow-Origin': '*'
        
        }}
)
    .subscribe(
      (data:any[])=>{
        console.log(data);
      }
    )
  
     }
     ngOnInit() {
         
    }
}
