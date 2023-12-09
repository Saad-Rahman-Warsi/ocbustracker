import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Location} from '@angular/common'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
    static viewlit:any;
    static registerlit:any;

    constructor(private route:ActivatedRoute,private router:Router,private location: Location)
    {
        ToolbarComponent.registerlit=false;
        ToolbarComponent.viewlit=false;
    }

    ngOnInit()
   {
    
       
      var routeinstr=this.location.path();
      
      if(routeinstr.startsWith('/register'))
      {
        ToolbarComponent.registerlit=true;
      }
      else 
      {
        ToolbarComponent.viewlit=true;
      }
   }
    view()
    {
      this.router.navigate(['/view'])
      ToolbarComponent.viewlit=true;
      ToolbarComponent.registerlit=false;
      
    }

    register()
    {
      this.router.navigate(['/register'])
      ToolbarComponent.viewlit=false;
      ToolbarComponent.registerlit=true;
    }

    getviewlit()
    {
      return ToolbarComponent.viewlit;
    }

    getregisterlit()
    {
      return ToolbarComponent.registerlit;
    }
}
