import { Routes } from '@angular/router';

import { ThrowComponent } from './throw/throw.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    {path: 'throw', component: ThrowComponent},
    {path: 'Results', component: ResultsComponent}
];
