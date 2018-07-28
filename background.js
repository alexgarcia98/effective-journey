/**
 * Returns a handler which will get the image description and verbalize it.
 */

var input = '{"faceAnnotations":[{"boundingPoly":{"vertices":[{"x":208,"y":78},{"x":449,"y":78},{"x":449,"y":358},{"x":208,"y":358}]},"fdBoundingPoly":{"vertices":[{"x":231,"y":155},{"x":420,"y":155},{"x":420,"y":344},{"x":231,"y":344}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":295.6946,"y":217.80069,"z":0.0005424214}},{"type":"RIGHT_EYE","position":{"x":370.441,"y":217.07889,"z":5.327827}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":268.48984,"y":204.55132,"z":3.732548}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":317.193,"y":204.77716,"z":-15.590871}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":351.4569,"y":203.3797,"z":-13.172341}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":393.54498,"y":199.29475,"z":10.918579}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":333.5719,"y":217.2165,"z":-13.02333}},{"type":"NOSE_TIP","position":{"x":337.5561,"y":263.29092,"z":-25.96741}},{"type":"UPPER_LIP","position":{"x":336.8631,"y":283.30023,"z":-5.1433315}},{"type":"LOWER_LIP","position":{"x":337.2418,"y":312.38544,"z":5.5912085}},{"type":"MOUTH_LEFT","position":{"x":298.89893,"y":290.3881,"z":16.13814}},{"type":"MOUTH_RIGHT","position":{"x":371.42773,"y":288.4137,"z":20.347118}},{"type":"MOUTH_CENTER","position":{"x":337.18295,"y":298.54816,"z":2.9500017}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":359.821,"y":264.8037,"z":5.10783}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":313.01532,"y":264.88153,"z":1.5651605}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":336.95102,"y":272.998,"z":-7.531507}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":297.63895,"y":215.76369,"z":-5.5703206}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":311.7634,"y":219.98372,"z":1.5495183}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":295.5729,"y":222.73692,"z":0.25738847}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":282.09064,"y":219.31213,"z":5.847059}},{"type":"LEFT_EYE_PUPIL","position":{"x":296.42432,"y":220.1419,"z":-1.9893435}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":369.64032,"y":212.95749,"z":-0.648868}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":383.82104,"y":215.74127,"z":12.841409}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":370.4027,"y":221.54941,"z":5.3542676}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":355.07672,"y":219.68452,"z":4.6147203}},{"type":"RIGHT_EYE_PUPIL","position":{"x":370.32465,"y":217.36919,"z":2.9669333}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":294.27866,"y":196.05347,"z":-13.324474}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":372.39056,"y":192.9861,"z":-8.00269}},{"type":"LEFT_EAR_TRAGION","position":{"x":245.9283,"y":240.25029,"z":91.186356}},{"type":"RIGHT_EAR_TRAGION","position":{"x":409.62756,"y":233.7439,"z":102.428986}},{"type":"FOREHEAD_GLABELLA","position":{"x":334.18195,"y":203.58833,"z":-17.390781}},{"type":"CHIN_GNATHION","position":{"x":337.00916,"y":339.82968,"z":20.471119}},{"type":"CHIN_LEFT_GONION","position":{"x":257.25256,"y":290.61774,"z":71.33001}},{"type":"CHIN_RIGHT_GONION","position":{"x":404.96008,"y":284.75812,"z":81.434326}}],"rollAngle":-1.5685028,"panAngle":3.9717124,"tiltAngle":-10.415703,"detectionConfidence":0.99662274,"landmarkingConfidence":0.6470903,"joyLikelihood":"VERY_LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"}],"labelAnnotations":[{"mid":"/m/01g317","description":"person","score":0.9516382,"topicality":0.9516382},{"mid":"/m/01k74n","description":"facial expression","score":0.94075906,"topicality":0.94075906},{"mid":"/m/019nj4","description":"smile","score":0.8969094,"topicality":0.8969094},{"mid":"/m/0ds4x","description":"hairstyle","score":0.80117476,"topicality":0.80117476},{"mid":"/m/01bl7v","description":"boy","score":0.7577929,"topicality":0.7577929},{"mid":"/m/025kyy","description":"forehead","score":0.7257778,"topicality":0.7257778},{"mid":"/m/0fc1fy","description":"black hair","score":0.69747674,"topicality":0.69747674},{"mid":"/m/071j9r","description":"cool","score":0.68311656,"topicality":0.68311656},{"mid":"/m/08g_yr","description":"temple","score":0.6676823,"topicality":0.6676823},{"mid":"/m/02jwqh","description":"vacation","score":0.5015587,"topicality":0.5015587}],"safeSearchAnnotation":{"adult":"VERY_UNLIKELY","spoof":"VERY_UNLIKELY","medical":"VERY_UNLIKELY","violence":"VERY_UNLIKELY","racy":"VERY_UNLIKELY"},"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":188,"green":201,"blue":206},"score":0.17291538,"pixelFraction":0.17377889},{"color":{"red":18,"green":20,"blue":23},"score":0.12979677,"pixelFraction":0.15821953},{"color":{"red":228,"green":234,"blue":235},"score":0.15208277,"pixelFraction":0.21993172},{"color":{"red":147,"green":160,"blue":165},"score":0.06380998,"pixelFraction":0.05928309},{"color":{"red":131,"green":155,"blue":172},"score":0.061385278,"pixelFraction":0.037289917},{"color":{"red":105,"green":129,"blue":144},"score":0.049325287,"pixelFraction":0.03295693},{"color":{"red":45,"green":49,"blue":51},"score":0.046110537,"pixelFraction":0.04641544},{"color":{"red":111,"green":122,"blue":126},"score":0.041454494,"pixelFraction":0.03794643},{"color":{"red":75,"green":84,"blue":84},"score":0.040368143,"pixelFraction":0.044051997},{"color":{"red":208,"green":194,"blue":164},"score":0.029553607,"pixelFraction":0.0181854}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":115},{"x":518},{"x":518,"y":503},{"x":115,"y":503}]},"confidence":1,"importanceFraction":1.15},{"boundingPoly":{"vertices":[{"x":60},{"x":567},{"x":567,"y":503},{"x":60,"y":503}]},"confidence":1,"importanceFraction":1.17},{"boundingPoly":{"vertices":[{},{"x":603},{"x":603,"y":503},{"y":503}]},"confidence":1,"importanceFraction":1.18}]},"webDetection":{"webEntities":[{"entityId":"/m/0bdrxvr","score":1.3347,"description":"John H. Lee"},{"entityId":"/m/06lkr2","score":0.9402,"description":"A Moment to Remember"},{"entityId":"/m/0g2k8j","score":0.7003,"description":"Grand Bell Awards"},{"entityId":"/m/02jknp","score":0.6957,"description":"Film director"},{"entityId":"/m/0hsqf","score":0.600765,"description":"Seoul"},{"entityId":"/m/02vxn","score":0.5225,"description":"Film"},{"entityId":"/g/11b77d6b62","score":0.3911},{"entityId":"/m/02w3hl","score":0.2878,"description":"Award"},{"entityId":"/m/0873c4","score":0.2183,"description":"IMDb"},{"entityId":"/m/0ds4x","score":0.19062671,"description":"Hairstyle"},{"entityId":"/m/0ldpy","score":0.17316113,"description":"Adolescence"},{"entityId":"/m/025kyy","score":0.1709537,"description":"Forehead"},{"entityId":"/m/03q69","score":0.1631,"description":"Hair"},{"entityId":"/m/0c01601","score":0.0885,"description":"71: Into the Fire"},{"entityId":"/m/06qd3","score":0.039996002,"description":"South Korea"}],"fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}],"pagesWithMatchingImages":[{"url":"https://www.imdb.com/name/nm0497565/","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm502380800","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://ia.media-imdb.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm418494720","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm519158016","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm1860276736","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://heightagebio.com/celebrities/john-h-lee-md-john-h-lee-director-john-h-lee-blackstone-john-h-lee-director-wiki/","pageTitle":"John H. Lee Height, Age, Bio - 2018","fullMatchingImages":[{"url":"https://heightagebio.com/wp-content/uploads/2018/01/John-H-Lee-1.jpeg"}]},{"url":"https://www.imdb.com/event/ev0000925/2005/1/","pageTitle":"Grand Bell Awards, South Korea (2005) - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]}],"visuallySimilarImages":[{"url":"http://i10.photobucket.com/albums/a129/baagiinaa/115.jpg"},{"url":"https://i.ytimg.com/vi/7vJ5yq9dA74/maxresdefault.jpg"},{"url":"https://www.meldmagazine.com.au/wp-content/uploads/2012/08/JinLim_JinnyBoyTV.jpg"},{"url":"http://www.mocodegorila.net/images/photos/PremshreePillai.jpg"},{"url":"https://i.ytimg.com/vi/tTdU5T4dcyc/maxresdefault.jpg"},{"url":"https://media.giphy.com/media/szoU5pEeEOx3i/giphy.gif"},{"url":"https://data.whicdn.com/images/304951976/superthumb.jpg?t=1515510533"},{"url":"https://data.whicdn.com/images/247116905/superthumb.jpg?t=1467209753"}],"bestGuessLabels":[{"label":"smile"}]}}'

