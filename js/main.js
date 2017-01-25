var iconBell          = document.getElementById("toggleTopNotifications");
var timesCloseBell    = document.getElementById("closeNotifications");

// Toggle Alert Box
function toggleAlertBox()
{
  var container_bell = document.getElementById("containerTopNotifications");

  container_bell.classList.toggle('active');
}

iconBell.onclick = function(e){
  toggleAlertBox();
}

timesCloseBell.onclick = function(e){
  toggleAlertBox();
}
