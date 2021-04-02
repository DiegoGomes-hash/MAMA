import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageloginService } from "./../storagelogin.service";



@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss'],
})
export class DicasPage implements OnInit {




  constructor( 
    public router: Router,
    public file: StorageloginService) { }

  ngOnInit() {
    console.log('Vou compar');
  }
  

 Deslogar() {
    this.file.deslogar("chave");
    this.router.navigate(["login"]);
  }

}
