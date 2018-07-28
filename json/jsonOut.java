import java.io.FileReader;
import java.util.Iterator;
import java.util.Map;



import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;


public class jsonOut
{
    public static void main(String[] args) throws Exception
    {
    	 // parsing file "JSONExample.json"
        Object obj = new JSONParser().parse(new FileReader("jsonTest3.json"));
        
        Object[] test = new Object[100]; 
        int i = 0;
         
        // typecasting obj to JSONObject
        JSONObject jo = (JSONObject) obj;
        
        
        /*
         * 
         * jsonTest3.json
         * 
         */
        
         
        JSONArray ja = (JSONArray) jo.get("colors");
        
        Iterator<Map.Entry> itr1;
        
        Iterator itr2 = ja.iterator();
        
        
        while (itr2.hasNext()) {
        	//System.out.println("");
        	itr1 = ((Map) itr2.next()).entrySet().iterator();
        	while(itr1.hasNext()) {
        		Map.Entry pair = itr1.next();
        		//System.out.println(pair.getKey() + " : " + pair.getValue());
        		test[i] = pair.getValue();
        		i++;       		
        	}
        }
        
        while(i > 0) {
        	System.out.println(test[i]);
        	i--;
        }
        
        
        
        
        /*
         * jsonTest2.json
         * 
         */
        
//        // getting firstName and lastName
//        String kind = (String) jo.get("kind");
//        String etag = (String) jo.get("etag");
//        String nextPageToken = (String) jo.get("nextPageToken");
//        String regionCode = (String) jo.get("regionCode");
//         
//        System.out.println(kind);
//        System.out.println(etag);
//        System.out.println(nextPageToken);
//        System.out.println(regionCode);
//        
//        Map pageInfo = ((Map)jo.get("pageInfo"));
//        
//        Iterator<Map.Entry> itr1 = pageInfo.entrySet().iterator();
//        
//        while(itr1.hasNext()) {
//        	Map.Entry pair = itr1.next();
//        	System.out.println(pair.getKey() + " : " + pair.getValue());
//        }
//        
//        JSONArray ja = (JSONArray) jo.get("items");
//        
//        Iterator itr2 = ja.iterator();
//        
//        while (itr2.hasNext()) {
//        	itr1 = ((Map) itr2.next()).entrySet().iterator();
//        	while(itr1.hasNext()) {
//        		Map.Entry pair = itr1.next();
//        		System.out.println(pair.getKey() + " : " + pair.getValue());
//        	}
//        }
        
        
        /* 
         * 
         * jsonTest1.json
         * 
         */
         
//        // getting age
//        long age = (long) jo.get("age");
//        System.out.println(age);
//         
//        // getting address
//        Map address = ((Map)jo.get("address"));
//         
//        // iterating address Map
//        Iterator<Map.Entry> itr1 = address.entrySet().iterator();
//        while (itr1.hasNext()) {
//            Map.Entry pair = itr1.next();
//            System.out.println(pair.getKey() + " : " + pair.getValue());
//        }
//         
//        // getting phoneNumbers
//        JSONArray ja = (JSONArray) jo.get("phoneNumbers");
//         
//        // iterating phoneNumbers
//        Iterator itr2 = ja.iterator();
//         
//        while (itr2.hasNext()) 
//        {
//            itr1 = ((Map) itr2.next()).entrySet().iterator();
//            while (itr1.hasNext()) {
//                Map.Entry pair = itr1.next();
//                System.out.println(pair.getKey() + " : " + pair.getValue());
//            }
//        }

//        // getting firstName and lastName
//        String color = (String) jo.get("color");
//
//        System.out.println(color);
//
//        // getting age
//        String category = (String) jo.get("category");
//        System.out.println(category);

    }
}
