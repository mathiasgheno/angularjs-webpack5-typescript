import './polyfills';
import * as angular from 'angular';

import "./../css/style.less";
const template = require("./test.html");

interface AppControllerScope extends ng.IScope {
  msg: string;
  template: string;
}

angular.module('app', []).controller('AppController', function ($scope: AppControllerScope) {
    $scope.msg = 'Hello!';
    $scope.template = template;
});
