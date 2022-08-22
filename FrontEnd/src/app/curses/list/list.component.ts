import { Component, OnInit } from '@angular/core';
import { Cursed } from 'src/app/model';


import { CursedServiceService } from 'src/app/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  curses: Cursed[] = [];

  constructor(private cursedServiceService: CursedServiceService) { }

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    let array = [];
    console.log("listando todos");
    this.cursedServiceService.getAll().subscribe(
      (data) => {
        this.curses = data;
        console.log(this.curses);
      },
      (error) =>{
        console.log(error);
      });
  }

  remove($event: any, cursed: Cursed): void{
    $event.preventDefault();
    console.log("removendo");
    if(confirm('Deseja remover a maldição de "' + cursed.name + '"?')){
      this.cursedServiceService.remove(cursed).subscribe(
        () => {
          console.log("abençoado com sucesso");
          this.listAll();
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

}
