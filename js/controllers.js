/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('appointmentApp.controllers',[]).controller('AppointmentListController',function($scope,$state,popupService,$window,Appointment){

    $scope.appointment=Appointment.query();

    $scope.deleteAppointment=function(appointment){
        if(popupService.showPopup('Really delete this?')){
            appointment.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('AppointmentViewController',function($scope,$stateParams,Appointment){

    $scope.appointment=Appointment.get({id:$stateParams.id});

}).controller('AppointmentCreateController',function($scope,$state,$stateParams,Appointment){

    $scope.appointment=new Appointment();

    $scope.addAppointment=function(){
        $scope.appointment.$save(function(){
            $state.go('appointments');
        });
    }

}).controller('AppointmentEditController',function($scope,$state,$stateParams,Appointment){

    $scope.updateAppointment=function(){
        $scope.appointment.$update(function(){
            $state.go('appointments');
        });
    };

    $scope.loadAppointment=function(){
        $scope.appointment=Appointment.get({id:$stateParams.id});
    };

    $scope.loadAppointment();
});