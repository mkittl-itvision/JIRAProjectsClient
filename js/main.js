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
    document.all.projectOutput.innerHTML = "<p>rufe rest service auf</p>";
    
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
    
    document.all.projectOutput.innerHTML += "<p>ajax erhalten ...</p>" ;
    
    if (ajax != null) {
        document.all.projectOutput.innerHTML += "<p>call rest service ... " + usrn + "</p>";
        document.all.projectOutput.innerHTML += "<p> Basic " + btoa(usrn + ":" + pwrd) + "</p>";

        var jiraUrl = encodeURI("https://itvision.atlassian.net/jira/rest/api/latest/project");
        document.all.projectOutput.innerHTML += "<p>url : " + jiraUrl + "</p>";
        ajax.open("GET", jiraUrl, false);
        ajax.setRequestHeader("Authorization", "Basic " + btoa(usrn + ":" + pwrd));
        ajax.setRequestHeader("Content-Type", "application/json");
/*        document.all.projectOutput.innerHTML += "<p>service called ... waiting for response</p>";
        ajax.onreadystatechange = function () {
            document.all.projectOutput.innerHTML += "<p>onreadystatechange wurde aufgerufen " + 
                ajax.status + " ... " + this.readyState + "</p>";
            document.all.projectOutput.innerHTML += "<p>Response : "+ this.responseText + "</p>";
            document.all.projectOutput.innerHTML += "<p>Status text : " + this.statusText + "</p>";
            if (this.readyState == 4) { // 0 = unsent, 1 = opened, 2 = headers_received, 3 = loading, 4 = done
                if (this.status == 200) { // response ok
                    var response = this.responseText;
                    document.all.projectOutput.innerHTML += "<p>" + response + "</p>";
                } else {
                    document.all.projectOutput.innerHTML += "<p>" + this.statusText + "</p>";
                }
            }
        }*/
        document.all.projectOutput.innerHTML += "<p>sende Informationen an jira ...</p>";
        ajax.send(null);
        document.all.projectOutput.innerHTML += "<p>status " + ajax.readyState + " - " + ajax.status + "</p>";
        document.all.projectOutput.innerHTML += "<p>Informationen wurden gesendet ..." + ajax.responseText + "</p>";
    } else {
        alert("ajax kann leider nicht ausgeführt werden!");
        document.all.projectOutput.innerHTML += "<p>ajax kann leider nicht ausgeführt werden!</p>";
    }
    
    return false;
}
