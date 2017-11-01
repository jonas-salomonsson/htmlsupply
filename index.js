'use strict';

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>')).window;
global.document = document;
global.window = document.defaultView;

var $ = require('jquery');

/**
 * Supplies html elements for a chat client.
 * @param {bool} activate
 * @return {string}
 */
function client() {
    var $client =            $('<div></div>').attr({ "id": "chatapp.client" });
    var $chatWindow =        $('<div></div>').attr({ "class": "chatapp.roomContents" });
    var $chatTitle =         $('<p></p>').attr({ "id": "chatapp.chatTitle" });
    var $messageWrapper =    $('<div></div>').attr({ "class": "chatapp.messageWrapper" });
    var $messages =          $('<div></div>').attr({ "id": "chatapp.messages" });
    var $sendMessageForm =   $('<form></form>').attr({ "class": "chatapp.sendMessageForm" });
    var $inputField =        $('<input></input>').attr({
        "type": "text",
        "class": "chatapp.textEntry",
        "id": "chatapp.body",
        "placeholder": "Enter text here...",
        "onkeydown": "javascript:if (event.keyCode == 13) document.getElementById('sendMsg').focus()"
    });
    var $inputButton =       $('<input></input>').attr({
        "type": "button",
        "class": "chatapp.sendMessage",
        "id": "chatapp.sendMsg",
        "value": "Send"
    });

    $sendMessageForm.append($inputField);
    $sendMessageForm.append($inputButton);
    $messageWrapper.append($messages);
    $chatWindow.append($chatTitle);
    $chatWindow.append($messageWrapper);
    $chatWindow.append($sendMessageForm);
    $client.append($chatWindow);
    $('#app').append($client);
    
    return $('#app').html();
};

module.exports = {
    client: client
};

