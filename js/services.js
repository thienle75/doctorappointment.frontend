
angular.module('appointmentApp.services',[]).factory('Appointment',function($resource){
    return $resource('http://doctorappointment.api/appointment/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});