class ScrollVisibility {

    elements = {
        searchIcon: () => cy.get('#search-open'),
        searchForm: () => cy.get('.desktop-search'),
        searchIconSticky: () => cy.get('#search-open-sticky'),
        scrollBottom: () => cy.scrollTo('bottom'),
        scrollTop: () => cy.scrollTo('top')
    }

    checkPageScroll() {
        this.elements.searchIcon().should('be.visible').click();
        this.elements.searchIconSticky().should('not.be.visible');
        this.elements.searchForm().should('have.css', 'position', 'absolute');
        this.elements.scrollBottom();
        this.elements.searchForm().should('have.css', 'position', 'fixed');
        this.elements.searchIconSticky().should('be.visible');
        this.elements.searchIcon().should('be.visible'); // the search-open icon must be always visible
        this.elements.scrollTop();
        this.elements.searchIcon().should('be.visible');
        this.elements.searchIconSticky().should('not.be.visible');
        this.elements.searchForm().should('have.css', 'position', 'absolute');
    }
}

module.exports = new ScrollVisibility();