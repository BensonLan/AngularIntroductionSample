/**
 * Created by YINGCHIEH on 9/5/2014.
 */


var appConstractor =function()
{
    var app= angular.module('appModule',['appFactoryModule','grandsys.directive']);
    app.controller('appController',function($scope,appFactoryService)
    {
        $scope.dosomething=function()
        {
            return "appController";
        }
        appFactoryService.getBensonResult(29)
            .then(
            function(data)
            {
                $scope.name="Benson is"+data;
            },
            function(data)
            {
                $scope.name=data;
            }
        );
    })

}();

