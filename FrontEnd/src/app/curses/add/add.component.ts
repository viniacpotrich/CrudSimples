import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cursed } from 'src/app/model';
import { CursedServiceService } from 'src/app/service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('formCursed',{static:true}) formCursed: NgForm;
  cursed: Cursed;

  constructor(
    private crusedServiceService: CursedServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    this.cursed = new Cursed();
  }

  onSubmit(): void{
    if(this.formCursed.form.valid){
      this.crusedServiceService.add(this.cursed).subscribe(
        (response) => {
          console.log("amaldiçoado com sucesso");
          this.router.navigate(["/curses"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  goBack(){
    this.router.navigate(["/curses"]);
  }

}
