import { Component } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  
  constructor(private service:PostserviceService,private route:ActivatedRoute,private router:Router)
  {
   
  }
  post(questionid:string,userid:string)
  {   
    var qu:number;
    var us;
    qu=+questionid;
    us=+userid
    this.service.save(qu,us).subscribe((response:any)=>{
      
  });
  }

}
