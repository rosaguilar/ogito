/***************************************************************************
    toolbar.component.ts - displays the main toolbar in OGITO
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
import {Subscription} from 'rxjs';
import {OpenLayersService} from '../open-layers.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {request, gql} from 'graphql-request';
import {AppConfiguration} from '../app-configuration';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  x = 0;
  y = 0;
  startX = 0;
  startY = 0;
  layerSketchName: string;
  subscriptionExistingProject: Subscription;
  existingProject = true;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private openLayersService: OpenLayersService,
              public dialog: MatDialog) {

    iconRegistry.addSvgIcon(
      'layerScratch',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-layers-new-24px.svg')
    );
    iconRegistry.addSvgIcon(
       'noiseAnnoyance',
       sanitizer.bypassSecurityTrustResourceUrl('assets/img/noiseannoyance-24px.svg')
     );
    iconRegistry.addSvgIcon(
       'noiseOrgAnnoyance',
       sanitizer.bypassSecurityTrustResourceUrl('assets/img/organnoyance-24px.svg')
     );
  }

  zoomHome(){
    this.openLayersService.updateZoomHome(true);
  }

  createScratchLayer(): void{
    /**
     * Creates a new sketch layer and add it to the layer panel..
     */
    const dialogRef = this.dialog.open(DialogLayerNameDialog,{
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
          console.log('the dialog layerName was closed', result, result.length);
          this.openLayersService.updateAddSketchLayer(result);
          // console.log('the dialog layerName was closed', result);
        }
      });
    }

  openLayerPanel(){
    this.openLayersService.updateShowLayerPanel(true);
  }

  searchOnMap(){
    alert('Search elements in a OSM layer #TODO');
  }

  findExposedPeople() {
    this.openLayersService.updateFindPopExposed(true);
  }

  processPopLden(data){
    // to process the data, get the sum
   const popExposed = data.nodes.reduce((sum, current) => sum + Number(current.value), 0);
  }
  findExposedInstitutions() {
    this.openLayersService.updateFindInstitutionsExposed(true);
  }
  ngOnInit(): void {
    this.subscriptionExistingProject = this.openLayersService.existingProject$.subscribe(
      (data: any) => this.existingProject = true,
      (error) => {
        alert('error retrieving existing project');
        console.log(error);
      });
  }
  startAction(action: string){
    /**
     *  Sends an action (not edit to the openlayersService)
     */
  }

}

@Component({
  selector: 'dialog-layer-name-dialog',
  templateUrl: 'dialog-layer-name-dialog.html',
})
export class DialogLayerNameDialog {
  sketchName: string;
  constructor( public dialogRef: MatDialogRef<DialogLayerNameDialog>) {
  }

onNoClick(): void {
    this.dialogRef.close();
  }

}

