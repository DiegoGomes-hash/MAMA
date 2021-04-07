import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CadastroperfilPage } from "./cadastroperfil.page";

const routes: Routes = [
  {
    path: "",
    component: CadastroperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroperfilPageRoutingModule {}
