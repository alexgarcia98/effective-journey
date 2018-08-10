/**
 * Returns a handler which will get the image description and verbalize it.
 */
//nice

/**
 * Create a context menu which will only show up for images.
 */
var flag = false;

chrome.contextMenus.create({
  "title" : "Get image description",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "moreInfo") {
        moreInfo();
		}
});

function moreInfo() {
	if(flag === true) {
		chrome.tts.speak('Lig a ma? Lig a ma balls.');
	}
}

function push(data) {
	stack[next] = data;
	next += 1;
	top += 1;
}

function pop() {
	var temp = stack[top];
	next -= 1;
	top  -= 1;
	return temp;
}

function fixFaultyInput(input) {

	if (input.includes("cropHintsAnnotation")) {
		var problem = input.indexOf("cropHintsAnnotation")
		var problemEnd;
		//console.log("Found (crop)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("textAnnotations")) {
		var problem = input.indexOf("textAnnotations")
		problemEnd = 0;
		//console.log("Found (crop)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("fullTextAnnotation")) {
		problem = input.indexOf("fullTextAnnotation")
		problemEnd = 0;
		//console.log("Found (fullText)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("fullMatchingImages")) {
		problem = input.indexOf("fullMatchingImages")
		problemEnd = 0;
		//console.log("Found (urls)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("partialMatchingImages")) {
		problem = input.indexOf("partialMatchingImages")
		problemEnd = 0;
		//console.log("Found (urls)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	// if (input.includes("pagesWithMatchingImages")) {
	// 	problem = input.indexOf("pagesWithMatchingImages")
	// 	problemEnd = 0;
	// 	//console.log("Found (urls)problem at: " + problem);
	// 	input = fix(problem,problemEnd,input);
	// }

	if (input.includes("visuallySimilarImages")) {
		problem = input.indexOf("visuallySimilarImages")
		problemEnd = 0;
		//console.log("Found (urls)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	return input;
}

function fix (problemStart,problemEnd, input) {

	var stack = [];
	var next = 0;
	var top = -1;

	for (var i = problemStart; i < input.length; i++ ) {
		var char = input.charAt(i)
		//console.log(char);

		if (char == '{' || char == '[') {
			//console.log ("Found : " + char)
			stack.push(char);
		}

		if (char == '}' || char == ']' ) {
			//console.log ("Found : " + char)
			stack.pop(char);
		}

		if (i > problemStart + 25 && stack.length == 0) {
			problemEnd = i;
			//console.log(problemEnd);
			input = input.replace(input.substring(problemStart-1,problemEnd+2), "");
			return input;
		}
	}

}

//someone should set this
var API_KEY="";


//https://github.com/GoogleCloudPlatform/machine-learning-browser-extension/blob/master/chrome/background.js
function httpRequest(method, url, body, cb) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
	if (xhr.readyState !== 4) { return; }
		if (xhr.status >= 400) {
			//notify('API request failed');
			console.log('XHR failed', xhr.responseText);
			var response=JSON.parse(xhr.responseText);
			chrome.tts.speak("Couldn't translate picture because "+response.error.message);
			return;
		}
		cb(xhr.responseText);
	};
	xhr.send(body);
};

function notify(title, message) {
  chrome.notifications.create('', {
    'type': 'basic',
    'iconUrl': 'images/icon128.png',
    'title': title,
    'message': message || ''
  }, function (nid) {
    // Automatically close the notification in 4 seconds.
    window.setTimeout(function () {
      chrome.notifications.clear(nid);
    }, 4000);
  });
};



function b64(url, cb) {
	var image = new Image();
	image.setAttribute('crossOrigin', 'anonymous');
	image.onload = function () {
		var canvas = document.createElement('canvas');
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		canvas.getContext('2d').drawImage(this, 0, 0);
		var b64data = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
		cb(b64data);
	};
	image.src = url;
};

