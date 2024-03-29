import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenLayersService {
  private existingProject = new Subject<any>();
  existingProject$ = this.existingProject.asObservable();
  private showEditToolbarSource = new Subject<boolean>();
  showEditToolbar$ = this.showEditToolbarSource.asObservable();
  private layerEditingSource = new Subject <{layerName: any; layerGeom: any; }>();
  layerEditing$ = this.layerEditingSource.asObservable();
  private shapeEditTypeSource = new Subject<string>();
  shapeEditType$ = this.shapeEditTypeSource.asObservable();
  private showSymbolPanelSource = new Subject <boolean>();
  showSymbolPanel$ = this.showSymbolPanelSource.asObservable();
  private showEditLayerPanelSource = new Subject <boolean>();
  showEditLayerPanel$ = this.showEditLayerPanelSource.asObservable();
  private currentSymbolSource = new Subject<any>();
  currentSymbol$ = this.currentSymbolSource.asObservable();
  private saveCurrentLayerSource = new Subject<boolean>();
  saveCurrentLayer$ = this.saveCurrentLayerSource.asObservable();
  private saveAllLayersSource = new Subject<boolean>();
  saveAllLayers$ = this.saveAllLayersSource.asObservable();
  private deleteFeatsSource = new Subject<any>();
  deleteFeats$ = this.deleteFeatsSource.asObservable();
  private editActionSource = new Subject<any>();
  editAction$ = this.editActionSource.asObservable();
  private zoomHomeSource = new Subject<boolean>();
  zoomHome$ = this.zoomHomeSource.asObservable();
  private qgsProjectUrlSource = new Subject<any>();
  qgsProjectUrl$ = this.qgsProjectUrlSource.asObservable();
  private findPopExposedSource = new Subject<any>();  // Population exposed to certain level of noise
  findPopExposed$ = this.findPopExposedSource.asObservable();
  private findInstitutionsExposedSource = new Subject<any>();  // Population exposed to certain level of noise
  findInstitutionsExposed$ = this.findInstitutionsExposedSource.asObservable();
  private addSketchLayerSource = new Subject<string>();
  addSketchLayer$ = this.addSketchLayerSource.asObservable();
  constructor() { }

  updateExistingProject(projectOpened: boolean){
    /**
     * @param projectOpened: indicates if there is a project opened (not a default view)
     */
    this.existingProject.next(projectOpened);
  }
  updateAddSketchLayer(value: string){
    /**
     * @param value: name of the sketch layer
     */
    this.addSketchLayerSource.next(value);
  }

  updateZoomHome(value= true){
    /**
     * sends a request to the map component to go to the Home
     */
    this.zoomHomeSource.next(value);
  }

  updateShapeEditType(shapeEdit: any){
    this.shapeEditTypeSource.next(shapeEdit);
  }

  updateDeleteFeats(active: boolean){
    /** Updates the observable to the next value
     * active: boolean; true or false to allow delete features
     */
    this.deleteFeatsSource.next(active);
  }

  updateEditAction(action: string){
    /** Updates the observable to the next value
     * @parama action: string indicating the action 'ModifyBox', 'Delete', 'Copy' , etc to perform in the map
     */
    this.editActionSource.next(action);
  }

  updateSaveCurrentLayer(save: boolean){
    /** Updates the observable to the next value
     * visible: boolean; true or false to show/hide the editing toolbar
     */
    this.saveCurrentLayerSource.next(save);
  }

  updateSaveAllLayers(save: boolean){
    /** Updates the observable to the next value
     * visible: boolean; true or false to save all edits in all layers
     */
    this.saveAllLayersSource.next(save);
  }

  updateShowEditToolbar(visible: boolean) {
    /** Updates the observable to the next value
     * visible: boolean; true or false to show/hide the editing toolbar
     */
    this.showEditToolbarSource.next(visible);
  }
  updateQgsProjectUrl(url: any)
  {
    this.qgsProjectUrlSource.next(url);
  }

  updateShowLayerPanel(visible: boolean) {
    /** Updates the observable to the next value
     * visible: boolean; true or false to show/hide the layer panel
     */
    this.showEditLayerPanelSource.next(visible);
  }

  updateLayerEditing(layerName, layerGeom){
    /** Updates the observable Geometry type for editing to the next value
     * geom: string; the geometry type: point, line, polygons..
     */
     this.layerEditingSource.next({layerName, layerGeom});
  }

  updateShowSymbolPanel(visible: boolean) {
    /** Updates the observable ShowSymbolPanel to the next value
     * @param visible: boolean true or false to show/hide the editing toolbar
     */
    this.showSymbolPanelSource.next(visible);
  }

  updateCurrentSymbol(symbol: any) {
    /** Updates the observable ShowSymbolPanel to the next value
     * @param symbol: style to be used to draw current feature
     */
    this.currentSymbolSource.next(symbol);
  }
  updateFindPopExposed(data: any) {
    /** Updates the observable popExposed to the next value
     * @param data: the result of the query returned by the API
     */
    this.findPopExposedSource.next(data);
  }

  updateFindInstitutionsExposed(data: any) {
    /** Updates the observable popExposed to the next value
     * @param data: the result of the query returned by the API
     */
    this.findInstitutionsExposedSource.next(data);
  }
}
