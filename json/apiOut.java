import java.io.FileReader;
import java.util.Iterator;
import java.util.Map;



import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;



public class apiOut {
	
	public static Object[] faceAnnotations(JSONObject jo ) {
		
		Object[] features = new Object[200];
		int i = 0;
		
		JSONArray ja = (JSONArray) jo.get("faceAnnotations");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		features[i] = pair.getValue();
        		i++;       		
        	}
        }
		
		return features;
	}
	
	
	public static Object[] labelAnnotations(JSONObject jo ) {
		
		Object[] features = new Object[200];
		int i = 0;
		
		JSONArray ja = (JSONArray) jo.get("labelAnnotations");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        while (itr2.hasNext()) {
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		features[i] = pair.getValue();
        		i++;       		
        	}
        }
		
		return features;
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
        	System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		System.out.println(pair.getKey() + " : " + pair.getValue());
        		webFeatures[i] = pair.getValue();
        		i++;       		
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
	        
	        if (jo.containsKey("labelAnnotations")) {
	        	labelAnnotations(jo);
	        }
	        
//	        needs to be tested on other pictures
//	        if (jo.containsKey("textAnnotations")) {
//	        	textAnnotations(jo);
//	        }
	        
//	        if (jo.containsKey("imagePropertiesAnnotation")) {
//	        	imagePropertiesAnnotation(jo);
//	        }
	        
//	        if (jo.containsKey("cropHintsAnnotation")) {
//	        	cropHintsAnnotation(jo);
//	        } 
	        
//	        if (jo.containsKey("fullTextAnnotation")) {
//        		fullTextAnnotation(jo);
//        	} 
	        
//	        if (jo.containsKey("webDetection")) {
//    			webDetection(jo);
//    		} 
	        
	    }
}
