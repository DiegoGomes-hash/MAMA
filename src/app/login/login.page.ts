import { StorageloginService } from "./../storagelogin.service";
import { AnprecService } from "./../anprec.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../Models/login";
import { ToastController, MenuController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  toast: any;
  model: Login;

  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    public toastController: ToastController,
    public AnprecService: AnprecService,
    public StorageloginService: StorageloginService
  ) {
    this.model = new Login();
  }

  ngOnInit() {}

  cadastrar() {
    this.router.navigate(["cadastroperfil"]);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Login efetuado com sucesso.",
      duration: 2000
    });
    toast.present();
  }

  async erro() {
    const toast = await this.toastController.create({
      message: "Dados invalidos.",
      duration: 2000
    });
    toast.present();
  }

  login() {
    this.AnprecService.entrar(this.model).subscribe(response => {
      if (response.email == this.model.email) {
        this.router.navigate(["folder/1"], { skipLocationChange: true });
        this.StorageloginService.logar(this.model);
        this.presentToast();
      } else {
        this.erro();
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
