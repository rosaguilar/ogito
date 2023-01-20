/***************************************************************************
dialog-result-exposed.ts - Dialog to present results in OGITO
    ---------------------
    begin                : Oct 2020
    copyright            : (C) 2020 by Rosa Aguilar
    email                :  rosamaguilar at gmail dot com / r.aguilar at utwente dot nl
 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {DialogNoisePopData} from '../dialog-population-exposed/dialog-population-exposed.component';

// To use noise levels population dialogs
export interface DialogResultData {
  summary: any;
  totalCount: number;
}

@Component({
  selector: 'app-dialog-result-exposed',
  templateUrl: './dialog-result-exposed.component.html',
  styleUrls: ['./dialog-result-exposed.component.scss']
})
export class DialogResultExposedComponent implements OnInit {
 // text: string;

 constructor(public dialogRef: MatDialogRef<DialogResultExposedComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogResultData) {

  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close();
  }
}
