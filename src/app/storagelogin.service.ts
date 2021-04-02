import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Login } from "./Models/login";
import { AnprecService } from "./anprec.service";

@Injectable({
  providedIn: "root"
})
export class StorageloginService {
  constructor(private storage: Storage) {}

  pegaUsuario() {
    let user = this.storage.get("chave");
    return user;
  }

  public logar(login: Login) {
    let key = "chave";
    return this.save(key, login);
  }

  deslogar(key: string) {
    return this.storage.remove(key);
  }

  private save(key: string, login: Login) {
    return this.storage.set(key, login);
  }
}
