const modules = {
  COUNTER: "counter",
  DATEVIEWER: "dateviewer"
}

const getterTypes = {
  COUNTER_GETCOUNTERTEXT: "getCounterText",
  COUNTER_GETCOUNTERDAITEXT: "getCounterDaiText"
}

const mutationTypes = {
  COUNTER_INCREMENT: "increment",
  DATEVIEWER_CURRENTDATE: "currentdate"
}

const actionTypes = {
  DATEVIEWER_GETCURRENTDATE: "getCurrentDate"
}

export { modules, getterTypes, mutationTypes, actionTypes };
