
        var scoreA = -18;
        var scoreB = 100;
        var k = 10;
        console.log("Original: " + scoreA);
        console.log("Original: " + scoreB);
        var Qa = Math.pow(10,(scoreA / 400.0));
        var Qb = Math.pow(10,(scoreB / 400.0));
        var Bexpect = Qa / (Qa + Qb);
        var Aexpect = Qb / (Qa + Qb);
        var AwinCalcA = scoreA - k * (1 - Aexpect);
        var AwinCalcB = scoreB - k * (0 - Bexpect);
        var BwinCalcA = scoreA - k * (0 - Aexpect);
        var BwinCalcB = scoreB - k * (1 - Bexpect);
        console.log("A wins: A:" + parseInt(AwinCalcA));
        console.log("\tB: " + parseInt(AwinCalcB));
        console.log("B wins: A:" + parseInt(BwinCalcA));
        console.log("\tB: " + parseInt(BwinCalcB));