function getClickHandler() {
	return function(info, tab) {
		flag = true;
		chrome.tts.speak("Thinking...");
		console.log("info.srcUrl: "+info.srcUrl);
		//getMainFunction()(info, tab, input);
		//return;
		b64(info.srcUrl, function (b64data) {
			console.log("base64 callback");
			var url = 'https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY;
			var data = {
				requests: [{
					image: {content: b64data},
					features: [
						{
							"type": "LANDMARK_DETECTION",
							"maxResults": 1
						},
						{
							"type": "FACE_DETECTION",
						},
						{
							"type": "LOGO_DETECTION",
							"maxResults": 3
						},
						{
							"type": "LABEL_DETECTION",
							"maxResults": 3
						},
						{
							"type": "WEB_DETECTION",
							"maxResults": 3
						}
					]
				}]
			};
			httpRequest('POST', url, JSON.stringify(data), function(responseText) {
				console.log("getting main func");
				getMainFunction()(info, tab, responseText);
			});
		});
	};
};

function getMainFunction() {
	return function(info, tab, input_text) {
		//console.log(info.srcUrl);

		//console.log("Hey: "+input.substr(2550, 20));
		console.log("text length before: "+input_text.length);
		input_text=fixFaultyInput(input_text);
		console.log("text length after: "+input_text.length);

		var obj = JSON.parse(input_text);
		console.log(obj);
		if(obj.responses!=undefined) {
			obj=obj.responses[0];
		}

		var parser_output=new Object();
		parser_output.faces=new Array();
		parser_output.safesearch=new Array();
		parser_output.landmarks=new Array();
		parser_output.logos=new Array();
		parser_output.labels=new Array();
		parser_output.colors=new Array();
		parser_output.webEntities=new Array();

		if (input_text.includes("faceAnnotations")&&obj.faceAnnotations!=undefined) {
			console.log("has a face annotation");
			var faces=new Array();
			faceAnnotations(obj, faces);
			console.log("num faces: "+faces.length);
			parser_output.faces=faces;
			console.log("num parse faces: "+parser_output.faces.length);
		}

		if (input_text.includes("labelAnnotations")&&obj.labelAnnotations!=undefined) {
			var labels = labelAnnotations(obj);
			parser_output.labels=labels;
		}
		if (input_text.includes("imagePropertiesAnnotation")&&obj.imagePropertiesAnnotations!=undefined) {
			console.log("start of imagePropertiesAnnotation");
			var colorProperties = new Object();
            		colorProperties.colors = new Array();

         		colors(obj,colorProperties);
            		for (var i = 0; i < colorProperties.colors.length; i++) {
              			console.log("Colors: " + colorProperties.colors[i].red + " " + colorProperties.colors[i].green + " " + colorProperties.colors[i].blue + " " + colorProperties.colors[i].score + " " + colorProperties.colors[i].pixelFraction );
            		}

          	}

		if (input_text.includes("webDetection")) {
			var relevantWebInfo = new Object();
			relevantWebInfo.entities = new Array();
			parser_output.webEntities=relevantWebInfo.entities;
			webDetection(obj, relevantWebInfo);
		}

		if (input_text.includes("landmarkAnnotations")) {
			var landmarkInfo = new Object();
			landmarkAnnotations(obj, landmarkInfo);
			console.log("Landmark Info: " + landmarkInfo.description + " " + landmarkInfo.score);
			parser_output.landmarks=[landmarkInfo];
		}

		if (input_text.includes("logoAnnotations")) {
			var logoInfo = new Object();
			logoAnnotations(obj,logoInfo);
			console.log("Logo Info: " + logoInfo.description + " " + logoInfo.score);
			parser_output.logos=[logoInfo];
		}

		var analysis_output=analyze_parser_output(parser_output);


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

	var face1;
    var landmark1;
    var logos1;
    var label1;
	var order=new Array();

	for(var i=0;i<analysis_output.length;i++) {
		switch(analysis_output[i].typename) {
			case "faces":
				console.log("There are "+analysis_output[i].people.length+" people");
				face1=faceSentence(analysis_output[i].people);
				order.push("face");
				break;
			case "webEntities":
				//web ents
				break;
			case "labels":
				label1=labelSentence(analysis_output[i].labels);
				order.push("label");
				break;
			case "landmarks":
				console.log("Landmark is part of analysis_output");
				landmark1=landmarkSentence(analysis_output[i].landmarks);
				order.push("landmark");
				break;
			case "logos":
				logos1=logosSentence(analysis_output[i].logos);
				order.push("logos");
				break;
			case "safesearch":
				//safesearch ;)
				break;
		}
	}

    //var faces = [f1, f2, f3];
    //var landmark = [f4, f5, f6];
    //var logos = [f7, f8, f9];
    //var label = [f10, f11, f12];
    //var face1 = faceSentence(faces);
    //var landmark1 = landmarkSentence(landmark);
    //var logos1 = logosSentence(logos);
    //var label1 = labelSentence(faces);
    //var order = ["face", "landmark", "logos", "label"]
    var output = madLibGenerator(face1, landmark1, logos1, label1, order);
    console.log(output);
    chrome.tts.speak(output);
  };
};

