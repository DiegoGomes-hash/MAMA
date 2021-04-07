import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageloginService } from "./../storagelogin.service";
import { NewsFeedsService } from '../news-feeds.service';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss'],
})
export class DicasPage implements OnInit {
  articles:any;

  constructor( 
    public router: Router,
    public file: StorageloginService,
    private newsService:NewsFeedsService) { 
      this.loadNews()
    }

    loadNews(){
      this.newsService.getNews("everything?q=câncer-mama").subscribe( news =>  {
        this.articles = news['articles'];
        console.log(this.articles);
      })

    }

  ngOnInit() {
  }

 Deslogar() {
    this.file.deslogar("chave");
    this.router.navigate(["login"]);
  }

}
