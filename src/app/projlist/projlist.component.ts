
/***************************************************************************
    projlist.component.ts - displays a list of available projects in OGITO
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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppConfiguration} from '../app-configuration';
import {Observable, of as observableOf} from 'rxjs';
import {OpenLayersService} from '../open-layers.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-projlist',
  templateUrl: './projlist.component.html',
  styleUrls: ['./projlist.component.scss']
})
export class ProjlistComponent implements OnInit {
  @Output() selectProject = new EventEmitter<any>();
  showProjectList$: Observable<boolean>;
  projectFolder = '/home/qgis/projects/';
  projects = [
    {
      name: 'Noise Action Plan Bochum - City',
      url: AppConfiguration.hostname + 'qgs_projects/noisebochumcity.qgs',
      file: this.projectFolder + 'noisebochumcity.qgs',     // was checking4
      img: AppConfiguration.hostname + 'qgs_projects/noise.png',
      qGsServerUrl: 'https://ogito.itc.utwente.nl/cgi-bin/qgis_mapserv.fcgi?',
      srsID: 'EPSG:3857'   //EPSG CODE
    }
   ];

  constructor( private  openLayersService: OpenLayersService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.showProjectList$ = observableOf(true);
  }
 sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
 }
  updateShowProjectList(value) {
    this.showProjectList$ = observableOf(value);
  }
  setProject(project: any) {
    this.openLayersService.updateQgsProjectUrl(project);
    this.updateShowProjectList(false);
  }

}
