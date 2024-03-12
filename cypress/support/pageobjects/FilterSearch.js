import filterData from '../../fixtures/filterData.json';
class FilterSearch {


    verifyDefaultCategoryList() {
        
        let categoryList = filterData["byCategoryDefaultList"];
       for (const x of categoryList) { 
        cy.get(`section div[id*='${x}']`).should('be.visible')
       }    
    }

   
    verifyDefaultPopularList() {
        
        let categoryList = filterData["byPopularityDefaultList"];
       for (const x of categoryList) { 
        cy.get(`section div[id*='${x}']`).should('be.visible')
    
        }
    
         
    }

}
export default FilterSearch