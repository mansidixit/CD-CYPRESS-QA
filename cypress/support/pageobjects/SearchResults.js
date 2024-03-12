class SearchResults {

    verifySearchResultTitle(searchTxt) {
        cy.contains(searchTxt+ " Templates");
    }

    verifyMasonrySearchResultsExist() {
        cy.get('div.masonry-column').should('exist');
    }

}
export default SearchResults