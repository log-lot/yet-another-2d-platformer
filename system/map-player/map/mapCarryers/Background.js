'use strict';

import { Hitbox } from "../../Hitbox.js";

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

export class Background {

    layer1 = new Array
    layer2 = new Array
    layer3 = new Array
    camera

    constructor(cam) {
        this.createLayer1()
        this.createLayer2()
        this.createLayer3()
        this.camera = cam
    }

// base
// ctx.fillRect((x/1) + 0, (y/2) + 0, 0, 0);

    createLayer1() {
        this.layer1[0] = new Hitbox(150, 150, 50, 650)
        this.layer1[1] = new Hitbox(175, 450, 500, 40)
        this.layer1[2] = new Hitbox(670, 150, 50, 650)
        this.layer1[3] = new Hitbox(1000, 0, 950, 50)
        this.layer1[4] = new Hitbox(1900, 0, 50, 400)
        this.layer1[5] = new Hitbox(1900, 350, 650, 50)
        this.layer1[6] = new Hitbox(1000, -500, 50, 550)
        this.layer1[7] = new Hitbox(1700, -500, 50, 550)
        this.layer1[8] = new Hitbox( 2506.5000000000023 , 350.2387499999997 , 43 , 312.00000000000006 , false )
        this.layer1[ 9 ] = new Hitbox( 2240.500000000002 , 65.48882334537797 , 40 , 297 , false )
        this.layer1[ 10 ] = new Hitbox( 1936.5000000000018 , 65.48882334537797 , 332 , 42 , false )
        this.layer1[ 11 ] = new Hitbox( 999.9999999999981 , -499.2612500000009 , 748.0000000000001 , 44 , false )
        this.layer1[ 12 ] = new Hitbox( 187.20718971770532 , 151.39294688485757 , 534.999992474061 , 46.107053115142435 , false )
        this.layer1[ 23 ] = new Hitbox( 2505.500000000002 , -113.02249999999992 , 45 , 517 , false )
        this.layer1[ 24 ] = new Hitbox( 2505.500000000002 , -113.02249999999992 , 526 , 48.000163073910414 , false )
        this.layer1[ 25 ] = new Hitbox( 2981.499978914576 , -564.0224989445318 , 49.00002108542458 , 498.99999894453197 , false )
        this.layer1[ 13 ] = new Hitbox( 2280.5000000000005 , -594.022294823302 , 750 , 47.99979482590834 , false )
        this.layer1[ 14 ] = new Hitbox( 2640.5000000000005 , -556.0225000115232 , 49 , 469.0000000115223 , false )
        this.layer1[ 15 ] = new Hitbox( 2666.5000000000005 , -471.9396081138776 , 340 , 51.917635555836 , false )
        this.layer1[ 16 ] = new Hitbox( 2871.5000000000005 , -559.0225000000075 , 42 , 130.00000000000614 , false )
        this.layer1[ 17 ] = new Hitbox( 2279.4999999890283 , -906.0224995699941 , 53.00000001096896 , 354.9999995700492 , false )
        this.layer1[ 18 ] = new Hitbox( 1811.5000010157719 , -918.0224999999987 , 520.9999989842286 , 46.00001216986243 , false )
        this.layer1[ 19 ] = new Hitbox( 3017.4999999484903 , -374.02249899308913 , 387.00000005150605 , 54.999998993089775 , false )
        this.layer1[ 20 ] = new Hitbox( 3213.4999999999964 , -324.0224979578596 , 51 , 491.99999795786994 , false )
        this.layer1[ 21 ] = new Hitbox( 2667.499967775882 , 123.97749979028868 , 598.0000322239384 , 61.00000020971049 , false )
        this.layer1[ 22 ] = new Hitbox( 2667.499967775882 , 123.97749979028868 , 63.000032159282455 , 598.9999994322513 , false )
        this.layer1[ 34 ] = new Hitbox( 3392.6747786241763 , -373.1360432378549 , 476.9999997052678 , 55 , false )
        this.layer1[ 35 ] = new Hitbox( 3659.674778329444 , -360.1360432378549 , 50 , 289 , false )
        this.layer1[ 36 ] = new Hitbox( 3226.674778329444 , -117.13604323785489 , 481 , 49 , false )
        this.layer1[ 37 ] = new Hitbox( 3761.6710719644225 , -582.1360432378549 , 53.00370625970663 , 248 , false )
        this.layer1[ 38 ] = new Hitbox( 3397.674778333513 , -594.1360432378549 , 417 , 55 , false )
        this.layer1[ 39 ] = new Hitbox( 3397.908588861385 , -862.4121278626076 , 52.999995958906766 , 311.0148345590401 , false )
        this.layer1[ 26 ] = new Hitbox( 3490.908326892288 , -105.25673663133114 , 57.000258467106505 , 634.4138911513854 , false )
        this.layer1[ 27 ] = new Hitbox( 3862.908584820273 , -372.3972932378539 , 41 , 1003.9846102330929 , false )
        this.layer1[ 28 ] = new Hitbox( 3886.9085887877673 , -280.39729321956827 , 600.9999960325722 , 58.99999998171427 , false )
        this.layer1[ 29 ] = new Hitbox( 4173.908584784925 , -1251.300007361017 , 60.00000003534933 , 995.9016961882224 , false )
        this.layer1[ 30 ] = new Hitbox( 3635.908584820275 , -775.3922778535492 , 49 , 208.99498489421546 , false )
        this.layer1[ 31 ] = new Hitbox( 3635.908584820275 , -775.3922778535492 , 588 , 56.99500325028953 , false )
        this.layer1[ 32 ] = new Hitbox( 3989.908584820275 , -757.3972683075474 , 62 , 238.99997507180228 , false )
        this.layer1[ 33 ] = new Hitbox( 4007.908584820275 , -586.4484757050033 , 189 , 69.05116542337419 , false )
        this.layer1[34] = new Hitbox(2529.0919072081088,629.8313520542654,176.00000002443358,32.00609486894484 )
        this.layer1[35] = new Hitbox(2668.0919072325423,721.8374470689141,61,775.241326752649 )
        this.layer1[41] = new Hitbox(3680.424999723497,-116.7612499880816,217.00000027649776,47.99999998808187 )
        this.layer1[42] = new Hitbox(3497.4249471796384,488.23874710189307,384.00005279622974,41.00000289678326 )
        this.layer1[40] = new Hitbox(3864.424999999993,617.2387494732936,41,307.00000052670623 )
        this.layer1[43] = new Hitbox(4227.165622997847,-1251.0944034782044,258,58.99999999999977 )
        this.layer1[44] = new Hitbox(4429.165622997847,-1661.0943962547456,56,468.9999927765409 )
        this.layer1[45] = new Hitbox(4429.165622997847,-1661.0944034676916,414,55.99999998948647 )
        this.layer1[46] = new Hitbox(4777.165622997847,-1662.094403478205,65,252 )
        this.layer1[47] = new Hitbox(4777.165622997847,-1469.094403478205,1110.2275023852453,58 )
        this.layer1[48] = new Hitbox(3881.7984803135378,-1553.0942962179286,553.3671626794239,58.99989273972483 )
        this.layer1[49] = new Hitbox(3905.1656302417887,-1523.0944034782037,44.99999275606842,352 )
        this.layer1[50] = new Hitbox(3823.165622997857,-2257.094239685878,63,762.9998362596509 )
        this.layer1[51] = new Hitbox(3286.167807851447,-2109.0944034236613,559.9978151464102,46.999999945460786 )
        this.layer1[52] = new Hitbox(3359.1656236526383,-2089.0944034782005,57.99999934522157,453.6978818875132 )
        this.layer1[53] = new Hitbox(3403.16562299786,-1747.0944241948846,440,52.00002071666722 )
        this.layer1[54] = new Hitbox(2188.524093586845,-1682.0944034782042,1186.6415294110138,46 )
        this.layer1[55] = new Hitbox(2789.165580968485,-1653.0944172836578,59.00004202582113,533.1338842184616 )
        this.layer1[56] = new Hitbox(2798.343406470535,-1235.094403478202,1141.8222165287457,50.999999999988404 )
        this.layer1[57] = new Hitbox(3905.165622997867,-1174.094403478202,44,514.7532700476893 )
        this.layer1[58] = new Hitbox(2056.165627834532,-1139.0944034781983,790.9999951632831,58.99999541222883 )
        this.layer1[59] = new Hitbox(3287.165622997857,-2786.9464279125577,46.999999799536454,722.8520242912618 )
        this.layer1[60] = new Hitbox(3840.1656229978535,-2257.0944034782087,1161.000000000001,62 )
        this.layer1[61] = new Hitbox(4298.165622997854,-2223.0944034782087,69,354 )
        this.layer1[62] = new Hitbox(4582.165622997854,-2549.0944034782087,82,332 )
        this.layer1[63] = new Hitbox(3819.1656233450803,-2549.0944034782087,765.9999996527731,45.00000378633149 )
        this.layer1[64] = new Hitbox(3998.165622998099,-2539.0944034755726,60.99999999975989,314.99999999736656 )
        this.layer1[65] = new Hitbox(3821.165622997859,-2873.0944034782033,48,372.000013989732 )
        this.layer1[66] = new Hitbox(4322.166284268199,-1912.0949797940884,478.9993387297736,42.00057631578147 )
        this.layer1[67] = new Hitbox(4762.165622997862,-1893.0944034782115,40,262 )
        this.layer1[68] = new Hitbox(4938.165622997867,-2741.9922906615675,70,546.8978871833688 )
        this.layer1[69] = new Hitbox(3919.1656229991445,-699.0943807657766,89.99999999872352,36.99997728757057 )
        this.layer1[70] = new Hitbox(4460.599874990815,-280.67388238192916,476,58 )
        this.layer1[71] = new Hitbox(4781.966689479474,-1867.7612324683878,1092.0333105203554,44.999982468386406 )
        this.layer1[72] = new Hitbox(5281.999999999982,-2379.7615641592483,54,517.000314159247 )
        this.layer1[73] = new Hitbox(4962.0178659836765,-2314.761250774419,352.9821340163053,47.00000077441109 )
        this.layer1[74] = new Hitbox(5323.9970001487145,-2194.7612500000077,557.9594267436214,38 )
        this.layer1[75] = new Hitbox(5306.999999999969,-2379.7612500000077,230.0000000000182,48 )
        this.layer1[76] = new Hitbox(5497.999999999987,-2687.7612500000077,39,356 )
        this.layer1[77] = new Hitbox(5846,-2194.7612500000105,35,373 )
        this.layer1[78] = new Hitbox(5775,-1854.91668947061,40,166.15543247811547 )
        this.layer1[79] = new Hitbox(5777,-1735.7612500000114,908.8127353350928,46 )
        this.layer1[80] = new Hitbox(6648.999999986973,-1944.7612500000114,38.00000001301396,252 )
        this.layer1[81] = new Hitbox(5867.999999999987,-1944.7612500000114,819,44 )
        this.layer1[82] = new Hitbox(6008.999999999987,-2566.797879042972,37,665.0366290429606 )
        this.layer1[83] = new Hitbox(6011.999999999987,-2534.7612492424337,1008.9996779747844,39.99999924242866 )
        this.layer1[84] = new Hitbox(6731.206574416333,-2510.761250001756,44.793425583726275,433.99995903007766 )
        this.layer1[85] = new Hitbox(6021.199974948562,-2112.7612500000096,754.8000250514233,35.9999997103464 )
        this.layer1[86] = new Hitbox(6993.99999992512,-2825.7612500000014,40.00000007484687,331.00000145255353 )
        this.layer1[87] = new Hitbox(6736.9999999999745,-2825.761250000003,285.00007016247764,25.006290212639215 )
        this.layer1[88] = new Hitbox(6737.999999999967,-3065.9516909170384,33,265.19044091723026 )
        this.layer1[89] = new Hitbox(6222.395905674301,-1937.745844337066,37.604108752810134,129.98459489837433 )
        this.layer1[90] = new Hitbox(6140.000000000018,-1838.7612500000027,120.00000013986391,31.000000005441507 )
        this.layer1[91] = new Hitbox(6139.999999999976,-1838.7612500000027,33,117 )
        this.layer1[92] = new Hitbox(6670.002854203098,-1859.7612500000027,718.8932355961724,47 )
        this.layer1[93] = new Hitbox(7340.999999999965,-2202.7612497480804,47.99999208372719,389.9999997480777 )
        this.layer1[94] = new Hitbox(7340.999999999965,-2202.7612500000005,774.457528395922,48 )
        this.layer1[95] = new Hitbox(8069.999999999962,-2201.7612500000023,69,942.6666827073279 )
        this.layer1[96] = new Hitbox(7139.15573207355,-1643.761249243888,978.8439060728506,47.999999243889306 )
        this.layer1[97] = new Hitbox(7139.0000014423185,-1849.7612500000023,44.99999855765782,254 )
        this.layer1[98] = new Hitbox(7139.0000014423185,-1595.7612500000023,44.999998557665094,388.0000000000018 )
        this.layer1[99] = new Hitbox(7519.20098862598,-2764.7610795996457,48.79901139406593,595.0017888030793 )
        this.layer1[100] = new Hitbox(7020.016074198808,-2764.761249936957,547.9839258011853,54.999999936956556 )
        this.layer1[101] = new Hitbox(8103.403290992846,-2098.8467084922827,484.596709202684,69.08545845085655 )
        this.layer1[102] = new Hitbox(8533.999999999993,-3025.314867266049,54.00000000153159,995.5536172657203 )
        this.layer1[103] = new Hitbox(8533.999999999993,-3025.761239326205,978.7631525226734,68.99998932620565 )
        this.layer1[104] = new Hitbox(7545.262263124277,-2628.564580451124,1015.7503716619913,78.8033255677392 )
        this.layer1[105] = new Hitbox(7711.000343607689,-2616.7612500063997,77.99965639368475,265.00000000639557 )
        this.layer1[106] = new Hitbox(7552.000000000007,-2419.761250000004,237.00000000000364,68 )
        this.layer1[107] = new Hitbox(7985.000000000007,-2576.761250000004,71,398 )
        this.layer1[108] = new Hitbox(8042.000000000007,-2391.761250000004,514,43 )
        this.layer1[109] = new Hitbox(8842.919092129654,-3668.893910702369,76.83105848493324,685.2983477849011 )
        this.layer1[110] = new Hitbox(8842.919092129654,-5193.273694001271,86.24924901726081,2209.6781310838032 )
        this.layer1[111] = new Hitbox(8886.506384130587,-4795.6844412178825,1335.761464329491,92.11587738965864 )
        this.layer1[112] = new Hitbox(9215.148493767207,-4290.0875781011455,764.4694293034754,81.66922796129347 )
        this.layer1[113] = new Hitbox(9213.416662946796,-4752.846940378128,84.98096796544996,547.9111145565803 )
        this.layer1[114] = new Hitbox(9640.486841677262,-5340.70794305342,78.28718602237132,623.2672493828677 )
        this.layer1[115] = new Hitbox(6965.9251760502475,-4445.300253852734,1906.5790662989557,87.03900416270608 )
        this.layer1[116] = new Hitbox(8179.317668383883,-5189.38004175405,82.59097440450569,805.2940517631059 )
        this.layer1[117] = new Hitbox(8359.429679822275,-4413.591866444697,85.14827822072766,802.233645975214282 )
        this.layer1[118] = new Hitbox(6882.2669164688195,-3818.586621565837,1527.316676180748,76.36279662344259 )
        this.layer1[119] = new Hitbox(8361.083095194406,-3697.0041168553626,495.1876379292262,81.57652756257175 )
        this.layer1[120] = new Hitbox(7939.72913044083,-3744.8948934543732,77.9969031925566,825.643348586575 )
        this.layer1[121] = new Hitbox(152.73679769808643,774.3592418032783,48.172455089820346,389.6196721311478 )
        this.layer1[122] = new Hitbox(159.34997135078038,760.3231762295081,532.8550898203591,43.642622950819714 )
        this.layer1[123] = new Hitbox(3867,923,40,166 )
        this.layer1[124] = new Hitbox(3793,-370,92,32 )
        this.layer1[125] = new Hitbox(3400,-542,53,223 )
        this.layer1[126] = new Hitbox(5836,-1705,51,287 )
        this.layer1[127] = new Hitbox(8119,-1322,806,63 )
        this.layer1[128] = new Hitbox(8874,-1902,51,643 )
        this.layer1[129] = new Hitbox(8874,-1902,432,43 )
        this.layer1[130] = new Hitbox(9259,-2267,47,408 )
        this.layer1[131] = new Hitbox(8719,-2267,570,64 )
        this.layer1[132] = new Hitbox(8719,-2237,57,96 )
        this.layer1[133] = new Hitbox(8566,-2184,210,43 )
        this.layer1[134] = new Hitbox(8561,-1816,340,43 )
        this.layer1[135] = new Hitbox(8563,-1782,40,179 )
        this.layer1[136] = new Hitbox(8125,-1654,478,51 )
        this.layer1[137] = new Hitbox(8911,-1530,838,60 )
        this.layer1[138] = new Hitbox(9683,-2002,66,532 )
        this.layer1[139] = new Hitbox(9579,-2002,132,55 )
        this.layer1[140] = new Hitbox(9579,-2698,60,751 )
        this.layer1[141] = new Hitbox(8839,-2698,800,65 )
        this.layer1[142] = new Hitbox(8839,-2659,62,417 )
        this.layer1[143] = new Hitbox(9339,-1487,77,838 )
        this.layer1[144] = new Hitbox(8533,-719,846,74 )
        this.layer1[145] = new Hitbox(8533,-1278,34,615 )
        this.layer1[146] = new Hitbox(7164,-1269,760,66 )
        this.layer1[147] = new Hitbox(7851,-1629,74,426 )
        this.layer1[148] = new Hitbox(7702,-1211,66,243 )
        this.layer1[149] = new Hitbox(7725,-1022,644,57 )
        this.layer1[150] = new Hitbox(8321,-1022,47,490 )
        this.layer1[151] = new Hitbox(8321,-564,368,32 )
        this.layer1[152] = new Hitbox(8644,-689,45,128 )
        this.layer1[153] = new Hitbox(4876,-773,66,550 )
        this.layer1[154] = new Hitbox(2041,-1136,42,223 )
        this.layer1[155] = new Hitbox(2193,-1657,33,554 )
        this.layer1[156] = new Hitbox(1303,-1382,50,903 )
        this.layer1[157] = new Hitbox(1333,-919,497,44 )
        this.layer1[158] = new Hitbox(1322,-1381,887,35 )
        this.layer1[159] = new Hitbox(1510,-1926,68,552 )
        this.layer1[160] = new Hitbox(1556,-1928,1105,54 )
        this.layer1[161] = new Hitbox(2614,-1915,46,245 )
        this.layer1[162] = new Hitbox(538,-1057,797,62 )
        this.layer1[163] = new Hitbox(544,-1031,61,397 )
        this.layer1[164] = new Hitbox(542,-678,514,41 )
        this.layer1[165] = new Hitbox(1022,-678,35,194 )
        this.layer1[166] = new Hitbox(709,-1650,856,74 )
        this.layer1[167] = new Hitbox(709,-1607,54,593 )
        this.layer1[168] = new Hitbox(2341,-2557,63,659 )
        this.layer1[169] = new Hitbox(2366,-2559,607,57 )
        this.layer1[170] = new Hitbox(2918,-2789,55,288 )
        this.layer1[171] = new Hitbox(2918,-2786,199,72 )
        this.layer1[172] = new Hitbox(3070,-2787,46,244 )
        this.layer1[173] = new Hitbox(3070,-2599,240,54 )
        this.layer1[174] = new Hitbox(2782,-2543,63,341 )
        this.layer1[175] = new Hitbox(2787,-2246,373,65 )
        this.layer1[176] = new Hitbox(3092,-2216,68,183 )
        this.layer1[177] = new Hitbox(3092,-2078,283,42 )
        
 
        
 
        
        
 
        
        //this.layer1[0] = new Hitbox()
    }

