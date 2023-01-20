
/***************************************************************************
    map.component.ts - map visualization in OGITO
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
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  showInfo(){
    //alert("Aqui se muestra la info");
    alert("Your screen dimensions are: " + screen.width + "x" + screen.height);
  }
  editSettings(){
    // Here you can edit the project to be display
    console.log('add code to edit settings, e.g., project to edit..');
  }
  exitToApp(){
    confirm("Exiting app");
  }
}
