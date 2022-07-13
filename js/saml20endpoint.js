chrome.storage.local.get(
    ['uido_id'],
    function (value_id) {
        var myID = value_id.uido_id;
        document.getElementById("username").value = myID;
        var bt = document.querySelectorAll("button[type=submit]");
        bt[0].id = "login";
        document.getElementById("login").click();
    }
);