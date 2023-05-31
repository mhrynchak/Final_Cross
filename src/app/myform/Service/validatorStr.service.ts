import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ValidatorStrService {
    formattedStr1:string="";
    formattedStr2:string="";

    validate_str(str1: string, str2: string) {
        this.formattedStr1 = str1.replace(/\s/g, '').toLowerCase();
        this.formattedStr2 = str2.replace(/\s/g, '').toLowerCase();
        
        return this.formattedStr1.length == this.formattedStr2.length;
    }

    validate_anagram() {
        const sortedStr1 = this.formattedStr1.split('').sort().join('');
        const sortedStr2 = this.formattedStr2.split('').sort().join('');
    
        return sortedStr1 === sortedStr2;
    }

    constructor() { }
}