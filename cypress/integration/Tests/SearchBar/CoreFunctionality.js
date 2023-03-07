class SearchCoreFunctionality {

    elements = {
        searchIcon: () => cy.get('#search-open'),
        searchField: () => cy.get('.desktop-search').find('.search-field'),
        searchButton: () => cy.get('.desktop-search').find('.search-submit'),
        resultTitle: () => cy.get('.entry-title'),
        resultPageText: () => cy.get('#socialicons-sticky')
    }

    clickOnSearch() {
        this.elements.searchIcon().click();
        cy.typeOnSearch('apólice');
        this.elements.searchButton().click();
        this.elements.resultTitle().click();
        this.elements.resultPageText().should('contain.text', 'apólice');
    }
}    

module.exports = new SearchCoreFunctionality();