import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'
  ]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  
  selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'))
    })
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
