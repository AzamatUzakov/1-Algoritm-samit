function strFun(text) {

    let lowCase = text.toLowerCase()
    let reverse = lowCase.split("").reverse().join("")

    if (lowCase === reverse) {
        console.log("Polindrom")
    } else {
        console.log("Not Polindrom")
    }

}
strFun("MADAM")//true
strFun("Mafc")//folse