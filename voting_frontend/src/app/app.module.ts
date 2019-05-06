import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Material libs
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatRadioModule, MatInputModule, MatIconModule, MatSelectModule, MatTableModule,
  MatCheckboxModule, MatCardModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SurveyComponent } from './survey/survey.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { PlotComponent } from './plot/plot.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: 'stats',
    component: StatisticsComponent
  },
  {
    path: '',
    component: SurveyComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    PageNotFoundComponent,
    StatisticsComponent,
    SurveyComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionFormComponent,
    PlotComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
