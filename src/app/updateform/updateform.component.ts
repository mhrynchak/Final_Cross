import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { Anagram } from '../myform/class/anagram';
import { ValidatorStrService } from '../myform/Service/validatorStr.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})

export class UpdateformComponent implements OnInit { 
  @Input() anagram!: Anagram;
  @Input() show: boolean = true;
  @Output() anagramChange: EventEmitter<Anagram> = new EventEmitter<Anagram>(); 
  @Output() showChange = new EventEmitter();
  
  constructor() { }

  check(str1: any, str2: any) {
    this.show = false;
    let valid = new ValidatorStrService();
    if (valid.validate_str(str1, str2)) {
      if (valid.validate_anagram()) {
        this.anagram = new Anagram(str1, str2);
        this.showChange.emit(this.show);
        this.anagramChange.emit(this.anagram);
      } else throw Error("Дані рядки не є анаграмами")
    } else throw Error("Дані рядки мають різну кількість символів");
  }
  ngOnInit() { }
}
