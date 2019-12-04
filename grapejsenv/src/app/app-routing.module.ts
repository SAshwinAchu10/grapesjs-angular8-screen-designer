import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testpage1Component } from './testpage1/testpage1.component';
import { EditorComponent } from './editor/editor.component';
import { ResolvejsonComponent } from './resolvejson/resolvejson.component';

const routes: Routes = [
  { path: 'one', component: Testpage1Component },
  {path: 'editor', component: EditorComponent},
  {path: 'resolve', component: ResolvejsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
