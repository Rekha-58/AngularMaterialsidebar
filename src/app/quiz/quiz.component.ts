import { Component } from '@angular/core';
import { Quizmodel } from './quiz.model';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
 /* quizQuestions: any = [
    {
      question: "Which of the following element is responsible for making the text bold in HTML?",
      options: ["<a>", "<pre>", "<br>", "<b>"],
      correctAnswer: "<b>"  },
    {
      question: "Which of the following HTML attribute is used to define inline styles?",
      options: ["style", "type", "class", "none of the above"],
      correctAnswer: "style"},
    {
      question: "The tags in HTML are : ",
      options: ["case-sensitive", "in upper case", "not case sensitive", "in lowercase"],
      correctAnswer: "not case sensitive"
    }
  ];*/
  
myarray: String[] = [];
i: number = 0;
languages: String[] = [ "Html"];
 newstr: any
  
  quizlist: Quizmodel[] = [
    {
      ID: 1, language: "Html", question: "Which of the following element is responsible for making the text bold in HTML?", anslistobj: ["<a>", "<pre>", "<br>", "<b>"], answer: "<b>"
    },
    {
      ID: 2, language: "Html", question: "Which of the following HTML attribute is used to define inline styles?", anslistobj: ["style", "type", "class", "none of the above"], answer: "style"
    },
    {
      ID: 3, language: "Html", question: "The tags in HTML are : ", anslistobj: ["case-sensitive", "in upper case", "not case sensitive", "in lowercase"], answer: "not case sensitive"
    },
   
  ];

  /******************************************************* */
quizlength: any=10;
selectedlanguage: any[] = [];
question: any;
selectedvalue: any;
option: any=[];
selectedlanques: any=[];
gettinglanguage() {
this.selectedlanques =  this.quizlist.filter(d => (d.language == this.selectedvalue));
this.question = this.selectedlanques[0].question;
this.option = this.selectedlanques[0].anslistobj;
this.i = 0;
this.quizlength = this.selectedlanques.length;
  }

  /******************************************************** */
  next() {   
    ++this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }
  previous() {
    --this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }

/********************************************************* */
  
  answerkey: AnswerKey[] = [];

  check(e:any, str: String, answer: String) {
    if (e.target.checked) {
      console.log("..................."+str + " " + answer);
      this.answerkey.push(new AnswerKey(str, answer));
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen == this.quizlist[i].answer) this.marks++;
    }
     alert("your score is "+JSON.stringify(this.marks));
    document.writeln("your score is " + this.marks);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.quizlist;
    var result2 = this.answerkey;

    var props = ['id', 'answer'];

    var result = result1.filter(function (o1) {
      // filter out (!) items in result2
      return result2.some(function (o2) {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map(function (o:any) {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce(function (newo:any, ans:any) {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log("result:" + JSON.stringify(result));
  }


}

export class AnswerKey {
  choosen: String;
  answer: String;
  constructor(choosen: String, answer: String) {
    this.choosen = choosen;
    this.answer = answer;
  }



}