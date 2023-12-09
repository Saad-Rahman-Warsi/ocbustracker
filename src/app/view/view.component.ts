import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  error:any;
  data:any;

  constructor(private service:GetServiceService,private route:ActivatedRoute,private router:Router)
   {
    
   }

  ngOnInit()
  {
    this.service.getEmployeeById().subscribe(data => {this.data=data;console.log(data)
    }, error=>this.error);
  }
}