    createLayer2() {
        this.layer2[0] = new Hitbox(75, 150, 60, 650)
        this.layer2[1] = new Hitbox(80, 350, 580, 50)
        this.layer2[2] = new Hitbox(655, 0, 60, 800)
        this.layer2[3] = new Hitbox(665, 440, 380, 60)
        this.layer2[4] = new Hitbox(990, -550, 60, 1350)
        this.layer2[5] = new Hitbox(390, -50, 660, 60)
        this.layer2[6] = new Hitbox(990, 0, 400, 60)
        this.layer2[7] = new Hitbox(990, 300, 400, 60)
        this.layer2[8] = new Hitbox(1330, 0, 60, 860)
        this.layer2[ 9 ] = new Hitbox( 106.90582515617223 , 148.87394284176108 , 341.8495599493749 , 67 , false )
        this.layer2[ 10 ] = new Hitbox( 390.7553851052211 , -49.12605715823892 , 64 , 264 , false )
        this.layer2[ 11 ] = new Hitbox( 2381.1613855265964 , -259.0149511030921 , 982.9910067679139 , 49.00000000001114 , false )
        this.layer2[ 12 ] = new Hitbox( 2483.4856440265094 , -239.34804925171755 , 56.000081601335296 , 305.9997648153061 , false )
        this.layer2[ 13 ] = new Hitbox( 2508.4857256278447 , 11.020420834460936 , 203 , 54.964628068436525 , false )
        this.layer2[ 14 ] = new Hitbox( 2658.4857256278447 , 23.324350674569757 , 52 , 201.99403155580563 , false )
        this.layer2[ 15 ] = new Hitbox( 2694.4857256278447 , 178.6958009180587 , 208 , 46.955914645527855 , false )
        this.layer2[ 16 ] = new Hitbox( 2861.4857256278447 , 14.318306013635095 , 63 , 211.00007621661734 , false )
        this.layer2[ 17 ] = new Hitbox( 2861.4857256278447 , 14.318306013635095 , 242 , 59.00007621663582 , false )
        this.layer2[ 18 ] = new Hitbox( 3042.4857256278447 , -238.3484089321483 , 62 , 311.000124314521 , false )
        this.layer2[ 19 ] = new Hitbox( 2708.4454906382553 , -227.04565853746107 , 40.040203864156865 , 161.03068367984952 , false )
        this.layer2[ 20 ] = new Hitbox( 2735.4857256271 , -124.39213808683434 , 341.00000000074215 , 57.71053640825579 , false )
        this.layer2[ 21 ] = new Hitbox( 3300.485725549161 , -260.0149511029611 , 60.00000007868084 , 920.111464371224 , false )
        this.layer2[ 22 ] = new Hitbox( 3044.8189367006466 , 43.3181866821385 , 44.000122253741665 , 201.0001955372552 , false )
        this.layer2[ 23 ] = new Hitbox( 3066.8190589611763 , 173.0066461848537 , 263 , 69.31173561189627 , false )
        this.layer2[ 24 ] = new Hitbox( 2136.1523913528463 , 153.31838264854537 , 542.0000009413825 , 49.999999581833265 , false )
        this.layer2[ 25 ] = new Hitbox( 2118.188566596881 , -244.0149537078624 , 58.63049282668726 , 626.000002604778 , false )
        this.layer2[ 26 ] = new Hitbox( 1638.5314573943194 , -641.1839636418408 , 52.95426826730204 , 527.16903155184 , false )
        this.layer2[ 27 ] = new Hitbox( 1655.4857256278372 , -166.3524415748974 , 161 , 53.004156230251965 , false )
        this.layer2[ 28 ] = new Hitbox( 1655.8734511084003 , -541.3428845510616 , 490.945607857655 , 52.99460011513213 , false )
        this.layer2[ 29 ] = new Hitbox( 2098.485762161266 , -524.3441315671789 , 47.999963467036196 , 284.99584718352435 , false )
        this.layer2[ 30 ] = new Hitbox( 1351.4862032553424 , 94.70351829852211 , 493.9324994148442 , 59.28152888721465 , false )
        this.layer2[ 31 ] = new Hitbox( 1718.1523916919105 , 116.26226971588255 , 56.00000060259117 , 262.0561124923383 , false )
        this.layer2[ 32 ] = new Hitbox( 1745.998049737595 , 316.3174331807768 , 405.15434255690843 , 62.00094904947531 , false )
        this.layer2[ 33 ] = new Hitbox( 1791.1523922948068 , -262.3482844364095 , 55.99999999969714 , 416.99999999999505 , false )
        this.layer2[ 34 ] = new Hitbox( 1791.1523922948068 , -262.3482844364095 , 640.6666494525311 , 50.66667142090131 , false )
        this.layer2[ 35 ] = new Hitbox( 2385.152392284618 , -714.0149510972715 , 45.00000000988439 , 503.9999999941914 , false )
        this.layer2[ 36 ] = new Hitbox( 2633.701679995642 , -355.2906077351296 , 205 , 42.99993256613493 , false )
        this.layer2[ 37 ] = new Hitbox( 2799.0351356930296 , -677.9369153197476 , 44.999877635947996 , 364.97957348399416 , false )
        this.layer2[ 38 ] = new Hitbox( 3095.658977759936 , -538.5868114083087 , 41.04270223536332 , 293.62946957550605 , false )
        this.layer2[ 39 ] = new Hitbox( 2820.701679994368 , -537.9573417382343 , 306.00000000127056 , 47.999999902482045 , false )
        this.layer2[ 40 ] = new Hitbox( 2439.7006382110067 , 171.3754368483406 , 49.33437515371406 , 331.0001837587762 , false )
        this.layer2[ 41 ] = new Hitbox( 2185.0350133289803 , 460.709324709114 , 301 , 44.00000012179743 , false )
        this.layer2[ 42 ] = new Hitbox( 2185.0350133289803 , 460.709324709114 , 41 , 212.98364567708194 , false )
        this.layer2[ 43 ] = new Hitbox( 1928.1175764270808 , 329.0426472021311 , 53.917436901902875 , 234.00001090630212 , false )
        this.layer2[ 44 ] = new Hitbox( 1928.701679995699 , 527.7093247997125 , 266.9999999999502 , 51.00000003119942 , false )
        this.layer2[ 45 ] = new Hitbox( 2602.167318921015 , -468.64708887933693 , 49.534353024755546 , 238.36102846654444 , false )
        this.layer2[46] = new Hitbox(-314.45447534020536,-548.6741666666661,1334,54 )
        this.layer2[47] = new Hitbox(371.64190086274215,-527.579405049505,53.90362379781942,320.90523838359184 )
        this.layer2[48] = new Hitbox(405.54552465979464,-257.6741666666668,163,51 )
        this.layer2[49] = new Hitbox(519.5455246597946,-224.6741666666668,49,202 )
        this.layer2[50] = new Hitbox(531.4829324006773,-828.6739987808,44.06254867988832,301.2409141491736 )
        this.layer2[51] = new Hitbox(632.960372613747,809.6591657939013,722.2518187127025,51.00000087276419 )
        this.layer2[52] = new Hitbox(2191.5455232422437,625.6591657122065,279.00000141754936,47.00000095445944 )
        this.layer2[53] = new Hitbox(2434.545524659793,655.6591666666659,36,292 )
        this.layer2[54] = new Hitbox(990.1666666666666,795.825833333333,59.999999999999886,28 )
        this.layer2[55] = new Hitbox(2596.066583327202,-675.6159215879601,216,34 )
        this.layer2[56] = new Hitbox(2597.066583327202,-650.6159215879601,55,186 )
        this.layer2[57] = new Hitbox(2385.7332499997774,-714.2825882546256,260.99999999409465,42 )
        this.layer2[58] = new Hitbox(2441.0665681455152,-1175.2888837209046,60.33708994074868,476.67296208784137 )
        this.layer2[59] = new Hitbox(2479.3999168288346,-1120.2825434855658,752.8548930079078,57.99995523094162 )
        this.layer2[60] = new Hitbox(2956.732756419054,-1087.2825882546242,59.000493574451866,224 )
        this.layer2[61] = new Hitbox(2999.7332499938693,-909.2825882546242,260,46 )
        this.layer2[62] = new Hitbox(3229.7332499938693,-1120.2825882546242,29,231 )
        this.layer2[63] = new Hitbox(2777.7332499938693,-926.9492549212928,51,272.9999999579702 )
        this.layer2[64] = new Hitbox(2828.3999166605354,-927.6159215879568,161,41 )
        this.layer2[65] = new Hitbox(3127.733249993185,-467.2825709232344,415.0000000006844,51.999982668636335 )
        this.layer2[66] = new Hitbox(3486.7332499938693,-1029.9492549212075,55,591.0002381078978 )
        this.layer2[67] = new Hitbox(3234.733249993873,-1029.615921587956,274.33365457098853,52.00247297081137 )
        this.layer2[68] = new Hitbox(3095.7332499938807,-1823.3623645321038,46.01307605595048,727.4133206278718 )
        this.layer2[69] = new Hitbox(1756.3999280679682,-1696.2819456009208,1366.9999885925772,61.999357346298666 )
        this.layer2[70] = new Hitbox(2440.771026552671,-1643.9492549212853,60.96222344120815,490 )
        this.layer2[71] = new Hitbox(3417.722533856087,-1678.615127869594,51.010716137705,664.1573793322045 )
        this.layer2[72] = new Hitbox(3102.7332499938757,-1597.61591704279,349,48.99999545483752 )
        this.layer2[73] = new Hitbox(3108.7332499938757,-1715.2825882546192,360,46.00000000027626 )
        this.layer2[74] = new Hitbox(3455.1875850315823,-1463.068779267078,688.0000000000005,51 )
        this.layer2[75] = new Hitbox(4009.1875850315823,-1434.068779267078,54,346 )
        this.layer2[76] = new Hitbox(4007.854251698251,-1139.0687792670785,633.9999999999995,53 )
        this.layer2[77] = new Hitbox(4109.854251698251,-2266.068779257446,55,851.666666657103 )
        this.layer2[78] = new Hitbox(3507.5210937631564,-794.9590590267674,906.9998245866718,55.89027975969202 )
        this.layer2[79] = new Hitbox(4356.520918364909,-1121.0687792670753,58,382 )
        this.layer2[80] = new Hitbox(4598.854251698245,-1345.0687792670763,45,258 )
        this.layer2[81] = new Hitbox(4601.520918364911,-1343.4021124963565,594.6412039397565,47.99999989594744 )
        this.layer2[82] = new Hitbox(4848.1875850315755,-1309.402112600409,58.00000000000182,742.3920421102041 )
        this.layer2[83] = new Hitbox(5101.854168777087,-2042.7132446395494,42.00008292115581,736.977798705869 )
        this.layer2[84] = new Hitbox(4520.8542516982425,-1813.7354459337416,607,48.99999999999636 )
        this.layer2[85] = new Hitbox(4520.8542516982425,-2285.397743032571,45,520.6622970988255 )
        this.layer2[86] = new Hitbox(5148.8542516982425,-1337.0687792670687,45,745.7264676381003 )
        this.layer2[87] = new Hitbox(4870.8542516982425,-937.0666075497711,294,44.99782841160163 )
        this.layer2[88] = new Hitbox(5167.8542516982425,-1034.0687792670785,489,42 )
        this.layer2[89] = new Hitbox(5607.8542516982425,-1283.0687792670785,49,291 )
        this.layer2[90] = new Hitbox(5607.8542516982425,-1283.0687792670785,690.3333332789443,46 )
        this.layer2[91] = new Hitbox(5441.187585031575,-1018.0687792670785,41,266 )
        this.layer2[92] = new Hitbox(5444.187585031575,-802.0687792670785,465,49 )
        this.layer2[93] = new Hitbox(5858.187585031575,-1263.0687792670785,52,511 )
        this.layer2[94] = new Hitbox(6253.520918119446,-1608.7353531805302,44.000000245462616,365.66657391345166 )
        this.layer2[95] = new Hitbox(5117.187585031575,-1610.0687792670774,1178.6666666666715,50 )
        this.layer2[96] = new Hitbox(4849.520918364908,-596.4021126004154,345,39 )
        this.layer2[97] = new Hitbox(5839.184121292682,-2439.309659777038,69.06867236425933,846.4835939823106 )
        this.layer2[98] = new Hitbox(5186.37429853038,-2439.4519443876857,721.6812571044211,53.42002523983683 )
        this.layer2[99] = new Hitbox(5185.833333391828,-3499.5340754202402,50.18090521902832,1113.4154643182565 )
        this.layer2[100] = new Hitbox(5233.611661843993,-3226.11741656252,1565.0031535879825,114.99247396221426 )
        this.layer2[101] = new Hitbox(6711.3885816142565,-3977.2575783368857,85.69913041023756,866.6959679606011 )
        this.layer2[102] = new Hitbox(5889.093230123356,-2340.171621006258,833.2567028783633,63.089768855099464 )
        this.layer2[103] = new Hitbox(6664.561110213097,-3175.3176507792027,57.9388896397204,898.0879287020143 )
        this.layer2[104] = new Hitbox(5694.841825920634,-2875.0073782688937,987.6341929917617,58.55063556691448 )
        this.layer2[105] = new Hitbox(5692.500000157843,-3194.752782353728,56.92003631097941,378.6341712198305 )
        this.layer2[106] = new Hitbox(5691.3887516560635,-2896.1184715168997,56.777969211709205,218.5408029320506 )
        this.layer2[107] = new Hitbox(5224.843398463571,-2725.0082739331992,523.2121570919935,47.77855171096962 )
        this.layer2[108] = new Hitbox(652.8123752495014,761.2132650273221,62.689421157684706,1045.526775889643 )
        this.layer2[109] = new Hitbox(123.01328558801254,809.3706420765022,777.6513850706706,51.16721311475419 )
        this.layer2[110] = new Hitbox(900.6646706586831,809.3706420765022,53.22554890219544,875.399234123068 )
        this.layer2[111] = new Hitbox(74.95768463073999,778.9345765027319,58.71017964071858,702.2721545274553 )
        this.layer2[112] = new Hitbox(3298.6618544453913,623.0035502339322,60.39639639639654,296.14931506849325 )
        this.layer2[113] = new Hitbox(2449.337530121067,883.3131392750281,909.7207207207207,66.02054794520564 )
        this.layer2[114] = new Hitbox(3327.8735661571095,313.0237196340217,1160.7432432432483,67.8871365359862 )
        this.layer2[115] = new Hitbox(4411.233926517475,-804.1786415468857,77.38288288288277,1185.0894977168937 )
        this.layer2[116] = new Hitbox(4411.233926517475,-804.1786415468857,452.97297297297246,60.361643835616405 )
        this.layer2[117] = new Hitbox(5868,-1035,904,45 )
        this.layer2[118] = new Hitbox(6693,-1035,79,768 )
        this.layer2[119] = new Hitbox(6693,-360,621,92 )
        this.layer2[120] = new Hitbox(7214,-586,100,309 )
        this.layer2[121] = new Hitbox(7215,-588,652,68 )
        this.layer2[122] = new Hitbox(6753,-935,598,60 )
        this.layer2[123] = new Hitbox(7281,-1403,70,528 )
        this.layer2[124] = new Hitbox(6276,-1403,1019,60 )
        this.layer2[125] = new Hitbox(7309,-1168,593,64 )
        this.layer2[126] = new Hitbox(5919,-510,796,78 )
        this.layer2[127] = new Hitbox(5872,-1031,59,598 )
        this.layer2[128] = new Hitbox(5051,-571,59,566 )
        this.layer2[129] = new Hitbox(5068,-78,313,74 )
        this.layer2[130] = new Hitbox(5319,-74,64,540 )
        this.layer2[131] = new Hitbox(5350,66,496,74 )
        this.layer2[132] = new Hitbox(5778,-508,68,647 )
        this.layer2[133] = new Hitbox(5778,-508,157,77 )
        this.layer2[134] = new Hitbox(4433,-326,653,63 )
        this.layer2[135] = new Hitbox(3959,-263,474,76 )
        this.layer2[136] = new Hitbox(3960,-499,81,311 )
        this.layer2[137] = new Hitbox(3750,-499,291,74 )
        this.layer2[138] = new Hitbox(3750,-778,57,353 )
        this.layer2[139] = new Hitbox(3749,-482,68,828 )
        this.layer2[140] = new Hitbox(531,-829,615,50 )
        this.layer2[141] = new Hitbox(1070,-1037,68,251 )
        this.layer2[142] = new Hitbox(1078,-1041,611,72 )
        this.layer2[143] = new Hitbox(1643,-1044,42,469 )
        this.layer2[144] = new Hitbox(1673,-991,318,84 )
        this.layer2[145] = new Hitbox(1942,-1659,55,746 )
        
        

        
 
        

        //this.layer2[0] = new Hitbox()
    }
    

    createLayer3() {
        this.layer3[0] = new Hitbox(3006,-3604,145,815 )
        this.layer3[1] = new Hitbox(2205,-3594,147,786 )
        this.layer3[2] = new Hitbox(666,-2553 - 300,115,165 )
    }

    Draw() {
        for (let i = 0; i < this.layer2.length; i++) {
            this.layer2[i].draw((this.camera.x / 3), (this.camera.y / 3), "#7f7f7f")
        }
        for (let i = 0; i < this.layer1.length; i++) {
            this.layer1[i].draw(this.camera.x / 2, this.camera.y / 2, "#5f5f5f")  
        }
        for (let i = 0; i < this.layer3.length; i++) {
            this.layer3[i].draw(this.camera.x / 1, this.camera.y / 1, "#3f3f3f")  
        }


    }

}