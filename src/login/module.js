'use strict';
var angular = require('angular');
var ngRoute = require('angular-route');
var LoginController = require('./controller');
var template = require('./login.html');
var serverInterface = require('../server_interface/module');
var serverListFactory = require("./servers_list");
var currentUser = require("./current_user");

module.exports = angular.module('cardshifter.login', [ngRoute, serverInterface.name])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            controller: LoginController,
            template: template
        });
    })
    .factory("ServerList", serverListFactory)
    .factory("CurrentUser", currentUser);
