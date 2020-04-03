
import { Routes } from "@angular/router";

import { PageComponent } from "../page/page.component";
import { SearchComponent } from "../search/search.component";

export const routes: Routes = [
    { path:'home',component : PageComponent },
    { path:'search',component : SearchComponent },
    { path:'', redirectTo: '/home', pathMatch:'full' }
  ];