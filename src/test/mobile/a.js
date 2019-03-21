describe('Mobile Test', function() {
    it('input exist ', function() {
        expect($('~IntegerA').isDisplayed()).to.be.true;
        expect($('~IntegerB').isDisplayed()).to.be.true;
    });
    it('input takes value ', function() {
        $('~IntegerA').setValue("5");
        $('~IntegerB').setValue("5");
        expect(Number($('~IntegerA').getText())).to.equal(5);
        expect(Number($('~IntegerB').getText())).to.equal(5);
    });
    it('compute sum ', function() {
        $('~IntegerA').setValue("3");
        $('~IntegerB').setValue("6");
        $('~ComputeSumButton').click();
        let answer = $('~Answer').getText();
        expect(Number(answer)).to.equal(9);
    });
    // $('.AppElem').click();
    // $('.DisabledButton').click();
    // $('.locationStatus').click();
});