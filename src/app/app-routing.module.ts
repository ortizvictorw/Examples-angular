import { ConverterComponent } from './components/converter/converter.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'task', component: TasksComponent },
  { path: 'converter', component: ConverterComponent },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
