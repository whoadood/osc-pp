export type Analytics = {
  name: string;
  short: string;
  latency: number;
};

/*
 {
	name: '',
	onTime: ,
	responseTime: ,
  },
*/

export const analytics: Analytics[] = [
  {
    name: "FeralAI - GP2040 Encoder",
    short: "GP2040",
    latency: 0.772,
  },
  {
    name: "Brook - Zero Pi Fighting Board",
    short: "Zero PFB",
    latency: 1.736,
  },
  {
    name: "Brook - Universal Fighting Board",
    short: "UFB",
    latency: 0.813,
  },
  {
    name: "Hori Fighting Commander Octa",
    short: "FC Octa",
    latency: 2.904,
  },
  {
    name: "Hori - Real Arcade Pro 4 Kai",
    short: "RAP4 Kai",
    latency: 4.345,
  },
  {
    name: "MadCatz - TE2+",
    short: "MC TE2+",
    latency: 3.83,
  },
  //   {
  //     name: "Amazon - Zero Delay Arcade USB Encoder",
  //     latency: 21.264,
  //   },
  //   {
  //     name: "Qanba - Obsidian",
  //     latency: 3.024,
  //   },
  //   {
  //     name: "Razer - Panthera Evo",
  //     latency: 2.296,
  //   },
  //   {
  //     name: "Microsoft - Xbox Elite Series 2 (Wired)",
  //     latency: 6.147,
  //   },
  //   {
  //     name: "Sony - DualShock 4 (Wired)",
  //     latency: 3.56,
  //   },
];

