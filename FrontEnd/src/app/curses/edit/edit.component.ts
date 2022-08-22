import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CursedServiceService } from 'src/app/service';
import { Cursed } from 'src/app/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('formCursed',{static:true}) formCursed: NgForm;
  cursed: Cursed;

  constructor(
    private cursedServiceService: CursedServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.cursedServiceService.getOne(id).subscribe(
      (data) => {
        this.cursed = data;
        console.log(this.cursed);
      },
      (error) =>{
        console.log(error);
      });
  }

  onSubmit(): void{
    if(this.formCursed.form.valid){
      this.cursedServiceService.update(this.cursed).subscribe(
        (response) => {
          console.log("maldição alterada com sucesso");
          this.router.navigate(["/curses"]);
        },
        (error) => {
          console.log("maldição persiste, é da braba");
        }
      )
    }
  }

  goBack(){
    this.router.navigate(["/curses"]);
  }
}
