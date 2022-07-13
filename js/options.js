"use strict";
// Save the record to storage
function save() {
    var value_id = $('#uido_id').val();
    var value_pass = $('#uido_pass').val();
    $("#resultlb").text('設定が成功しました．');
    chrome.storage.local.set({ uido_id: value_id, uido_pass: value_pass });
}

$('#confirmbtn').on('click', save);
// Initialize the record from storage
chrome.storage.local.get(function (item) {
    $("#uido_id").val(item.uido_id);
    $("#uido_pass").val(item.uido_pass);
});
//# sourceMappingURL=options.js.map

chrome.storage.local.get(['uido_id'], function (value_id) {
    console.log(value_id.uido_id);
});