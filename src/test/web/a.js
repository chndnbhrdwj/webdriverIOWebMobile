describe('Webdriverio web Test', function() {
    beforeEach(function() {
        browser.fullscreenWindow();
        browser.url("./");
    });
    it('Url should include webdriver', function() {
        expect(browser.getUrl()).to.include('webdriver');
    });
    it("project title should be displayed", function() {
        let title = $('.projectTitle');
        expect(title.isDisplayed()).to.be.true;
    });
    it("navigation from homepage", function() {
        let list = $$('.pluginWrapper.buttonWrapper');
        Array.from(list).forEach(el => {
            el.click();
            browser.back();
        });
    });
});