/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material/sidenav' : 'vendor/@angular2-material/sidenav/sidenav.js',
  '@angular2-material/toolbar' : 'vendor/@angular2-material/toolbar/toolbar.js',
  '@angular2-material/button' : 'vendor/@angular2-material/button/button.js',
  '@angular2-material/card' : 'vendor/@angular2-material/card/card.js',
  '@angular2-material/input' : 'vendor/@angular2-material/input/input.js',
  '@angular2-material/grid-list' : 'vendor/@angular2-material/grid-list/grid-list.js',
  'vendor/@angular2-material/grid-list/grid-tile' : 'vendor/@angular2-material/grid-list/grid-tile.js',

  '@angular2-material/core/rtl' : 'vendor/@angular2-material/core/rtl/dir.js',
  '@angular2-material/core/rtl/dir' : 'vendor/@angular2-material/core/rtl/dir.js',
  '@angular2-material/core/annotations/field-value' : 'vendor/@angular2-material/core/annotations/field-value.js',
  '@angular2-material/core/async' : 'vendor/@angular2-material/core/async/promise-completer.js',
  '@angular2-material/core/async/promise-completer' : 'vendor/@angular2-material/core/async/promise-completer.js',
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material': { format: 'cjs', defaultExtension: 'js' },
  '@angular2-material/grid-tile': { defaultExtension: 'js' },
  'angular2-google-maps': { defaultExtension: 'js' },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/login-page',
  'app/home-page',
  'app/top-area',
  'app/admin-page',
  'app/main-page',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
