let testType = `test`

function runTests(){
switch (testType) {
    case "smoke":
        console.log("Print Smoke");
        
        break;
        case "regression":
        console.log("Print Regression");
        
        break;
        case "sanity":
            console.log("Print Sanity");
            
            break;
    default:
        console.log("Not Supported any Tetsing");
        break;
}

}
runTests();