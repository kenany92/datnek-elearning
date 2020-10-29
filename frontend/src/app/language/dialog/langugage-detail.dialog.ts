import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Language } from '../language.model';

@Component({
    selector: 'app-language-detail',
    templateUrl: './langugage-detail.dialog.html'
})
export class LanguageDetailDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public language: Language) { }

    ngOnInit(): void {

    }

}
