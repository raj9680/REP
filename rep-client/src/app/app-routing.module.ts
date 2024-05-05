import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", loadChildren: () => import("./views/views.module").then(m => m.ViewsModule) },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
