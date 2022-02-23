package algTest;

public class AlgTest {
	
	public static void main(String [] args) {
		int numA = -18;
		int numB = 100;
		double k = 10;
		
		System.out.println("Original: "+numA);
		System.out.println("Original: "+numB);
		
		double Qa = Math.pow(10,(numA/400.0));
		double Qb = Math.pow(10,(numB/400.0));
		
		double Bexpect = Qa / (Qa + Qb);
		double Aexpect = Qb / (Qa + Qb);
		
		double AwinCalcA = numA - k*(1 - Aexpect);
		double AwinCalcB = numB - k*(0 - Bexpect);
		double BwinCalcA = numA - k*(0 - Aexpect);
		double BwinCalcB = numB - k*(1 - Bexpect);
		
		System.out.println("A wins: A:" + (int)AwinCalcA);
		System.out.println("	B: "+ (int)AwinCalcB);	
		System.out.println("B wins: A:" + (int)BwinCalcA);
		System.out.println("	B: "+ (int)BwinCalcB);
	}
}
