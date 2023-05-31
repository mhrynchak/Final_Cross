import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Anagram } from './class/anagram';
import { AlertController } from '@ionic/angular';
import { ValidatorStrService } from './Service/validatorStr.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  anagramForm!: FormGroup;
  anagram!: Anagram;

  @Output() anagramAdd: EventEmitter<Anagram> = new EventEmitter<Anagram>();
  constructor(private fb:FormBuilder, private alertController: AlertController) {
    this.anagramForm = this.fb.group({
        anagramStr1: ['', [Validators.required]],
        anagramStr2: ['', [Validators.required]],
      }
    )
  }

  onSubmit() {
    let str1 = this.anagramForm.value.anagramStr1;
    let str2 = this.anagramForm.value.anagramStr2;

    let valid = new ValidatorStrService();

    if (valid.validate_str(str1, str2)) {
      if (valid.validate_anagram()){
        this.anagram = new Anagram(str1, str2);
        console.log("Submit: ", this.anagram);
        this.anagramAdd.emit(this.anagram);
      } else {
        this.presentAlert("Дані рядки не є анаграмами")
      }
    } else {
      this.presentAlert("Дані рядки мають різну кількість символів")
    }
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {}
}
