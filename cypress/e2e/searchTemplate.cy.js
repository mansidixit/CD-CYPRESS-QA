import SearchTemplateBar from '../support/pageobjects/SearchTemplateBar';
import SearchResults from '../support/pageobjects/SearchResults';
import FilterSearch from '../support/pageobjects/FilterSearch';
describe('Search Template spec', () => {
  var searchTemplateBar,searchResult,filter;


  beforeEach(() => {
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/6e2c9bb0-ee9c-4e43-9962-31f32f09b860/templatetypes?searchTerm=Hello%20World');
    searchTemplateBar = new SearchTemplateBar();
    searchResult = new SearchResults();
    filter = new FilterSearch();
  })

  // it('Verify a user can enter text and click Search button', () => {
  //   let searchTxt = 'tech challenge';
  //   searchTemplateBar.enterText(searchTxt);
  //   searchResult.verifySearchResultTitle(searchTxt);
  //   searchResult.verifyMasonrySearchResultsExist();
    
  // })

  // it('Verify a user can enter text and press enter', () => {
  //   let searchTxt = 'Happy New Year';
  //   searchTemplateBar.enterTextUsingKeyBoard(searchTxt);
  //   searchResult.verifySearchResultTitle(searchTxt);
  //   searchResult.verifyMasonrySearchResultsExist();
  // })


  it(' Verify Search by category has a default list on  page load - Instagram , Facebook ,Website,Business card,letter head ', () => {
    filterSearch.verifyDefaultCategoryList();
  })

  it('Verify Search by popularity has a default list on  page load - Sale,Food , Coming soon ,give away,Beauty,Cleaning ', () => {
     filter.verifyDefaultPopularList();
   })

   it('Verify search result is filtered based on Category selected - Facebook', () => {
        let searchTxt = 'Happy Easter @ 2024';
         searchTemplateBar.enterText(searchTxt);
         searchResult.verifySearchResultTitle(searchTxt);
        searchResult.verifyMasonrySearchResultsExist();
        
        filterSearch.

  })


   

 

})