function getClickHandler() {
  return function(info, tab) {
    console.log(info.srcUrl);


          var obj = JSON.parse(input);
          console.log(obj);


          if (input.includes("faceAnnotations")){
            console.log("start of faceAnnotation");
            var face = new Object();
            face.emotions = new Array();

            faceAnnotations(obj,face);


            for (var i = 0; i < face.emotions.length; i++) {
              console.log(face.emotions[i].type + " " + face.emotions[i].likelihood);
            }
            console.log("headwear: " + face.headwear);
            console.log("Blurred: " + face.blurred);
          }


          if (input.includes("labelAnnotations")) {
            console.log("start of labelAnnotation");

            var labels = labelAnnotations(obj);

            for (var i = 0; i < labels.length; i++) {
              console.log("Labels: " + labels[i].description + " : " +  labels[i].score);
            }
          }



          if (input.includes("imagePropertiesAnnotation")){
            console.log("start of imagePropertiesAnnotation");

            var colorProperties = new Object();
            colorProperties.colors = new Array();

            colors(obj,colorProperties);

            for (var i = 0; i < colorProperties.colors.length; i++) {
              console.log("Colors: " + colorProperties.colors[i].red + " " + colorProperties.colors[i].green + " " + colorProperties.colors[i].blue + " " + colorProperties.colors[i].score + " " + colorProperties.colors[i].pixelFraction );
            }

          }

          if (input.includes("webDetection")){
            console.log("start of webDetection");

            var releventWebInfo = new Object();
            releventWebInfo.entities = new Array();

            webDetection(obj,releventWebInfo);

            for (var i = 0; i < releventWebInfo.entities.length; i++) {
              console.log("webEntities :" + releventWebInfo.entities[i].description + " " + releventWebInfo.entities[i].score )
            }

            console.log("Best Guess Label: " + releventWebInfo.bestGuess);
          }




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
	ans.typename="faces";
	ans.famous=new Array();
	ans.nonfamous=new Array();
	//ans.emotion=new Object();

	for(var face in faces) {
		if(face.detectionConfidence>=0.8) {
			var temp;
			temp.name=face.name;
			temp.headwear=face.headwear;
			temp.blurred=face.blurred;
			{
				var three_state_likelihood=true;
				var unknown_threshold=UNLIKELY;
				if(three_state_likelihood) {
					for(var i=0;i<face.emotions.length;i++) {
						if(face.emotions[i].likelihood==VERY_UNLIKELY) {
							face.emotions[i].likelihood=UNLIKELY;
						}
						if(face.emotions[i].likelihood==VERY_LIKELY) {
							face.emotions[i].likelihood=LIKELY;
						}
					}
				}

				var best=new Array();
				var likelihood=UNKNOWN;
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
					likelihood=UNKOWN;
				}
				temp.emotions=best;
			}
			if(temp.name!="") {
				ans.famous.push(temp);
			}
			else {
				ans.nonfamous.push(temp);
			}
		}
	}
	if(ans.famous.length>=1) {
		ans.relevancy=1.0;
	}
	else if(ans.nonfamous.length>=1) {
		ans.relevancy=0.9;
	}
	else {
		ans.relevancy=0.0;
	}
	ans.people=new Array();
	ans.people.concat(famous);
	ans.people.concat(nonfamous);
	return ans;
}

