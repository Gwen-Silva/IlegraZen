import CoreFunctionality from "../integration/Tests/SearchBar/CoreFunctionality"
import ScrollVisibility from "../integration/Tests/SearchBar/ScrollVisibility"

beforeEach(() => { cy.visit('/') })

it('Should search for a specific page', () => {
    CoreFunctionality.clickOnSearch();
})

it('Search components must appear when scrolling the page', () => {
    ScrollVisibility.checkPageScroll();
})