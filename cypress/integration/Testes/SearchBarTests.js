describe('search bar 2 principal functionalities', () => {

    var url = 'https://blogdoagi.com.br/'

    beforeEach(() => {
        cy.visit(url)
    })

    it('checks search bar functionality', () => {

        cy.get('#search-open').click()
        cy.get('.desktop-search')
            .find('.search-field')
            .type('apólice')
        cy.get('.desktop-search')
            .find('.search-submit')
            .click()
        cy.get('.entry-title').click()
        cy.get('#socialicons-sticky').should('contain.text', 'apólice')

    })

    it('checks if the sticky search icon and search bar appears when scrolling down', () => {

        cy.get('#search-open').should('be.visible').click()
        cy.get('.desktop-search').should('have.css', 'position', 'absolute')
        cy.get('#search-open-sticky').should('not.be.visible')

        cy.scrollTo('bottom')
        
        cy.get('.desktop-search').should('have.css', 'position', 'fixed')
        cy.get('#search-open-sticky').should('be.visible')      
        cy.get('#search-open').should('be.visible')             // the search-open icon is always visible
        
        cy.scrollTo('top')

        cy.get('.desktop-search').should('have.css', 'position', 'absolute')
        cy.get('#search-open').should('be.visible')
        cy.get('#search-open-sticky').should('not.be.visible')

    })
})
