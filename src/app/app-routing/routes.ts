
import { Routes } from "@angular/router";

import { PageComponent } from "../components/page/page.component";
import { ModalComponent } from "../components/modal/modal.component";
import { WatchlistComponent } from "../components/watchlist/watchlist.component";
import { MovieDetailsComponent } from "../components/movie-details/movie-details.component";

export const routes: Routes = [
    { path:'home',component : PageComponent },
    { path:'search/:movieName',component : PageComponent },
    { path:'Watchlist',component : WatchlistComponent },
    { path:'modal',component : ModalComponent },
    { path:'movie/:movieId',component:MovieDetailsComponent},
    { path:'', redirectTo: '/home', pathMatch:'full' }
  ];