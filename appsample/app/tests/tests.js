var zendesk = require("nativescript-zendesk");

var appID = "2cae45724539d7d7c8561aabfa133d39801e98a4ce1440a6";
var url = "https://nativescript.zendesk.com";
var clientId = "mobile_sdk_client_f86398df9a1b3f165f56";

describe('Help Center', function () {    
    it('should not open unless initalized', function () {
        try{
            zendesk.openHelpCenter();
            assert.isTrue(false);
        }catch(args){
            assert.isTrue(true);
        }
    });
    
    it('can launch initalized HC', function () {
        try{
            zendesk.init(appID, url, clientId, false);
            zendesk.openHelpCenter();
            assert.isTrue(true);
        }catch(args){
            assert.isTrue(false);
        }
    });
});

describe('Account', function () {
    it('init() should return initalized', function () {
        var account = zendesk.init(appID, url, clientId, false);
        assert.isTrue(account.initalized === true);
    });
    
    it('logging should initalize to false', function () {
        var account = zendesk.init(appID, url, clientId, false);
        assert.isTrue(account.loggingEnabled === false);
    });
    
    it('logging can be initalized to true', function () {
        var account = zendesk.init(appID, url, clientId, true);
        assert.isTrue(account.loggingEnabled === true);
    });
});