function analyze_safesearch(safesearch) {
	var ans=new Object();
	ans.list=new Array();
	ans.typename="safesearch";
	for(var property in safesearch) {
		if(property.likelyhood>=LIKELY) {
			ans.list.push(property);
		}
	}
	ans.relevancy=ans.list.length==0 ? 0 : 0.5;
	return ans;
}

function analyze_faces(faces) {
	var ans=new Object();
	console.log("Analyzing "+faces.length+" faces");
	ans.typename="faces";
	ans.famous=new Array();
	ans.people=new Array();
	//ans.emotion=new Object();

	for(var j=0;j<faces.length;j++) {
		var face=faces[j];
		console.log("one face in faces with confidence: "+face.detectionConfidence);
		if(face.detectionConfidence>=0.3) {
			var temp=new Object();
			console.log("face.headwear: "+face.headwear);
			temp.headwear=face.headwear;
			temp.blurred=face.blurred;
			temp.name="";
			{
				var three_state_likelihood=true;
				var unknown_threshold=likelihoodToInt("UNLIKELY");
				if(three_state_likelihood) {
					for(var i=0;i<face.emotions.length;i++) {
						if(face.emotions[i].likelihood==likelihoodToInt("VERY_UNLIKELY")) {
							face.emotions[i].likelihood=likelihoodToInt("UNLIKELY");
						}
						if(face.emotions[i].likelihood==likelihoodToInt("VERY_LIKELY")) {
							face.emotions[i].likelihood=likelihoodToInt("LIKELY");
						}
					}
				}

				var best=new Array();
				var likelihood=likelihoodToInt("UNKNOWN");
				for(var i=0;i<face.emotions.length;i++) {
					if(face.emotions[i].likelihood>likelihood) {
						best=new Array();
						likelihood=face.emotions[i].likelihood;
					}
					if(face.emotions[i].likelihood==likelihood) {
						best.push(face.emotions[i]);
					}
				}
				if(likelihood<=unknown_threshold) {
					likelihood=likelihoodToInt("UNKNOWN");
				}
				temp.emotions=best;
			}
			console.log("Pushing person");
			ans.people.push(temp);
		}
	}
	if(ans.people.length>=1) {
		ans.relevancy=0.3;
	}
	else {
		ans.relevancy=0.0;
	}
	console.log("Analyzed " + ans.people.length + " people");
	return ans;
}

function analyze_landmarks(landmarks) {
	var ans=new Object();
	ans.typename="landmarks";
	ans.relevancy=landmarks.length==0 ? 0.0 : 0.8;
	console.log("Landmark relevancy: "+ans.relevancy);
	ans.landmarks=landmarks;
	ans.landmark=new Object();
	if(ans.landmarks.length>0) {
		ans.landmark=ans.landmarks[0];
		for(landmark in ans.landmarks) {
			if(landmark.score>ans.landmark.score) {
				ans.landmark=landmark;
			}
		}
	}
	return ans;
}

