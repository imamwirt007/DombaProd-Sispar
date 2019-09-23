import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: './landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'questionnaire/:questionId', loadChildren: './mainpage/questionnaire/questionnaire.module#QuestionnairePageModule' },
  { path: 'result-page', loadChildren: './mainpage/result-page/result-page.module#ResultPagePageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
