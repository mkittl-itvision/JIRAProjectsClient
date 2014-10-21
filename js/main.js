/*
    Nur zum testen ob wie die beiden felder angewählt werden
*/
function showUserPw() {
    var usrn = document.projectForm.username.value;
    var pwrd = document.projectForm.pw.value;
    alert('user : ' + usrn + ', passwd : ' + pwrd);
}

/*
    Test um eine Projekliste von Jira zu erhalten
    (ist von selfhtml abgekupfert)
*/
function testAjaxRestCall() {
    var usrn = document.projectForm.username.value;
    var pwrd = document.projectForm.pw.value;
    var ajax;
    
    if (window.XMLHttpRequest) { //Google Chrome, Mozilla Firefox, Opera, Safari,..
        ajax = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {
            try {
                ajax = new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
        }
    }
    
    if (ajax != null) {
        ajax.open("GET", "https://itvision.atlassian.net/rest/api/2/project", true, usrn, pwrd);
        /* TODO hier fortfahren */
    } else {
        alert("ajax kann leider nicht ausgeführt werden!");
    }
}