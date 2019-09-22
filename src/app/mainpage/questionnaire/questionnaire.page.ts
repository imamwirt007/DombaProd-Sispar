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
  prev: number;
  next: number;
  prevId: string;
  nextId: string;
  questionData: Question;
  pageId: string;
  ngOnInit() {
    this.prev = 0;
    this.next = 2;
    this.activatedRouter.paramMap.subscribe( param => {
        this.pageId = param.get('questionId');
        this.questionData = this.question.getQuestion(this.pageId);
        this.prevId = 'G' + this.prev ;
        this.nextId = 'G' + this.next ;
      }
    )
  }

  nextQuestion(){
    this.prev = this.prev + 1;
    this.next = this.next + 1;
    this.route.navigate(['./questionnaire/G' + this.next])
  }

  prevQuestion(){
    this.prev = this.prev - 1;
    this.next = this.next - 1;
    this.route.navigate(['./questionnaire/G' + this.prev])
  }

}
