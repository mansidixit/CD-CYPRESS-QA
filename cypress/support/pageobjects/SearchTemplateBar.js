class SearchTemplateBar {

    enterText(searchTxt) {
        cy.get('#searchTerm').clear().type(searchTxt);
        cy.get('button').contains('search').click({force: true});   
    }

    enterTextUsingKeyBoard(searchTxt) {
        cy.get('#searchTerm').clear().type(searchTxt+'{enter}');
    }

}
export default SearchTemplateBar