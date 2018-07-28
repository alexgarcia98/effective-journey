import java.util.*;
import javafx.util.Pair;

public class madLibs {
	
	public static String getAdj(Pair[] input) {
		String adj = "";
		
		for (int i = 0; i < input.length; i++) {
			if (input[i].getValue() == "adjective") {
				adj = input[i].getKey().toString();
			}
		}
		
		return adj;
	}
	
	public static String getNoun(Pair[] input) {
		String noun = "";
		
		for (int i = 0; i < input.length; i++) {
			if (input[i].getValue() == "noun") {
				noun = input[i].getKey().toString();
				input[i] = new Pair("","");
				break;
			}
		}
		
		return noun;
	}
	
	public static void libs(Pair[] input) {
		
		int nounCount = 0;
		int adjCount = 0;
		
		for(int i = 0; i < input.length; i++) {
			if (input[i].getValue() == "noun") {
				nounCount++;
			}
			if (input[i].getValue() == "adjective") {
				adjCount++;
			}
		}
		
		if (nounCount == 1 && adjCount == 1) {
			System.out.println("This is a picture of a " + getAdj(input) +" " + getNoun(input));
		}
		
		if (nounCount == 2 && adjCount == 1) {
			System.out.println("This is a picture of a " + getAdj(input) +" " + getNoun(input) + " and a " + getNoun(input));
		} 
	}
	
	public static void main (String[] args) {
		
		String word = "face";
		String type = "noun"; 
		
		Pair test = new Pair(word,type);
		Pair person = new Pair("person","noun");
		Pair expression = new Pair ("smiling","adjective");
		
		Pair[] input = new Pair[3];
		input[0] = person;
		input[1] = expression;
		input[2] = test;
		
		libs(input);
		//System.out.println("This is a picture of a " + getAdj(input) + " " + getNoun(input)  );
		
		
		
	}
	
}
