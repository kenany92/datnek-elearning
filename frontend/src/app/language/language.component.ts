import { Component, EventEmitter, OnInit } from '@angular/core';
import { Language } from './language.model';
import { LanguageService } from './language.service';
import {TranslateService} from '@ngx-translate/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDetailDialogComponent } from './dialog/langugage-detail.dialog';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  languages: Language[] = [];

  langs: any = {
    en: 'ENGLISH',
    fr: 'FRENCH',
    nl: 'DUTCH'
  };

  selectedLang = '';

  languageForm: any;

  languagesCount = 0;

  modalStatus = {
    message: 'MODAL_CLOSED_MSG',
    color: 'gray'
  };

  constructor(private service: LanguageService,
              private translate: TranslateService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.getAll().subscribe((datas: Language[]) => {
      this.languages = datas;
      this.languagesCount = datas.length;
    });

    const currentLang = this.translate.defaultLang;

    this.selectedLang = this.langs[currentLang];

    this.languageForm = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required]),
        spoken: new FormControl('', [Validators.required]),
        written: new FormControl('', [Validators.required]),
        understanding: new FormControl('', [Validators.required]),
      }
    );

    this.dialog.afterOpened.subscribe(() => {
      this.modalStatus.color = '#36c936';
      this.modalStatus.message = 'MODAL_OPENED_MSG';
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.modalStatus.color = 'gray';
      this.modalStatus.message = 'MODAL_CLOSED_MSG';
    });
  }

  loadLanguage(lang: string): void {
    this.translate.use(lang);
    this.selectedLang = this.langs[lang];
  }

  save(): void {
    const lang = new Language();
    lang.name = this.languageForm.get('name')?.value;
    lang.spoken = this.languageForm.get('spoken')?.value;
    lang.written = this.languageForm.get('written')?.value;
    lang.understanding = this.languageForm.get('understanding')?.value;

    this.service.create(lang).subscribe((response) => {
      const saved = response.body;
      if (saved){
        this.languages.push(saved);
        this.languagesCount++;
      }
    }, (err) => {
      console.log(err);
    });
  }

  showModal(item: Language | any): void {
    this.dialog.open(LanguageDetailDialogComponent, {
      width: '450px',
      position: {
        top: '20px'
      },
      data: item
    });
  }

}
