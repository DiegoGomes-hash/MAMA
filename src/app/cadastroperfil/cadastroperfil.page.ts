import { AnprecService } from "./../anprec.service";
import { Component, OnInit } from "@angular/core";
import { ToastController, MenuController } from "@ionic/angular";
import { Paciente } from "../Models/paciente";
import { Router } from "@angular/router";
import { StorageloginService } from "./../storagelogin.service";

import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "app-cadastroperfil",
  templateUrl: "./cadastroperfil.page.html",
  styleUrls: ["./cadastroperfil.page.scss"]
})
export class CadastroperfilPage implements OnInit {
  loadForm: FormGroup;
  sim: any;

  data: Paciente;

  constructor(
    public toastController: ToastController,
    public router: Router,
    public AnprecService: AnprecService,
    public formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public file: StorageloginService,
    private anprec: AnprecService
  ) {
    this.data = new Paciente();
    this.loadForm = this.formBuilder.group({
      nome: new FormControl("", Validators.required),
      genero: new FormControl("", Validators.required),
      cintura: new FormControl("", Validators.required),
      aumentou: new FormControl("", Validators.required),
      idade: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      //diaava: new FormControl("", Validators.required),
      //mesava: new FormControl("", Validators.required),
      //anoava: new FormControl("", Validators.required),
      diadiag: new FormControl("", Validators.required),
      mesdiag: new FormControl("", Validators.required),
      anodiag: new FormControl("", Validators.required),
      pesoatual: new FormControl("", Validators.required),
      estatura: new FormControl("", Validators.required),
      pesohabitual: new FormControl("", Validators.required)
    });

    this.data.imc =
      Number(this.data.pesoatual) /
      (Number(this.data.estatura) * Number(this.data.estatura));

    this.sim = false;

    this.file.pegaUsuario().then((user: any) => {
      if (user != null) {
        this.sim = true;
        this.anprec.pegarusuario(user).subscribe(response => {
          this.data.nome = response.nome;
          this.data.email = response.email;
          this.data.cintura = response.cintura;
          this.data.aumentou = response.aumentou;
          this.data.genero = response.genero;
          this.data.senha = response.senha;
          this.data.diadiag = response.diadiag;
          this.data.mesdiag = response.mesdiag;
          this.data.anodiag = response.anodiag;
          this.data.pesoatual = response.pesoatual;
          this.data.pesohabitual = response.pesohabitual;
          this.data.idade = response.idade;
          this.data.estatura = response.estatura;
        });
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Cadastro realizado com sucesso.",
      duration: 2000
    });
    toast.present();
  }

  async att() {
    const toast = await this.toastController.create({
      message: "Cadastro atualizado com sucesso.",
      duration: 2000
    });
    toast.present();
  }

  Deslogar() {
    this.file.deslogar("chave");
    this.router.navigate(["login"]);
  }

  submitForm() {
    this.AnprecService.cadastro(this.data).subscribe(response => {
      this.router.navigate(["login"]);
      this.presentToast();
    });
  }

  atualizar() {
    this.AnprecService.cadastro(this.data).subscribe(response => {
      this.router.navigate(["folder"]);
      this.att();
    });
  }

  ionViewWillEnter() {
    if (this.sim == false) {
      this.menuCtrl.enable(true);
    }
  }

  ngOnInit() {
    // this.loadForm = new FormGroup({
    //   nome: new FormControl("", Validators.required),
    //   genero: new FormControl("", Validators.required),
    //   email: new FormControl("", Validators.required),
    //   //diaava: new FormControl("", Validators.required),
    //   //mesava: new FormControl("", Validators.required),
    //   //anoava: new FormControl("", Validators.required),
    //   diadiag: new FormControl("", Validators.required),
    //   mesdiag: new FormControl("", Validators.required),
    //   anodiag: new FormControl("", Validators.required),
    //   pesoatual: new FormControl("", Validators.required),
    //   estatura: new FormControl("", Validators.required),
    //   pesohabitual: new FormControl("", Validators.required)
    // });
  }
}
