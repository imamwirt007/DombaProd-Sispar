import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question-model';
import { QuestionServiceService } from 'src/app/service/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

  constructor(private question: QuestionServiceService,
              private activatedRouter: ActivatedRoute,
              private route: Router,
    ) { }
  prev = 0;
  next = 2;
  prevData: Question;
  nextData: Question;
  questionData: Question;
  pageId: string;
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe( param => {
        this.pageId = param.get('questionId');
        this.questionData = this.question.getQuestion(this.pageId);
        this.prevData = this.question.getQuestion('G' + this.prev);
        this.nextData = this.question.getQuestion('G' + this.next);
      }
    )
  }

  nextQuestion() {
    this.route.navigate(['./questionnaire/' + this.nextData.kode_gejala]);
  }

  prevQuestion() {
    this.route.navigate(['./questionnaire/' + this.prevData.kode_gejala]);
  }

  submit(){
    this.route.navigate(['./result-page']);
  }

}
