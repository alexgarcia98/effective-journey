import java.io.FileReader;
import java.util.Iterator;
import java.util.Map;
import java.util.ArrayList;



import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

import javafx.util.Pair;

public class apiOut {
	
	
	static ArrayList<Face> faces = new ArrayList<Face>();
	
	static ArrayList<Pair> labels = new ArrayList<Pair>();
	
	static String bestGuess = "";
	
	//static int[] emotions = new int[Face.EMOTION_COUNT];
	
	//static int headwearLikelihood;
	
	//static int blurredLikelihood;
	
	//static double detectionConfidence;
	
	
	public static int likelihoodToInt(String likelihood) {
		
		if (likelihood.equals("UNKOWN")) {
			return 0;
		}
		else if (likelihood.equals("VERY_UNLIKELY")) {
			return 1;
		}
		else if (likelihood.equals("UNLIKELY")) {
			return 2;
		}
		else if (likelihood.equals("POSSIBLE")) {
			return 3;
		}
		else if (likelihood.equals("LIKELY")) {
			return 4;
		}
		else if (likelihood.equals("VERY_LIKELY")) {
			return 5;
		}
		return -1;
	}
	
	public static Object[] faceAnnotations(JSONObject jo ) {
		
		
		Object[] features = new Object[200];
		int i = 0;
		
		JSONArray ja = (JSONArray) jo.get("faceAnnotations");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	//System.out.println("new face");
        	Face temp = new Face();
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		if (pair.getKey().equals("joyLikelihood")) {
	        		//System.out.println(pair.getKey() + " : " + pair.getValue());
	        		int likelihood = likelihoodToInt(pair.getValue().toString());
	        		temp.emotions[Face.JOY] = likelihood;
        		}
        		if (pair.getKey().equals("sorrowLikelihood")) {
	        		//System.out.println(pair.getKey() + " : " + pair.getValue());
	        		int likelihood = likelihoodToInt(pair.getValue().toString());
	        		temp.emotions[Face.SORROW] = likelihood;
        		}
        		if (pair.getKey().equals("angerLikelihood")) {
	        		//System.out.println(pair.getKey() + " : " + pair.getValue());
	        		int likelihood = likelihoodToInt(pair.getValue().toString());
	        		temp.emotions[Face.ANGER] = likelihood;
        		}
        		if (pair.getKey().equals("surpriseLikelihood")) {
	        		//System.out.println(pair.getKey() + " : " + pair.getValue());
	        		int likelihood = likelihoodToInt(pair.getValue().toString());
	        		temp.emotions[Face.SURPRISE] = likelihood;
        		}
        		
        		if (pair.getKey().equals("headwearLikelihood")) {
        			int likelihood = likelihoodToInt(pair.getValue().toString());
        			temp.headwearLikelihood = likelihood;
        		}
        		
        		if (pair.getKey().equals("blurredLikelihood")) {
        			int likelihood = likelihoodToInt(pair.getValue().toString());
        			temp.blurredLikelihood = likelihood;
        		}
        		
        		if (pair.getKey().equals("detectionConfidence")) {
        			temp.detectionConfidence = (double) pair.getValue();
        		}
        	}
        	faces.add(temp);
        }
		
		return features;
	}
	
	
	public static void labelAnnotations(JSONObject jo ) {
		
		
		JSONArray ja = (JSONArray) jo.get("labelAnnotations");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        double score = 0;
        String description = "";
       
        while (itr2.hasNext()) {
        	//System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
                
        		Map.Entry pair = itr1.next();
        		if (pair.getKey().equals("score")) {
        			score = (double) pair.getValue();
        			//System.out.println(score);
        		}
        		if (pair.getKey().equals("description")) {
        			description = pair.getValue().toString();
        			//System.out.println(description);
        			Pair temp = new Pair(description,score);
        			labels.add(temp);
        		}
        	}
        }
	}
	
	public static Object[] imagePropertiesAnnotation(JSONObject jo ) {
		
		Object[] imageFeatures = new Object[200];
		int i = 0;
		
		JSONObject start =  (JSONObject) jo.get("imagePropertiesAnnotation");
		
		JSONObject next = (JSONObject) start.get("dominantColors");
		
		JSONArray ja = (JSONArray) next.get("colors");
		
		Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		imageFeatures[i] = pair.getValue();
        		i++;       		
        	}
        }
		
		
		return imageFeatures;
	}
	
	public static Object[] textAnnotations(JSONObject jo ) {
		
		Object[] textFeatures = new Object[200];
		int i = 0;
		
		JSONArray ja = (JSONArray) jo.get("textAnnotations");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		textFeatures[i] = pair.getValue();
        		i++;       		
        	}
        }
		
		
		return textFeatures;
	}
	
	
	public static Object[] cropHintsAnnotation(JSONObject jo ) {
		
		Object[] cropFeatures = new Object[200];
		int i = 0;
		
		JSONObject start = (JSONObject) jo.get("cropHintsAnnotation");
		
		JSONArray ja = (JSONArray) start.get("cropHints");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		cropFeatures[i] = pair.getValue();
        		i++;       		
        	}
        }
        
        return cropFeatures;
	}
	
	public static Object[] fullTextAnnotation(JSONObject jo ) {
		
		Object[] fulltextFeatures = new Object[200];
		int i = 0;
		
		JSONObject start = (JSONObject) jo.get("fullTextAnnotation");
		
		JSONArray ja = (JSONArray) start.get("pages");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		fulltextFeatures[i] = pair.getValue();
        		i++;       		
        	}
        }
        
        return fulltextFeatures;
	}
	
	public static Object[] webDetection(JSONObject jo ) {
		
		Object[] webFeatures = new Object[200];
		int i = 0;
		
		JSONObject start = (JSONObject) jo.get("webDetection");
		
		JSONArray ja = (JSONArray) start.get("webEntities");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	//System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		//System.out.println(pair.getKey() + " : " + pair.getValue());
        		webFeatures[i] = pair.getValue();
        		i++;       		
        	}
        }
        
        JSONArray labels = (JSONArray) start.get("bestGuessLabels");
        
        itr2 = labels.iterator();
        
        while (itr2.hasNext()) {
        	//System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		//System.out.println(pair.getKey() + " : " + pair.getValue());
        		bestGuess = pair.getValue().toString();		
        	}
        }
        
        return webFeatures;
	}
	


	 public static void main(String[] args) throws Exception
	    {
	    	 // parsing file "api.json"
	        Object obj = new JSONParser().parse(new FileReader("apiFace.json"));
	        
	         
	        // typecasting obj to JSONObject
	        JSONObject jo = (JSONObject) obj;
	        
	        
	        // main will see if the json contains certain key's and calls appropriate methods
	        
	        if (jo.containsKey("faceAnnotations")) {
        		faceAnnotations(jo);
        	}
//	        
	        if (jo.containsKey("labelAnnotations")) {
	        	labelAnnotations(jo);
	        }
//	        
//////	        needs to be tested on other pictures
//	        if (jo.containsKey("textAnnotations")) {
//	        	textAnnotations(jo);
//	        }
//	        
//	        if (jo.containsKey("imagePropertiesAnnotation")) {
//	        	imagePropertiesAnnotation(jo);
//	        }
//	        
//	        if (jo.containsKey("cropHintsAnnotation")) {
//	        	cropHintsAnnotation(jo);
//	        } 
//	        
//	        if (jo.containsKey("fullTextAnnotation")) {
//        		fullTextAnnotation(jo);
//        	} 
//	        
	        if (jo.containsKey("webDetection")) {
    			webDetection(jo);
    		} 
	        
	        //labels : score
//	        for (int i = 0; i < labels.size(); i++) {
//	        	System.out.println(labels.get(i).getKey().toString() + " : " + labels.get(i).getValue().toString());
//	        	
//	        }
//	        
//	        System.out.println("");
//	        
//	        System.out.println("Best guess is: " + bestGuess);
//	        
//	        System.out.println("");
	        

	        for (int i = 0; i < faces.size(); i++) {
	        	faces.get(i).print();
	        }
	        
	        
	    }
}
