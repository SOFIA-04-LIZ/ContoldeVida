const productos = [
{ sku:"3000003", material:"CORONA EXTRA BOTE H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000009", material:"CORONA EXTRA AMBAR 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000014", material:"MODELO ESPECIAL BARRIL CHOPE 29 L CT R", vidaMaxima:75 },
{ sku:"3000022", material:"VICTORIA MEGA 12/1.2 L CT R LISA", vidaMaxima:360 },
{ sku:"3000024", material:"VICTORIA 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000042", material:"NEGRA MODELO BARRIL CHOPE 29 L CT R", vidaMaxima:75 },
{ sku:"3000179", material:"CORONITA EXTRA CLARA 24/210 ML CT", vidaMaxima:360 },
{ sku:"3000187", material:"VICTORIA AMBAR PAPEL 24/210 ML CT", vidaMaxima:360 },
{ sku:"3000199", material:"MODELO ESPECIAL 12/355 ML CT ND", vidaMaxima:360 },
{ sku:"3000385", material:"CORONITA AMBAR PAPEL 24/210 ML CT R", vidaMaxima:360 },
{ sku:"3000461", material:"CORONA CLARA 12 PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000877", material:"NEGRA MODELO 12/355 ML CT ND", vidaMaxima:360 },
{ sku:"3000933", material:"CORONA EXTRA CLARA 24/355 ML PROMO TRAD", vidaMaxima:360 },
{ sku:"3001268", material:"CORONA DIV 12/940ML CT R GRABADA", vidaMaxima:360 },
{ sku:"3001269", material:"CORONA DIV 12/940ML CM GRABADA", vidaMaxima:360 },
{ sku:"3001462", material:"VICTORIA 12PK 12/355 ML CM", vidaMaxima:360 },
{ sku:"3001463", material:"VICTORIA LOOSE PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3002998", material:"VICTORIA MEGA 12/1.2 L CM LISA", vidaMaxima:360 },
{ sku:"3003697", material:"VICTORIA BOTE 4PK H-C 24/473 ML CT", vidaMaxima:360 },
{ sku:"3003911", material:"CORONA BOTE 4PKH-C 24/473 ML CT", vidaMaxima:360 },
{ sku:"3005167", material:"VICTORIA BOTE 6PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3005293", material:"C BOTE 12PK 24/355ML CT REFRICHELADOR", vidaMaxima:360 },
{ sku:"3006108", material:"VICTORIA BOTE 12PK 24/355ML CM FRIDGE", vidaMaxima:360 },
{ sku:"3006134", material:"ESTRELLA BOTE 4PK H-C 24/473ML CT CI", vidaMaxima:360 },
{ sku:"3006754", material:"CORONA LG BOTE 4PK H-C 24/473 CT CI", vidaMaxima:360 },
{ sku:"3006762", material:"CORONA LG TALL CAN 6P H-C 24/355ML CT CA", vidaMaxima:360 },
{ sku:"3006780", material:"CORONA 12 PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3006799", material:"CORONA LG T CAN 12PK 24/355 ML REF CM CA", vidaMaxima:360 },
{ sku:"3007289", material:"ME BOTE 6 PK H-C 24/355 ML CT CI", vidaMaxima:360 },
{ sku:"3007290", material:"NM BOTE 6 PK H-C 24/355 ML CT CI", vidaMaxima:360 },
{ sku:"3007377", material:"BUD LG 12 PK 12/1.2 L CT", vidaMaxima:180 },
{ sku:"3007446", material:"NEGRA MODELO BT 12 PK 24/355ML REF CM CI", vidaMaxima:360 },
{ sku:"3007497", material:"MODELO ESP BT 12PK 24/355ML REF CM CI", vidaMaxima:360 },
{ sku:"3007532", material:"MODELO ESP 12 PK/1L CT", vidaMaxima:360 },
{ sku:"3007678", material:"ME BT 4PK H-C 24/473 ML CT CI", vidaMaxima:360 },
{ sku:"3008021", material:"MODELO ESP 12 PK 12/ 1L NR", vidaMaxima:360 },
{ sku:"3008167", material:"BL BOTE 12 PK 12/710ML", vidaMaxima:180 },
{ sku:"3008188", material:"V FAM 12/940ML R GRABADA", vidaMaxima:360 },
{ sku:"3008239", material:"CE BT 12 PK DIV 12/710 ML", vidaMaxima:360 },
{ sku:"3008268", material:"V BT 12 PK DIV 12/710 ML", vidaMaxima:360 },
{ sku:"3008288", material:"CORONA LG TALL CAN 8PK H-C 24/355ML", vidaMaxima:360 },
{ sku:"3008329", material:"CE MEGA PAPEL 12 PK DIV 12/1.2 L RET", vidaMaxima:360 },
{ sku:"3008337", material:"CE MEGA PAPEL 12 PK DIV 12/1.2 L NR", vidaMaxima:360 },
{ sku:"3008402", material:"V CHAMOY BT 4 PK H-C 24/473 ML", vidaMaxima:360 },
{ sku:"3008414", material:"PACIFICO BALLENON 12/1.2L R CI", vidaMaxima:360 },
{ sku:"3008438", material:"STELLA A 6PK 24/330ML NR", vidaMaxima:270 },
{ sku:"3008450", material:"PACIFICO TALL CAN 6PK H-C 24/355ML CI", vidaMaxima:360 },
{ sku:"3008460", material:"PACIFICO 24PK 24/355 ML R CI", vidaMaxima:360 },
{ sku:"3008461", material:"PS TALL CAN 6PK HI-CONE 24/355 ML", vidaMaxima:360 },
{ sku:"3008508", material:"PACÍFICO 24 PK 24/210 ML RETORNABLE CI", vidaMaxima:360 },
{ sku:"3008517", material:"PACIFICO SUAVE 24 PK 24/355ML R", vidaMaxima:360 },
{ sku:"3008717", material:"NM 12 PK 12/1L R", vidaMaxima:360 },
{ sku:"3008728", material:"CL BT 12PK DIV 12/710ML", vidaMaxima:360 },
{ sku:"3008737", material:"MOD PURA MALTA 12PK 12/355ML NR", vidaMaxima:180 },
{ sku:"3008778", material:"MICHELOB ULTRA 6 PK 24/355 ML NR CI", vidaMaxima:270 },
{ sku:"3008787", material:"MICHELOB U TALL C 6PK H-C 24/355 ML CI", vidaMaxima:270 },
{ sku:"3008827", material:"MICHELOB ULTRA BT 4P H-C 24/473 ML CI", vidaMaxima:270 },
{ sku:"3008947", material:"BARRILITO BT 6PK H-C 24/330ML", vidaMaxima:360 },
{ sku:"3008989", material:"VICTORIA BT 6PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3008990", material:"MODELO ESP BT 6PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3009013", material:"CORONA BT 6PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3009179", material:"CORONA CERO TALL C 6P H-C 24/355 ML NL", vidaMaxima:360 },
{ sku:"3009209", material:"VICTORIA MANGO BT 4 P H-C 24/473 ML", vidaMaxima:180 },
{ sku:"3009607", material:"MODELO PURA MALTA 12 PK 12/1 L RET", vidaMaxima:180 },
{ sku:"3009695", material:"MICHELOB ULTRA BT 12P 12/710ML", vidaMaxima:270 },
{ sku:"3009696", material:"MOD ESPECIAL BT 12P 12/710ML CI", vidaMaxima:360 },
{ sku:"3009756", material:"NEGRA MODELO BT 4 PK H-C 24/473 ML", vidaMaxima:360 },
{ sku:"3009849", material:"CORONA EXTRA BT 12 PK 24/330 ML", vidaMaxima:360 },
{ sku:"3009850", material:"VICTORIA BT 12 PK 24/330 ML", vidaMaxima:360 },
{ sku:"3009867", material:"CORONA LIGHT BOTE 6 PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3009882", material:"CORONA LG BT 12 PK 24/330 ML", vidaMaxima:360 },
{ sku:"3009980", material:"CORONA LOOSE PK 24/355ML CJ CRAFT AF", vidaMaxima:360 },
{ sku:"3010295", material:"MODELO ESP BT 6PK H-C 24/410 ML", vidaMaxima:360 },
{ sku:"3010296", material:"CORONA EXTRA BT 6 PK H-C 24/410 ML", vidaMaxima:360 },
{ sku:"3010297", material:"VICTORIA BT 6 PK H-C 24/410 ML", vidaMaxima:360 },
{ sku:"3010298", material:"PACIFICO CLARA  BT 6 PK H-C 24/410 ML", vidaMaxima:360 },
{ sku:"3010337", material:"BUDWEISER TALL CAN 6 PK H-C 24/355 ML", vidaMaxima:180 },
{ sku:"3010377", material:"VICTORIA PIÑA BT 4P H-C 24/473ML", vidaMaxima:180 },
{ sku:"3010397", material:"MODELO ESPECIAL BOTE 12 PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3010404", material:"C AGUA RIFADA 24 PK 210 ML NR LIMA LIMON", vidaMaxima:180 },
{ sku:"3010407", material:"C AGUA RIFADA 24 PK 210 ML NR  LIM TOR", vidaMaxima:180 },
{ sku:"3010408", material:"C AGUA RIFADA 24 PK 210 ML NR LIM FRRO", vidaMaxima:180 },
{ sku:"3010443", material:"BARRILITO FAJILLA 24/325 ML NR PL", vidaMaxima:360 },
{ sku:"3010446", material:"PACIFICO SUAVE BOTE 6 PK H-C 24/410ML", vidaMaxima:360 },
{ sku:"3010448", material:"MODELO ESP BT 12 PK H-C 24/355 ML", vidaMaxima:360 },
{ sku:"3010469", material:"BUD LG CSTLLA 24/355 ML AF", vidaMaxima:180 },
{ sku:"3010498", material:"CORONA EXTRA BT 12PK H-C 24/355 ML NI", vidaMaxima:360 },
{ sku:"3010499", material:"MICHELOB ULTRA 12 PK 24/355 ML NR", vidaMaxima:270 },
{ sku:"3010758", material:"MICHELOB ULTRA T-C 12 PACK 24/355 ML", vidaMaxima:270 },
{ sku:"3017087", material:"BUD LIGHT DIVISION 24/355 ML RETORNABLE", vidaMaxima:180 },
{ sku:"3017107", material:"BUDWEISER DIV 12/1.06 LT TRAD RET", vidaMaxima:180 },
{ sku:"3017159", material:"PACIFICO BALLENA 12/940 ML RETORNABLE", vidaMaxima:360 },
{ sku:"3017177", material:"PACIFICO CLARA DVSION 12PK 12/1L RET", vidaMaxima:360 },
{ sku:"3017337", material:"P TC 12PK 24/355ML REFRICHELADOR", vidaMaxima:360 },
{ sku:"3017578", material:"PACIFICO SUAVE DIV 12 PK 12/1L RET", vidaMaxima:180 },
{ sku:"3017708", material:"STELLA ARTOIS 4PK H-C 24/473ML", vidaMaxima:270 },
{ sku:"3017868", material:"MODELO ESP 6PK 12/355ML NR", vidaMaxima:360 },
{ sku:"3017869", material:"CORONITA DIV 24/210 ML NR", vidaMaxima:360 },
{ sku:"3017867", material:"NEGRA MODELO 6PK 12/355ML NR", vidaMaxima:360 },
{ sku:"3017871", material:"VICTORIA LOOSE PACK DIV 24/210 ML NR", vidaMaxima:360 },
{ sku:"3017987", material:"CORONA GL BOTE 6 PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3017992", material:"CORONA GOLDEN LIGHT MEGA 12PK 12/1.2L", vidaMaxima:360 },
{ sku:"3017988", material:"CORONA GOLDEN LG BOTE 12 PK H-C 24/330 M", vidaMaxima:360 },
{ sku:"3018007", material:"CGL BT 12 PK DIV 12/710 ML", vidaMaxima:360 },
{ sku:"3017917", material:"PREMIUM 12 PACK ME-NM-MA-MT 12/355ML NR", vidaMaxima:360 },
{ sku:"3017927", material:"PREMIUM 24 PACK ME-NM-MA-MT 24/355ML NR", vidaMaxima:360 },
{ sku:"3018069", material:" CORONA LIGHT 12 P 1.2 L RETORNABLE CI", vidaMaxima:360 },
{ sku:"3017965", material:"BUD LIGHT 12 PACK HI CONE 24/330 ML", vidaMaxima:180 },
{ sku:"3017966", material:"BUD LIGHT 6 PACK HI-CONE 24/330 ML", vidaMaxima:180 },
{ sku:"3018227", material:"CORONA LIGHT AMBAR 24 PACK 24/355ML RET", vidaMaxima:360 },
{ sku:"3018228", material:"CORONITA LIGHT AMBAR 24 PK 24/210ML RET", vidaMaxima:360 },
{ sku:"3018106", material:"PACIFICO REGULAR BOTE 4PKH-C 24/473 ML C", vidaMaxima:360 },
{ sku:"3018199", material:"PACIFICO SUAVE BOTE 4PKH-C 24/473 ML CT", vidaMaxima:360 },
{ sku:"3018231", material:"CORONA GOLDEN LIGHT FAMILIAR 12/940 ML R", vidaMaxima:360 },
{ sku:"3018308", material:"CORONITA CERO 24 P 24/210ML RETORNABLE", vidaMaxima:360 },
{ sku:"3018373", material:"CORONITA CERO 24 PACK 24/210 ML NR", vidaMaxima:360 },
{ sku:"3018427", material:"NEGRA MODELO CERO 6PK 12/355ML NR", vidaMaxima:180 },
{ sku:"3018438", material:"MODELO DORADA CERO 6 PACK 12/355 ML NR", vidaMaxima:180 },
{ sku:"3018380", material:"PACIFICO LIGHT BOTE 6 PACK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3018477", material:"MODELO DORADA CERO 12/355 ML RET", vidaMaxima:180 },
{ sku:"3018478", material:"NEGRA MODELO CERO 12/355 ML RET", vidaMaxima:180 },
{ sku:"3018482", material:"VICTORIA DIVSION 12 PACK 12/1L RET", vidaMaxima:360 },
{ sku:"3018484", material:"CORONA EXTRA DIVSION 12PK 12/1L RET", vidaMaxima:360 },
{ sku:"3018453", material:"MOD DORADA CERO BOTE 6 PACK H-C 24/355ML", vidaMaxima:180 },
{ sku:"3018454", material:"NEGRA MOD CERO BOTE 6 PACK H-C 24/355 ML", vidaMaxima:180 },
{ sku:"3018537", material:"FLYING FISH TC 6 PACK H-C 24/355 ML", vidaMaxima:270 },
{ sku:"3018557", material:"FLYING FISH BOTE 4 PK HI-CONE 24/473 ML", vidaMaxima:270 },
{ sku:"3018563", material:"VICTORIA TAJIN 4PK H-C 24/473ML", vidaMaxima:180 },
{ sku:"3018562", material:"FLYING FISH CANASTILLA 6 PK 24/355 ML NR", vidaMaxima:270 },
{ sku:"3018636", material:"MOD PURA MALTA BOTE 4 PACKK H-C 24/473ML", vidaMaxima:180 },
{ sku:"3018637", material:"MODELO PURA MALTA 12/355 ML", vidaMaxima:180 },
{ sku:"3018780", material:"VICTORIA CHAMOY BOTE 6PK 6/473 ML LINEA", vidaMaxima:360 },
{ sku:"3018818", material:"VICTORIA 12 PK 12/ 1L NR", vidaMaxima:360 },
{ sku:"3018817", material:"CORONA EXTRA 12 PACK 12/ 1L NR", vidaMaxima:360 },
{ sku:"3018786", material:"CORONA LIGHT DVSION 12PK 12/1L RET", vidaMaxima:360 },
{ sku:"3018797", material:"MICHELOB ULTRA DVSION 12PK 12/1L RET", vidaMaxima:360 },
{ sku:"3018781", material:"VICTORIA TAJIN BOTE 6PK 24/473 ML LINEA", vidaMaxima:180 },
{ sku:"3018823", material:"MODELITO ESPECIAL DIV 24/210 RGB", vidaMaxima:180 },
{ sku:"3018787", material:"MODELITO ESPECIAL DIV 24/210 OW", vidaMaxima:180 },
{ sku:"3000004", material:"CORONA EXTRA MEGA 12/1.2 L CT R", vidaMaxima:360 },
{ sku:"3000005", material:"CORONA EXTRA MEGA 12/1.2 L CT R ETIQ", vidaMaxima:360 },
{ sku:"3000006", material:"CORONA EXTRA CLARA 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000007", material:"CORONA EXTRA CLARA 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000008", material:"CORONA EXTRA CLARA CSTLLA 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000010", material:"BARRILITO FAJ 24/325 ML CM **", vidaMaxima:360 },
{ sku:"3000011", material:"CORONA EXTRA CLARA 24/190 ML CT R", vidaMaxima:360 },
{ sku:"3000012", material:"CORONA LIGHT TALLCAN 6PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3000013", material:"MODELO ESPECIAL BARRIL CHOPE 59 L CT R", vidaMaxima:75 },
{ sku:"3000015", material:"MODELO ESPECIAL BOTE 6PK H-C24/355ML CT", vidaMaxima:360 },
{ sku:"3000016", material:"MODELO ESPECIAL BOTE 12 PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000017", material:"MODELO LIGHT BOTE 6 PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000018", material:"CORONA FAMILIAR GRABADA 12/940 ML CT R", vidaMaxima:360 },
{ sku:"3000019", material:"CORONA EXTRA CSTLLA 24/190 ML CT R", vidaMaxima:360 },
{ sku:"3000020", material:"BARRILITO FAJ 24/325ML CT NR", vidaMaxima:360 },
{ sku:"3000021", material:"VICTORIA MEGA 12/1.2 L CT R", vidaMaxima:360 },
{ sku:"3000023", material:"VICTORIA CHAPARRA 6 PK FILM 325 ML CM", vidaMaxima:360 },
{ sku:"3000025", material:"VICTORIA AMBAR 24/190 ML CT R", vidaMaxima:360 },
{ sku:"3000026", material:"PACIFICO BALLENA 12/940 ML CT R", vidaMaxima:360 },
{ sku:"3000027", material:"PACIFICO BOTE 6 PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000028", material:"MODELO ESPECIAL BOTE 6PK H-C 24/355ML CM", vidaMaxima:360 },
{ sku:"3000029", material:"MODELO ESPECIAL BOTE 8PK FILM24/355ML CT", vidaMaxima:360 },
{ sku:"3000030", material:"MODELO ESPECIAL 12/355 ML CT R", vidaMaxima:360 },
{ sku:"3000031", material:"MODELO ESPECIAL CSTLLA 12/355 ML CT R", vidaMaxima:360 },
{ sku:"3000032", material:"MODELO LIGHT 24/325 ML CT R", vidaMaxima:360 },
{ sku:"3000033", material:"MODELO LIGHT REFRICHBOTE12PK 24/355ML CM", vidaMaxima:360 },
{ sku:"3000034", material:"MODELO LIGHT BOTE 12 PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000035", material:"MODELO LIGHT BOTE 6 PK H-C 24/355 MLCM**", vidaMaxima:360 },
{ sku:"3000036", material:"MODELO LIGHT 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000037", material:"MODELO LIGHT CSTLLA 24/355 ML CM NR", vidaMaxima:360 },
{ sku:"3000038", material:"NEGRA MODELO EDIC ESPECIAL 12/325 ML CM", vidaMaxima:360 },
{ sku:"3000039", material:"NEGRA MODELO 12/355 ML CT R", vidaMaxima:360 },
{ sku:"3000040", material:"NEGRA MODELO CANASTILLA 12/355 ML CT R", vidaMaxima:360 },
{ sku:"3000041", material:"NEGRA MODELO BARRIL CHOPE 59 L CT R", vidaMaxima:75 },
{ sku:"3000043", material:"ESTRELLA MEGA 12/1.2 L CT R", vidaMaxima:360 },
{ sku:"3000044", material:"ESTRELLA CHAPARRA 6PK FILM24/325 ML CTNR", vidaMaxima:360 },
{ sku:"3000045", material:"ESTRELLA 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000046", material:"PACIFICO 24/190 ML CT R", vidaMaxima:360 },
{ sku:"3000047", material:"PACIFICO 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000048", material:"PACIFICO LIGHT BALLENA 12/940 ML CT", vidaMaxima:360 },
{ sku:"3000049", material:"PACIFICO LIGHT BOTE 6 PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3000050", material:"PACIFICO LIGHT BOTE 8 PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3000051", material:"PACIFICO LIGHT 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000052", material:"PACIFICO LIGHT 24/190 ML CT", vidaMaxima:360 },
{ sku:"3000053", material:"PACIFICO LIGHT BOTE 8 PK H-C 24/355ML CM", vidaMaxima:360 },
{ sku:"3000054", material:"LEON BOTE 8 PK FILM 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000055", material:"LEON MEGA 12/1.2 L CT R", vidaMaxima:360 },
{ sku:"3000056", material:"LEON BOTE 8 PK FILM 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000057", material:"LEON 24/355 ML CT R", vidaMaxima:360 },
{ sku:"3000060", material:"BUDWEISER BOTE 6 PK 24/12 OZ", vidaMaxima:360 },
{ sku:"3000061", material:"BUDWEISER 6 PACK 24/12 OZ CM", vidaMaxima:360 },
{ sku:"3000062", material:"BUDWEISER LITRO 12/32 OZ", vidaMaxima:360 },
{ sku:"3000063", material:"BUD LIGHT LITRO 12/32 OZ", vidaMaxima:360 },
{ sku:"3000064", material:"BUD LIGHT 6 PACK 24/12 OZ", vidaMaxima:360 },
{ sku:"3000065", material:"BUD LIGHT BOTE 15/24 OZ CM", vidaMaxima:360 },
{ sku:"3000066", material:"BUD LIGHT BOTE 6 PACK 24/12 OZ CM", vidaMaxima:360 },
{ sku:"3000067", material:"BUDWEISER BOTE 12 PACK 24/12 OZ CM", vidaMaxima:360 },
{ sku:"3000068", material:"BUD LIGHT BOTE 12 PACK 24/12 OZ CM", vidaMaxima:360 },
{ sku:"3000071", material:"BUDWEISER BOTELLA ALUMINIO 24/16 OZ", vidaMaxima:360 },
{ sku:"3000072", material:"BUD LIGHT BOTELLA ALUMINIO 24/16 OZ", vidaMaxima:360 },
{ sku:"3000073", material:"BUD LIGHT BOTE 18/12 OZ CM", vidaMaxima:360 },
{ sku:"3000074", material:"BUD LIGHT BOTE 8 PACK 24/12 OZ CM", vidaMaxima:360 },
{ sku:"3000075", material:"BUD LIGHT BOTE 3 PACK 15/24 OZ", vidaMaxima:360 },
{ sku:"3000076", material:"BUD LIGHT 12 PACK 24/12 OZ", vidaMaxima:360 },
{ sku:"3000078", material:"TSINGTAO 6 PACK 24/12 OZ CM", vidaMaxima:360 },
{ sku:"3000119", material:"NESTLE PUREZA VITAL MINER 24 X 355 ML", vidaMaxima:270 },
{ sku:"3000132", material:"CORONA BARRIL TIPO FRESH KEG 10 LT CT", vidaMaxima:360 },
{ sku:"3000133", material:"CORONA EXTRA CLARA L- PK 12/355 ML CT", vidaMaxima:360 },
{ sku:"3000134", material:"CORONA BARRIL  CHOPE 59 L CT R", vidaMaxima:75 },
{ sku:"3000135", material:"VICTORIA BARRIL 59 L CT R", vidaMaxima:75 },
{ sku:"3000139", material:"CE CN 24/473ML CANADA CAA.MAQ", vidaMaxima:100 },
{ sku:"3000141", material:"CORONA EXTRA JASP 24/355 ML", vidaMaxima:360 },
{ sku:"3000142", material:"BARRILITO FAJ 24/444ML CM", vidaMaxima:360 },
{ sku:"3000143", material:"CORONITA EXTRA AMBAR 24/190 ML CT", vidaMaxima:360 },
{ sku:"3000145", material:"CORONA BARRIL CHOPE 29 L", vidaMaxima:75 },
{ sku:"3000153", material:"NEGRA MODELO 12/355ML CT EDICI N ESP MAQ", vidaMaxima:360 },
{ sku:"3000157", material:"PACIFICO BALLENA CAJAPLAST 12/940 ML CTR", vidaMaxima:360 },
{ sku:"3000170", material:"CT E BOTE 4PK H-C 24/237ML CT", vidaMaxima:360 },
{ sku:"3000171", material:"CT E BOTE 8PK H-C 24/237ML CM", vidaMaxima:360 },
{ sku:"3000180", material:"ME BOTE 6 PK H-C 24/355 ML ND CT", vidaMaxima:360 },
{ sku:"3000181", material:"ME BOTE12 PK FRIDGE 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000185", material:"PACIFICO LIGHT 24/210 ML CT", vidaMaxima:360 },
{ sku:"3000186", material:"PACIFICO 24/210 ML.", vidaMaxima:360 },
{ sku:"3000189", material:"VICTORIA CHAPARRA FILM 6 P CT 24/325", vidaMaxima:360 },
{ sku:"3000190", material:"CORONA MUSIC BOTE REFRI 8/355 ML CM", vidaMaxima:360 },
{ sku:"3000191", material:"MODELO ESPECIAL BOTE8PKH-C24/355ML ND CT", vidaMaxima:360 },
{ sku:"3000192", material:"PACIFICO LIGHT BOTE12PKFRIDGE24/355ML CT", vidaMaxima:360 },
{ sku:"3000202", material:"PACIFICO LOOSE PACK 24/355 ML MODERNO", vidaMaxima:360 },
{ sku:"3000203", material:"PACIFICO BALLENON 12/1.2 L CT", vidaMaxima:360 },
{ sku:"3000206", material:"TSINGTAO 6 PACK 24/330 ML", vidaMaxima:360 },
{ sku:"3000207", material:"V BR 1/4(29LTS) SLIM USA USY", vidaMaxima:180 },
{ sku:"3000217", material:"ESTRELLA BOTE 4 PACK HI CONE 24/473 ML T", vidaMaxima:360 },
{ sku:"3000347", material:"MODELO LIGHT BOTE 8 PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000348", material:"PACIFICO CHAPARRA 24/325ML 6 PK FILM CM", vidaMaxima:360 },
{ sku:"3000349", material:"LEON CHAPARRA 24/325ML 6PK FILM CT", vidaMaxima:360 },
{ sku:"3000350", material:"VICTORIA BICENTENARIO 6PK 24/325 ML CM", vidaMaxima:360 },
{ sku:"3000351", material:"CORONA EXTRA MEGA 12/1.2 L CM ETIQ", vidaMaxima:360 },
{ sku:"3000353", material:"LEON CHAPARRA 24/325ML 6 PK FILM CM", vidaMaxima:360 },
{ sku:"3000357", material:"CORONA LIGHT TALLCAN 8PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3000358", material:"MODELO ESPECIAL 8 PACK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000360", material:"PACIFICO BOTE 8 PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3000361", material:"PACIFICO CHAPARRA 24/325ML 6PKFILM CT", vidaMaxima:360 },
{ sku:"3000362", material:"BUD LIGHT ALUMINIO MUNDIAL 24/16 OZ", vidaMaxima:360 },
{ sku:"3000384", material:"PACIFICO LIGHT BALLEN N 12/1.2 TRADICIO", vidaMaxima:360 },
{ sku:"3000457", material:"CORONA BOTE 6 PK FILM 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000458", material:"CORONA BOTE 6 PK H-C 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000459", material:"CORONA BOTE REFRICHELADOR 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000460", material:"CORONA CLARA CSTLLA 6 PACK 24/355 MLCM**", vidaMaxima:360 },
{ sku:"3000462", material:"CORONA CLARA LOOSE PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000463", material:"CORONA FAMILIAR GRABADA 12/940 ML CM **", vidaMaxima:360 },
{ sku:"3000465", material:"CORONA LG TALL CAN 8 PK H-C 24/355 ML **", vidaMaxima:360 },
{ sku:"3000466", material:"CORONA CLARA 12 PK MANGAS 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000467", material:"CORONA CLARA 6 PK MANGAS 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000468", material:"CORONA CLARA CSTLLA 6 PK 24/210 ML CM", vidaMaxima:360 },
{ sku:"3000470", material:"CORONITA CLARA LOOSE PK 24/210 ML CM", vidaMaxima:360 },
{ sku:"3000471", material:"ESTRELLA BOTE 4 PK H-C 24/473 ML CM", vidaMaxima:360 },
{ sku:"3000472", material:"ESTRELLA BOTE 6 PACK H-C 24/2 CM", vidaMaxima:360 },
{ sku:"3000473", material:"ESTRELLA CHAPARRA 6 PK FILM 24/325 ML CM", vidaMaxima:360 },
{ sku:"3000474", material:"FRIDGE PK BOTE REG MIX 8 PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000475", material:"LEON BOTE 6 PK H-C 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000476", material:"LEON CHAPARRA 12 PK 12/325 ML CM", vidaMaxima:360 },
{ sku:"3000477", material:"LEON MEGA  12/1.2 L CM", vidaMaxima:360 },
{ sku:"3000478", material:"MODELO ESP BOTELLA 12 PK 12/710 ML CM **", vidaMaxima:360 },
{ sku:"3000479", material:"MODELO ESP BOTE  12 PK 12/710 ML CM ND", vidaMaxima:360 },
{ sku:"3000481", material:"MODELO ESP BOTE 4 PK H-C 24/473 ML CM **", vidaMaxima:360 },
{ sku:"3000482", material:"MODELO ESP BOTE 18 PK 18/355 ML CM", vidaMaxima:360 },
{ sku:"3000483", material:"MODELO ESP BOTE 6 PK H-C 24/355 ML CM **", vidaMaxima:360 },
{ sku:"3000484", material:"MODELO ESP BOTE 8 PK FILM24/355 ML CM ND", vidaMaxima:360 },
{ sku:"3000485", material:"MODELO ESPECIAL FRIDGE PK 24/355ML CM **", vidaMaxima:360 },
{ sku:"3000486", material:"MODELO ESP 12 PK 12/355 ML CM ND", vidaMaxima:360 },
{ sku:"3000487", material:"MODELO LG BOTE 12 PK 12/355 ML CM", vidaMaxima:360 },
{ sku:"3000488", material:"FRIDGE PK BOTE MODELO MIX 12/355 ML CM", vidaMaxima:360 },
{ sku:"3000489", material:"MONTEJO BOTE 6 PK H-C 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000490", material:"NEGRA MODELO CSTLLA 12 PK 355ML CM", vidaMaxima:360 },
{ sku:"3000491", material:"PACIFICO BOTE 6 PK H-C 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000492", material:"PACIFICO LG BOTE 12 PK 24/355 ML CM **", vidaMaxima:360 },
{ sku:"3000493", material:"PREMIUM PACK MODELO ESPECIAL Y NEGRA MOD", vidaMaxima:360 },
{ sku:"3000494", material:"FRIDGE PK BOTE MIX LEON-PAC 12/355 ML CM", vidaMaxima:360 },
{ sku:"3000495", material:"FRIDGE PK BOTE MIX 8 PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3000497", material:"VICTORIA CHAPARRA12PK 12/325ML CM REGALO", vidaMaxima:360 },
{ sku:"3000498", material:"VICTORIA CHAPARRA 6PK 12/325ML CM REGALO", vidaMaxima:360 },
{ sku:"3000499", material:"VICTORIA MEGA 12/1.2 L CM **", vidaMaxima:360 },
{ sku:"3000501", material:"NEGRA MODELO EDIC. ESPECIAL 12 PK 355ML", vidaMaxima:360 },
{ sku:"3000502", material:"CORONITA EXTRA 12 PK 12/210 ML", vidaMaxima:360 },
{ sku:"3000517", material:"ME BOTE 8 PK FILM 24/355 ML ND CT", vidaMaxima:360 },
{ sku:"3000529", material:"MODELO ESPECIAL FRIDGE 12PK24/355ML CM", vidaMaxima:360 },
{ sku:"3000530", material:"MODELO ESPECIAL BOTELLA 12PK 12/710ML CM", vidaMaxima:360 },
{ sku:"3000531", material:"MODELO ESPECIAL BOTELLA 12PK 12/355ML CM", vidaMaxima:360 },
{ sku:"3000532", material:"FRIDGE 8PK REGIONAL MIXTO24/355MLBICENT.", vidaMaxima:360 },
{ sku:"3000533", material:"CARLSBERG 12 PACK 24/330 ML", vidaMaxima:360 },
{ sku:"3000537", material:"BARRILITO FAJILLA 24/444 ML TRADICIONAL", vidaMaxima:360 },
{ sku:"3000541", material:"MODELO ESPECIAL BOTELLA 12 PACK 12/710 M", vidaMaxima:360 },
{ sku:"3000607", material:"PACIFICO LIGHT BOTE 4PACKH-C24/473MLCT", vidaMaxima:360 },
{ sku:"3000608", material:"M. E. BOTE 6 PK 24 DE 12 OZ NON DEP USA", vidaMaxima:100 },
{ sku:"3000736", material:"MODELO ESP BOTE 12/710 ML TRADICIONAL ND", vidaMaxima:360 },
{ sku:"3000737", material:"MOD ESP BOTE 4PACK HICONE 24/473 ML TR", vidaMaxima:360 },
{ sku:"3000748", material:"NEGRA MODELO 12/325 ML EDIC ESPECIAL", vidaMaxima:360 },
{ sku:"3000763", material:"ESTRELLA 24/210 ML", vidaMaxima:360 },
{ sku:"3000777", material:"CORONA L TALL CAN 6PACK H-CONE 24/2 MD", vidaMaxima:360 },
{ sku:"3000778", material:"CORONA L TALL CAN 8PACK H-CONE 24/2 MD", vidaMaxima:360 },
{ sku:"3000809", material:"BUD LIGHT BOTE 30/12 OZ", vidaMaxima:360 },
{ sku:"3000868", material:"PACIFICO DRAFT BEER BARRIL 1/4 SLIM USA", vidaMaxima:180 },
{ sku:"3000934", material:"BUDWEISER PROMO TARRO 12/12 OZ", vidaMaxima:360 },
{ sku:"3000936", material:"ME BR 1/4(29 LTS) SLIM USA USZ", vidaMaxima:180 },
{ sku:"3000942", material:"MODELO ESPECIAL BARRIL 1/6 KWIK", vidaMaxima:360 },
{ sku:"3000944", material:"NMABR 1/2(59LTS) USA ND USZ", vidaMaxima:100 },
{ sku:"3000945", material:"NMABR SLIM USA ND USZ", vidaMaxima:180 },
{ sku:"3000968", material:"ME BR 1/2(59 LTS) USA USZ", vidaMaxima:100 },
{ sku:"3000973", material:"NEGRA MODELO 12/355 ML CM ND", vidaMaxima:360 },
{ sku:"3000982", material:"MOD ESP BOTELLA 12 PACK 12/710 ML TR ND", vidaMaxima:360 },
{ sku:"3000983", material:"NEGRA MODELO BARRIL 1/6 KWIK", vidaMaxima:360 },
{ sku:"3000985", material:"LEON NEGRA BOTE 6 PACK HI-CONE 24/2", vidaMaxima:360 },
{ sku:"3001040", material:"PACIFICO LIGHT 18 PK BOTE CM", vidaMaxima:360 },
{ sku:"3001042", material:"PACIFICO LIGHT 18 PK BOTE CT", vidaMaxima:360 },
{ sku:"3001107", material:"VICTORIA CELEBRA 12 P 325 ML NR MODERNO", vidaMaxima:360 },
{ sku:"3001108", material:"ME BOTE 6P HI-CONE PROMO MODERNO ND", vidaMaxima:360 },
{ sku:"3001109", material:"C-P-ME-L CAN 8P FRIDGE EXTRA 8/355ML M", vidaMaxima:360 },
{ sku:"3001247", material:"PT  BARRIL DUMMY PARA TRASPASO SERIES", vidaMaxima:75 },
{ sku:"3001249", material:"PT  BARRIL DUMMY PARA TRASPASO SERIES 2", vidaMaxima:75 },
{ sku:"3001250", material:"PT  BARRIL DUMMY PARA TRASPASO SERIES 3", vidaMaxima:75 },
{ sku:"3001267", material:"PACIFICO BALLENA 12/940 ML CT", vidaMaxima:360 },
{ sku:"3001270", material:"PACIFICO LG DIV 12/940ML CT R ETIQ PAPEL", vidaMaxima:360 },
{ sku:"3001277", material:"PACIFICO BALLENA CAJAPLAST 12/940 ML CTR", vidaMaxima:360 },
{ sku:"3001310", material:"NEGRA MODELO DIV 12/355ML CT EDICION ES", vidaMaxima:360 },
{ sku:"3001311", material:"VICTORIA 12 PK 355ML CM EDICION ESP", vidaMaxima:360 },
{ sku:"3001327", material:"CARLSBERG 12/330ML PROMOCIONAL", vidaMaxima:360 },
{ sku:"3001337", material:"MIX ME-L-M-P BOTE 12P 24/355ML CM FRIDGE", vidaMaxima:360 },
{ sku:"3001388", material:"MODELO ESP BOTE 6PK H-C 24/355 CT TLAXCA", vidaMaxima:360 },
{ sku:"3001391", material:"MODELO ESP BOTE 6PK H-C 24/355 CT ZAPOTL", vidaMaxima:360 },
{ sku:"3001392", material:"MODELO LG BOTE 6PK H-C 24/355 ML", vidaMaxima:360 },
{ sku:"3001393", material:"MODELO LG 6PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3001394", material:"MODELO LG 8PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3001395", material:"CORONA LG 24/355ML DIV CT R", vidaMaxima:360 },
{ sku:"3001397", material:"PACIFICO BALLENA CAJAPLAST 12/940 ML CTR", vidaMaxima:360 },
{ sku:"3001457", material:"MODELO LG 24/355ML DIV CT ETIQ PAPEL", vidaMaxima:360 },
{ sku:"3001461", material:"LEON-ME BOTE 12 PK 24/355ML FRIDGE CM", vidaMaxima:360 },
{ sku:"3001464", material:"MODELO LG 24/355 ML CSTLLA CM ETIQ PAPEL", vidaMaxima:360 },
{ sku:"3001465", material:"MODELO LG BOTE 12PK 24/355ML FRIDGE", vidaMaxima:360 },
{ sku:"3001466", material:"MODELO LG BOTE 12 PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3001468", material:"ME BR 1/4(29LTS) USA ZZY", vidaMaxima:180 },
{ sku:"3001507", material:"BARRIL PACIFICO LG 1/4 (29 LTS)", vidaMaxima:75 },
{ sku:"3001509", material:"PACIFICO LG BOTE 8P  24/355ML CT BEISBOL", vidaMaxima:360 },
{ sku:"3001511", material:"PAC LG BOTE 12P 355ML FRIDGE CT BEISBOL", vidaMaxima:360 },
{ sku:"3001512", material:"MODELO ESP BOTE 6PK H-C24/355ML CT LIBRO", vidaMaxima:360 },
{ sku:"3001513", material:"MODELO ESP BOTE 6PKH-C24/355ML CT QUERET", vidaMaxima:360 },
{ sku:"3001555", material:"BUDWEISER 12PK BFND", vidaMaxima:360 },
{ sku:"3001589", material:"MODELO ESP BOTE 6P?355ML CT FERIA LEON", vidaMaxima:360 },
{ sku:"3001620", material:"MODELO ESP BARRIL 1/4 (29 LTS) SLIM CT", vidaMaxima:75 },
{ sku:"3001621", material:"NEGRA MODELO BARRIL 1/4 (29 LTS) SLIM CT", vidaMaxima:75 },
{ sku:"3001651", material:"MODELO ESP BOTE 6PK H-C 24/355 CT JALOS", vidaMaxima:360 },
{ sku:"3001657", material:"MODELO ESP BOTE 6P 355ML CT FERIA GRULLO", vidaMaxima:360 },
{ sku:"3001667", material:"MODELO ESP BOTE 6P 355ML CT FERIA AUTLAN", vidaMaxima:360 },
{ sku:"3001707", material:"MAHOU 6 PACK", vidaMaxima:360 },
{ sku:"3001727", material:"CORONA BOTE 6PH-C 24/355ML CT RALLY LEON", vidaMaxima:360 },
{ sku:"3001737", material:"CORONA BOTE 6P H-C 24/355ML CT ATP", vidaMaxima:360 },
{ sku:"3001767", material:"MODELO ESP BTE 6PKH-C 24/355ML CT IGUALA", vidaMaxima:360 },
{ sku:"3001797", material:"IDEAL AZABACHE BOTELLA 4P 12/355ML CT NR", vidaMaxima:360 },
{ sku:"3001798", material:"CARLSBERG 12/330 ML + VASO EURO 2012", vidaMaxima:360 },
{ sku:"3001800", material:"CORONA 12/940ML CT CAJA PLASTICA", vidaMaxima:360 },
{ sku:"3001807", material:"IDEAL AS DE OROS BOTELL 4P12/355ML CT NR", vidaMaxima:360 },
{ sku:"3001808", material:"PACIFICO MEGA 12/1.2 CT CAJA PLASTICA", vidaMaxima:360 },
{ sku:"3001811", material:"CORONA MEGA 12/1.2 CT PAPEL CAJA PLASTIC", vidaMaxima:360 },
{ sku:"3001817", material:"CARLSBERG 12/330 ML + BUFANDA EURO 2012", vidaMaxima:360 },
{ sku:"3001819", material:"ME CN 18 P 18/12 OZ 3.2 USG", vidaMaxima:100 },
{ sku:"3001820", material:"MAHOU 5 ESTRELLAS BARRIL 30 LTS", vidaMaxima:360 },
{ sku:"3001827", material:"PACIFICO LG 12/940ML CT CAJA PLASTICA", vidaMaxima:360 },
{ sku:"3001850", material:"PACIFICO LG MEGA 12/1.2 CT CAJA PLASTICA", vidaMaxima:360 },
{ sku:"3001857", material:"MODELO ESP BOTE 6PK 24/355ML F. CINE CT", vidaMaxima:360 },
{ sku:"3001868", material:"MODELO ESP 12 P 12/710ML CT MAQ", vidaMaxima:360 },
{ sku:"3001927", material:"MAHOU 5 ESTRELLAS", vidaMaxima:360 },
{ sku:"3001928", material:"IDEAL AS DE OROS BOTELL 4P12/355ML CT NR", vidaMaxima:360 },
{ sku:"3002049", material:"IDEAL AZABACHE BOTELLA 4P 12/355ML CT NR", vidaMaxima:360 },
{ sku:"3002136", material:"MODELO ESP BOTE 6P 24/355ML CT FERIA S M", vidaMaxima:360 },
{ sku:"3002177", material:"PACIFICO LG BOTE 18PK/355ML CM", vidaMaxima:360 },
{ sku:"3002178", material:"MODELO LG BOTE 18 PK/355ML CM", vidaMaxima:360 },
{ sku:"3002197", material:"MODELO LG BOTE 12PK 24/355ML CM", vidaMaxima:360 },
{ sku:"3002337", material:"VICTORIA BARRIL 29 L CT", vidaMaxima:75 },
{ sku:"3002376", material:"TSINGTAO 6 PACK X5", vidaMaxima:360 },
{ sku:"3002392", material:"PACIFICO BALLENA 12/940 CT CAJA PLASTICA", vidaMaxima:360 },
{ sku:"3002517", material:"MODELO ESP BOTE 6PK 355ML CT F POTOSINA", vidaMaxima:360 },
{ sku:"3002527", material:"CORONA 12 PK 355 ML CM MUSIC", vidaMaxima:360 },
{ sku:"3002528", material:"CORONA LOOSE P 24/355ML MUSIC CM", vidaMaxima:360 },
{ sku:"3002529", material:"CORONA 6 PK 24/355 ML CM MUSIC", vidaMaxima:360 },
{ sku:"3002541", material:"DEM VIC UMV", vidaMaxima:360 },
{ sku:"3002547", material:"VICTORIA DEMO IAA", vidaMaxima:360 },
{ sku:"3002578", material:"DEMO VICT 24 04 2012", vidaMaxima:360 },
{ sku:"3002609", material:"BUDWEISER 12 PACK + BOCINAS", vidaMaxima:360 },
{ sku:"3002646", material:"BUD LIGHT 24/12OZ", vidaMaxima:360 },
{ sku:"3002647", material:"BUDWEISER 24/12OZ", vidaMaxima:360 },
{ sku:"3002668", material:"CORONA LG 12 PK 12/355ML CM", vidaMaxima:360 },
{ sku:"3002709", material:"VICTORIA MEGA 12/1.2 CT CP", vidaMaxima:360 },
{ sku:"3002727", material:"MODELO ESPBOTE 6P 24/355ML CT F MARIACHI", vidaMaxima:360 },
{ sku:"3002767", material:"PACIFICO LG BOTE 8P HC 24/355ML CT 8X7", vidaMaxima:360 },
{ sku:"3002818", material:"MODELO LG 24/210 ML CT", vidaMaxima:360 },
{ sku:"3002819", material:"MODELO LG 12/940 ML CT", vidaMaxima:360 },
{ sku:"3002820", material:"MODELO ESP BOTE 6 PK 24/355ML CT FENAZA", vidaMaxima:360 },
{ sku:"3002827", material:"BUD LIGHT MLB 12 PACK 12/12 OZ", vidaMaxima:360 },
{ sku:"3002858", material:"LEON 12 PK 12/355ML CT", vidaMaxima:360 },
{ sku:"3002887", material:"MAHOU 5 ESTRELLAS BARRIL 30 LTS RETORNAB", vidaMaxima:360 },
{ sku:"3002897", material:"CORONA BOTE 6P HC 24-355ML CT CAPITAL", vidaMaxima:360 },
{ sku:"3002907", material:"MODELO ESP BOTE 6PK 24/355 ML CT PACHUCA", vidaMaxima:360 },
{ sku:"3002927", material:"IDEAL AZABACHE BOTELLA 4P 12/355ML CM", vidaMaxima:360 },
{ sku:"3002928", material:"IDEAL AS DE OROS BOTELLA 4P 12/355ML CM", vidaMaxima:360 },
{ sku:"3002938", material:"NEGRA MODELO 12/355ML CT EDICION NAVIDEN", vidaMaxima:360 },
{ sku:"3002939", material:"BUD LIGHT PRINGLES BOTE 12 PACK 12/12OZ", vidaMaxima:360 },
{ sku:"3002978", material:"VICTORIA 12 PK 12/355 ML CM NAVIDENA", vidaMaxima:360 },
{ sku:"3002999", material:"BUDWEISER CUBETA BOTE 12 PACK D12", vidaMaxima:360 },
{ sku:"3003027", material:"BUD LIGHT BARRIL 30 LTS", vidaMaxima:75 },
{ sku:"3003058", material:"ESTRELLA 12 PK 12/355 ML CM", vidaMaxima:360 },
{ sku:"3003100", material:"ESTRELLA 6 PK 24/355ML CM", vidaMaxima:360 },
{ sku:"3003139", material:"ME BR 1/2(59 LTS) USA USY", vidaMaxima:180 },
{ sku:"3003142", material:"P BARRIL 1/4(29LTS)SLIM USA USY", vidaMaxima:180 },
{ sku:"3003157", material:"V BR 1/4(29LTS) SLIM USA USY", vidaMaxima:180 },
{ sku:"3003158", material:"NM BR 1/2(59LTS) USA USY", vidaMaxima:180 },
{ sku:"3003159", material:"NM BR 1/4(29 LTS) SLIM USA USY", vidaMaxima:180 },
{ sku:"3003160", material:"ME BR 1/4(29LTS) USA ZZY", vidaMaxima:180 },
{ sku:"3003267", material:"ESTRELLA BARRIL 29 LT CT", vidaMaxima:75 },
{ sku:"3003270", material:"MOD ESP BOTE 6PK 24/355ML F. DURANGO CT", vidaMaxima:360 },
{ sku:"3003298", material:"CORONA BOTE 6P 24/355ML 2M FANS CT", vidaMaxima:360 },
{ sku:"3003307", material:"ME BOTE 6PK 24/355ML F.GOMEZ PALACIOS CT", vidaMaxima:360 },
{ sku:"3003317", material:"NEGRA MODELO 12/355 ML DIVISION CM", vidaMaxima:360 },
{ sku:"3003319", material:"NEGRA MODELO 8P 8/355ML RECETARIO CM", vidaMaxima:360 },
{ sku:"3003337", material:"CORONA LP 12/355ML. CM PROMO FUTBOL", vidaMaxima:360 },
{ sku:"3003347", material:"MICHELOB ULTRA 12 PACK 24/355ML CM", vidaMaxima:360 },
{ sku:"3003348", material:"MICHELOB ULTRA 12 PACK 24/355ML CT", vidaMaxima:360 },
{ sku:"3003357", material:"MICHELOB ULTRA 6 PACK 24/355ML CT", vidaMaxima:360 },
{ sku:"3003358", material:"MICHELOB ULTRA 6 PACK 24/355ML CM", vidaMaxima:360 },
{ sku:"3003449", material:"VICTORIA MEGA 12/1.2L CM LISA F. PATRIAS", vidaMaxima:360 },
{ sku:"3003457", material:"BUD LIGHT BOTELLA ALUMINIO 6P 24/16 OZ", vidaMaxima:360 },
{ sku:"3003477", material:"BUD LIGHT BOTE 6PK H-C 24/355ML CT", vidaMaxima:180 },
{ sku:"3003478", material:"BUD LIGHT BOTE 6PK H-C 24/355ML CM", vidaMaxima:180 },
{ sku:"3003479", material:"BUD LIGHT BOTE 12 PK 24/355ML CM", vidaMaxima:180 },
{ sku:"3003487", material:"BUD LIGHT BOTE 12 P 12/710ML CT", vidaMaxima:180 },
{ sku:"3003488", material:"BUD LIGHT BOTE 12 P 12/710ML CM", vidaMaxima:180 },
{ sku:"3003497", material:"BUD LIGHT BOTE 12 PK 24/355ML CT", vidaMaxima:180 },
{ sku:"3003498", material:"BUD LIGHT BOTE 18 P 18/355 ML CM", vidaMaxima:180 },
{ sku:"3003507", material:"BUD LIGHT BOTE 18 P 18/355 ML CT", vidaMaxima:180 },
{ sku:"3003529", material:"ESTRELLA 24/210 ML CT PROMOCIONAL R", vidaMaxima:360 },
{ sku:"3003530", material:"ESTRELLA 24/355 ML CT PROMOCIONAL R", vidaMaxima:360 },
{ sku:"3003531", material:"ESTRELLA MEGA 12/1.2 L CT PROMOCIONAL R", vidaMaxima:360 },
{ sku:"3003537", material:"ESTRELLA 24/355 ML MD MAQ DIV", vidaMaxima:360 },
{ sku:"3003538", material:"ESTRELLA 24/355 ML MD CAN HISTORIA", vidaMaxima:360 },
{ sku:"3003558", material:"BUD LIGHT BOTE 6PK H-C 24/355ML CT", vidaMaxima:180 },
{ sku:"3003567", material:"VICTORIA MEGA FAMILIAR 12/1.2 T/NO PROMO", vidaMaxima:360 },
{ sku:"3003568", material:"VICTORIA MEGAFAMILIAR 12/1.2 T/L NO PROM", vidaMaxima:360 },
{ sku:"3003577", material:"CORONA EXTRA MEGAFAMILIAR 12/1.2 T/NO PR", vidaMaxima:360 },
{ sku:"3003585", material:"CORONA EXTRA BOTE H-C 24/355 ML CT SP", vidaMaxima:360 },
{ sku:"3003586", material:"CORONA EXTRA CLARA 24/355 ML_E_", vidaMaxima:360 },
{ sku:"3003587", material:"CORONA LG TALLCAN 6PK H-C 24/355ML CT SP", vidaMaxima:360 },
{ sku:"3003588", material:"VICTORIA 24/355 ML CT R SP", vidaMaxima:360 },
{ sku:"3003589", material:"BUD LIGHT LITRO 12/32 OZ SP", vidaMaxima:360 },
{ sku:"3003590", material:"BUD LIGHT 6 PACK 24/12 OZ SP", vidaMaxima:360 },
{ sku:"3003591", material:"BUD LIGHT BOTE 6PK 24/12 OZ CM SP", vidaMaxima:360 },
{ sku:"3003592", material:"CORONA EXTRA CLARA 24/355 ML CT R_E_", vidaMaxima:360 },
{ sku:"3003593", material:"CORONA DIV 12/940ML CT R GRABADA SP", vidaMaxima:360 },
{ sku:"3003594", material:"CORONA LG 24/355ML DIV CT R SP", vidaMaxima:360 },
{ sku:"3003595", material:"BUD LIGHT BOTE 6PK H-C 24/355ML SP", vidaMaxima:180 },
{ sku:"3003599", material:"CORONA 24/473 ML LP TAB LOCK CM MAQ", vidaMaxima:360 },
{ sku:"3003600", material:"CORONA 4 PK 24/473 ML LP TAB LOCK CM", vidaMaxima:360 },
{ sku:"3003601", material:"VICTORIA 12 PK 12/210ML CM", vidaMaxima:360 },
{ sku:"3003608", material:"CORONITA EXTRA CLARA 24/210 ML CT SP", vidaMaxima:360 },
{ sku:"3003609", material:"MODELO LG 6PK H-C 24/355 ML CT SP", vidaMaxima:360 },
{ sku:"3003610", material:"MODELO ESPECIAL BOTE8PKH-C24/355ML ND CT SP", vidaMaxima:360 },
{ sku:"3003611", material:"M0DELO ESPECIAL BOTE6PKH-C24/355ML ND CT SP", vidaMaxima:360 },
{ sku:"3003612", material:"CORONA CLARA 12PK12/355 ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003613", material:"CORONITA LOOSE PK24/210 ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003614", material:"CORONITA LOOSE PK12/210 ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003615", material:"CORONA BOTE 12PK24/355ML FRIDGE CM PREMU", vidaMaxima:360 },
{ sku:"3003616", material:"CORONA LG TC6PK H-C24/355MLCT PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003617", material:"STELLA ARTOIS 4X6 330ML 6 PACK", vidaMaxima:360 },
{ sku:"3003627", material:"STELLA ARTOIS 12PK 24/330ML", vidaMaxima:360 },
{ sku:"3003628", material:"STELLA ARTOIS LP 24/330ML", vidaMaxima:360 },
{ sku:"3003637", material:"BUD LIGHT PLATINUM 6PK 24/355ML", vidaMaxima:180 },
{ sku:"3003638", material:"BUD LIGHT PLATINUM 18 PK 18/355ML", vidaMaxima:180 },
{ sku:"3003641", material:"CORONA CSTLLA 6 PK24/210ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003642", material:"CORONA CSTLLA 6PACK 24/355ML PREMUNDI CM", vidaMaxima:360 },
{ sku:"3003647", material:"CORONA LG TC 6PH-C24/355ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003648", material:"CORONA LOOSE PK 24/355 ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003650", material:"CORONA BOTE H-C6PK24/355 MLCM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003651", material:"CORONA BOTE H-C6PK24/355ML CT PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003653", material:"CT E BOTE 4PK H-C 24/237ML CT PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003654", material:"CT E BOTE 8PK H-C 24/237ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003657", material:"PACIFICO BOTE 8PK -C 24/355ML MAZATLA CT", vidaMaxima:360 },
{ sku:"3003658", material:"PACIFICO LG BOTE 8PKH-C 24/355ML MAZA CT", vidaMaxima:360 },
{ sku:"3003659", material:"PACIFICO LG BOTE 12PK24/355ML MAZATLA CT", vidaMaxima:360 },
{ sku:"3003660", material:"PACIFICO LG 12/940ML CT CPLA NO PROMO", vidaMaxima:360 },
{ sku:"3003661", material:"PACIFICO BALLENA 12/940 CT CPLAST NO PRO", vidaMaxima:360 },
{ sku:"3003667", material:"BARRILITO FAJ 24/325ML CT NR NO PROMO", vidaMaxima:360 },
{ sku:"3003668", material:"CORONA LG 12 PK 12/355ML CM PREMUNDIAL", vidaMaxima:360 },
{ sku:"3003698", material:"VICTORIA BOT 12PK12/710MLCT FER S MARCOS", vidaMaxima:360 },
{ sku:"3003707", material:"CORONITA LG 24/210 ML CT", vidaMaxima:360 },
{ sku:"3003708", material:"PACIFICO 24/210 ML NO PROMO", vidaMaxima:360 },
{ sku:"3003727", material:"CORONA LG 12 P 12/710ML CT", vidaMaxima:360 },
{ sku:"3003767", material:"VICTORIA BOTE 4P H-C 24/473ML CM", vidaMaxima:360 },
{ sku:"3003771", material:"MODELO ESP B 6PK H-C 24/355 CT JALOS_E_", vidaMaxima:360 },
{ sku:"3003772", material:"MODELO ESP B 6P 355ML CT FERIA GRULLO_E_", vidaMaxima:360 },
{ sku:"3003773", material:"MODELO ESP B 6P 355ML CT FERIA AUTLAN_E_", vidaMaxima:360 },
{ sku:"3003774", material:"CORONA B 6PH-C 24/355ML CT RALLY LEON_E_", vidaMaxima:360 },
{ sku:"3003775", material:"CORONA BOTE 6P H-C 24/355ML CT ATP_E_", vidaMaxima:360 },
{ sku:"3003776", material:"MODELO ESP B 6PKHC 24/355ML CT IGUALA_E_", vidaMaxima:360 },
{ sku:"3003780", material:"CORONA LG 12PK 12/355ML CM CIELITO LINDO", vidaMaxima:360 },
{ sku:"3003781", material:"BUD LIGHT 6P 24/355ML NR CT", vidaMaxima:180 },
{ sku:"3003782", material:"BUD LIGHT 6P 24/355 ML CM", vidaMaxima:180 },
{ sku:"3003788", material:"CORONA LG TC 6PK H-C 24/355ML CM CIELITO", vidaMaxima:360 },
{ sku:"3003789", material:"CE BOTE 12PK24/355ML FRIDGE CM CIELITO", vidaMaxima:360 },
{ sku:"3003790", material:"CORONA LG TC 6PK H-C 24/355ML CIELITO_E_", vidaMaxima:360 },
{ sku:"3003791", material:"CORONA BOTE H-C 6PK 24/355 ML CIELITO_E_", vidaMaxima:360 },
{ sku:"3003797", material:"CORONA EXTRA MEGA 12/1.2 L CT R_E_", vidaMaxima:360 },
{ sku:"3003798", material:"CORONA EXTRA AMBAR 24/355 ML CT R_E_", vidaMaxima:360 },
{ sku:"3003807", material:"CORONA BOTE H-C 6PK 24/355 ML CT CIELITO", vidaMaxima:360 },
{ sku:"3003808", material:"CORONA BOTE H-C 6PK 24/355 ML CM CIELITO", vidaMaxima:360 },
{ sku:"3003809", material:"CT E BOTE 4PK H-C 24/237ML CT CIELITO", vidaMaxima:360 },
{ sku:"3003810", material:"CT E BOTE 8PK H-C 24/237ML CM CIELITO", vidaMaxima:360 },
{ sku:"3003811", material:"CORONA LG TC 6PK H-C 24/355ML CT CIELITO", vidaMaxima:360 },
{ sku:"3003812", material:"CORONA LG TC 8PK H-C 24/355ML CT CIELITO", vidaMaxima:360 },
{ sku:"3003813", material:"C LG TALL CAN 12PK24/355ML REFRI CM CIEL", vidaMaxima:360 },
{ sku:"3003814", material:"CORONA LG 12PK 12/210ML CM CIELITO LINDO", vidaMaxima:360 },
{ sku:"3003817", material:"MODELO ESPECIAL B 6PK H-C24/355ML CT_E_", vidaMaxima:360 },
{ sku:"3003818", material:"CORONA FAMILIAR GRABADA 12/940 ML CTR_E_", vidaMaxima:360 },
{ sku:"3003819", material:"PACIFICO BALLENA 12/940 ML CT R_E_", vidaMaxima:360 },
{ sku:"3003820", material:"MODELO ESPECIAL B 6PK H-C 24/355ML CM_E_", vidaMaxima:360 },
{ sku:"3003821", material:"PACIFICO LIGHT BALLENA 12/940 ML CT_E_", vidaMaxima:360 },
{ sku:"3003822", material:"PACIFICO LIGHT 24/210 ML CT_E_", vidaMaxima:360 },
{ sku:"3003827", material:"ESTRELLA B 4 PACK HI CONE 24/473 ML T_E_", vidaMaxima:360 },
{ sku:"3003828", material:"MODELO ESPECIAL 8 PK H-C 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3003829", material:"ME BOTE 8 PK FILM 24/355 ML ND CT_E_", vidaMaxima:360 },
{ sku:"3003830", material:"PACIFICO BALLENA 12/940 ML CT_E_", vidaMaxima:360 },
{ sku:"3003831", material:"PACIFICO LG DIV 12/940ML CT R E PAPEL_E_", vidaMaxima:360 },
{ sku:"3003832", material:"MODELO ESP BOTE 6PK HC 24/355 CT TLAX_E_", vidaMaxima:360 },
{ sku:"3003833", material:"MODELO ESP B 6PK H-C 24/355 CT ZAPOTL_E_", vidaMaxima:360 },
{ sku:"3003834", material:"MODELO ESP B 6PK H-C24/355ML CT LIBRO_E_", vidaMaxima:360 },
{ sku:"3003835", material:"MODELO ESP B 6PKH-C24/355ML CT QUERET_E_", vidaMaxima:360 },
{ sku:"3003836", material:"MODELO ESP B 6P 355ML CT FERIA LEON_E_", vidaMaxima:360 },
{ sku:"3003837", material:"CORONA 12/940ML CT CAJA PLASTICA_E_", vidaMaxima:360 },
{ sku:"3003838", material:"PACIFICO LG MEGA 12/1.2 CT C PLASTICA_E_", vidaMaxima:360 },
{ sku:"3003839", material:"PACIFICO MEGA 12/1.2 CT CAJA PLASTICA_E_", vidaMaxima:360 },
{ sku:"3003840", material:"MODELO ESP B 6PK 24/355ML F. CINE CT_E_", vidaMaxima:360 },
{ sku:"3003841", material:"MODELO ESP B 6PK 355ML CT F POTOSINA_E_", vidaMaxima:360 },
{ sku:"3003842", material:"MODELO ESPB 6P 24/355ML CT F MARIACHI_E_", vidaMaxima:360 },
{ sku:"3003843", material:"MODELO ESP B 6 PK 24/355ML CT FENAZA_E_", vidaMaxima:360 },
{ sku:"3003844", material:"CORONA BOTE 6P HC 24-355ML CT CAPITAL_E_", vidaMaxima:360 },
{ sku:"3003845", material:"MODELO ESP B 6PK 24/355 ML CT PACHUCA_E_", vidaMaxima:360 },
{ sku:"3003846", material:"CORONA BOTE 6P 24/355ML 2M FANS CT_E_", vidaMaxima:360 },
{ sku:"3003848", material:"BUD LIGHT BOTE 12 P 12/710ML CT_E_", vidaMaxima:180 },
{ sku:"3003849", material:"CORONA LG TC6PK H-C24/355MLCT PREMUND_E_", vidaMaxima:360 },
{ sku:"3003850", material:"CORONA BOTE H-C6PK24/355ML CT PREMUND_E_", vidaMaxima:360 },
{ sku:"3003852", material:"CORONITA CSTLLA 6 PK24/210ML CM CIELITO", vidaMaxima:360 },
{ sku:"3003853", material:"CORONITA LOOSE PK24/210 ML CM CIELITO", vidaMaxima:360 },
{ sku:"3003854", material:"CORONITA EXTRA 12 PK 12/210 ML CIELITO", vidaMaxima:360 },
{ sku:"3003855", material:"CORONA CSTLLA 24/355 ML CM CIELITO LINDO", vidaMaxima:360 },
{ sku:"3003856", material:"CORONA EX 12PK 12/355ML CM CIELITO LINDO", vidaMaxima:360 },
{ sku:"3003857", material:"CORONA CLARA LOOSE PK24/355ML CM CIELITO", vidaMaxima:360 },
{ sku:"3003881", material:"BUDWEISER BOTE 6PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3003882", material:"BUDWEISER BOTE 6PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3003883", material:"VICTORIA BOTE 4P H-C 24/473ML CT FENADU", vidaMaxima:360 },
{ sku:"3003886", material:"VICTORIA BOTE 12/710 ML CT FENAZA", vidaMaxima:360 },
{ sku:"3003888", material:"CORONA LG 12 P 12/710ML CT_E_", vidaMaxima:360 },
{ sku:"3003889", material:"CORONA 24PK24/473ML BOTELL ALU MEX SU CT", vidaMaxima:360 },
{ sku:"3003894", material:"PACIFICO BALLENON 12/1.2 L CT_E_", vidaMaxima:360 },
{ sku:"3003895", material:"CORONITA LG 24/210 ML CT_E_", vidaMaxima:360 },
{ sku:"3003896", material:"VICTORIA AMBAR PAPEL 24/210 ML CT_E_", vidaMaxima:360 },
{ sku:"3003908", material:"PACIFICO LIGHT BOTE 8 PK H-C 24/355ML_E_", vidaMaxima:360 },
{ sku:"3003909", material:"PACIFICO LG BOTE 8PKH-C 24/355ML MAZA_E_", vidaMaxima:360 },
{ sku:"3003912", material:"VICTORIA BOTE 4PKH-C 24/473 ML CT FENAPO", vidaMaxima:360 },
{ sku:"3003913", material:"VICTORIA BOTE 4PK H-C 24/473ML CT FETO", vidaMaxima:360 },
{ sku:"3003915", material:"CORONA LG TALL CAN 12PK24/355ML REFRI CM", vidaMaxima:360 },
{ sku:"3003917", material:"VICTORIA BOTE 12PK 12/710 ML CT FENAPO", vidaMaxima:360 },
{ sku:"3003937", material:"BUD LIGHT BOTE 12 PACK 24/12 OZ CM_E_", vidaMaxima:360 },
{ sku:"3003938", material:"VICTORIA BOTE 12/710 ML CT SN FRANCISCO", vidaMaxima:360 },
{ sku:"3003947", material:"CORONITA LIGHT LOOSE PK 12/210ML MODERNO", vidaMaxima:360 },
{ sku:"3003961", material:"VICTORIA BOTE 12/710 ML CT FENAPLA", vidaMaxima:360 },
{ sku:"3003977", material:"CORONITA AMBAR PAPEL 24/210 ML CT R _E_", vidaMaxima:360 },
{ sku:"3003997", material:"VICTORIA BOTE 12/710 ML CT FIL", vidaMaxima:360 },
{ sku:"3004007", material:"BUD LIGHT STRAWBERITA 12 PACK 24/8OZ", vidaMaxima:360 },
{ sku:"3004008", material:"BUD LIGHT LIMEARITA 12 PACK 24/8OZ", vidaMaxima:360 },
{ sku:"3004009", material:"BUD LIGHT RAZBERITA 12 PACK 24/8OZ", vidaMaxima:360 },
{ sku:"3004017", material:"MODELO AMBAR 12/355 ML TRADICIONAL", vidaMaxima:360 },
{ sku:"3004018", material:"CORONA LG 24/355 ML LOOSE PK CM", vidaMaxima:360 },
{ sku:"3004019", material:"PREMIUM PK ME-NM-MA 12/355 ML MODERNO", vidaMaxima:360 },
{ sku:"3004020", material:"BUD LIGHT 24PK24/473ML BOT ALU MEX SU CT", vidaMaxima:180 },
{ sku:"3004021", material:"MICHELOB ULTRA BOTELLA 6PK 24/355 ML", vidaMaxima:360 },
{ sku:"3004028", material:"CORONA EXTRA BOTE 8PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3004058", material:"MODELO ESP CSTLLA 12/355 CM NR CI", vidaMaxima:360 },
{ sku:"3004067", material:"VICTORIA BOTE 12/710ML CT FERIA TLAXCALA", vidaMaxima:360 },
{ sku:"3004068", material:"VICTORIA BOTE 12/710 ML CT FIGQ", vidaMaxima:360 },
{ sku:"3004087", material:"ESTRELLA MEGA 12/1.2 L CT R_E", vidaMaxima:360 },
{ sku:"3004088", material:"ESTRELLA 24/355 ML CT R_E", vidaMaxima:360 },
{ sku:"3004089", material:"ESTRELLA 24/210 ML_E", vidaMaxima:360 },
{ sku:"3004090", material:"STELLA ARTOIS CSTLLA 24/330 ML CM", vidaMaxima:360 },
{ sku:"3004091", material:"BUD LIGHT 12 PACK 24/12 OZ_E", vidaMaxima:360 },
{ sku:"3004092", material:"CORONA LG BOTELLA 12/1.06 LT CT R", vidaMaxima:360 },
{ sku:"3004094", material:"HERTOG JAN DUBBEL OW 8 0.500L KRUIK", vidaMaxima:360 },
{ sku:"3004095", material:"HERTOG JAN  GR PR OW 8 0.500L KRUIK", vidaMaxima:360 },
{ sku:"3004096", material:"HERTOG JAN TRIP OW 8 0.500L KRUIK", vidaMaxima:360 },
{ sku:"3004097", material:"HOEG WHIT 24 0.330L BOX WRA INT", vidaMaxima:360 },
{ sku:"3004098", material:"LEFF BLON OW 24 0.330L BOX WRA INT N", vidaMaxima:360 },
{ sku:"3004099", material:"LEFF BRUN 24 0.330L BOX WRA INT", vidaMaxima:360 },
{ sku:"3004100", material:"LEFF ROYALE OW 6 0.750L BOX", vidaMaxima:360 },
{ sku:"3004101", material:"LEFF RUBY 6 0.750L BOX AMB", vidaMaxima:360 },
{ sku:"3004103", material:"FRAN HWH OW 20 0.500L BOX W EUR", vidaMaxima:360 },
{ sku:"3004104", material:"LOWB ORIG OW 4X6 0.330L TRA", vidaMaxima:360 },
{ sku:"3004106", material:"BUD LIGHT 24/210 ML CT R", vidaMaxima:180 },
{ sku:"3004107", material:"BUD LIGHT DIVISION 24/210 ML CM", vidaMaxima:180 },
{ sku:"3004108", material:"BUD LG BOTELLA 12/1.06 LT CT R", vidaMaxima:180 },
{ sku:"3004109", material:"BUD LG BOTELLA 12/1.06 LT CM", vidaMaxima:180 },
{ sku:"3004110", material:"ME BOTE12 PK FRIDGE 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3004111", material:"CORONA BOTE 12PK24/355ML FRID CM PREM_E_", vidaMaxima:360 },
{ sku:"3004113", material:"VICTORIA BOT LOOSE 12PK/210ML CM NAVIDAD", vidaMaxima:360 },
{ sku:"3004127", material:"MICHELOB ULTRA BOTE 6 PK HC 24/355 ML", vidaMaxima:360 },
{ sku:"3004144", material:"BUD LIGHT LIMEARITA 12 PACK 24/8OZ CM", vidaMaxima:360 },
{ sku:"3004145", material:"BUD LIGHT RAZBERITA 12 PACK 24/8OZ CM", vidaMaxima:360 },
{ sku:"3004146", material:"BUD LIGHT STRAWBERITA 12 PACK 24/8OZ CM", vidaMaxima:360 },
{ sku:"3004147", material:"SHOCK TOP CHOCOLATE WHEAT 24/12 OZ", vidaMaxima:360 },
{ sku:"3004148", material:"BUD LG BOTE 6 PACK 24/355 ML JETER CT", vidaMaxima:180 },
{ sku:"3004149", material:"BUD LG BOTE 6 PACK 24/355 ML JETER CM", vidaMaxima:180 },
{ sku:"3004150", material:"BUD LG BOTE 12 PACK 24/355 ML JETER CT", vidaMaxima:180 },
{ sku:"3004151", material:"BUD LG BOTE 12 PACK 24/355 ML JETER CM", vidaMaxima:180 },
{ sku:"3004152", material:"BUD LG BOTE 18 PACK 18/355 ML JETER CT", vidaMaxima:180 },
{ sku:"3004153", material:"BUD LG BOTE 18 PACK 18/355 ML JETER CM", vidaMaxima:180 },
{ sku:"3004155", material:"GOOSE ISLAND - MATILDA 24/12 OZ", vidaMaxima:360 },
{ sku:"3004156", material:"GOOSE ISLAND -SOFIE 24/12 OZ", vidaMaxima:360 },
{ sku:"3004160", material:"GOOSE ISLAND - HONKERS ALE 24/12 OZ", vidaMaxima:360 },
{ sku:"3004161", material:"GOOSE ISLAND - URBAN PALE ALE 24/12 OZ", vidaMaxima:360 },
{ sku:"3004164", material:"GOOSE ISLAND 312 24/12 OZ", vidaMaxima:360 },
{ sku:"3004167", material:"GOOSE ISLAND - INDIA PALE ALE 24/12 OZ", vidaMaxima:360 },
{ sku:"3004168", material:"MODELO AMBAR CSTLLA 6PK 12/355 ML CT", vidaMaxima:360 },
{ sku:"3004169", material:"MODELO AMBAR CSTLLA 6 PK 12/355 ML CM", vidaMaxima:360 },
{ sku:"3004217", material:"VICTORIA BOTE 12/710ML CT FERIA LEON", vidaMaxima:360 },
{ sku:"3004248", material:"CORONA BOTE 6PKHC 24/355ML CT CARVAL SUR", vidaMaxima:360 },
{ sku:"3004249", material:"CORONA BOTE 6PKHC 24/355ML CM CARVAL SUR", vidaMaxima:360 },
{ sku:"3004258", material:"VICTORIA BOTE 12/710ML CT  JALOSTITLAN", vidaMaxima:360 },
{ sku:"3004272", material:"VICTORIA BOTE 12/710 ML CT FERIA TAJIN", vidaMaxima:360 },
{ sku:"3004273", material:"VICTORIA BOTE 12/710 ML CT FERIA JEREZ", vidaMaxima:360 },
{ sku:"3004274", material:"VICTORIA BOTE 12/710ML CT FERIA TEXCOCO", vidaMaxima:360 },
{ sku:"3004290", material:"PREMIUM 24 PK ME-NM-MA 355ML CM", vidaMaxima:360 },
{ sku:"3004291", material:"KIRIN ICHIBAN 24/12 OZ", vidaMaxima:360 },
{ sku:"3004292", material:"HARBIN ICE 24/330 ML", vidaMaxima:360 },
{ sku:"3004293", material:"HARBIN FRESH 24/330 ML", vidaMaxima:360 },
{ sku:"3004295", material:"CORONA BOTE 6PKHC 24/355ML CT CARV S_E_", vidaMaxima:360 },
{ sku:"3004298", material:"PACIFICO BOTE 8 PK H-C 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3004383", material:"MICHELOB ULTRA BOTE 6P H-C 24/355ML CM", vidaMaxima:360 },
{ sku:"3004427", material:"VICTORIA BOTE 12/710 ML CT FERIA PUEBLA", vidaMaxima:360 },
{ sku:"3004434", material:"BUD LIGHT  BOTE 15 PK 15/25 OZ", vidaMaxima:360 },
{ sku:"3004444", material:"IDEAL AZABACHE BOTELLA  12/355ML CM", vidaMaxima:360 },
{ sku:"3004445", material:"IDEAL AS DE OROS BOTELLA  12/355ML CM", vidaMaxima:360 },
{ sku:"3004467", material:"LEON NEGRA BOTE 6 PACK HI-CONE 24/2", vidaMaxima:360 },
{ sku:"3004468", material:"VICTORIA BOTE 12/710 ML CT FERIA PUEBLA", vidaMaxima:360 },
{ sku:"3004469", material:"BUD LIGHT BOTE 4PK H-C 24/473ML CT", vidaMaxima:180 },
{ sku:"3004477", material:"STELLA ARTOIS 18PK 330ML CANNES", vidaMaxima:360 },
{ sku:"3004478", material:"PACIFICO 24/355 ML CT R_E_", vidaMaxima:360 },
{ sku:"3004479", material:"PACIFICO LIGHT 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3004497", material:"IDEAL AZABACHE BOTELLA 12/355ML CT", vidaMaxima:360 },
{ sku:"3004498", material:"IDEAL AS DE OROS BOTELLA 12/355ML CT", vidaMaxima:360 },
{ sku:"3004513", material:"MODELO LG 8PK H-C 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3004550", material:"BUDWEISER BOTE 6 PK 24/12 OZ_E_", vidaMaxima:360 },
{ sku:"3004551", material:"BUDWEISER LITRO 12/32 OZ_E_", vidaMaxima:360 },
{ sku:"3004557", material:"CORONA BOTE 4 PK H-C 24/473ML CM", vidaMaxima:360 },
{ sku:"3004593", material:"BARRILITO BOTE 6PK 24/355ML CM", vidaMaxima:360 },
{ sku:"3004627", material:"STELLA ARTOIS 6PK 12/330ML CHALICE", vidaMaxima:360 },
{ sku:"3004638", material:"VICTORIA BOTE 12/710ML CT NR FENADU", vidaMaxima:360 },
{ sku:"3004639", material:"VICTORIA BOTE 12/710ML CT NR FETO", vidaMaxima:360 },
{ sku:"3004640", material:"STELLA ARTOIS 18/330 ML WIMBLEDON", vidaMaxima:360 },
{ sku:"3004657", material:"BUD LIGHT BOTE 18/12 OZ CM_E_", vidaMaxima:360 },
{ sku:"3004658", material:"BUD LIGHT BOTE 15 PK 15/25 OZ_E_", vidaMaxima:360 },
{ sku:"3004667", material:"PACIFICO 12PK 24/355ML CM CHELERA", vidaMaxima:360 },
{ sku:"3004686", material:"CORONA BOTE 6PK HC 24/355ML CT ELEMENT15", vidaMaxima:360 },
{ sku:"3004687", material:"PREMIUM 12 P BEERHOUSE EU 355/330 ML CM", vidaMaxima:360 },
{ sku:"3004697", material:"CORONA BOTE 6PK HC 24/355ML CM ELEMENT15", vidaMaxima:360 },
{ sku:"3004728", material:"BUD LIGHT STRAWBERITA 12 PACK 12/8OZ_E_", vidaMaxima:360 },
{ sku:"3004729", material:"BUD LIGHT LIMEARITA 12 PACK 12/8OZ_E_", vidaMaxima:360 },
{ sku:"3004730", material:"BUD LIGHT RAZBERITA 12 PACK 12/8OZ_E_", vidaMaxima:360 },
{ sku:"3004732", material:"VICTORIA BOTE 12/710ML CT NR (F OCT)", vidaMaxima:360 },
{ sku:"3004737", material:"VICTORIA 15 PK 325ML CM CELEBRACION 150", vidaMaxima:360 },
{ sku:"3004749", material:"VICTORIA CHELADA BOTE 12/710 ML?CT", vidaMaxima:360 },
{ sku:"3004750", material:"CORONA LG BOTE 4PK H-C 24/473 CT", vidaMaxima:360 },
{ sku:"3004751", material:"STELLA ARTOIS BARRIL 12 L", vidaMaxima:270 },
{ sku:"3004801", material:"CORONA BOTE 6PK HC 24/355ML CT(FORMULA1)", vidaMaxima:360 },
{ sku:"3004818", material:"MODELO ESPECIAL BARRIL CHOPE 29L CT R_E_", vidaMaxima:75 },
{ sku:"3004819", material:"MODELO ESPECIAL 12/355 ML CT ND_E_", vidaMaxima:360 },
{ sku:"3004820", material:"NEGRA MODELO BARRIL CHOPE 29 L CT R_E_", vidaMaxima:75 },
{ sku:"3004821", material:"NEGRA MODELO 12/355 ML CT ND_E_", vidaMaxima:360 },
{ sku:"3004823", material:"STELLA ARTOIS 12 PACK 12/330 ML", vidaMaxima:360 },
{ sku:"3004830", material:"HOEG GRAND CRU OW 24 0.330L BOX", vidaMaxima:360 },
{ sku:"3004831", material:"LEFF RAD OW 24 0.330L BOX WRA INT ND", vidaMaxima:360 },
{ sku:"3004832", material:"LEFF VIEIL OW 24 0.330L BOX WA INT ND", vidaMaxima:360 },
{ sku:"3004847", material:"NEGRA MOD BOTE 6 PK H C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3004848", material:"NEGRA MODELO BOTE 6P H-C 24/355ML CM", vidaMaxima:360 },
{ sku:"3004881", material:"VICTORIA BOTE 4PK H-C 24/473 ML CT_E_", vidaMaxima:360 },
{ sku:"3004882", material:"LEON MEGA 12/1.2 L CT R _E_", vidaMaxima:360 },
{ sku:"3004884", material:"STELLA ART 12PK/330ML CM EDNAVIDEN?A 201", vidaMaxima:360 },
{ sku:"3004887", material:"BUDLIGHT BOTE 4PK H-C 24/473ML CT (SEN)", vidaMaxima:180 },
{ sku:"3004888", material:"CORONA BOTE 4PKH-C 24/473 ML CT_E_", vidaMaxima:360 },
{ sku:"3004893", material:"CORONA BOTE6PK HC24/355MLCT(EDZACATECAS)", vidaMaxima:360 },
{ sku:"3004897", material:"C SLEEK CAN LOOSE P 24/355 ML CANADA", vidaMaxima:100 },
{ sku:"3004924", material:"GOOSE BOURBON 12/500 ML BCNR BTL", vidaMaxima:360 },
{ sku:"3004926", material:"GOOSE IPA BARRIL 1/4 SV FLASH", vidaMaxima:360 },
{ sku:"3004947", material:"GOOSE HONKERS BARRIL 1/4 SV", vidaMaxima:360 },
{ sku:"3004997", material:"BUD LIGHT BOTE 4PK H-C 24/473ML CT_E_", vidaMaxima:180 },
{ sku:"3004998", material:"NM BOTE 12PK 24/355ML CM REFRICHELADOR", vidaMaxima:360 },
{ sku:"3005004", material:"MOD ESP BOTE 4PACK H-C 24/473 ML CT_E_", vidaMaxima:360 },
{ sku:"3005027", material:"CORONA LG BOTE 4PK H-C 24/473 CT_E_", vidaMaxima:360 },
{ sku:"3005038", material:"CORONA BOTE6PK HC24/355MLCT(EDZAC)_E_", vidaMaxima:360 },
{ sku:"3005039", material:"PACIFICO 24/355 ML CT NR", vidaMaxima:360 },
{ sku:"3005043", material:"BUD LIGHT 6P 24/355ML CT (SUPER BOWL)", vidaMaxima:180 },
{ sku:"3005044", material:"KONA LONGBOARD LAGER 6 PACK 24/355 ML", vidaMaxima:360 },
{ sku:"3005077", material:"BUD LIGHT MANGORITA 12 PK 24/8 OZ CT", vidaMaxima:360 },
{ sku:"3005078", material:"BUD LIGHT MANGORITA 12 PACK 24/8 OZ CM", vidaMaxima:360 },
{ sku:"3005079", material:"PACIFICO LG BARRIL 1/2 (59L) CT R", vidaMaxima:75 },
{ sku:"3005098", material:"PACIFICO LIGHT BOTE 4PK HC 24/473MLCT_E_", vidaMaxima:360 },
{ sku:"3005113", material:"MICHELOB ULTRA BOTELLA 6PK 24/355 ML_E_", vidaMaxima:360 },
{ sku:"3005114", material:"MICHELOB ULTRA BOTE 6 PK HC 24/355 ML_E_", vidaMaxima:360 },
{ sku:"3005168", material:"PREMIUM 6 PK 24/355/330ML CM BEERHOU OSC", vidaMaxima:360 },
{ sku:"3005169", material:"PREMIUM 6 PK 24/355/330ML CM BEERHOU TR", vidaMaxima:360 },
{ sku:"3005170", material:"PREMIUM 6 PK 24/355ML CM BEERHOUSE ALE", vidaMaxima:360 },
{ sku:"3005171", material:"PREMIUM 6 PK 24/355/275ML CM BEERHOU PIL", vidaMaxima:360 },
{ sku:"3005172", material:"PREMIUM 8 PK 355/330ML CM BH EUR VASOS", vidaMaxima:360 },
{ sku:"3005173", material:"LEON NEGRA BOTE 6 PACK HI-CONE 24/2_E_", vidaMaxima:360 },
{ sku:"3005174", material:"PACIFICO BOTE 6 PK H-C 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3005197", material:"FRANZISKANER WEIZENBIER ALKO 12/500 ML", vidaMaxima:360 },
{ sku:"3005198", material:"HOEGAARDEN ROSEE OW 24/250 ML TRA ABII", vidaMaxima:360 },
{ sku:"3005218", material:"BUD LIGHT LIMEARIITA BT 4PK 24/16OZ CM", vidaMaxima:360 },
{ sku:"3005219", material:"BUD LIGHT STRAWBERITA BT 4PK24/16OZ CM", vidaMaxima:360 },
{ sku:"3005227", material:"LEON BOTE 8 PK FILM 24/355 ML CT_E_", vidaMaxima:360 },
{ sku:"3005230", material:"BUD LIGHT-RAZBERITA BT 4PK 24/16OZ CT", vidaMaxima:360 },
{ sku:"3005243", material:"BUD LIGHT-LIMEARITA BT 4PK 24/16OZ CT", vidaMaxima:360 },
{ sku:"3005244", material:"BUD LIGHT-STRAWBERITA BT 4PK 24/16OZ CT", vidaMaxima:360 },
{ sku:"3005245", material:"BUD LIGHT RAZBERITA BT 4PK 24/16OZ CM", vidaMaxima:360 },
{ sku:"3005247", material:"ME BR 1/4 (29L) CAA", vidaMaxima:180 },
{ sku:"3005269", material:"VICTORIA BOTE 12/710ML CT FER NAC MICH", vidaMaxima:360 },
{ sku:"3005270", material:"VICTORIA AMBAR PAPEL 24/210ML CM MAQ", vidaMaxima:360 },
{ sku:"3005271", material:"CORONITA EXTRA CLARA24/210ML MODERNO MAQ", vidaMaxima:360 },
{ sku:"3005272", material:"CORONITA LIGHT 24/210ML CM MAQ", vidaMaxima:100 },
{ sku:"3005273", material:"MODELO ESP BOTELLA 12PK 12/355ML CM MAQ", vidaMaxima:360 },
{ sku:"3005274", material:"MODELO AMBAR 12/355ML CM MAQ", vidaMaxima:360 },
{ sku:"3005275", material:"NEGRA MODELO 12/355ML CM MAQ", vidaMaxima:360 },
{ sku:"3005285", material:"BARRILITO BOTE 6PK 24/355ML CT", vidaMaxima:360 },
{ sku:"3005340", material:"VICTORIA CHELADA CN 4PK H-C 24/473MLOCT", vidaMaxima:360 },
{ sku:"3005347", material:"CORONA CERO BOTE 6PK 24/355ML CT", vidaMaxima:360 },
{ sku:"3005357", material:"VICTORIA CHELADA CN 4PK H-C 24/473MLOCM", vidaMaxima:360 },
{ sku:"3005359", material:"VICTORIA CN 12/710ML TD FERIA HUAJUAPAN", vidaMaxima:360 },
{ sku:"3005417", material:"CORONA LIGHT 12PK 12/355ML CT", vidaMaxima:360 },
{ sku:"3005418", material:"NM BOTE 12PK 24/355ML CT REFRICHELADOR", vidaMaxima:360 },
{ sku:"3005439", material:"VICTORIA ORO BOTE PK H-C 24/473 ML CM", vidaMaxima:360 },
{ sku:"3005447", material:"BUD LIGHT BT 6P 24/355ML CT XOLOS", vidaMaxima:180 },
{ sku:"3005487", material:"VICTORIA BOTE 4PK H-C 24/473ML CT FENAZA", vidaMaxima:360 },
{ sku:"3005488", material:"BUD LIGHT LIME 6PK 24/355ML CT", vidaMaxima:360 },
{ sku:"3005497", material:"CORONA CERO BOTE 6PK CAJA 24/355ML CM", vidaMaxima:360 },
{ sku:"3005537", material:"VICTORIA ORO BT 4PK HI-CONE 24/473 ML CT", vidaMaxima:360 },
{ sku:"3005607", material:"VICTORIA BOTE 12/710ML CT FERIA COLIMA", vidaMaxima:360 },
{ sku:"3005629", material:"MODELO TRIGO CSTLLA 6P 12/355ML CT R", vidaMaxima:360 },
{ sku:"3005697", material:"CORONA 12PK 24/355ML CT R", vidaMaxima:360 },
{ sku:"3005788", material:"BUD LG BOTE 6PK H-C 24/355 ML CT SBOWL17", vidaMaxima:180 },
{ sku:"3005804", material:"DM PORTER 6 PK 24/330 ML CT", vidaMaxima:360 },
{ sku:"3005843", material:"DM BLOND 6 PK 24/330 ML CT", vidaMaxima:360 },
{ sku:"3005876", material:"CUCAPA HONEY LOOSE PK 24/355ML CT", vidaMaxima:360 },
{ sku:"3005878", material:"CUCAPA HONEY BARRIL 20 L CT", vidaMaxima:75 },
{ sku:"3005879", material:"CUCAPA HONEY BARRIL 30 L CT", vidaMaxima:75 },
{ sku:"3005884", material:"CUCAPA CHUPACABRAS BARRIL 30 L CT", vidaMaxima:75 },
{ sku:"3005886", material:"CUCAPA OBS LOOSE PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3005889", material:"CUCAPA OBSCURA BARRIL 30 L CT", vidaMaxima:75 },
{ sku:"3005896", material:"C CLASICA LOOSE PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3006003", material:"GUERA TJ 24/355 ML CT", vidaMaxima:360 },
{ sku:"3006016", material:"MORENA TJ 24/355 ML CT", vidaMaxima:360 },
{ sku:"3006039", material:"CUCAPA AMBAR 6PK 24/355 ML", vidaMaxima:360 },
{ sku:"3006067", material:"BARRILITO FAJILLA 24/325 ML CT (CA)", vidaMaxima:360 },
{ sku:"3006068", material:"BARRILITO FAJILLA 24/444 ML CT (CA)", vidaMaxima:360 },
{ sku:"3006069", material:"BARRILITO BOTE 6 PK 24/355 ML CT (CA)", vidaMaxima:360 },
{ sku:"3006133", material:"V BOTE 12/710ML CT FERIA DE AUTLAN", vidaMaxima:360 },
{ sku:"3006190", material:"GOOSE ISL MIDWAY IPA 6 PK 24/355 ML BH", vidaMaxima:360 },
{ sku:"3006197", material:"ESTRELLA 24/210ML CT R CI", vidaMaxima:360 },
{ sku:"3006198", material:"ESTRELLA 24/355ML CT R CI", vidaMaxima:360 },
{ sku:"3006390", material:"BUDWEISER CN 6 P 24/12 OZ TOMORROLAND", vidaMaxima:360 },
{ sku:"3006397", material:"ESTRELLA MEGA 12/1.2 L CT R CI", vidaMaxima:360 },
{ sku:"3006398", material:"MICHELOB ULTRA BT 12 PK 24/355 ML CT", vidaMaxima:360 },
{ sku:"3006424", material:"CUCAPA BORDER BARRIL 1/4 (30 LTS )", vidaMaxima:75 },
{ sku:"3006447", material:"BUDWEISER BOTELLA ALUMINIO 24/355 ML CT", vidaMaxima:360 },
{ sku:"3006448", material:"BUDWEISER CN 12PK 24/355ML CT", vidaMaxima:360 },
{ sku:"3006468", material:"CUCAPA KOLSCH 57 LOOSE PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3006470", material:"CUCAPA KOLSCH 57 BARRIL 1/4 (30 LTS )", vidaMaxima:75 },
{ sku:"3006477", material:"CORONA BOTE 4P H-C 24/473ML CM SANTOS", vidaMaxima:360 },
{ sku:"3006479", material:"CORONA BT 4PK H-C 24/473 ML CM TOLUCA", vidaMaxima:360 },
{ sku:"3006487", material:"CORONA BOTE 6P H-C 24/355ML CT ED MEXICO", vidaMaxima:360 },
{ sku:"3006518", material:"BUD LG BT 4PK H-C 24/473ML CT CI", vidaMaxima:180 },
{ sku:"3006519", material:"BUD LG BT 6 PK 24/355 ML CT CI", vidaMaxima:180 },
{ sku:"3006570", material:"P LG BT 6PK 24/355ML CT VENADOS 2017", vidaMaxima:360 },
{ sku:"3006597", material:"BUD LG 6PK 24/355 ML CM CI", vidaMaxima:180 },
{ sku:"3006598", material:"BUD LG 6PK 24/355 ML CT NR CI", vidaMaxima:180 },
{ sku:"3006599", material:"CORONA LG 12/1.05 LT CT CI", vidaMaxima:360 },
{ sku:"3006699", material:"BUD LG BT 12 PK 24/355 ML CT CI", vidaMaxima:180 },
{ sku:"3006744", material:"VICTORIA BOTE 4PK H-C 24/473ML CT F QRO", vidaMaxima:360 },
{ sku:"3006765", material:"BUD LG 12/1.06 LT CT R CI", vidaMaxima:180 },
{ sku:"3006787", material:"CORONITA LIGHT 24/210 ML CT R CI", vidaMaxima:360 },
{ sku:"3006788", material:"CORONA LIGHT 24/355 ML CT R CI", vidaMaxima:360 },
{ sku:"3006790", material:"CORONA LIGHT 12/710 ML CT R CI", vidaMaxima:360 },
{ sku:"3006847", material:"V BOTE 4 PK H-C 24/473 ML CT FERIA LEON", vidaMaxima:360 },
{ sku:"3006862", material:"STELLA ARTOIS BOTE 24/250 ML", vidaMaxima:360 },
{ sku:"3006918", material:"CORONA LG 24/355 ML LOOSE PK CM", vidaMaxima:360 },
{ sku:"3006919", material:"CORONA LG 12 PK 12/355 ML CM NCA", vidaMaxima:360 },
{ sku:"3006957", material:"MICHELOB ULTRA 6PK 24/355ML CT NR PRUEBA", vidaMaxima:270 },
{ sku:"3006999", material:"C LG T CAN 6PK H-C 24/355ML CT C CAPITAL", vidaMaxima:360 },
{ sku:"3007028", material:"CUCAPA MIX MODELORAMA LOOSE 24/355 ML", vidaMaxima:360 },
{ sku:"3007057", material:"CORONA BT 12PK 12/355ML CM REFRICHELADOR", vidaMaxima:360 },
{ sku:"3007058", material:"V CHELADA BT 6 PK H-C 24/355 ML CM", vidaMaxima:360 },
{ sku:"3007059", material:"V CHELADA BT 6 PK H-C 24/355ML CT", vidaMaxima:360 },
{ sku:"3007070", material:"BUDWEISER BOTELLA DE ALUMINO 24/473ML CT", vidaMaxima:360 },
{ sku:"3007096", material:"MICHELOB ULTRA 6 PK 24/355 ML CT NR", vidaMaxima:270 },
{ sku:"3007126", material:"C BT H-C 6PK 24/355ML CM MEXICO MUND 1", vidaMaxima:360 },
{ sku:"3007147", material:"C BT H-C 6PK 24/355ML CM MEXICO MUND 2", vidaMaxima:360 },
{ sku:"3007148", material:"C BT H-C 6PK 24/355ML CM MEXICO MUND 3", vidaMaxima:360 },
{ sku:"3007149", material:"C BT H-C 6PK 24/355ML CM MEXICO MUND 4", vidaMaxima:360 },
{ sku:"3007150", material:"C BT H-C 6PK 24/355ML CM MEXICO MUND 5", vidaMaxima:360 },
{ sku:"3007157", material:"V FUEGO BT 4 PK H-C 24/473 ML CT", vidaMaxima:360 },
{ sku:"3007222", material:"MODELO ESP 6 PK 24/355 ML CM MAQ", vidaMaxima:360 },
{ sku:"3007230", material:"CORONA MEGA PAPEL 12/1.2 L CT R MUNDIAL", vidaMaxima:360 },
{ sku:"3007288", material:"V BOTE 4PK H-C 24/473ML CT FER FRESNILLO", vidaMaxima:360 },
{ sku:"3007357", material:"CUCAPA OKTOBERFES 6PK 24/355 ML", vidaMaxima:360 },
{ sku:"3007368", material:"CUCAPA OKTOBERFEST BARRIL 1/4 (30 LTS)", vidaMaxima:75 },
{ sku:"3007387", material:"STELLA ARTOIS BOTE 6P 24/250 ML", vidaMaxima:360 },
{ sku:"3007388", material:"MICHELOB ULTRA 6 PK 24/355ML CM", vidaMaxima:270 },
{ sku:"3007389", material:"CUCAPA FAJILLA 6PK 18/355ML TOMA EXPERIE", vidaMaxima:360 },
{ sku:"3007397", material:"CORONA LG 12PK 12/1.05 LT CM", vidaMaxima:360 },
{ sku:"3007400", material:"VICTORIA BRONCE BT 6 PK H-C 24/355 ML CT", vidaMaxima:360 },
{ sku:"3007404", material:"CUCAPA 18PK 18/355ML COLECCION CUCAPA", vidaMaxima:360 },
{ sku:"3007417", material:"V BRONCE BT 4PK H-C 24/473 ML CT", vidaMaxima:360 },
{ sku:"3007467", material:"MICHELOB ULTRA 24 PK 24/7 OZ", vidaMaxima:360 },
{ sku:"3007507", material:"M NE 6PK 12/355 ML CM", vidaMaxima:360 },
{ sku:"3007517", material:"CORONA BT 12 PK 24/355 ML CT NE", vidaMaxima:360 },
{ sku:"3007529", material:"MA 6 PK 12/355 ML CM CIF", vidaMaxima:360 },
{ sku:"3007530", material:"NM 6PK 12/355ML CM CIF", vidaMaxima:360 },
{ sku:"3007531", material:"MODELO ESP 6 PK 12/355 ML CM CIF", vidaMaxima:360 },
{ sku:"3007537", material:"V BT 6PK H-C 24/355 ML CT DIA DE MUERTOS", vidaMaxima:360 },
{ sku:"3007540", material:"V BT 4PK H-C 24/473 ML CT DIA DE MUERTOS", vidaMaxima:360 },
{ sku:"3007578", material:"CUCAPA DECEMBRINA 6PK 24/355ML", vidaMaxima:360 },
{ sku:"3007637", material:"CORONA CERO BT 6 PK H-C 24/355 ML CT CI", vidaMaxima:360 },
{ sku:"3007684", material:"CUCAPA MIX 3PK 24/355ML", vidaMaxima:360 },
{ sku:"3007747", material:"CUCAPA DORADA LOOSE PK 24/355ML CT", vidaMaxima:360 },
{ sku:"3007748", material:"CUCAPA DORADA 6 PK 24/355 ML CM", vidaMaxima:360 },
{ sku:"3007749", material:"CORONA BT 4 PK 24/473 ML CM CUERVOS", vidaMaxima:360 },
{ sku:"3007757", material:"C BT H-C 6P 24/355 ML CM CORONA QUALITY", vidaMaxima:360 },
{ sku:"3007772", material:"CUCAPA AMBULANTE PINA LOOSE 24/355ML", vidaMaxima:360 },
{ sku:"3007774", material:"C MEGAFAMILIAR 12/1.2 L CT R QUALITY", vidaMaxima:360 },
{ sku:"3007775", material:"V BT 4PK HC 24/473ML FERIA DE SAN MARCOS", vidaMaxima:360 },
{ sku:"3007777", material:"GUINNESS DRAUGHT 6 PK 24/440 ML", vidaMaxima:360 },
{ sku:"3007789", material:"PT CUCAPA AMBULANTE PINA 3PK/24/355ML", vidaMaxima:360 },
{ sku:"3007817", material:"CUCAPA MIX 3PK 24/355ML 7 ELEVEN", vidaMaxima:360 },
{ sku:"3007832", material:"CUCAPA VALIENTE LOOSE/24/355ML", vidaMaxima:360 },
{ sku:"3007847", material:"CUCAPA DORADA BARRIL 1/4 (29 LTS) NAC", vidaMaxima:75 },
{ sku:"3007858", material:"MICHELOB ULTRA BT 6PK H-C 24/355 ML", vidaMaxima:270 },
{ sku:"3007877", material:"MIX DOMESTICAS CRAFT 1(24PK)/355ML", vidaMaxima:360 },
{ sku:"3007887", material:"CUCAPA DORADA 12PK 12/355 ML", vidaMaxima:360 },
{ sku:"3007903", material:"BARRILITO FAJILLA 24/325 ML NP", vidaMaxima:360 },
{ sku:"3007905", material:"C 12 PK 24/355ML NR LIMPIANDO PLAYAS", vidaMaxima:360 },
{ sku:"3007927", material:"V BT 4 PK HC 24/473 ML FERIA DE TORREON", vidaMaxima:360 },
{ sku:"3007937", material:"CORONA LG 12 PK 24/355 ML PROMO HIELERA", vidaMaxima:360 },
{ sku:"3007947", material:"VICTORIA BT 12P 24/355 ML MALETIN", vidaMaxima:360 },
{ sku:"3007957", material:"BUD LIGHT BOTE 18 PACK 18/355 ML NE", vidaMaxima:180 },
{ sku:"3008018", material:"MODELO TRIGO CSTLLA 6PK 12/355ML ND MATE", vidaMaxima:360 },
{ sku:"3008038", material:"PREMIUM 24 PACK ME - NM - MA - MT 24/355 ML ND MATE", vidaMaxima:360 },
{ sku:"3008039", material:"PREMIUM 12 PACK ME - NM - MA - MT 12/355 ML ND MATE", vidaMaxima:360 },
{ sku:"3008158", material:"BARRILITO 24/325 ML RET", vidaMaxima:360 },
{ sku:"3008199", material:"P BT 12PK 24/355ML REFRICHELADOR", vidaMaxima:360 },
{ sku:"3008238", material:"CE CLARA CANASTILLA 24/330ML NR", vidaMaxima:360 },
{ sku:"3008247", material:"B FAJILLA 24/325ML NR AD", vidaMaxima:360 },
{ sku:"3008277", material:"V BT 4PK H-C 24/473ML GUILLERMO DEL TORO", vidaMaxima:360 },
{ sku:"3008309", material:"MEXICALI SUN PILSNER 355ML 6(4PK)", vidaMaxima:180 },
{ sku:"3008322", material:"GUINNESS ORIGINAL STOUT 325ML 6(4PK)", vidaMaxima:360 },
{ sku:"3008330", material:"MICHELOB ULTRA BOTE 4PK H-C 24 /473 ML", vidaMaxima:270 },
{ sku:"3008388", material:"STELLA ARTOIS 12P 12/900ML RET", vidaMaxima:270 },
{ sku:"3008397", material:"CL 24 PK 24/210ML NR", vidaMaxima:360 },
{ sku:"3008398", material:"CL LOOSE PK 12/210ML NR", vidaMaxima:360 },
{ sku:"3008400", material:"MICHELOB ULTRA 12 PK 24/355 ML NR", vidaMaxima:270 },
{ sku:"3008401", material:"MCH ULTRA TALL CAN 12 PK 24/355ML", vidaMaxima:270 },
{ sku:"3008410", material:"PS LOOSE PACK 24/355 ML NR", vidaMaxima:360 },
{ sku:"3008415", material:"PACIFICO BALLENON 12/1.2 L CP R CI", vidaMaxima:360 },
{ sku:"3008416", material:"P TALL CAN 12 PK 24/355 ML FRIDGE CI", vidaMaxima:360 },
{ sku:"3008417", material:"MIKES HARD LEMONADE LIMON CAN 355ML 24PK", vidaMaxima:360 },
{ sku:"3008427", material:"HERENCIA CUCAPA BORDER 4 PACK 355ML", vidaMaxima:360 },
{ sku:"3008428", material:"HERENCIA CUCAPA KOLSCH 4 PACK 355ML", vidaMaxima:360 },
{ sku:"3008429", material:"HERENCIA CUCAPA OBSCURA 4 PACK 355ML", vidaMaxima:360 },
{ sku:"3008440", material:"PS 6PK 24/355 ML NR", vidaMaxima:360 },
{ sku:"3008451", material:"P SUAVE TALL CAN 12 PK 24/355 ML FRIDGED", vidaMaxima:360 },
{ sku:"3008454", material:"CUCAPA AMBULANTE 24PK 355ML", vidaMaxima:360 },
{ sku:"3008477", material:"PACIFICO LOOSE PK 24/355 ML CI MAQ", vidaMaxima:360 },
{ sku:"3008478", material:"PACIFICO 6 PK 24/355 ML NR CI", vidaMaxima:360 },
{ sku:"3008489", material:"PACIFICO BALLENA 12/940 ML CJ P R CI", vidaMaxima:360 },
{ sku:"3008567", material:"HERENCIA CUCAPA OBSCURA 1(24PK) 355ML", vidaMaxima:360 },
{ sku:"3008568", material:"HERENCIA CUCAPA BORDER 1(24PK) 355ML", vidaMaxima:360 },
{ sku:"3008577", material:"HERENCIA CUCAPA KOLSCH 1(24PK) 355ML", vidaMaxima:360 },
{ sku:"3008578", material:"CORONA CERO TALL C 6 P H-C 24/355ML CI", vidaMaxima:360 },
{ sku:"3008588", material:"CORONA CERO TALL 6P HC 24/355ML PROM C R", vidaMaxima:360 },
{ sku:"3008591", material:"MODELO ESP TALL CAN 12 PK 24/269 ML", vidaMaxima:360 },
{ sku:"3008597", material:"V 1.8 BT 4PK H-C 24/473ML", vidaMaxima:180 },
{ sku:"3008608", material:"VICTORIA 1.8 MEGA 12/1.2L R ETIQ PAP", vidaMaxima:180 },
{ sku:"3008617", material:"STELLA ARTOIS TALL CAN 6 PK 24 /269 ML", vidaMaxima:270 },
{ sku:"3008618", material:"VICTORIA 1.8 BT 6P H-C 24/355 ML", vidaMaxima:180 },
{ sku:"3008638", material:"C LIGERA 1.8 BT 6 PK H-C 24/355 ML", vidaMaxima:180 },
{ sku:"3008639", material:"C LIGERA 1.8 MEGA 12/1.2L R ETIQ PAP", vidaMaxima:180 },
{ sku:"3008647", material:"C LIGERA 1.8 TALL 6P HC 24/355ML", vidaMaxima:180 },
{ sku:"3008677", material:"CUCAPA ENJAMBRE 1(24PK) 355ML", vidaMaxima:360 },
{ sku:"3008692", material:"CUCAPA LATA OBSCURA 24PK 269ML", vidaMaxima:360 },
{ sku:"3008730", material:"BARRILITO 24 P 24/325ML NR", vidaMaxima:360 },
{ sku:"3008738", material:"CUCAPA LATA BORDER 24PK 269ML", vidaMaxima:360 },
{ sku:"3008766", material:"CUCAPA LATA KOLSCH 24PK 269ML", vidaMaxima:360 },
{ sku:"3008777", material:"STELLA ARTOIS 12PK 24/330 ML NR", vidaMaxima:180 },
{ sku:"3008788", material:"MICHELOB UL TALL C 12 PK 24/355 ML CI", vidaMaxima:270 },
{ sku:"3008807", material:"MICHELOB ULTRA 12 PK 24/355 ML NR CI", vidaMaxima:270 },
{ sku:"3008870", material:"MODELO NOCHE ESPECIAL 6PK 12/355 ML NR", vidaMaxima:360 },
{ sku:"3008877", material:"CUCAPA DORADA LS 24PK 355ML", vidaMaxima:360 },
{ sku:"3008887", material:"MOD NOCHE ESPECIAL BT H-C 6PK 24/355 ML", vidaMaxima:360 },
{ sku:"3008902", material:"MXLI DON CAPITAN 1(24PK) 355ML", vidaMaxima:180 },
{ sku:"3008932", material:"CUCAPA LA DE SIEMPRE LATA 1(24PK) 355ML", vidaMaxima:360 },
{ sku:"3008982", material:"MCH HRD SLTZ FRESA SANDIA CAN 355ML 24PK", vidaMaxima:270 },
{ sku:"3009019", material:"PERRIER VIDRIO 6(4X330ML) MURAKAMI", vidaMaxima:360 },
{ sku:"3009020", material:"MCH HRD SLTZ PEPINO LIMON CAN 355ML 24PK", vidaMaxima:270 },
{ sku:"3009021", material:"MCH HRD SLTZ DURAZNO MANG CAN 355ML 24PK", vidaMaxima:270 },
{ sku:"3009022", material:"MCH HRD SLTZ SPICY PIÑA CAN 355ML 24PK", vidaMaxima:270 },
{ sku:"3009057", material:"MCH HRD SLTZ FRESA SANDIA CAN 355ML 6PK", vidaMaxima:270 },
{ sku:"3009058", material:"MCH HRD SLTZ PEPINO LIMON CAN 355ML 6PK", vidaMaxima:360 },
{ sku:"3009059", material:"MCH HRD SLTZ DURAZNO MANG CAN 355ML 6PK", vidaMaxima:270 },
{ sku:"3009067", material:"MCH HRD SLTZ SPICY PIÑA CAN 355ML 6PK", vidaMaxima:270 },
{ sku:"3009068", material:"VICTORIA FAMILIAR 12/940 ML AF GRAB", vidaMaxima:360 },
{ sku:"3009089", material:"MCH HRD SLTZ PEP-LI CAN 355ML 4(6)PK MAQ", vidaMaxima:270 },
{ sku:"3009090", material:"MCH HRD SLTZ FRE-SA CAN 355ML 4(6)PK MAQ", vidaMaxima:270 },
{ sku:"3009091", material:"MCH HRD SLTZ DUR-MA CAN 355ML 4(6)PK MAQ", vidaMaxima:270 },
{ sku:"3009107", material:"MCH HRD SLTZ SPI-PI CAN 355ML 4(6)PK MAQ", vidaMaxima:270 },
{ sku:"3009167", material:"MOD PURA MALTA 6P H-C 24/355 ML MAQ", vidaMaxima:180 },
{ sku:"3009390", material:"MCH HRD SLTZ FRES SAND CAN 355ML 24PK NC", vidaMaxima:270 },
{ sku:"3009391", material:"MCH HRD SLTZ PEPIN LIM CAN 355ML 24PK NC", vidaMaxima:270 },
{ sku:"3009392", material:"MCH HRD SLTZ DURA MANG CAN 355ML 24PK NC", vidaMaxima:270 },
{ sku:"3009393", material:"MCH HRD SLTZ SPCY PIÑ CAN 355ML 24PK NC", vidaMaxima:270 },
{ sku:"3009394", material:"MCH HRD SLTZ FRESA SAND CAN 355ML 6PK NC", vidaMaxima:270 },
{ sku:"3009395", material:"MCH HRD SLTZ PEPINO LIM CAN 355ML 6PK NC", vidaMaxima:270 },
{ sku:"3009396", material:"MCH HRD SLTZ DURA MANG CAN 355ML 6PK NC", vidaMaxima:270 },
{ sku:"3009417", material:"MCH HRD SLTZ SPICY PIÑ CAN 355ML 6PK NC", vidaMaxima:270 },
{ sku:"3009617", material:"C AGUA RIFADA TC 6P H-C 24/355 ML LI-LIM", vidaMaxima:270 },
{ sku:"3009618", material:"C AGUA RIFAD TC 6P H-C 24/355 ML LMO-TOR", vidaMaxima:270 },
{ sku:"3009619", material:"C AG RIFADA TC 6P H-C 24/355 ML LIM-FRRO", vidaMaxima:270 },
{ sku:"3009620", material:"C AG RIFADA TC 6P H-C 24/355ML LIM-MA-PI", vidaMaxima:270 },
{ sku:"3009679", material:"C AGUA RIFADA TC 6P 24/355 ML LIMA LIMON", vidaMaxima:270 },
{ sku:"3009680", material:"C AGUA RIFADA TC 6P 24/355 ML LIM-FRRO", vidaMaxima:270 },
{ sku:"3009681", material:"C AGUA RIFAD TC 6P 24/355 ML LIMON TORON", vidaMaxima:270 },
{ sku:"3009682", material:"C AGUA RIFADA TC 6P 24/355 ML LIM-MA-PI", vidaMaxima:270 },
{ sku:"3009686", material:"MODELITO NOC ESP TALL C 6P H-C 24/269ML", vidaMaxima:360 },
{ sku:"3009725", material:"VICTORIA BT 4 PK H-C 24/473 ML XIBALBA", vidaMaxima:180 },
{ sku:"3009816", material:"MICHELOB HRD SLTZ TALL CAN 8P/355ML MIX", vidaMaxima:270 },
{ sku:"3009817", material:"MICHELOB HRD SLTZ TALL CAN 12P/355ML MIX", vidaMaxima:270 },
{ sku:"3009979", material:"CORONITA LOOSE PK 24/210ML CJ CRAFT AF", vidaMaxima:360 },
{ sku:"3010002", material:"CORONA BT 6 P CAN COLLAR 24/355 ML", vidaMaxima:360 },
{ sku:"3010165", material:"MODELO ESP BT6PCAN COLLAR 24/355ML LIN", vidaMaxima:360 },
{ sku:"3010168", material:"CORONA LIGHT BT 6 PK H-C 24/355 ML", vidaMaxima:360 },
{ sku:"3010217", material:"MODELO ESP BT 4 P CAN COLLAR 24/473 ML", vidaMaxima:360 },
{ sku:"3010218", material:"VICTORIA BT 4P CAN COLLAR 24/473 ML", vidaMaxima:360 },
{ sku:"3010219", material:"CORONA EXTRA BT 4P CAN COLLAR 24/473 ML", vidaMaxima:360 },
{ sku:"3010227", material:"C AGUA RIFADA TC 6P HC 24/355ML JAMFRAM", vidaMaxima:270 },
{ sku:"3010243", material:"VICTORIA LOOSE P 24/210 ML AF", vidaMaxima:360 },
{ sku:"3010281", material:"BUD LG BT 12 PK H-C 24/355 ML", vidaMaxima:180 },
{ sku:"3010357", material:"MICHELOB ULTRA 24 PK 24/210 ML", vidaMaxima:270 },
{ sku:"3010358", material:"MICHELOB ULTRA 6 PK 24/210 ML", vidaMaxima:270 },
{ sku:"3010379", material:"MICHELOB ULTRA 24 P 24/355ML", vidaMaxima:270 },
{ sku:"3010405", material:"C AGUA RIFADA 24 PK 210 ML NR LIM-MA-PI", vidaMaxima:180 },
{ sku:"3010406", material:"MODELO TRIGO CSTLLA 6PK 12/355 ML CI AF", vidaMaxima:360 },
{ sku:"3010441", material:"MDM MICHELOB ULTRA 12/710ML", vidaMaxima:270 },
{ sku:"3010447", material:"C AGUA RIFADA 12/210 ML NR MIX", vidaMaxima:180 },
{ sku:"3010457", material:"BUDWEISER CSTLLA 6 PK 24/355 ML NR", vidaMaxima:180 },
{ sku:"3010468", material:"BUD LG LOOSE P 24/355 ML R", vidaMaxima:180 },
{ sku:"3010497", material:"MICHELOB ULTRA 12 PK 12/850 ML NR", vidaMaxima:180 },
{ sku:"3010500", material:"VICTORIA BT 12PK H-C 24/355 ML CIF", vidaMaxima:360 },
{ sku:"3010501", material:"VICKY PONCHE CAN 6 PK 355ML", vidaMaxima:270 },
{ sku:"3010538", material:"VICKY JAMAICA CAN 6 PK 355 ML", vidaMaxima:270 },
{ sku:"3010539", material:"VICKY JENGIBRE-LIMON CAN 6 PACK 355 ML", vidaMaxima:270 },
{ sku:"3010540", material:"VICKY PONCHE CAN 24 PACK 355 ML", vidaMaxima:270 },
{ sku:"3010543", material:"VICKY JENGIBRE LIMON CAN 24 PK 355ML", vidaMaxima:270 },
{ sku:"3010660", material:"STELLA ARTOIS TALL CAN 6P H-C 24/355 ML", vidaMaxima:270 },
{ sku:"3010757", material:"BUD LIGHT BOTE 12 PACK H-C 24/355 ML PCR", vidaMaxima:180 },
{ sku:"3017122", material:"MODELO ESPECIAL BOTE 12 PK H-C 24/330 ML", vidaMaxima:360 },
{ sku:"3017157", material:"ESTRELLA MEGA 12/1.2L RETORNABLE", vidaMaxima:360 },
{ sku:"3017218", material:"MICHELOB ULTRA DIV 24/355ML RET", vidaMaxima:270 },
{ sku:"3017287", material:"LECHE CONDENSADA LA LECHERA 375 GR 1 PZA", vidaMaxima:360 },
{ sku:"3017331", material:"MU HRD SLTZ 12PK /210ML NR MIX", vidaMaxima:180 },
{ sku:"3017341", material:"VICTORIA CEMPASUCHIL CN 6PK 24/210ML NR", vidaMaxima:360 },
{ sku:"3017347", material:"MICHELOB ULTRA DIVISION 12P/850 ML RET", vidaMaxima:270 },
{ sku:"3017357", material:"MU HRD SLTZ 24PK /210ML FRESA SANDIA NR", vidaMaxima:360 },
{ sku:"3017358", material:"MU HRD SLTZ 24PK/210ML MANGO DURAZNO NR", vidaMaxima:360 },
{ sku:"3017367", material:"MU DIV 12PK 12/850 ML NR", vidaMaxima:270 },
{ sku:"3017527", material:"BARRILOTE DIVISION 12PK 12/1.2L RET", vidaMaxima:360 },
{ sku:"3017530", material:"MICHELOB ULTRA TC 8PK H-C 24/355ML", vidaMaxima:270 },
{ sku:"3017543", material:"SUEROX ADULTO 8 IONES UVA 630 ML - 6 PZS", vidaMaxima:360 },
{ sku:"3017585", material:"MICHELOB ULTRA DIVISIÓN 12/850 ML RETORNABLE", vidaMaxima:270 },
{ sku:"3017617", material:"MICHELOB ULTRA 6PK 24/355ML NR", vidaMaxima:180 },
{ sku:"3017618", material:"ESTRELLA BT 12 PK DIV 12/710 ML", vidaMaxima:360 },
{ sku:"3017658", material:"MICHELOB ULTRA 12PK 24/355ML NR PESADO", vidaMaxima:270 },
{ sku:"3017690", material:"CORONA AGUA RIF 12 PK 12/210ML MIX 3S", vidaMaxima:180 },
{ sku:"3000382", material:"PACIFICO 6 PACK 24/355 ml CANADA", vidaMaxima:100 },
{ sku:"3000842", material:"PACIFICO LOOSE PACK 24/35.5 cl. EUROPA HOLANDA", vidaMaxima:100 },
{ sku:"3000880", material:"Modelo Especial Botella 6 Pack 24/35.5 cl Europa Internacional ND", vidaMaxima:100 },
{ sku:"3000897", material:"Modelo Especial Botella 6 Pack 24/35.5 cl Europa Dinamarca", vidaMaxima:100 },
{ sku:"3000884", material:"Modelo Especial Botella 6 Pack 24/35.5 CL Europa Estonia", vidaMaxima:100 },
{ sku:"3000886", material:"Modelo Especial Botella 6 Pack 24/35.5 cl Europa España", vidaMaxima:100 },
{ sku:"3000844", material:"Corona Extra 6 Pack 24/330 ml Limited Edition Canada", vidaMaxima:100 },
{ sku:"3000846", material:"CORONA EXTRA 6 Pack 24/330 ml. Limited Edition Quebec", vidaMaxima:100 },
{ sku:"3001434", material:"Negra Modelo 6 pack 24/355 ml Nacional Asia del Este KHST ND", vidaMaxima:100 },
{ sku:"3001038", material:"Negra Modelo 6 Pack 24/355 ml Nacional Bolivia ND", vidaMaxima:100 },
{ sku:"3001413", material:"Negra Modelo 6 Pack 24/355 ml Nacional Belice ND", vidaMaxima:100 },
{ sku:"3001035", material:"Negra Modelo 6 Pack 24/355 ml Nacional Colombia ND", vidaMaxima:100 },
{ sku:"3001437", material:"Negra Modelo 6 Pack 24/355 ml Nacional Japón ND", vidaMaxima:100 },
{ sku:"3001039", material:"Negra Modelo 6 Pack 24/355 ml Nacional Chile ND", vidaMaxima:100 },
{ sku:"3001036", material:"Negra Modelo 6 Pack 24/355 ml Nacional Guatemala ND", vidaMaxima:100 },
{ sku:"3001435", material:"Negra Modelo 6 Pack 24/355 ml Nacional Nicaragua ND", vidaMaxima:100 },
{ sku:"3001612", material:"Negra Modelo 6 Pack 24/355 ml Nacional Uruguay ND", vidaMaxima:100 },
{ sku:"3001037", material:"Modelo Especial Botella 6 Pack 24/355 ml Nacional Colombia ND", vidaMaxima:100 },
{ sku:"3001412", material:"Modelo Especial Botella 6 Pack 24/355 ml Nacional Belice ND", vidaMaxima:100 },
{ sku:"3001419", material:"Modelo Especial Botella 6 pack 24/12 oz Deposit USA Alemania Fuerzas Armadas USAF ND", vidaMaxima:100 },
{ sku:"3001008", material:"Corona Extra Loose Pack 24/330 ml. Promocional BEACH Canadà", vidaMaxima:100 },
{ sku:"3001292", material:"Modelo Especial Bote 6 Pack 24/355 ml Nacional Belice ND", vidaMaxima:100 },
{ sku:"3001076", material:"Pacifico 6 Pack 24/355 ml Canada CP", vidaMaxima:100 },
{ sku:"3001296", material:"Corona Extra 6 pack 24/35.5 cl. Europa Rusia Kazajstan", vidaMaxima:100 },
{ sku:"3001416", material:"Modelo Especial Botella 6 Pack 24/35.5 cl Europa Libano", vidaMaxima:100 },
{ sku:"3001186", material:"Coronita Extra 6 Pack 24/7 oz. GENERICA EL SALVADOR", vidaMaxima:100 },
{ sku:"3001122", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA NICARAGUA", vidaMaxima:100 },
{ sku:"3001185", material:"Coronita Extra 6 Pack 24/7 oz. Genérica COREA", vidaMaxima:100 },
{ sku:"3001121", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA GUATEMALA", vidaMaxima:100 },
{ sku:"3001160", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA REPUBLICA DOMINICANA", vidaMaxima:100 },
{ sku:"3001161", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA PANAMA", vidaMaxima:100 },
{ sku:"3001207", material:"Coronita Extra 6 Pack 24/7 oz. Puerto Rico PR", vidaMaxima:100 },
{ sku:"3001184", material:"CORONITA EXTRA 6 Pack 24/207 ml JAPÓN", vidaMaxima:100 },
{ sku:"3001170", material:"CORONITA EXTRA 6 Pack 24/207 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001202", material:"Coronita Extra Loose Pack 24/7 oz DEPOSIT USA CARIBE", vidaMaxima:100 },
{ sku:"3001213", material:"Coronita Extra Loose Pack 24/7 oz. Puerto Rico PR", vidaMaxima:100 },
{ sku:"3001206", material:"Coronita Extra Loose Pack 24/7 oz. Genèrica El Salvador", vidaMaxima:100 },
{ sku:"3001169", material:"CORONITA EXTRA LOOSE PACK 24/207 ml. CANADA CANADA", vidaMaxima:100 },
{ sku:"3001199", material:"CORONA EXTRA 6 Pack 24/12 oz. Puerto Rico PR", vidaMaxima:100 },
{ sku:"3001198", material:"CORONA EXTRA 6 Pack 24/330 ml. CANADA Quebec", vidaMaxima:100 },
{ sku:"3001197", material:"CORONA EXTRA 6 Pack 24/330 ml. Canadá CANADA", vidaMaxima:100 },
{ sku:"3001218", material:"Corona Extra 12 Pack 24/330 ml. Canada Ontario", vidaMaxima:100 },
{ sku:"3001200", material:"CORONA EXTRA 12 Pack 24/330 ml. CANADA CANADA", vidaMaxima:100 },
{ sku:"3001212", material:"Corona Extra Loose Pack 24/330 ml. Canada CANADA", vidaMaxima:100 },
{ sku:"3001163", material:"CORONA EXTRA 12/710 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001188", material:"CORONA EXTRA BOTE 6 Pack 24/12 OZ NON DEPOSIT USA CARIBE", vidaMaxima:100 },
{ sku:"3001166", material:"CORONA EXTRA BOTE 6 Pack 24/355 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001167", material:"CORONA EXTRA BOTE 12 Pack 24/355 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001193", material:"CORONA LIGHT 6 Pack 24/12 oz. PUERTO RICO PR", vidaMaxima:100 },
{ sku:"3001189", material:"CORONA LIGHT 6 Pack 24/12 oz. Deposit USA Alemania (FA)", vidaMaxima:100 },
{ sku:"3001196", material:"CORONA LIGHT 12 PACK 24/12 oz. PUERTO RICO PR", vidaMaxima:100 },
{ sku:"3001175", material:"CORONA LIGHT 6 PACK 24/330 ml PANAMA CRUCEROS", vidaMaxima:100 },
{ sku:"3000757", material:"Negra Modelo Botella 6 Pack 24/355 ml Canada", vidaMaxima:100 },
{ sku:"3001176", material:"CORONA LIGHT 6 PACK 24/330 ml CANADA CARIBE", vidaMaxima:100 },
{ sku:"3001173", material:"CORONA LIGHT 6 PACK 24/330 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001174", material:"Corona Light 6 Pack 24/330 ml CANADA Chile", vidaMaxima:100 },
{ sku:"3001177", material:"CORONA LIGHT 12 PACK 24/330 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001178", material:"CORONA LIGHT BOTE 6 PACK 24-355 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001179", material:"CORONA LIGHT BOTE 12 PACK 24-355 ml CANADA CANADA", vidaMaxima:100 },
{ sku:"3001417", material:"Modelo Especial Botella 6 pack 24/35.5 cl Europa EAU", vidaMaxima:100 },
{ sku:"3001309", material:"Victoria 24/355 ml. Europa España Maq.", vidaMaxima:100 },
{ sku:"3001652", material:"Corona Extra 6 Pack 24/355 ml. Japon Japon", vidaMaxima:100 },
{ sku:"3001488", material:"Negra Modelo 6-Pack 24/355 ml. Nacional Japón ND MAQ", vidaMaxima:100 },
{ sku:"3001508", material:"Corona Light 6-Pack 24/35.5 cl. Europa Irlanda Irlanda", vidaMaxima:100 },
{ sku:"3001515", material:"Pacífico 6-Pack 24/35.5 cl. Europa España", vidaMaxima:100 },
{ sku:"3000726", material:"CORONA EXTRA 12 Pack 24/330 ml. CANADA ONTARIO", vidaMaxima:100 },
{ sku:"3000669", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA EL SALVADOR", vidaMaxima:100 },
{ sku:"3000105", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA NICARAGUA", vidaMaxima:100 },
{ sku:"3000104", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA GUATEMALA", vidaMaxima:100 },
{ sku:"3000374", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA REPUBLICA DOMINICANA", vidaMaxima:100 },
{ sku:"3000376", material:"CORONITA EXTRA 6 Pack 24/7 oz. GENERICA PANAMA", vidaMaxima:100 },
{ sku:"3000657", material:"CORONA LIGHT 6 PACK 24/330 ml CANADA CARIBE", vidaMaxima:100 },
{ sku:"3001047", material:"Coronita Extra 6 Pack 24/7 oz. Puerto Rico PR", vidaMaxima:100 },
{ sku:"3001306", material:"Coronita Extra Loose Pack 24/7 oz. Puerto Rico PR", vidaMaxima:100 },
{ sku:"3001045", material:"Coronita Extra Loose Pack 24/7 oz. Genèrica El Salvador", vidaMaxima:100 },
{ sku:"3000107", material:"Modelo Especial Botella 6 Pack 24/35.5 CL Europa Estonia", vidaMaxima:100 },
{ sku:"3000106", material:"Modelo Especial Botella 6 Pack 24/35.5 CL Europa Dinamarca", vidaMaxima:100 },
{ sku:"3010227", material:"C AGUA RIFADA TC 6P HC 24/355ML JAMFRAM", vidaMaxima:360 },
{ sku:"3008478", material:"PACIFICO 6 PK 24/355 ML NR CI", vidaMaxima:360 },
{ sku:"3008440", material:"PS 6PK 24/355 ML NR", vidaMaxima:360 },
{ sku:"3008478", material:"PACIFICO 6 PK 24/355 ML NR CI", vidaMaxima:360 },
{ sku:"3008440", material:"PS 6PK 24/355 ML NR", vidaMaxima:360 }

];

// ==========================================
// CADENAS
// ==========================================

const cadenasData = [

    {
        cadena:"7 ELEVEN",
        diasAceptacion:115
    },

    {
        cadena:"ARAMBURO",
        diasAceptacion:115
    },

    {
        cadena:"OXXO",
        diasAceptacion:135
    },

    {
        cadena:"WAL MART",
        diasAceptacion:115
    },

     {
        cadena:"ASTURIANO",
        diasAceptacion:115
    },

     {
        cadena:"CHEDRAUI",
        diasAceptacion:115
    },

     {
        cadena:"CITY CLUB",
        diasAceptacion:165
    },
  
      {
        cadena:"CABRITO ABARROTERO",
        diasAceptacion:0
    },

      {
        cadena:"CALIMAX",
        diasAceptacion:115
    },
    
      {
        cadena:"CASA LEY",
        diasAceptacion:115
    },

     {
        cadena:"CITY FRESKO",
        diasAceptacion:115
    },
    {
        cadena:"CONASUPER",
        diasAceptacion:0
    },

      {
        cadena:"COSTCO",
        diasAceptacion:115
    },

    {
        cadena:"EL DUERO",
        diasAceptacion:115
    },

    {
        cadena:"EXTRA",
        diasAceptacion:115
    },

     {
        cadena:"FUTURAMA",
        diasAceptacion:135
    },

     {
        cadena:"GO MART",
        diasAceptacion:115
    },

    {
        cadena:"HEB",
        diasAceptacion:195
    },
    {
        cadena:"KIOSKO",
        diasAceptacion:115
    },

    {
        cadena:"LA EUROPEA",
        diasAceptacion:195
    },
    {
        cadena:"OPERADORA MERCO",
        diasAceptacion:0
    },

    {
        cadena:"PREMIUM BEERS",
        diasAceptacion:255
    },
    {
        cadena:"SAMS CLUB",
        diasAceptacion:115
    },

    {
        cadena:"SAN FRANCISCO DE ASIS",
        diasAceptacion:115
    },

    {
        cadena:"SMART",
        diasAceptacion:195
    },

    {
        cadena:"SORIANA",
        diasAceptacion:165
    },

    {
        cadena:"SUPER BARA",
        diasAceptacion:115
    },

    {
        cadena:"SUPER KOMPRAS",
        diasAceptacion:0
    },
     {
        cadena:"SUPER OFERTAS",
        diasAceptacion:0
    },

      {
        cadena:"SUPER TIENDAZZ",
        diasAceptacion:0
    },


    
      {
        cadena:"TIENDAS NETO",
        diasAceptacion:0
    },

    {
        cadena:"VIG S",
        diasAceptacion:115
    },

    {
        cadena:"ZORRO",
        diasAceptacion:115
    }


];


// ==========================================
// AUTOCOMPLETE SKU
// ==========================================

const skuList =
document.getElementById("skuList");

productos.forEach(producto=>{

    const option =
    document.createElement("option");

    option.value =
    producto.sku;

    option.label =
    producto.material;

    skuList.appendChild(option);

});


// ==========================================
// SELECT CADENAS
// ==========================================

const cediSelect =
document.getElementById("cediSelect");

cadenasData.forEach(cadena=>{

    const option =
    document.createElement("option");

    option.value =
    cadena.cadena;

    option.textContent =
    cadena.cadena;

    cediSelect.appendChild(option);

});


// ==========================================
// OBTENER MES
// ==========================================

function obtenerMes(letra){

    const meses = {

        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12
    };

    return meses[letra.toUpperCase()];
}


// ==========================================
// VALIDAR
// ==========================================

function validarCanalModerno(){

    const sku =
    document.getElementById("skuInput")
    .value
    .trim();

    const lote =
    document.getElementById("lote")
    .value
    .trim();

    const cadenaSeleccionada =
    document.getElementById("cediSelect")
    .value;


    // ======================================
    // VALIDAR CAMPOS
    // ======================================

    if(
        !sku ||
        !lote ||
        !cadenaSeleccionada
    ){

        alert("Completa todos los campos");

        return;
    }


    // ======================================
    // BUSCAR PRODUCTO
    // ======================================

    const producto =
    productos.find(
        p => p.sku === sku
    );

    if(!producto){

        alert("SKU no encontrado");

        return;
    }


    // ======================================
    // BUSCAR CADENA
    // ======================================

    const cadena =
    cadenasData.find(
        c => c.cadena === cadenaSeleccionada
    );

    if(!cadena){

        alert("Cadena no encontrada");

        return;
    }


    // ======================================
    // VALIDAR LOTE
    // ======================================

    const letraMes =
    lote.charAt(0);

    const dia =
    lote.substring(1,3);

    const anio =
    "202" + lote.charAt(3);

    const mes =
    obtenerMes(letraMes);

    if(!mes){

        alert("Lote inválido");

        return;
    }


    // ======================================
    // FECHAS
    // ======================================

    const fechaLote =
    new Date(anio, mes - 1, dia);

    const hoy =
    new Date();

    const diferenciaMs =
    hoy - fechaLote;

    const diasActuales =
    Math.floor(
        diferenciaMs /
        (1000 * 60 * 60 * 24)
    );


    // ======================================
    // PORCENTAJE
    // ======================================
// ======================================
// VIDA RESTANTE
// ======================================

const vidaRestante =
producto.vidaMaxima - diasActuales;


// ======================================
// PORCENTAJE
// ======================================

const porcentaje =
(
    diasActuales /
    producto.vidaMaxima
) * 100;


// ======================================
// RESULTADO
// ======================================

let resultado = "";

if(cadena.diasAceptacion === 0){

    resultado =
    "BAJO NEGOCIACIÓN";

}
else if(
    vidaRestante >=
    cadena.diasAceptacion
){

    resultado =
    "✔ SE PUEDE ENVIAR";

}
else{

    resultado =
    "✖ NO SE PUEDE ENVIAR";
}


    // ======================================
    // MOSTRAR RESULTADO
    // ======================================

    document.getElementById("resultado")
    .style.display = "block";


    document.getElementById("cadena")
    .textContent =
    cadena.cadena;


    document.getElementById("dias")
    .textContent =
    diasActuales;

    document.getElementById("vidaRestante")
    .textContent =
    vidaRestante;


    document.getElementById("diasAceptacion")
    .textContent =

    cadena.diasAceptacion === 0

    ? "BAJO NEGOCIACIÓN"

    : cadena.diasAceptacion;


    document.getElementById("porcentaje")
    .textContent =
    porcentaje.toFixed(2) + "%";


    // ======================================
    // ESTATUS
    // ======================================

    const estatus =
    document.getElementById("estatus");

    estatus.textContent =
    resultado;

    estatus.classList.remove(
        "aceptar",
        "rechazar",
        "warning"
    );


    if(resultado.includes("✔ SE PUEDE ENVIAR")){

        estatus.classList.add(
            "aceptar"
        );

    }
    else if(
        resultado.includes("BAJO NEGOCIACIÓN")
    ){

        estatus.classList.add(
            "validar"
        );

    }
    else{

        estatus.classList.add(
            "rechazar"
        );
    }

}


// ==========================================
// MENU RESPONSIVE
// ==========================================

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

if(menuToggle){

    menuToggle.addEventListener("click", ()=>{

        navLinks.classList.toggle(
            "active"
        );

    });

}