function analyze_landmarks(landmarks) {
	var ans=new Object();
	ans.typename="landmarks";
	ans.relevancy=landmarks.length==0 ? 0.0 : 0.8;
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

function analyze_labels(labels) {
	var ans=new Object();
	ans.typename="labels";
	ans.relevancy=0.6;
	ans.labels=labels;
	return ans;
}

function analyze_parser_output(parser_output) {
	var ans=new Array();
	ans.push(analyze_safesearch(parser_output.safesearch));
	ans.push(analyze_faces(parser_output.faces));
	ans.push(analyze_landmarks(parser_output.landmarks));
	ans.push(analyze_logos(parser_output.logos));
	return ans;
}

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Get image description",
  "type" : "normal",
  "contexts" : ["image", "video"],
  "onclick" : getClickHandler()
});

<<<<<<< HEAD
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
=======


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


	function faceAnnotations(obj,face) {


    //console.log(obj.faceAnnotations);

    var faceFeatures = obj.faceAnnotations[0];

    //console.log(faceFeatures.joyLikelihood);

    var temp = new Object();

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

    temp = new Object();
    temp.type = "headwear"
    face.headwear = likelihoodToInt(faceFeatures.headwearLikelihood)


    temp = new Object();
    temp.type = "blurred"
    face.blurred = likelihoodToInt(faceFeatures.blurredLikelihood)

	}

  function labelAnnotations(obj) {

      var start = obj.labelAnnotations;
      var labels = new Array();

      var temp = new Object();


      //console.log("Start(labels) length: " + start.length);
      for (var i = 0; i < start.length; i++) {

        temp = new Object();
        // console.log(start.description);
        // console.log(start.score);
        temp.description = start[i].description;
        temp.score = start[i].score;
        labels.push(temp);
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
>>>>>>> Converted json parser into js
