const colorSchemes = {
  "Default": ["#00CCCC", "#89da59", "#80bd9e", "#ff420e"],
  "Cool": ["#003b46", "#07575b", "#66a5ad", "#c4dfe6"],
  "Nature": ["#2e4600", "#486b00", "#a2c523", "#7d4427"],
  "Vibrant": ["#375e97", "#fb6542", "#ffbb00", "#ffbb00"],
  "Delicate": ["#98dbc6", "#5bc8ac", "#e6d72a", "#f18d9e"],
  "Beach": ["#f4cc70", "#de7a22", "#20948b", "#6ab187"],
  "Autumn": ["#8d230f", "1e434c", "#9b4f0f", "#c99e10"],
  "Ice": ["#f1f1f2", "#bcbabe", "#a1d6e2", "#1995ad"],
  "Citrus": ["#eb8a44", "#f9dc24", "#4b7447", "#8eba43"]
}

const commonWords = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "no", "its", "was", "i", "had", "could", "went", "how", "were", "way", "much", "is", "said", "think", "thought", "then", "down", "very", "again", "now", "quite", "im", "know", "off", "see", "into", "ill", "here", "such", "must", "did", "are", "got", "some", "your", "are", "them", "any", "has", "never", "only", "am", "more", "has", "been", "should", "other", "though", "dont", "didnt", "after", "came", "over", "come", "just", "back", "looked", "going", "before", "new", "us", "him", "something", "around", "turned", "want", "saw", "through", "made", "knew", "let", "shall", "himself", "take", "took", "well", "soon", "where", "last", "thing", "always", "little", "great", "good", "really", "too", "says", "feel", "than", "even", "enough", "under", "even", "long", "does", "why", "makes", "used", "behind", "things", "nothing", "above", "still", "upon", "every", "heard", "opening", "mans", "grew", "increase", "increased", "many", "whole", "put", "right", "each", "open", "large", "felt", "look"]

const sample = words.join(" ");
// console.log(sample);

document.getElementById("container").onload = function() {
      
  // set placeholder text
  document.getElementById("input-text").placeholder = sample;

  // create a chart
  var chart = anychart.tagCloud();
  chart.data(sample, {
    mode: "byWord",
    maxItems: 50,
    ignoreItems: commonWords
  });

  // create and configure a color scale.
  var customColorScale = anychart.scales.linearColor();
  customColorScale.colors(colorSchemes["Default"]);

  // set the color scale as the color scale of the chart
  chart.colorScale(customColorScale);
  // display the word cloud chart
  chart.container("cloud-container");
  chart.draw();

};

// create an onclick function to generate a word cloud based on the user's input into the text box
document.getElementById("generate").onclick = function() {

  var mode = document.querySelector('input[name="mode"]:checked').value;
  var colorSelection = document.querySelector('input[name="colorScheme"]:checked').value;
  var scale = document.querySelector('input[name="scales"]:checked').value;
  var wordSpacing = document.getElementById("display").innerHTML;

  // clear the container in case it currently has a word cloud in it
  document.getElementById("cloud-container").innerHTML = "";

  // set text equal to sample in case text box is empty upon submission
  var text = '';
  if(document.getElementById('input-text').value == ""){
    text = sample;
  }
  // else fill it with the text from the text bos
  else {
    var text = document.getElementById('input-text').value;
  }
  
  // remove non-alphabet characters and convert everything to lower case
  var cleanedText = text.replace(/[^a-zA-Z ]/g, "").toLowerCase();

  // create a chart
  var chart = anychart.tagCloud();
  chart.data(cleanedText, {
    mode: "byWord",
    maxItems: 12,
    ignoreItems: commonWords
  });

  // create and configure a color scale.
  var customColorScale = anychart.scales.linearColor();
  customColorScale.colors(colorSchemes[colorSelection]);

  if(mode == "Rectangle"){
      chart.mode("rect");
    }

  if(scale == "Logarithmic") {
    chart.scale(anychart.scales.log());
  }

  // set text spacing
  chart.textSpacing(wordSpacing);

  // set the color scale as the color scale of the chart
  chart.colorScale(customColorScale);
  // display the word cloud chart
  chart.container("cloud-container");
  chart.draw();

}

var slider = document.getElementById("myRange");
var output = document.getElementById("display");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
