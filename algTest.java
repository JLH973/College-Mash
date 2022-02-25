
        let scoreA = -18;
       let scoreB = 100;
       let k = 10;
        console.log("Original: " + scoreA);
        console.log("Original: " + scoreB);
        let Qa = Math.pow(10,(scoreA / 400.0));
       let Qb = Math.pow(10,(scoreB / 400.0));
        let Bexpect = Qa / (Qa + Qb);
        let Aexpect = Qb / (Qa + Qb);
        let AwinCalcA = scoreA - k * (1 - Aexpect);
        let AwinCalcB = scoreB - k * (0 - Bexpect);
      let BwinCalcA = scoreA - k * (0 - Aexpect);
       let BwinCalcB = scoreB - k * (1 - Bexpect);
        console.log("A wins: A:" + parseInt(AwinCalcA));
        console.log("\tB: " + parseInt(AwinCalcB));
        console.log("B wins: A:" + parseInt(BwinCalcA));
        console.log("\tB: " + parseInt(BwinCalcB));
