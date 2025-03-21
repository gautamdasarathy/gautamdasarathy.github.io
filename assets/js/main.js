$(document).ready(function () {
  $.get("files/pubs.bib", function (data) {
    var bibtex = new BibtexParser();
    bibtex.parse(data);

    var output = "";
    var entries = bibtex.getEntries();
    for (var key in entries) {
      var entry = entries[key];
      output += "<h3>" + entry.TITLE + "</h3>";
      output += "<p>" + entry.AUTHOR + "</p>";
      output += "<p>" + entry.YEAR + "</p>";
      output += "<hr>";
    }

    $("#publications").html(output);
  });
});



// $(document).ready(function () {
//   $.get("files/pubs.bib", function (data) {
//     var bibtex = new BibTeX();
//     bibtex.content = data;
//     bibtex.parse();

//     var output = "";
//     for (var i = 0; i < bibtex.entries.length; i++) {
//       var entry = bibtex.entries[i];
//       output += "<h3>" + entry.getField("title") + "</h3>";
//       output += "<p>" + entry.getField("author") + "</p>";
//       output += "<p>" + entry.getField("year") + "</p>";
//       output += "<hr>";
//     }

//     $("#publications").html(output);
//   });
// });

// $(document).ready(function () {
//   $.getScript("https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js/src/bibtex_js.js", function () {
//     function displayBibtex() {
//       let bibtex = new BibTeX();
//       bibtex.content = document.getElementById("bibtex_input").value;
//       bibtex.parse();

//       let outputElement = document.getElementById("bibtex_output");
//       outputElement.innerHTML = "";

//       for (let i in bibtex.entries) {
//         let entry = bibtex.entries[i];
//         let output = entry.getFormattedEntry();
//         outputElement.innerHTML += output + "<br>";
//       }
//     }

//     let bibtexInput = document.getElementById("bibtex_input");
//     if (bibtexInput) {
//       bibtexInput.addEventListener("input", displayBibtex);

//       fetch("files/pubs.bib")
//         .then((response) => response.text())
//         .then((data) => {
//           bibtexInput.value = data;
//           displayBibtex();
//         });
//     }
//   });
// });


