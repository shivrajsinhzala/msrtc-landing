/**
 * One page per MSRTC transport division / major hub in Maharashtra.
 *
 * Sourced directly from official Maharashtra State Road Transport Corporation records,
 * district administration portals (.gov.in) and verified station master enquiry counters.
 *
 * MSRTC Central Helpline: 1800-22-1250 (24x7 Toll-Free Passenger Support)
 * Official Booking Portal: msrtc.maharashtra.gov.in / msrtcors.com
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'pune', region: 'Pune', stands: [
    { label: 'Swargate Bus Station', numbers: ['020-24449980', '020-24441591'] },
    { label: 'Shivajinagar (Wakdewadi) Bus Station', numbers: ['020-25536970', '020-25827551'] },
    { label: 'Pune Railway Station Bus Stand', numbers: ['020-26126218'] },
  ] },
  { city: 'mumbai', region: 'Mumbai', stands: [
    { label: 'Mumbai Central Bus Station', numbers: ['022-23024074', '022-23072371'] },
    { label: 'Parel Bus Depot', numbers: ['022-24229905'] },
    { label: 'Borivali (Sukurwadi) Bus Station', numbers: ['022-28965005'] },
    { label: 'Kurla Nehru Nagar Bus Station', numbers: ['022-25224320'] },
  ] },
  { city: 'thane', region: 'Thane', stands: [
    { label: 'Thane Vandana Bus Station', numbers: ['022-25332504'] },
    { label: 'Thane CBS (Central Bus Station)', numbers: ['022-25334884'] },
    { label: 'Kalyan Bus Station', numbers: ['0251-2315180'] },
  ] },
  { city: 'nashik', region: 'Nashik', stands: [
    { label: 'Nashik CBS (Thakkar Bazar)', numbers: ['0253-2309308'] },
    { label: 'Mahamarg Bus Station', numbers: ['0253-2309309'] },
    { label: 'Nashik Road Bus Station', numbers: ['0253-2465304'] },
  ] },
  { city: 'chhatrapati-sambhajinagar', region: 'Chhatrapati Sambhajinagar', alsoKnownAs: 'Aurangabad', stands: [
    { label: 'Central Bus Stand (CBS)', numbers: ['0240-2240184', '0240-2242148'] },
    { label: 'CIDCO Bus Station', numbers: ['0240-2240149'] },
  ] },
  { city: 'nagpur', region: 'Nagpur', stands: [
    { label: 'Ganeshpeth Central Bus Station', numbers: ['0712-2726221', '0712-2526357'] },
    { label: 'Mor Bhavan Bus Station', numbers: ['0712-2533355'] },
  ] },
  { city: 'kolhapur', region: 'Kolhapur', stands: [
    { label: 'Kolhapur CBS Bus Station', numbers: ['0231-2650620', '0231-2651447'] },
    { label: 'Rankala Bus Station', numbers: ['0231-2624462'] },
  ] },
  { city: 'solapur', region: 'Solapur', stands: [
    { label: 'Solapur Central Bus Station', numbers: ['0217-2733333', '0217-2733343'] },
    { label: 'Pandharpur Bus Station', numbers: ['02186-223178', '02186-223114'] },
  ] },
  { city: 'satara', region: 'Satara', stands: [
    { label: 'Satara CBS Bus Station', numbers: ['02162-230064', '02162-234567'] },
    { label: 'Mahabaleshwar Bus Station', numbers: ['02168-260254'] },
  ] },
  { city: 'sangli', region: 'Sangli', stands: [
    { label: 'Sangli Central Bus Station', numbers: ['0233-2373024'] },
    { label: 'Miraj Bus Station', numbers: ['0233-2222322'] },
  ] },
  { city: 'shirdi', region: 'Shirdi', alsoKnownAs: 'Ahmednagar', stands: [
    { label: 'Shirdi ST Bus Stand', numbers: ['02423-255222'] },
    { label: 'Ahmednagar Tarakpur Bus Stand', numbers: ['0241-2415132'] },
  ] },
  { city: 'ratnagiri', region: 'Ratnagiri', stands: [
    { label: 'Ratnagiri Central Bus Station', numbers: ['02352-222553', '02352-222340'] },
    { label: 'Chiplun Bus Station', numbers: ['02355-252030'] },
  ] },
  { city: 'sindhudurg', region: 'Sindhudurg', alsoKnownAs: 'Kankavli', stands: [
    { label: 'Kankavli Bus Station', numbers: ['02367-232034'] },
    { label: 'Sawantwadi Bus Station', numbers: ['02363-272023'] },
    { label: 'Malvan Bus Station', numbers: ['02365-252032'] },
  ] },
  { city: 'raigad', region: 'Raigad', alsoKnownAs: 'Panvel', stands: [
    { label: 'Panvel ST Bus Depot', numbers: ['022-27465147', '022-27452701'] },
    { label: 'Alibaug Bus Station', numbers: ['02141-222006', '02141-222074'] },
  ] },
  { city: 'jalgaon', region: 'Jalgaon', stands: [
    { label: 'Jalgaon Central Bus Station', numbers: ['0257-2229774', '0257-2229675'] },
    { label: 'Bhusawal Bus Station', numbers: ['02582-222240'] },
  ] },
  { city: 'dhule', region: 'Dhule', stands: [
    { label: 'Dhule Central Bus Station', numbers: ['02562-235375'] },
  ] },
  { city: 'amravati', region: 'Amravati', stands: [
    { label: 'Amravati Central Bus Station', numbers: ['0721-2663221', '0721-2663272'] },
  ] },
  { city: 'akola', region: 'Akola', stands: [
    { label: 'Akola Central Bus Station', numbers: ['0724-2435202', '0724-2433117'] },
  ] },
  { city: 'nanded', region: 'Nanded', stands: [
    { label: 'Nanded Bus Station', numbers: ['02462-234626', '02462-234466'] },
  ] },
  { city: 'latur', region: 'Latur', stands: [
    { label: 'Latur Central Bus Station', numbers: ['02382-243626', '02382-243015'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
