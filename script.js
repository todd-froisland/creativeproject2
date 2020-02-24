document.getElementById("country-submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("country-Input").value;
  const year = document.getElementById("year-Input").value;
  if (value === "")
    return;
  console.log(value);
  console.log(year);
  const url = "https://calendarific.com/api/v2/holidays?&api_key=55413fe0b9d5c49496ee930ab326b1a8c631db1a&country=" + value + "&year=" + year +  "/json";
  fetch(url)
  .then(function(response) {
    return response.json();
}).then(function(json) {
  console.log(json);
  let results = "";
  results += value;
  document.getElementById("results-code").innerHTML = results;

  let list = "<h1>The First 10 Holidays</h1><br>";
  let i = 0;
   for (var holiday in json.response.holidays) {
     if (i === 10) {
       break;
     }
    list += "<p>" + json.response.holidays[holiday].name +"</p><br>";
    i++;
  }
  list += "</ol>";
  document.getElementById("holiday-list").innerHTML = list;
});
});
