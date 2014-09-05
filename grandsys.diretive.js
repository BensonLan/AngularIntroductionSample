

var grandsysConstractor =function()
{
    var app= angular.module('grandsys.directive',['appFactoryModule']);
    app.directive('grandsysTab',function(appFactoryService)
    {
       return {
            restrict: 'E',
            templateUrl:"grandsysTab.html",
            transclude:true,
            scope: {
                sencondString:"="
        },
          controller:function($scope)
             {
                 $scope.dosomething=function()
                 {
                     return "directiveController";
                 }

                 $scope.usingdirective=function()
                 {
                     return "ok to use directive scope";
                 }
                 appFactoryService.getBensonResult(29).then(
                  function(data)
                 {
                     $scope.bensonResult=data;
                 });
             }
       }
    })

}();