function analyze_logos(logos) {
	var ans=new Object();
	ans.typename="logos";
	ans.relevancy=logos.length==0 ? 0.0 : 0.7;
	ans.logos=logos;
	return ans;
}

function analyze_labels(labels, webEntities) {
	var ans=new Object();
	var webs=new Array();
	ans.typename="labels";
	ans.relevancy=0.6;
	ans.labels=new Array();
	if(labels.length != 0) {
		ans.labels.push(labels[0]);
	}
	for(var i=1;i<labels.length&&ans.labels.length<=3;i++) {
		//console.log("description: "+labels[i].description);
		if(labels[i].score>=0.8) {
			ans.labels.push(labels[i]);
		}
	}
	console.log(webEntities.length);
	console.log(webEntities);
	for(var i=0; i<webEntities.length; i++) {
		if(webEntities[i].score < 4 && webEntities[i].score >= 0.8) {
			ans.labels.push(webEntities[i]);
		}
	}
	ans.labels.sort(function(a, b) {
		return b.score-a.score;
	});
	ans.labels = ans.labels.slice(0, 3);

	return ans;
}

function analyze_webEntities(webEntities, faces) {
	var ans=new Object();
	ans.typename="webEntities";
	ans.relevancy=webEntities.length==0 ? 0.0 : webEntities[0].score;
	ans.webEntities=webEntities;
	//first web entity over 4.0 is name for face
	console.log("WEB ENTITIES: " + webEntities.length);
	for(var i=0, p=0;i<webEntities.length && p<faces.people.length;i++) {
		console.log("web entity "+i+", p="+p+", desc="+webEntities[i].description + ", score=" + webEntities[i].score);
		if(webEntities[i].score>=4) {
			//var temp=new Object();
			//temp.name=webEntities[i].description;
			//faces.famous.push(temp);
			console.log("NEW FAMOUS PERSON");
			faces.people[p].name=webEntities[i].description;
			p++;
			faces.relevancy=0.9;
		}
	}
	return ans;
}

function analyze_parser_output(parser_output) {
	var ans=new Array();
	var faces=analyze_faces(parser_output.faces);
	ans.push(analyze_safesearch(parser_output.safesearch));
	ans.push(faces);
	ans.push(analyze_landmarks(parser_output.landmarks));
	ans.push(analyze_logos(parser_output.logos));
	ans.push(analyze_labels(parser_output.labels, parser_output.webEntities));
	ans.push(analyze_webEntities(parser_output.webEntities, faces));
	ans.sort(function(a, b) {
		return a.relevancy-b.relevancy;
	});
	chrome.tts.speak("Face relevancy is "+faces.relevancy + ".");
	console.log("Face relevancy is "+faces.relevancy+".");
	ans.reverse();
	return ans;
}



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
  console.log("landmarkArray.length = "+landmarkArray.length);
  for (i = 0; i < landmarkArray.length; i++) {
    output = output.concat(landmarkArray[i].description);
    if(i == landmarkArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  console.log("landmarkSentence = "+output);
  return output;
};

function logosSentence(logosArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < logosArray.length; i++) {
    output = output.concat(logosArray[i].description);
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
    output = output.concat(labelArray[i].description);
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
        if(face != "") {
          output = output.concat("with ");
	}
        output = output.concat(face);
        break;
      case "landmark":
	console.log("Landmark is in order");
	if(landmark != "") {
		console.log("Landmark does not equal \"\"");
		output = output.concat(" at ");
	}
	else {
		console.log("Landmark does equal \"\"");
	}
        output = output.concat(landmark);
        break;
      case "logos":
        if(logos != "") {
          output = output.concat("with ");
	}
        output = output.concat(logos);
        break;
      case "label":
        if(output == "") {
          output = output.concat("of ");
          output = output.concat(label);
        }
        break;
      default:
        break;
    }
  }
  var start = "This is a picture ";
	if (output == "of ") {
		return "You're wasting an API call.";
	}
  output = start.concat(output);
	output = output.concat("Press alt shift m for more information.");
  return output;
}


	function likelihoodToInt(likelihood) {

		if (likelihood == ("UNKOWN")) {
			return 0;
		}
		else if (likelihood == ("VERY_UNLIKELY")) {
			return 1;
		}
		else if (likelihood == ("UNLIKELY")) {
			return 2;
		}
		else if (likelihood == ("POSSIBLE")) {
			return 3;
		}
		else if (likelihood == ("LIKELY")) {
			return 4;
		}
		else if (likelihood == ("VERY_LIKELY")) {
			return 5;
		}
		return -1;
	}


