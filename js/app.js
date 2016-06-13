/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('appointmentApp',['ui.router','ngResource','appointmentApp.controllers','appointmentApp.services']);

angular.module('appointmentApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('appointments',{
        url:'/appointments',
        templateUrl:'partials/appointments.html',
        controller:'AppointmentListController'
    }).state('viewAppointment',{
       url:'/appointments/:id/view',
       templateUrl:'partials/appointment-view.html',
       controller:'AppointmentViewController'
    }).state('newAppointment',{
        url:'/appointments/new',
        templateUrl:'partials/appointment-add.html',
        controller:'AppointmentCreateController'
    }).state('editAppointment',{
        url:'/appointments/:id/edit',
        templateUrl:'partials/appointment-edit.html',
        controller:'AppointmentEditController'
    });
}).run(function($state){
   $state.go('appointments');
});