import java.util.ArrayList;

import javafx.util.Pair;

public class Face {
	
	public static final int UNKNOWN = 0;
	public static final int VERY_UNLIKELY = 1;
	public static final int UNLIKELY = 2;
	public static final int POSSIBLE = 3;
	public static final int LIKELY = 4;
	public static final int VERY_LIKELY = 5;
	
	public static final int JOY = 0;
	public static final int SORROW= 1;
	public static final int ANGER = 2;
	public static final int SURPRISE = 3;
	public static final int EMOTION_COUNT = 4;

	public ArrayList<Pair> points = new ArrayList<Pair>();
	
	public int[] emotions = new int[EMOTION_COUNT];
	
	public int headwearLikelihood;
	
	public int blurredLikelihood;
	
	public double detectionConfidence;
	
	public void print() {
		
		   System.out.println("Emotion Likelihoods");
	        for (int i = 0; i < emotions.length; i++) {
	        	System.out.println(emotions[i]);
	        }
	        
	        System.out.println("");
	        
	        System.out.println("headwear likelihood : " + headwearLikelihood);
	        System.out.println("blurred likelihood : " + blurredLikelihood);
	        System.out.println("Detection confidence : " + detectionConfidence);
		
	}
}
