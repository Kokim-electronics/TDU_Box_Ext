chrome.storage.local.get(
    ['uido_pass'],
    function (value_pass) {
        var mypass = value_pass.uido_pass
        document.getElementById("password").value = mypass;
        var bt = document.querySelectorAll("button[type=submit]");
        bt[0].id = "login";
        document.getElementById("login").click();
    }
);