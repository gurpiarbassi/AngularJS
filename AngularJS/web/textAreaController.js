/*The app variable was already declared in app.js
 *
 *Now we are assigning a controller called TextAreaController to
 the previously declared app.
 */
app.controller("TextAreaWithLimitCtrl", function($scope){
	
	var MAX_LEN = 50;
	var WARN_THRESHOLD = 5;
	
	$scope.message = "";
		
	$scope.remaining = function () {
		return MAX_LEN - $scope.message.length;
	};
	
	$scope.shouldWarn = function () {
		return $scope.remaining() < WARN_THRESHOLD;
	};
	
	$scope.hasValidLength = function () {
		return $scope.message.length <= MAX_LEN;
	};
	
	$scope.clear = function () {
		return $scope.message = "";
	};
});