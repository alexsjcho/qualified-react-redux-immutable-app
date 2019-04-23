import uuid from "uuid";
import opportunity from "../store/reducers/opportunity";

const SETTINGS_KEY = "settings";
const OPPORTUNITIES_KEY = "opportunities";

export const SUPPORTED_INPUTS = ["radio", "select", "date"];

/**
 * Save the settings state into localStorage
 * @param  {Object} settings The settings object to save
 */
export function saveSettings(settings) {
  console.log("SETTINGS BEING SAVED");
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

/**
 * Get the settings object from localStorage
 * @return {Object} The settings from locaStorage or null if not available
 */
export function getSettings() {
  let settings = window.localStorage.getItem(SETTINGS_KEY);
  return settings ? JSON.parse(settings) : null;
}

/**
 * Insert a new opportunity entry into the database.
 * @param {Object} initialOpportunityValues here too
 * @param {String} initialOpportunityValues.companyName
 *  @param {String} initialOpportunityValues.opportunityName
 * @param {Number} initialOpportunityValues.closeDate,
 * @param {Number} initialOpportunityValues.moneyValue
 * @returns {String} The ID of the new function
 */
export function insertOpportunity(initialOpportunityValues) {
  const opportunityId = uuid();
  let opportunities = window.localStorage.getItem(OPPORTUNITIES_KEY) || "[]";
  opportunities = JSON.parse(opportunities);
  opportunities.push({ ...initialOpportunityValues, opportunityId });
  window.localStorage.setItem(OPPORTUNITIES_KEY, JSON.stringify(opportunities));
  return opportunityId;
}

/**
 * It will load an opportunity when given an opportunity ID or return null
 */

export function loadOpportunity(opportunityId) {
  let opportunities = window.localStorage.getItem(OPPORTUNITIES_KEY) || "[]";
  opportunities = JSON.parse(opportunities);
  let opportunity = opportunities.find(function(opportunity) {
    return opportunity.opportunityId === opportunityId;
  });

  return opportunity || null;
}
