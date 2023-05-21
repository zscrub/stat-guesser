type QuarterBack = {
    // fantasy ranking
    RANK: number
    NAME: string
    CMP: number
    PASS_ATT: number
    PCT: number
    PASS_YDS: string
    YPA: number
    PASS_TD: number
    INT: number
    SACKS: number
    RUSH_ATT: number
    RUSH_YDS: string
    RUSH_TD: number
    FUMBLES: number
    GAMES_PLAYED: number
    FPTS: number
    FPTSPG: number
    ROST: number
}

const qb_stats: Array<QuarterBack> = [];



[  
/*
1	Patrick Mahomes II (KC) 	435	648	67.1	5,250	8.1	41	12	26	61	358	4	0	17	429.4	25.3	99.9%
2	Josh Allen (BUF) 	362	573	63.2	4,316	7.5	35	14	33	126	776	7	5	17	412.4	24.3	99.9%
3	Jalen Hurts (PHI) 	306	460	66.5	3,701	8.0	22	6	38	165	760	13	2	15	384.1	25.6	99.9%
4	Joe Burrow (CIN) 	418	610	68.5	4,527	7.4	36	12	41	76	259	5	3	17	369.0	21.7	99.8%
5	Geno Smith (SEA) 	399	572	69.8	4,282	7.5	30	11	46	68	366	1	4	17	314.9	18.5	90.6%
6	Justin Fields (CHI) 	192	318	60.4	2,242	7.1	17	11	55	160	1,143	8	2	15	307.0	20.5	97.5%
7	Kirk Cousins (MIN) 	424	643	65.9	4,547	7.1	29	14	46	31	97	2	3	17	305.6	18.0	91.9%
8	Trevor Lawrence (JAC) 	387	584	66.3	4,113	7.0	25	8	27	62	291	5	9	17	303.7	17.9	95.7%
9	Daniel Jones (NYG) 	317	472	67.2	3,205	6.8	15	5	44	120	708	7	3	16	293.9	18.4	92.1%
10	Jared Goff (DET) 	382	587	65.1	4,438	7.6	29	7	23	29	73	0	4	17	291.3	17.1	72.6%
11	Justin Herbert (LAC) 	477	699	68.2	4,739	6.8	25	10	38	54	147	0	3	17	291.3	17.1	96.8%
12	Tom Brady (FA) 	490	733	66.8	4,694	6.4	25	9	22	29	-1	1	4	17	280.5	16.5	1.3%
13	Aaron Rodgers (NYJ) 	350	542	64.6	3,695	6.8	26	12	32	34	94	1	4	17	251.3	14.8	93.6%
14	Lamar Jackson (BAL) 	203	326	62.3	2,242	6.9	17	7	26	112	764	3	2	12	243.1	20.3	99.4%
15	Tua Tagovailoa (MIA) 	259	400	64.8	3,548	8.9	25	8	21	24	70	0	1	13	239.0	18.4	92.0%
16	Russell Wilson (DEN) 	292	483	60.5	3,524	7.3	16	11	55	55	277	3	2	15	237.0	15.8	84.4%
17	Derek Carr (NO) 	305	502	60.8	3,522	7.0	24	14	27	24	102	0	0	15	233.0	15.5	57.9%
18	Dak Prescott (DAL) 	261	394	66.2	2,860	7.3	23	15	20	45	182	1	1	12	213.6	17.8	93.9%
19	Kyler Murray (ARI) 	259	390	66.4	2,368	6.1	14	7	25	67	418	3	2	11	207.6	18.9	68.3%
20	Marcus Mariota (PHI) 	184	300	61.3	2,219	7.4	15	9	28	85	438	4	3	13	205.7	15.8	0.6%
21	Davis Mills (HOU) 	292	479	61.0	3,118	6.5	17	15	31	32	108	2	3	15	196.6	13.1	0.6%
22	Andy Dalton (CAR) 	252	378	66.7	2,871	7.6	18	9	25	30	54	0	1	14	183.3	13.1	0.7%
23	Mac Jones (NE) 	288	442	65.2	2,997	6.8	14	11	34	47	102	1	1	14	181.1	12.9	6.3%
24	Jacoby Brissett (WAS) 	236	369	64.0	2,608	7.1	12	6	24	49	243	2	4	14	174.7	12.5	1.0%
25	Jimmy Garoppolo (LV) 	207	308	67.2	2,437	7.9	16	4	18	23	33	2	2	11	168.7	15.3	29.9%
26	Matt Ryan (FA) 	309	461	67.0	3,057	6.6	14	13	38	27	70	1	5	12	168.3	14.0	6.1%
27	Ryan Tannehill (TEN) 	212	325	65.2	2,536	7.8	13	6	33	34	98	2	2	12	167.2	13.9	5.5%
28	Kenny Pickett (PIT) 	245	389	63.0	2,404	6.2	7	9	27	55	237	3	1	13	159.0	12.2	40.8%
29	Baker Mayfield (TB) 	201	335	60.0	2,163	6.5	10	8	36	31	89	1	2	12	129.4	10.8	3.8%
30	Taylor Heinicke (ATL) 	161	259	62.2	1,859	7.2	12	6	19	28	96	1	5	9	121.9	13.5	0.7%
31	Carson Wentz (FA) 	172	276	62.3	1,755	6.4	11	9	26	22	86	1	1	8	121.8	15.2	4.7%
32	Matthew Stafford (LAR) 	206	303	68.0	2,087	6.9	10	8	29	13	9	1	3	9	116.5	12.9	63.6%
33	Brock Purdy (SF) 	114	170	67.1	1,374	8.1	13	4	11	22	13	1	0	9	110.3	12.3	17.5%
34	Zach Wilson (NYJ) 	132	242	54.5	1,688	7.0	6	7	23	28	102	1	1	9	106.0	11.8	1.0%
35	Deshaun Watson (CLE) 	99	170	58.2	1,102	6.5	7	5	20	36	175	1	0	6	90.5	15.1	93.0%
36	Sam Darnold (SF) 	82	140	58.6	1,143	8.2	7	3	10	26	106	2	2	6	89.3	14.9	0.9%
37	Mitch Trubisky (PIT) 	117	180	65.0	1,252	7.0	4	5	11	19	38	2	0	7	79.0	11.3	0.3%
38	Mike White (MIA) 	103	175	58.9	1,192	6.8	3	4	9	6	9	1	1	4	60.6	15.2	0.9%
39	Cooper Rush (DAL) 	94	162	58.0	1,051	6.5	5	3	7	9	6	0	0	8	59.6	7.5	0.7%
40	Tyler Huntley (BAL) 	75	112	67.0	658	5.9	2	3	7	43	137	1	0	5	53.0	10.6	0.9%
41	Joe Flacco (FA) 	110	191	57.6	1,051	5.5	5	3	10	3	6	0	4	5	51.4	10.3	0.6%
42	Jameis Winston (NO) 	73	115	63.5	858	7.5	4	5	11	5	16	0	0	3	48.9	16.3	0.4%
43	Jarrett Stidham (DEN) 	53	83	63.9	656	7.9	4	3	7	14	84	0	1	3	45.7	15.2	0.6%
44	Bailey Zappe (NE) 	65	92	70.7	781	8.5	5	3	6	10	0	0	3	4	42.7	10.7	0.9%
45	P.J. Walker (CHI) 	63	106	59.4	731	6.9	3	3	7	6	39	0	0	6	42.2	7.0	0.7%
46	Teddy Bridgewater (FA) 	49	79	62.0	683	8.6	4	4	7	3	27	0	0	5	42.0	8.4	2.6%
47	Gardner Minshew II (IND) 	44	76	57.9	663	8.7	3	3	6	7	3	1	1	5	39.8	8.0	0.9%
48	Desmond Ridder (ATL) 	73	115	63.5	708	6.2	2	0	9	16	64	0	2	4	38.8	9.7	5.2%
49	Sam Ehlinger (IND) 	64	101	63.4	573	5.7	3	3	14	17	87	0	1	4	38.6	9.7	0.1%
50	Colt McCoy (ARI) 	90	132	68.2	780	5.9	1	3	13	14	36	0	0	4	35.7	8.9	0.7%
51	Joshua Dobbs (CLE) 	40	68	58.8	411	6.0	2	2	6	8	44	0	2	2	22.9	11.5	0.6%
52	Malik Willis (TEN) 	31	61	50.8	276	4.5	0	3	10	27	123	1	2	7	22.3	3.2	0.8%
53	Brett Rypien (LAR) 	53	88	60.2	483	5.5	2	4	8	6	7	0	1	4	22.0	5.5	0.1%
54	Davis Webb (FA) 	23	40	57.5	168	4.2	1	0	0	6	41	1	0	1	20.8	20.8	0.0%
55	David Blough (ARI) 	38	58	65.5	402	6.9	2	2	5	4	5	0	1	2	20.6	10.3	1.0%
56	Skylar Thompson (MIA) 	60	105	57.1	534	5.1	1	3	6	14	21	0	2	7	20.5	2.9	0.6%
57	Kyle Allen (BUF) 	46	78	59.0	416	5.3	2	4	5	6	13	0	1	3	19.9	6.6	0.2%
58	Sam Howell (WAS) 	11	19	57.9	169	8.9	1	1	3	5	35	1	0	1	19.3	19.3	5.3%
59	John Wolford (TB) 	38	62	61.3	390	6.3	1	3	7	8	32	0	1	2	17.8	8.9	0.6%
60	Bryce Perkins (FA) 	19	34	55.9	161	4.7	1	2	6	19	90	0	0	5	17.5	3.5	0.6%
61	Jeff Driskel (ARI) 	14	20	70.0	108	5.4	1	0	2	20	75	0	0	7	17.2	2.5	1.0%
62	Trace McSorley (NE) 	45	83	54.2	412	5.0	0	5	3	15	61	0	2	5	13.7	2.7	0.6%
63	Trey Lance (SF) 	15	31	48.4	194	6.3	0	1	2	16	67	0	0	3	13.5	4.5	43.7%
64	Nick Mullens (MIN) 	21	25	84.0	224	9.0	1	1	0	4	8	0	0	4	12.8	3.2	0.6%
65	Tyrod Taylor (NYG) 	6	8	75.0	58	7.3	1	1	3	5	70	0	1	3	12.3	4.1	0.3%
66	Jordan Love (GB) 	14	21	66.7	195	9.3	1	0	0	1	-1	0	0	4	11.7	2.9	49.4%
67	Trevor Siemian (CIN) 	15	26	57.7	184	7.1	1	1	2	4	8	0	0	2	11.2	5.6	0.1%
68	Nathan Peterman (CHI) 	14	25	56.0	139	5.6	1	1	1	2	7	0	0	3	9.3	3.1	0.6%
69	Chris Streveler (NYJ) 	10	15	66.7	90	6.0	0	0	0	9	54	0	0	1	9.0	9.0	0.6%
70	Chase Daniel (FA) 	8	12	66.7	52	4.3	1	0	1	1	4	0	0	3	8.5	2.8	0.0%
71	Anthony Brown (BAL) 	22	49	44.9	302	6.2	0	2	5	3	-5	0	1	2	7.5	3.8	0.1%
72	Nick Foles (FA) 	25	42	59.5	224	5.3	0	4	8	2	8	0	0	2	5.7	2.9	0.6%
73	Blaine Gabbert (KC) 	6	8	75.0	29	3.6	1	0	0	0	0	0	0	1	5.2	5.2	0.6%
74	Brian Hoyer (LV) 	5	6	83.3	37	6.2	0	0	1	0	0	0	0	1	1.5	1.5	0.6%
75	Jacob Eason (FA) 	3	5	60.0	59	11.8	0	1	0	0	0	0	0	1	1.4	1.4	0.0%
76	Kyle Trask (TB) 	3	9	33.3	23	2.6	0	0	0	0	0	0	0	1	0.9	0.9	0.8%
77	Brandon Allen (SF) 	3	3	100.0	22	7.3	0	0	1	3	-1	0	0	1	0.8	0.8	0.6%
78	Josh Johnson (FA) 	1	2	50.0	10	5.0	0	0	0	2	3	0	0	1	0.7	0.7	0.0%
79	Case Keenum (HOU) 	2	7	28.6	8	1.1	0	0	0	5	0	0	0	2	0.3	0.2	0.6%
80	Dresser Winn (LAR) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
81	Tommy DeVito (NYG) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
82	Nolan Henderson (BAL) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
83	James Blackman (MIA) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
84	Jake Fromm (WAS) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
85	Shane Buechele (KC) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
86	Kellen Mond (CLE) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.1%
87	Tim DeMorat (WAS) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
88	Ben DiNucci (DEN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.1%
89	Ian Book (PHI) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
90	Dorian Thompson-Robinson (CLE) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
91	Cephus Johnson III (MIN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
92	Sean Clifford (GB) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
93	Feleipe Franks (ATL) 	0	0	0	0	0	0	0	0	1	0	0	0	5	0.0	0.0	0.0%
94	Tanner Morgan (PIT) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
95	Stetson Bennett (LAR) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
96	Aidan O'Connell (LV) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
97	Jaren Hall (MIN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
98	Hendon Hooker (DET) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
99	Jake Haener (NO) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.1%
100	Tanner McKee (PHI) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
101	Jarrett Guarantano (DEN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
102	Davis Cheek (FA) 	0	0	0	0	0	0	0	0	0	0	0	0	1	0.0	0.0	0.0%
103	Anthony Richardson (IND) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	69.7%
104	Chris Oladokun (KC) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
105	Chase Garbers (LV) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
106	Bryce Young (CAR) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	39.7%
107	Holton Ahlers (SEA) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
108	C.J. Stroud (HOU) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	18.3%
109	Max Duggan (LAC) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
110	Clayton Tune (ARI) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
111	Will Levis (TEN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.3%
112	Malik Cunningham (NE) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
113	Nathan Rourke (JAC) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
114	Matt Corral (CAR) 	0	0	0	0	0	0	0	0	0	0	0	0	2	0.0	0.0	0.7%
115	Adrian Martinez (DET) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
116	Tyson Bagent (CHI) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
117	Ben Chappell (WAS) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
118	Adam Froman (ATL) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
119	Erik Ainge (NYJ) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
120	Hunter Cantwell (BAL) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
121	Keith Null (CAR) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
122	Brett Ratliff (TEN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
123	Brian Brohm (BUF) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
124	Mason Rudolph (PIT) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.1%
125	Logan Woodside (ATL) 	0	0	0	0	0	0	0	0	0	0	0	0	1	0.0	0.0	1.0%
126	C.J. Beathard (JAC) 	7	11	63.6	35	3.2	0	1	1	4	-4	0	0	4	0.0	0.0	0.6%
127	Easton Stick (LAC) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
128	Drew Lock (SEA) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.7%
129	Will Grier (DAL) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
130	Jake Browning (CIN) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	1.0%
131	John Lovett (MIA) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
132	Danny Etling (GB) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.6%
133	Austin Aune (ATL) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
134	Matt Barkley (BUF) 	0	0	0	0	0	0	0	0	0	0	0	0	1	0.0	0.0	0.6%
135	Brett Smith (TB) 	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0.0%
136	Nate Sudfeld (DET) 	0	0	0	0	0	0	0	1	5	-4	0	0	2	-0.4	-0.2	0.6%
137	Chad Henne (FA) 	0	2	0.0	0	0.0	0	0	0	5	-5	0	0	3	-0.5	-0.2	0.1%
138	Tim Boyle (NYJ) 	2	8	25.0	33	4.1	0	2	0	2	-2	0	0	1	-0.9	-0.9	0.0%
*/
]