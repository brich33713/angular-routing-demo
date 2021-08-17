import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  id;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    })
  }

  goPrevious(){
    this.router.navigate(['/departments',this.id-1])
  }

  goNext(){
    this.router.navigate(['/departments',this.id+1])
  }

  goBack(){
    this.router.navigate(['/departments',{id: this.id}])
  }

  goContact(){
    this.router.navigate(['contact'],{relativeTo: this.route})
  }

  goOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route})
  }

  

}
