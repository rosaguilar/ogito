/***************************************************************************
    app-configuration.ts - static parameters in OGITO
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

export class AppConfiguration{
  static hostname = '';
  static wmsVersion  = '1.3.0' ;
  static wfsVersion = '1.1.0';
  static wmtsVersion = '1.0.0';
  static qgsProject = 'checking2.qgs';  // shapefiles
  static srsName = 'EPSG:25832';
  // Path to access projects
  static curProject =  AppConfiguration.hostname + 'qgs_projects/' + AppConfiguration.qgsProject;  // to fecth the xml project file
  static svgFolder = '../../assets/svg/';
  static svgUrl =  AppConfiguration.hostname + 'svg/';
  static qgsProjectFolder =  '/home/qgis/projects/'
  // Path to use from to use with the qgis server
  static QgsFileProject = AppConfiguration.qgsProjectFolder + AppConfiguration.qgsProject; // 
  static mapZoom = 14;
  static maxZoom = 20 ;
  static minZoom = 8 ;
  static threshold = 1000; // Distance in meter to close a polygon being drawn with a line.
  static projDefs = {
    25832: '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  };
  // raster icon used as symbol for WMS layers
  static rasterIcon =  'data:image/png;base64,' + 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAXE' +
    'gAAFxIBZ5/SUgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIJSURBVFiF7dfNSxVhFMfxz71zkd40X1KzrZgmQRQF/Qkt2oSLWvive' +
    'HkIyoyyPyhKsqjoDSK5ILbIlXsX6tUZp0UpNi+kBGkx39XwnPN75vfAM+fMoeI/obbzEIRjmMNAJqeNySB8yoqDcArP0ZcJbdTV7zQ1vxRouvEM3Zn' +
    'QeiSamDK1CI2d1YZGXyy+XnKAi8gZi0SDieRakSCVjiNnDOdwpUizbXsMi1AvMXLoVMYOypE1tnv5Y/EKHsp/LUlDY65InEiW8RidmVCcSl+WvPMrn' +
    'uBkZn0rlb7Zr/GKioq/zW4TnzV7fNXqPHozOXFdfbKp+T4rnjHTuW79BU5nQlt19dtNzc9ZzbTpnrb2nHyJ2cREEFrsqWNr1npxtcj9tu0LyBnbtDmA' +
    'y0WaVDqGnLG29hAuFWlqaiNocYQrf2XsoOzLWE0tPejGqfSPNNkmfh9nMvlbkeh50UajRr+1tIoa/ybmizRDhpZWrDxCVybUxut9naCiouIQ2DuJn8B' +
    'HDGZy2rgVhLdZcRC68EG+xGzgZsn03ot38j8La7gRhAV+ncR7YvFYyQHOI2csEvUnkpEiwc+GnDOGsxguWO+pqQ1jgX+9JR0GR99YLC5tumVNPJGUas' +
    'qaeCTal2b38gdhJQh3/bice9lIpU+LNho3vtzSuof+TGi9Q0fZ9L6EB4q/yldlpit+x3fslpvzPO+TtwAAAABJRU5ErkJggg==';

  // Values for range in slider
  static range = { min: 0, max: 10};
  static ranges = {
     'intensity_auto': {min: 0, max: 10},
     'intensity_schiene': {min: 0, max: 10},
     'intensity_kinder': {min: 0, max: 10},
     'intensity_sonstiges': {min: 0, max: 10},
     'intensity_arbeit': {min: 0, max: 10},
     'intensity_bus': {min: 0, max: 10},
  };
  static fieldsOrder = {
    'laute_orte': {
       'name': 1,
       'laermquelle_auto': 2,
       'intensitaet_auto': 3,
       'laermquelle_schiene': 4,
       'intensitaet_schiene': 5,
       'laermquelle_sonstiges': 6,
       'intensitaet_sonstiges': 7,
       'laerm_morgens': 8,
       'laerm_tagsuber': 9,    // noise must be changed to laerm
       'laerm_abends': 10,
       'laerm_nachts': 11
    },
    'massnahmen': {
      beschreibung: 1,
      fahrspurreduzierung: 2,
      fluesterasphalt: 3,
      geschwindigkeitsreduzierung: 4,
      park_ride: 5,
      schallschutzfenster: 6,
      sonstiges: 7
    }
    };
  static ratingPrex = {
    'leise_Orte_obs': 'rank_'
  };

  static ratingMax = 5;
  static ratingMin = 1;

  /* Layers available for ranking and method of ranking
   *  rankingMethod  choose between 'allFiveStars' or 'oneFiveStars'
   *  rankingLayers array of layers available for ranking
   */
  static rankingMethod = 'allFiveStars';    // Change to 'oneFiveStars'  =>
  // static rankingLayers = ['massnahmen_laute', 'massnahmen_leise'];
  // indicate which layers contain measures
  static ratingMeasureLayers = {
    massnahmen: ['geschwindigkeitsreduzierung', 'fluesterasphalt', 'schallschutzfenster', 'park_ride', 'fahrspurreduzierung', 'sonstiges'],
   // massnahmen_leise: ['schutz', 'visuelle _verbesserung', 'zuganglichkeit_verbessern', 'sicherheit']
  };
  static fieldDesc = {
    massnahmen: 'beschreibung'
  };
  static fieldOther = {
    massnahmen: 'sonstiges'
  };
  static actionPlanLayerName = 'massnahmen';
  // configure layers to add more features or not.
  static noAddingFeatsLayers = [ 'massnahmen_leise']; //'massnahmen_laute',
  /* layers below will have a default style for LDEN noise map taken from train_LDEN*/
  static urlLegendLDEN = {
    'GECCO Noise Munster': {'IVU_LDEN': '', 'SCH_Bund_LDEN': '', 'SCH_Sonstige_LDEN': '', 'STR_LDEN': ''}
  };
  static totalPopBochumArea =  64966.73;  // Result of the SQL query: select sum(population.value) as Sum   from population
  static noiseGroupName = 'Laermkarten';  // in lower case
  static institutionsGroupName = 'oeffentliche_einrichtungen';  // in lower case
  static nameSessionGroup = 'sessionGroup';
}
