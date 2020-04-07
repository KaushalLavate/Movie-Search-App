
import { Routes } from "@angular/router";

import { PageComponent } from "../page/page.component";
import { SearchComponent } from "../search/search.component";
import { ModalComponent } from "../modal/modal.component";

export const routes: Routes = [
    { path:'home',component : PageComponent },
    { path:'search',component : SearchComponent },
    { path:'modal',component : ModalComponent },
    { path:'', redirectTo: '/home', pathMatch:'full' }
  ];