/*
	************** https://inputlag.science/controller/results ****************
  {
  	name: "Brook Universal Fighting Board PS4 Positive Edge",
   	onTime: 95,
   	responseTime: 1.0,
  },
  {
	name: 'Brook PS3/PS4 Fighting Board Positive Edge',
	onTime: 93%,
	responseTime: 1.3ms,
  },
  {
	name: 'PS360+ PS3/PS4',
	onTime: 91%,
	responseTime: 1.7ms,
  },
  {
	name: 'Brook Wireless Fighting Board PS4 Wired',
	onTime: 90%,
	responseTime: 1.8ms,
  },
  {
	name: 'Hori Fighting Commander PC',
	onTime: 85%,
	responseTime: 2.7ms,
  },
  {
	name: 'Razer Panthera PS4',
	onTime: 85%,
	responseTime: 2.7ms,
  },
  {
	name: 'SKY Q4T PS3',
	onTime: 84%,
	responseTime: 2.8ms,
  },
  {
	name: 'Sony Dual Shock 4 PS4 Bluetooth',
	onTime: 83%,
	responseTime: 3.0ms,
  },
  {
	name: 'Hori Fighting Commander PRO PC',
	onTime: 80%,
	responseTime: 3.4ms,
  },
  {
	name: 'Hori Fighting Commander PRO PS4',
	onTime: 78%,
	responseTime: 3.8ms,
  },
  {
	name: 'Brook Universal Fighting Board PS4 Negative Edge',
	onTime: 78%,
	responseTime: 3.9ms,
  },
  {
	name: 'Hori Fighting Edge PS4',
	onTime: 76%,
	responseTime: 4.2ms,
  },
  {
	name: 'Hori Real Arcade Pro V Silent PC',
	onTime: 76%,
	responseTime: 4.2ms,
  },
  {
	name: 'Hori Real Arcade Pro N PS4',
	onTime: 76%,
	responseTime: 4.2ms,
  },
  {
	name: 'Xinmotek XM-10 Dual Controller PS3/PC',
	onTime: 75%,
	responseTime: 4.2ms,
  },
  {
	name: 'Brook Wireless Fighting Board BLuetooth',
	onTime: 75%,
	responseTime: 4.3ms,
  },
  {
	name: 'Brook PS3/PS4 Fighting Board Negative Edge',
	onTime: 75%,
	responseTime: 4.3ms,
  },
  {
	name: 'Hori Real Arcade Pro V Silent PS4',
	onTime: 75%,
	responseTime: 4.3ms,
  },
  {
	name: 'Nacon Daija 2.04 Firmware',
	onTime: 74%,
	responseTime: 4.4ms,
  },
  {
	name: 'Razer Panthera PS3',
	onTime: 73%,
	responseTime: 4.4ms,
  },
  {
	name: 'Fighters Pad Guilty Gear Xrd PS4',
	onTime: 72%,
	responseTime: 4.7ms,
  },
  {
	name: 'Hori Real Arcade Pro V Silent PS3',
	onTime: 64%,
	responseTime: 6.2,
  },
  {
	name: 'Qanba Q4 Xbox360',
	onTime: 63%,
	responseTime: 6.3ms,
  },
  {
	name: 'Hori Fighting Commander PS4',
	onTime: 61%,
	responseTime: 6.6ms,
  },
  {
	name: 'Hori Fighting Commander PRO PS3',
	onTime: 55%,
	responseTime: 7.7ms,
  },
  {
	name: 'Hori Fighting Commander 4 PS4',
	onTime: 53%,
	responseTime: 8.0ms,
  },
  {
	name: 'Hori Fighting Stick V3 PS3',
	onTime: 49%,
	responseTime: 8.6MS,
  },
  {
	name: 'hORI fIGHTING sTICK 2019 PS4',
	onTime: 49%,
	responseTime: 8.7ms,
  },
  {
	name: 'Virtua Stick High Grade PS3',
	onTime: 45%,
	responseTime: 9.4ms,
  },
  {
	name: 'Hori Mini Pad PS4',
	onTime: 40%,
	responseTime: 10.2ms,
  },
  {
	name: 'Sony Dual Shock 4 PS4 Wired',
	onTime: 39%,
	responseTime: 10.3ms,
  },
  {
	name: 'Fighters Pad Guilty Gear Xrd PS3',
	onTime: 37%,
	responseTime: 10.7ms,
  },
  {
	name: 'Hori Fighting Stick Mini PS4',
	onTime: 33%,
	responseTime: 11.4ms,
  },
  {
	name: 'Toodles MC Cthulhu PS3',
	onTime: 27%,
	responseTime: 12.3ms,
  },
  {
	name: 'Hori Fighting Stick 2019 PS3',
	onTime: 25%,
	responseTime: 12.7ms,
  },
  {
	name: 'Hori Real Arcade Pro V3 SA PS3',
	onTime: 25%,
	responseTime: 12.7ms,
  },
  {
	name: 'Zero Delay USB Encoder',
	onTime: 23%,
	responseTime: 14.9ms,
  },
  {
	name: 'Hori BlazBlue CPE PS4',
	onTime: 22%,
	responseTime: 13.1ms,
  },
  {
	name: 'Xtokki360 + Sony PS1 Pad Xbox360',
	onTime: 12%,
	responseTime: 18.0ms,
  },
  {
	name: 'PS360+ Xbox360',
	onTime: 11%,
	responseTime: 18.0ms,
  },
  {
	name: 'Nacon Daija Original Firmware All modes',
	onTime: 4%,
	responseTime: 17.0ms,
  },
  {
	name: 'Hori BlazBlue CPE PS3',
	onTime: 2%,
	responseTime: 19ms,
  },
  {
	name: 'Madcatz Tournament Edition SCV PS3',
	onTime: 0%,
	responseTime: 24.2ms,
  },
  {
	name: 'Madcatz Tournament Edition S+ TTT2 PS3',
	onTime: 0%,
	responseTime: 23.9ms,
  },

*/

/* 
  {
	name: '',
	latency: 
  },

  ************** https://rpubs.com/misteraddons/inputlatency *************
  {
	name: 'Brook - Zero Pi Fighting Board',
	latency: 1.736ms,
  },
  {
	name: 'Brook - Universal Fighting Board',
	latency: .813ms,
  },
  {
	name: 'FeralAI - GP2040 Encoder',
	latency: .772ms,
  },
  {
	name: 'Hori Fighting Commander Octa',
	latency: 2.904ms,
  },
  {
	name: 'Hori - Real Arcade Pro 4 Kai',
	latency: 4.345ms,
  },
  {
	name: 'MadCatz - TE2+',
	latency: 3.83ms,
  },
  {
	name: 'Microsoft - Xbox Elite Series 2 (Wired)',
	latency: 6.147ms,
  },
  {
	name: 'Qanba - Obsidian',
	latency: 3.024ms,
  },
  {
	name: 'Razer - Panthera Evo',
	latency: 2.296ms,
  },
  {
	name: 'Amazon - Zero Delay Arcade USB Encoder',
	latency: 21.264ms,
  },
  {
	name: 'Sony - DualShock 4 (Wired)',
	latency: 3.56ms,
  },

*/