function faceAnnotations(obj, faces) {
	console.log(obj.faceAnnotations);
	for(var i=0;i<obj.faceAnnotations.length;i++) {
    		var faceFeatures = obj.faceAnnotations[i];

    		var temp = new Object();
		var face = new Object();
		face.emotions=new Array();

		temp.type = "Joy"
		temp.likelihood = likelihoodToInt(faceFeatures.joyLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Sorrow"
		temp.likelihood = likelihoodToInt(faceFeatures.sorrowLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Anger"
		temp.likelihood = likelihoodToInt(faceFeatures.angerLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Surprise"
		temp.likelihood = likelihoodToInt(faceFeatures.surpriseLikelihood)
		face.emotions.push(temp);

		face.headwear = likelihoodToInt(faceFeatures.headwearLikelihood)

		face.blurred = likelihoodToInt(faceFeatures.blurredLikelihood)
		face.detectionConfidence=faceFeatures.detectionConfidence;
		faces.push(face);
		console.log("COOL Face Features Detection Confidence: "+faces[faces.length-1].detectionConfidence);
	}
}

  function labelAnnotations(obj) {

      var start = obj.labelAnnotations;
      var labels = new Array();

      var temp = new Object();


      console.log("Start(labels) length: " + start.length);
      for (var i = 0; i < start.length; i++) {

        temp = new Object();
        // console.log(start.description);
        // console.log(start.score);
        temp.description = start[i].description;
        temp.score = start[i].score;
        labels.push(temp);
				console.log("labels[" + labels.length-1 + "]: " + labels[labels.length-1].description + ", "+temp.score);
      }
      return labels;

  }

  function colors(obj,colorProperties) {


    var start = obj.imagePropertiesAnnotation.dominantColors.colors;

    var temp = new Object();

    //console.log("Start(colors) length: " + start.length);
    for (var i = 0; i < start.length; i++) {

      temp = new Object();
      // console.log(start[i].color);
      // console.log(start[i].score);
      // console.log(start[i].pixelFraction)
      temp.red = start[i].color.red;
      temp.green = start[i].color.green;
      temp.blue= start[i].color.blue;
      temp.score = start[i].score;
      temp.pixelFraction = start[i].pixelFraction;
      colorProperties.colors.push(temp);
    }


  }

  function webDetection(obj,releventWebInfo) {

    var start = obj.webDetection;

    var entitiesStart = start.webEntities;
    var temp = new Object();

    //console.log(entitiesStart.length);
    for (var i = 0; i < entitiesStart.length;i++) {
      temp = new Object();
      temp.description = entitiesStart[i].description;
      temp.score = entitiesStart[i].score;
      releventWebInfo.entities.push(temp);
    }

    var bestGuess = start.bestGuessLabels[0];
    //console.log(bestGuess.label);

    releventWebInfo.bestGuess = bestGuess.label;

  }

	function landmarkAnnotations(obj,landmarkInfo) {

		var start = obj.landmarkAnnotations


		for (var i = 0; i < start.length; i++) {
			landmarkInfo.description = start[i].description;
			landmarkInfo.score = start[i].score;
		}

	}

	function logoAnnotations(obj,logoInfo) {

		var start = obj.logoAnnotations


		for (var i = 0; i < start.length; i++) {
			logoInfo.description = start[i].description;
			logoInfo.score = start[i].score;
		}
	}
