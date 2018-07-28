/**
 * Returns a handler which will get the image description and verbalize it.
 */


function getClickHandler() {
  return function(info, tab) {
    console.log(info.srcUrl);
    var f1 = {name:"gars", num:21};
    var f2 = {name:"aaron", num:22};
    var f3 = {name:"hitch", num:23};
    var f4 = {name:"paris", num:24};
    var f5 = {name:"italy", num:25};
    var f6 = {name:"trash can", num:26};
    var f7 = {name:"apple", num:27};
    var f8 = {name:"google", num:28};
    var f9 = {name:"tesla", num:29};
    var f10 = {name:"obamj", num:30};
    var f11 = {name:"obamk", num:31};
    var f12 = {name:"obaml", num:32};
    var faces = [f1, f2, f3];
    var landmark = [f4, f5, f6];
    var logos = [f7, f8, f9];
    var label = [f10, f11, f12];
    var face1 = faceSentence(faces);
    var landmark1 = landmarkSentence(landmark);
    var logos1 = logosSentence(logos);
    var label1 = labelSentence(faces);
    var order = ["face", "landmark", "logos", "label"]
    var output = madLibGenerator(face1, landmark1, logos1, label1, order);
    console.log(output);
    chrome.tts.speak(output);
  };
};

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Get image description",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});

function faceSentence(faceArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < faceArray.length; i++) {
    if(faceArray[i].name != "") {
      output = output.concat(faceArray[i].name);
    }
    else {
      break;
    }
    if(i == faceArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  if(output != "" && (faceArray.length - i) > 1) {
    output = output.concat("and ");
  }
  if(faceArray.length - i != 0) {
    output = output.concat((faceArray.length - i).toString());
    if(i != 0) {
      output = output.concat(" other");
    }
    output = output.concat(" people");
  }
  return output;
};

function landmarkSentence(landmarkArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < landmarkArray.length; i++) {
    output = output.concat(landmarkArray[i].name);
    if(i == landmarkArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function logosSentence(logosArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < logosArray.length; i++) {
    output = output.concat(logosArray[i].name);
    if(i == logosArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function labelSentence(labelArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < labelArray.length; i++) {
    output = output.concat(labelArray[i].name);
    if(i == labelArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function madLibGenerator(face, landmark, logos, label, order) {
  var output = "";
  for (i = 0; i < order.length; i++) {
    switch(order[i]) {
      case "face":
        output = output.concat(" with ");
        output = output.concat(face);
        break;
      case "landmark":
        output = output.concat(" at ");
        output = output.concat(landmark);
        break;
      case "logos":
        output = output.concat(" with ");
        output = output.concat(logos);
        break;
      case "label":
        if(output == "") {
          output = output.concat("This picture displays ");
          output = output.concat(label);
        }
        break;
      default:
        break;
    }
  }
  var start = "This is a picture ";
  output = start.concat(output);
  return output;
}
