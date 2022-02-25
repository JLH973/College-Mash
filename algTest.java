class algTest
{
    static main(args)
    {
        var numA = -18;
        var numB = 100;
        var k = 10;
        console.log("Original: " + numA);
        console.log("Original: " + numB);
        var Qa = Math.pow(10,(numA / 400.0));
        var Qb = Math.pow(10,(numB / 400.0));
        var Bexpect = Qa / (Qa + Qb);
        var Aexpect = Qb / (Qa + Qb);
        var AwinCalcA = numA - k * (1 - Aexpect);
        var AwinCalcB = numB - k * (0 - Bexpect);
        var BwinCalcA = numA - k * (0 - Aexpect);
        var BwinCalcB = numB - k * (1 - Bexpect);
        console.log("A wins: A:" + parseInt(AwinCalcA));
        console.log("\tB: " + parseInt(AwinCalcB));
        console.log("B wins: A:" + parseInt(BwinCalcA));
        console.log("\tB: " + parseInt(BwinCalcB));
    }
}
algTest.main([]);
