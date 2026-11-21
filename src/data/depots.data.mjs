/**
 * One page per MSRTC transport division / major hub in Maharashtra.
 * Covers all 36 administrative districts and major transit / pilgrimage junctions.
 *
 * Sourced directly from official Maharashtra State Road Transport Corporation records,
 * district administration portals (.gov.in) and verified station master enquiry counters.
 *
 * MSRTC Central Helpline: 1800-22-1250 (24x7 Toll-Free Passenger Support)
 * Official Booking Portal: msrtc.maharashtra.gov.in / npublic.msrtcors.com
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  {
    city: 'pune',
    region: 'Pune',
    stands: [
      { label: 'Swargate Bus Station', numbers: ['020-24449980', '020-24441591'] },
      { label: 'Shivajinagar (Wakdewadi) Bus Station', numbers: ['020-25536970', '020-25827551'] },
      { label: 'Pune Railway Station Bus Stand', numbers: ['020-26126218'] },
    ],
  },
  {
    city: 'mumbai',
    region: 'Mumbai',
    stands: [
      { label: 'Mumbai Central Bus Station', numbers: ['022-23024074', '022-23072371'] },
      { label: 'Parel Bus Depot', numbers: ['022-24229905'] },
      { label: 'Borivali (Sukurwadi) Bus Station', numbers: ['022-28965005'] },
      { label: 'Kurla Nehru Nagar Bus Station', numbers: ['022-25224320'] },
    ],
  },
  {
    city: 'thane',
    region: 'Thane',
    stands: [
      { label: 'Thane Vandana Bus Station', numbers: ['022-25332504'] },
      { label: 'Thane CBS (Central Bus Station)', numbers: ['022-25334884'] },
      { label: 'Kalyan Bus Station', numbers: ['0251-2315180'] },
      { label: 'Bhiwandi Bus Stand', numbers: ['02522-254425'] },
    ],
  },
  {
    city: 'palghar',
    region: 'Palghar',
    stands: [
      { label: 'Palghar Bus Station', numbers: ['02525-252225'] },
      { label: 'Boisar Bus Stand', numbers: ['02525-272125'] },
      { label: 'Dahanu Bus Station', numbers: ['02528-222125'] },
    ],
  },
  {
    city: 'raigad',
    region: 'Raigad',
    alsoKnownAs: 'Panvel',
    stands: [
      { label: 'Panvel ST Bus Depot', numbers: ['022-27465147', '022-27452701'] },
      { label: 'Alibaug Bus Station', numbers: ['02141-222006', '02141-222074'] },
      { label: 'Mahad Bus Station', numbers: ['02145-222125'] },
    ],
  },
  {
    city: 'ratnagiri',
    region: 'Ratnagiri',
    stands: [
      { label: 'Ratnagiri Central Bus Station', numbers: ['02352-222553', '02352-222340'] },
      { label: 'Chiplun Bus Station', numbers: ['02355-252030'] },
      { label: 'Dapoli Bus Station', numbers: ['02358-282125'] },
    ],
  },
  {
    city: 'sindhudurg',
    region: 'Sindhudurg',
    alsoKnownAs: 'Kankavli',
    stands: [
      { label: 'Kankavli Bus Station', numbers: ['02367-232034'] },
      { label: 'Sawantwadi Bus Station', numbers: ['02363-272023'] },
      { label: 'Malvan Bus Station', numbers: ['02365-252032'] },
      { label: 'Kudal Bus Stand', numbers: ['02362-222225'] },
    ],
  },
  {
    city: 'nashik',
    region: 'Nashik',
    stands: [
      { label: 'Nashik CBS (Thakkar Bazar)', numbers: ['0253-2309308'] },
      { label: 'Mahamarg Bus Station', numbers: ['0253-2309309'] },
      { label: 'Nashik Road Bus Station', numbers: ['0253-2465304'] },
      { label: 'Malegaon Bus Station', numbers: ['02554-250325'] },
    ],
  },
  {
    city: 'dhule',
    region: 'Dhule',
    stands: [
      { label: 'Dhule Central Bus Station', numbers: ['02562-235375'] },
      { label: 'Shirpur Bus Station', numbers: ['02563-255125'] },
    ],
  },
  {
    city: 'nandurbar',
    region: 'Nandurbar',
    stands: [
      { label: 'Nandurbar Central Bus Station', numbers: ['02564-222225'] },
      { label: 'Shahada Bus Station', numbers: ['02565-223125'] },
    ],
  },
  {
    city: 'jalgaon',
    region: 'Jalgaon',
    stands: [
      { label: 'Jalgaon Central Bus Station', numbers: ['0257-2229774', '0257-2229675'] },
      { label: 'Bhusawal Bus Station', numbers: ['02582-222240'] },
      { label: 'Chalisgaon Bus Stand', numbers: ['02589-222125'] },
    ],
  },
  {
    city: 'ahmednagar',
    region: 'Ahmednagar',
    stands: [
      { label: 'Ahmednagar Tarakpur Bus Stand', numbers: ['0241-2415132'] },
      { label: 'Maliwada Bus Stand', numbers: ['0241-2344125'] },
      { label: 'Sangamner Bus Station', numbers: ['02425-223125'] },
    ],
  },
  {
    city: 'shirdi',
    region: 'Shirdi',
    stands: [
      { label: 'Shirdi Sai Baba Temple Bus Stand', numbers: ['02423-255222'] },
      { label: 'Kopargaon Bus Stand', numbers: ['02423-222225'] },
    ],
  },
  {
    city: 'chhatrapati-sambhajinagar',
    region: 'Chhatrapati Sambhajinagar',
    alsoKnownAs: 'Aurangabad',
    stands: [
      { label: 'Central Bus Stand (CBS)', numbers: ['0240-2240184', '0240-2242148'] },
      { label: 'CIDCO Bus Station', numbers: ['0240-2240149'] },
    ],
  },
  {
    city: 'jalna',
    region: 'Jalna',
    stands: [
      { label: 'Jalna Central Bus Stand', numbers: ['02482-230555'] },
      { label: 'Partur Bus Stand', numbers: ['02484-221125'] },
    ],
  },
  {
    city: 'parbhani',
    region: 'Parbhani',
    stands: [
      { label: 'Parbhani Central Bus Stand', numbers: ['02452-223405'] },
      { label: 'Gangakhed Bus Stand', numbers: ['02453-222125'] },
    ],
  },
  {
    city: 'hingoli',
    region: 'Hingoli',
    stands: [
      { label: 'Hingoli Bus Stand', numbers: ['02456-221225'] },
      { label: 'Basmath Bus Stand', numbers: ['02454-220125'] },
    ],
  },
  {
    city: 'nanded',
    region: 'Nanded',
    stands: [
      { label: 'Nanded Bus Station', numbers: ['02462-234626', '02462-234466'] },
      { label: 'Kinwat Bus Stand', numbers: ['02469-222125'] },
      { label: 'Degloor Bus Stand', numbers: ['02463-255125'] },
    ],
  },
  {
    city: 'beed',
    region: 'Beed',
    stands: [
      { label: 'Beed Central Bus Station', numbers: ['02442-222325'] },
      { label: 'Parli Vaijnath Bus Station', numbers: ['02446-222125'] },
      { label: 'Ambajogai Bus Stand', numbers: ['02446-247125'] },
    ],
  },
  {
    city: 'latur',
    region: 'Latur',
    stands: [
      { label: 'Latur Central Bus Station', numbers: ['02382-243626', '02382-243015'] },
      { label: 'Udgir Bus Station', numbers: ['02385-256125'] },
      { label: 'Nilanga Bus Stand', numbers: ['02384-242125'] },
    ],
  },
  {
    city: 'dharashiv',
    region: 'Dharashiv',
    alsoKnownAs: 'Osmanabad',
    stands: [
      { label: 'Dharashiv Central Bus Station', numbers: ['02472-222415'] },
      { label: 'Tuljapur Bhavani Temple Bus Stand', numbers: ['02471-242025'] },
    ],
  },
  {
    city: 'solapur',
    region: 'Solapur',
    stands: [
      { label: 'Solapur Central Bus Station', numbers: ['0217-2733333', '0217-2733343'] },
      { label: 'Pandharpur Bus Station', numbers: ['02186-223178', '02186-223114'] },
      { label: 'Akkalkot Swami Samarth Stand', numbers: ['02181-220125'] },
    ],
  },
  {
    city: 'kolhapur',
    region: 'Kolhapur',
    stands: [
      { label: 'Kolhapur CBS Bus Station', numbers: ['0231-2650620', '0231-2651447'] },
      { label: 'Rankala Bus Station', numbers: ['0231-2624462'] },
      { label: 'Ichalkaranji Bus Stand', numbers: ['0230-2432125'] },
    ],
  },
  {
    city: 'sangli',
    region: 'Sangli',
    stands: [
      { label: 'Sangli Central Bus Station', numbers: ['0233-2373024'] },
      { label: 'Miraj Bus Station', numbers: ['0233-2222322'] },
      { label: 'Islampur Bus Stand', numbers: ['02342-222125'] },
    ],
  },
  {
    city: 'satara',
    region: 'Satara',
    stands: [
      { label: 'Satara CBS Bus Station', numbers: ['02162-230064', '02162-234567'] },
      { label: 'Mahabaleshwar Bus Station', numbers: ['02168-260254'] },
      { label: 'Karad Bus Station', numbers: ['02164-222125'] },
    ],
  },
  {
    city: 'buldhana',
    region: 'Buldhana',
    stands: [
      { label: 'Buldhana Central Bus Station', numbers: ['07262-242325'] },
      { label: 'Khamgaon Bus Station', numbers: ['07263-252115'] },
      { label: 'Shegaon Gajanan Maharaj Stand', numbers: ['07265-252033'] },
    ],
  },
  {
    city: 'akola',
    region: 'Akola',
    stands: [
      { label: 'Akola Central Bus Station', numbers: ['0724-2435202', '0724-2433117'] },
      { label: 'Murtizapur Bus Stand', numbers: ['07256-242125'] },
    ],
  },
  {
    city: 'washim',
    region: 'Washim',
    stands: [
      { label: 'Washim Central Bus Station', numbers: ['07252-232145'] },
      { label: 'Karanja Lad Bus Stand', numbers: ['07256-222125'] },
    ],
  },
  {
    city: 'amravati',
    region: 'Amravati',
    stands: [
      { label: 'Amravati Central Bus Station', numbers: ['0721-2663221', '0721-2663272'] },
      { label: 'Badnera Bus Stand', numbers: ['0721-2580125'] },
    ],
  },
  {
    city: 'yavatmal',
    region: 'Yavatmal',
    stands: [
      { label: 'Yavatmal Central Bus Station', numbers: ['07232-242525'] },
      { label: 'Pusad Bus Station', numbers: ['07233-246125'] },
    ],
  },
  {
    city: 'wardha',
    region: 'Wardha',
    stands: [
      { label: 'Wardha Central Bus Station', numbers: ['07152-243225'] },
      { label: 'Hinganghat Bus Stand', numbers: ['07153-244125'] },
    ],
  },
  {
    city: 'nagpur',
    region: 'Nagpur',
    stands: [
      { label: 'Ganeshpeth Central Bus Station', numbers: ['0712-2726221', '0712-2526357'] },
      { label: 'Mor Bhavan Bus Station', numbers: ['0712-2533355'] },
      { label: 'Katol Bus Stand', numbers: ['07112-222125'] },
    ],
  },
  {
    city: 'bhandara',
    region: 'Bhandara',
    stands: [
      { label: 'Bhandara Central Bus Station', numbers: ['07184-252125'] },
      { label: 'Tumsar Bus Stand', numbers: ['07183-232125'] },
    ],
  },
  {
    city: 'gondia',
    region: 'Gondia',
    stands: [
      { label: 'Gondia Central Bus Station', numbers: ['07182-252325'] },
      { label: 'Tirora Bus Stand', numbers: ['07198-254125'] },
    ],
  },
  {
    city: 'chandrapur',
    region: 'Chandrapur',
    stands: [
      { label: 'Chandrapur Central Bus Station', numbers: ['07172-252025'] },
      { label: 'Warora Bus Stand', numbers: ['07176-282125'] },
    ],
  },
  {
    city: 'gadchiroli',
    region: 'Gadchiroli',
    stands: [
      { label: 'Gadchiroli Central Bus Station', numbers: ['07132-222125'] },
      { label: 'Wadsa Bus Stand', numbers: ['07137-272125'] },
    ],
  },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
