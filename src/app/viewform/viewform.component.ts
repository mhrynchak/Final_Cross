import { Component, OnInit } from '@angular/core';
import { Anagram } from '../myform/class/anagram';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  show_update: boolean = false;
  anagrams: Anagram[] = [];
  constructor() { }
  ngOnInit() {}
  addAnagram(event: any) {
    if (event as Anagram) {
      let anagram: Anagram = event;
      this.anagrams.push(anagram);
      console.log(this.anagrams);
    }
    else {
      throw new Error("Type error");
    }
  }
  update() { this.show_update = true; }
  showUp(event: any) {
    if (typeof event === "boolean") {
      this.show_update = event;
    }
    else {
      throw new Error("Type error");
    }
  }
  update_save(event: any, i: number) {
    if (event as Anagram) {
      this.anagrams[i] = event;
    }
    else {
      throw new Error("Type error");
    }
  }
}
