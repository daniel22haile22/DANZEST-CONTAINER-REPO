// import { SafeHtml } from '@angular/platform-browser';
// interface FinalData{
// title: SafeHtml
// }

// interface TableData{
// header: string,
// value: string
// }

// interface Section{
// header: string;
// pzn: PznKeyValue;
// value: string
// }

// interface PznKeyValue{
// [resourceTagId: string] : boolean;
// }

// @Injectable({
// providedIn: 'root'
// })

// export class PortalDataService {
// private finalDatabject : FinalData = {
// title:
// tableData: []
// };

// hraSection: Section []= [
// {
// header; "Plan Amount", 
// Pzn: {},
// key: "planAmount"
// },
// {
// header: "Plan Type", 
// pzn: {},
// key: "planType"
// },
// {
// header: "Time Period", 
// pzn: {},
// key: "timePeriod"
// },
// {
// header: "Applied Amount", 
// pzn: {},
// key: "appliedAmount"
// },
// {
// header: "Start Month", 
// pzn: {},
// key: "startMonthString"
// },
// {
// header: "Drugs", 
// pzn: { "RXCLAIM_SUPPRESS_HRA_DRUGS"},
// key: "drugs"
// },
// {
// header: "Amount Applied To", 
// pzn: { "RXCLAIM_SUPPRESS_AMOUNT_APPLIED_TO},
// key: "appliedAmountNumeric"
// },

// ]

// constructor(private personalization: PersonalizationService){}

// constructTable(sectionInput: Section [], portalDataResponse: any) {
// const section = sectionInput;
// const tableJson: Tabeldata[l = I;
// section. forEach( (eachRowt any) => f
// I if (this, checkPzn (eachRow.pzn)) 1
// const key = eachRow. key as keyof typeof portalataResponse
// const value: any = portalDataResponse [key] ?
// portalDataResponse [key] : '";
// tableJson. push (f
// header: eachRow. header, value: value
// H)
// });

// this.finalDataobject.tableData=tableJson;
// ]

// checkPzn(key: any) {
// let result = true
// Object.keys(key).forEach (eachRow, n) => {
// const res = this.personalization.getznValue(eachRow);
// result = result && res === key[eachRow];
// console.log ("result", result);
// });
// return result;
// }

// getHRAResponseFrom(hraResponse:any) {
// this.finalDataObject.title = this.personalization.checkcmsData("PlanSummaryHRAIntroSpot", true, true);
// this.constructTable(this.hrasection, hraResponse);
// }
// getFinalJson() {
// console.log("finalbataobject", this.finalDataObject);
// return this.finalDataObject;
// }
// }


// //================================================================

var randomNumber = Math.floor(Math.random() * 9000) + 1000;

console.log(randomNumber);
