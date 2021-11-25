import './polyfills';
import * as angular from 'angular';

angular.module('app', []);

function requireAll(r: any) { r.keys().forEach(r); }
// requireAll(require.context('./modules/', true, /^(?!.*\.(test|spec)\.js$).*\.(js)$/));
requireAll(require.context('./components/', true, /^(?!.*\.(test|spec)\.js$).*\.(js|ts)$/));
