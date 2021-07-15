/* eslint-disable no-tabs */
/* eslint-disable indent */
import GoogleResultsPage from "./google-results-page";

const SEARCH_FIELD = "input[type=text]";
const SEARCH_BUTTON = "div.FPdoLc.lJ9FBc > center > input:nth-child(1)";
const FEEL_LUCKY_BUTTON = "div.FPdoLc.lJ9FBc > center > input:nth-child(2)";
const BACKGROUND_CLICK = "div.o3j99.ikrT4e.om7nvf";

class GoogleSearchPage {
	static visit() {
		cy.visit("/");
		cy.get("div.VDity > button").eq(1).click();
	}

	static type(query) {
		cy.get(SEARCH_FIELD) // 2 seconds
			.type(query);
	}

	static pressSearch() {
		// cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
		//   .click();
		cy.get(BACKGROUND_CLICK).click(1, 1);
		cy.get(SEARCH_BUTTON).first().click();
		return new GoogleResultsPage();
	}

	static pressFeelLucky() {
		cy.get(BACKGROUND_CLICK).click(1, 1);
		cy.get(FEEL_LUCKY_BUTTON).first().click();
	}
}

export default GoogleSearchPage;
