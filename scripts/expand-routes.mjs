import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES as existingRoutes } from '../src/data/routes.data.mjs';
import { DEPOTS, depotSlug } from '../src/data/depots.data.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

// Helper to find a depot's primary stand and phone
const depotMap = new Map();
DEPOTS.forEach((d) => {
  depotMap.set(d.city.toLowerCase(), d);
  if (d.region) depotMap.set(d.region.toLowerCase(), d);
  if (d.alsoKnownAs) depotMap.set(d.alsoKnownAs.toLowerCase(), d);
});

function getDepotDetails(city) {
  const clean = city.toLowerCase().trim();
  const d = depotMap.get(clean) || depotMap.get(clean.replace(/\s+/g, '-'));
  if (d) {
    return {
      depotSlug: depotSlug(d.city),
      standName: d.stands[0].label,
      standPhone: d.stands[0].numbers[0],
    };
  }
  // Fallback for special stations like Goa
  if (clean.includes('goa')) {
    return {
      depotSlug: 'sindhudurg-bus-station-contact-number',
      standName: 'Panaji KTC Bus Stand / Kadamba',
      standPhone: '0832-2438034',
    };
  }
  if (clean.includes('trimbak')) {
    return {
      depotSlug: 'nashik-bus-station-contact-number',
      standName: 'Trimbakeshwar Temple Bus Stand',
      standPhone: '0253-2309308',
    };
  }
  return {
    depotSlug: 'pune-bus-station-contact-number',
    standName: `${city} Bus Station`,
    standPhone: '1800-22-1250',
  };
}

const NEW_CORRIDORS = [
  // Pilgrimage Corridors
  {
    orig: 'Pune', dest: 'Pandharpur', dist: 210, dur: '4.5 hrs', hwy: 'NH-65 & Solapur-Pune Hwy',
    freq: 'Every 30 mins', first: '05:00 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹245' }, { type: 'Hirkani Asiad', price: '₹330' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Direct Pandharpur Vitthal Temple service', 'Frequent departures from Swargate', 'Pilgrimage special express']
  },
  {
    orig: 'Pandharpur', dest: 'Pune', dist: 210, dur: '4.5 hrs', hwy: 'NH-65 & Solapur-Pune Hwy',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹245' }, { type: 'Hirkani Asiad', price: '₹330' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Direct return service to Swargate', 'Evening express buses', 'Fast connectivity via Indapur']
  },
  {
    orig: 'Mumbai', dest: 'Pandharpur', dist: 360, dur: '7.5 hrs', hwy: 'Expressway & NH-65',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹420' }, { type: 'Hirkani Asiad', price: '₹550' }, { type: 'AC Shivshahi', price: '₹680' }],
    hl: ['Overnight sleeper & semi-luxury buses', 'Departures from Dadar and Parel', 'Direct pilgrimage route']
  },
  {
    orig: 'Pandharpur', dest: 'Mumbai', dist: 360, dur: '7.5 hrs', hwy: 'NH-65 & Expressway',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹420' }, { type: 'Hirkani Asiad', price: '₹550' }, { type: 'AC Shivshahi', price: '₹680' }],
    hl: ['Direct service to Dadar and Mumbai Central', 'Overnight comfort options', 'Daily express runs']
  },
  {
    orig: 'Pune', dest: 'Tuljapur', dist: 295, dur: '6 hrs', hwy: 'NH-65 via Solapur',
    freq: 'Every 45 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹340' }, { type: 'AC Shivshahi', price: '₹480' }],
    hl: ['Tuljapur Bhavani Temple direct express', 'Swargate platform departures', 'Overnight AC buses']
  },
  {
    orig: 'Tuljapur', dest: 'Pune', dist: 295, dur: '6 hrs', hwy: 'NH-65 via Solapur',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹340' }, { type: 'AC Shivshahi', price: '₹480' }],
    hl: ['Convenient return departures after Darshan', 'Direct Pune Swargate buses', 'Comfortable AC seating']
  },
  {
    orig: 'Solapur', dest: 'Tuljapur', dist: 45, dur: '1 hr', hwy: 'Solapur-Tuljapur Hwy',
    freq: 'Every 15–20 mins', first: '05:00 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹55' }, { type: 'AC Shivshahi', price: '₹80' }],
    hl: ['High-frequency pilgrim shuttle', 'Non-stop corridor', '24x7 local connectivity']
  },
  {
    orig: 'Tuljapur', dest: 'Solapur', dist: 45, dur: '1 hr', hwy: 'Tuljapur-Solapur Hwy',
    freq: 'Every 15–20 mins', first: '05:30 AM', last: '11:45 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹55' }, { type: 'AC Shivshahi', price: '₹80' }],
    hl: ['Quick transfer to Solapur Railway Station', 'Every 15 mins frequency', 'Low government fares']
  },
  {
    orig: 'Pune', dest: 'Akkalkot', dist: 285, dur: '6 hrs', hwy: 'NH-65 via Solapur',
    freq: 'Hourly departures', first: '05:45 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹330' }, { type: 'AC Shivshahi', price: '₹470' }],
    hl: ['Swami Samarth Maharaj Temple route', 'Direct bus from Swargate', 'Day and night schedules']
  },
  {
    orig: 'Akkalkot', dest: 'Pune', dist: 285, dur: '6 hrs', hwy: 'NH-65 via Solapur',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹330' }, { type: 'AC Shivshahi', price: '₹470' }],
    hl: ['Direct return to Pune Swargate', 'Comfortable morning departures', 'Reliable ST operations']
  },
  {
    orig: 'Solapur', dest: 'Akkalkot', dist: 38, dur: '50 mins', hwy: 'Solapur-Akkalkot Road',
    freq: 'Every 15 mins', first: '05:00 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹50' }],
    hl: ['High-frequency local connection', 'Buses every 15 minutes', 'Direct to temple entrance']
  },
  {
    orig: 'Akkalkot', dest: 'Solapur', dist: 38, dur: '50 mins', hwy: 'Akkalkot-Solapur Road',
    freq: 'Every 15 mins', first: '05:30 AM', last: '11:15 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹50' }],
    hl: ['Fast return to Solapur CBS', 'Connecting to all express trains', 'Affordable transit']
  },
  {
    orig: 'Pune', dest: 'Shegaon', dist: 440, dur: '9 hrs', hwy: 'via Ahmednagar & Jalna',
    freq: 'Daily 6 departures', first: '06:30 AM', last: '09:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹510' }, { type: 'AC Shivshahi', price: '₹720' }],
    hl: ['Shri Sant Gajanan Maharaj Temple direct service', 'Overnight Shivshahi sleeper option', 'Direct Vidarbha connection']
  },
  {
    orig: 'Shegaon', dest: 'Pune', dist: 440, dur: '9 hrs', hwy: 'via Jalna & Ahmednagar',
    freq: 'Daily 6 departures', first: '07:00 AM', last: '09:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹510' }, { type: 'AC Shivshahi', price: '₹720' }],
    hl: ['Comfortable return service to Pune', 'Night express buses', 'Reliable temple transport']
  },
  {
    orig: 'Mumbai', dest: 'Shegaon', dist: 530, dur: '10.5 hrs', hwy: 'Samruddhi Mahamarg',
    freq: 'Daily 4 departures', first: '07:00 AM', last: '08:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹610' }, { type: 'AC Shivshahi', price: '₹860' }],
    hl: ['High-speed transit via Samruddhi Expressway', 'Dadar and Kurla departures', 'Overnight luxury travel']
  },
  {
    orig: 'Shegaon', dest: 'Mumbai', dist: 530, dur: '10.5 hrs', hwy: 'Samruddhi Mahamarg',
    freq: 'Daily 4 departures', first: '07:30 AM', last: '08:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹610' }, { type: 'AC Shivshahi', price: '₹860' }],
    hl: ['Direct return to Mumbai Central and Dadar', 'Samruddhi expressway route', 'Smooth travel']
  },
  {
    orig: 'Nashik', dest: 'Trimbakeshwar', dist: 28, dur: '45 mins', hwy: 'Nashik-Trimbak Road',
    freq: 'Every 15 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹35' }],
    hl: ['Trimbakeshwar Jyotirlinga shuttle', 'Departures from CBS Thakkar Bazar', 'Continuous 15-min frequency']
  },
  {
    orig: 'Trimbakeshwar', dest: 'Nashik', dist: 28, dur: '45 mins', hwy: 'Trimbak-Nashik Road',
    freq: 'Every 15 mins', first: '06:00 AM', last: '11:15 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹35' }],
    hl: ['Frequent return buses to Nashik CBS and Railway Station', 'Every 15 minutes', 'Affordable fares']
  },

  // Major Trunk Corridors
  {
    orig: 'Pune', dest: 'Jalgaon', dist: 420, dur: '8.5 hrs', hwy: 'via Ahmednagar & Aurangabad',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹490' }, { type: 'AC Shivshahi', price: '₹690' }],
    hl: ['Khandesh-Pune trunk corridor', 'Shivajinagar platform departures', 'Overnight sleeper coaches']
  },
  {
    orig: 'Jalgaon', dest: 'Pune', dist: 420, dur: '8.5 hrs', hwy: 'via Aurangabad & Ahmednagar',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹490' }, { type: 'AC Shivshahi', price: '₹690' }],
    hl: ['Direct Khandesh to Western Maharashtra express', 'Daily night services', 'Frequent ordinary & AC buses']
  },
  {
    orig: 'Pune', dest: 'Dhule', dist: 340, dur: '7 hrs', hwy: 'via Nashik & Malegaon (NH-60 & NH-52)',
    freq: 'Every 30–45 mins', first: '05:45 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹395' }, { type: 'AC Shivshahi', price: '₹560' }],
    hl: ['Major North Maharashtra trunk line', 'Shivajinagar Wakdewadi departures', 'Fast connection via Sangamner']
  },
  {
    orig: 'Dhule', dest: 'Pune', dist: 340, dur: '7 hrs', hwy: 'via Malegaon & Nashik',
    freq: 'Every 30–45 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹395' }, { type: 'AC Shivshahi', price: '₹560' }],
    hl: ['Direct Dhule CBS departures to Pune', 'Overnight express buses', 'Reliable connectivity']
  },
  {
    orig: 'Pune', dest: 'Nanded', dist: 440, dur: '9 hrs', hwy: 'via Latur / Ahmednagar',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹520' }, { type: 'AC Shivshahi', price: '₹730' }],
    hl: ['Hazur Sahib Nanded Sikh pilgrimage connection', 'Overnight sleeper available', 'Departures from Swargate']
  },
  {
    orig: 'Nanded', dest: 'Pune', dist: 440, dur: '9 hrs', hwy: 'via Latur / Ahmednagar',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹520' }, { type: 'AC Shivshahi', price: '₹730' }],
    hl: ['Direct Marathwada to Pune connection', 'Evening sleeper & AC Shivshahi', 'Daily schedules']
  },
  {
    orig: 'Pune', dest: 'Latur', dist: 320, dur: '6.5 hrs', hwy: 'via Solapur & Barshi',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹375' }, { type: 'AC Shivshahi', price: '₹530' }],
    hl: ['High-demand student and commercial route', 'Swargate and Hadapsar stops', 'Hourly express runs']
  },
  {
    orig: 'Latur', dest: 'Pune', dist: 320, dur: '6.5 hrs', hwy: 'via Barshi & Solapur',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹375' }, { type: 'AC Shivshahi', price: '₹530' }],
    hl: ['Direct Latur CBS to Pune Swargate', 'Day and night buses', 'Frequent Parivartan & Shivshahi']
  },
  {
    orig: 'Pune', dest: 'Baramati', dist: 100, dur: '2.5 hrs', hwy: 'via Hadapsar & Saswad',
    freq: 'Every 20 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹120' }, { type: 'Hirkani Asiad', price: '₹165' }],
    hl: ['High-frequency suburban express', 'Swargate departures every 20 minutes', 'Key agricultural & education hub']
  },
  {
    orig: 'Baramati', dest: 'Pune', dist: 100, dur: '2.5 hrs', hwy: 'via Saswad & Hadapsar',
    freq: 'Every 20 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹120' }, { type: 'Hirkani Asiad', price: '₹165' }],
    hl: ['Fast commuter route into Pune city', 'Stops at Hadapsar Gadital and Swargate', 'Continuous frequency']
  },
  {
    orig: 'Pune', dest: 'Ahmednagar', dist: 122, dur: '2.5 hrs', hwy: 'SH-27 Pune-Nagar Hwy',
    freq: 'Every 15 mins', first: '05:00 AM', last: '11:45 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹140' }, { type: 'AC Shivshahi', price: '₹195' }],
    hl: ['One of Maharashtra highest frequency corridors', 'Shivajinagar departures every 15 mins', 'Direct connectivity']
  },
  {
    orig: 'Ahmednagar', dest: 'Pune', dist: 122, dur: '2.5 hrs', hwy: 'SH-27 Nagar-Pune Hwy',
    freq: 'Every 15 mins', first: '05:00 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹140' }, { type: 'AC Shivshahi', price: '₹195' }],
    hl: ['Tarakpur and Maliwada departures', 'Round-the-clock service', 'Fast 2.5-hour transit']
  },
  {
    orig: 'Pune', dest: 'Beed', dist: 250, dur: '5.5 hrs', hwy: 'via Ahmednagar (NH-61)',
    freq: 'Every 30–45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Marathwada heartland route', 'Direct bus from Shivajinagar', 'Day and night express departures']
  },
  {
    orig: 'Beed', dest: 'Pune', dist: 250, dur: '5.5 hrs', hwy: 'via Ahmednagar (NH-61)',
    freq: 'Every 30–45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Direct Beed CBS to Pune service', 'Morning and evening express buses', 'Reliable government transit']
  },
  {
    orig: 'Pune', dest: 'Dharashiv', dist: 260, dur: '5.5 hrs', hwy: 'via Solapur & Barshi',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹305' }, { type: 'AC Shivshahi', price: '₹430' }],
    hl: ['Direct connection to Dharashiv (Osmanabad)', 'Swargate platform departures', 'Overnight buses available']
  },
  {
    orig: 'Dharashiv', dest: 'Pune', dist: 260, dur: '5.5 hrs', hwy: 'via Barshi & Solapur',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹305' }, { type: 'AC Shivshahi', price: '₹430' }],
    hl: ['Direct Dharashiv CBS to Pune Swargate', 'Connecting Marathwada to IT capital', 'Reliable schedules']
  },
  {
    orig: 'Pune', dest: 'Amravati', dist: 590, dur: '11.5 hrs', hwy: 'via Ahmednagar & Jalna',
    freq: 'Daily 8 departures', first: '06:00 AM', last: '09:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹680' }, { type: 'AC Shivshahi', price: '₹970' }],
    hl: ['Major Vidarbha-Western Maharashtra express', 'Overnight sleeper and seater coaches', 'Direct service']
  },
  {
    orig: 'Amravati', dest: 'Pune', dist: 590, dur: '11.5 hrs', hwy: 'via Jalna & Ahmednagar',
    freq: 'Daily 8 departures', first: '06:30 AM', last: '08:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹680' }, { type: 'AC Shivshahi', price: '₹970' }],
    hl: ['Direct Amravati CBS departures', 'Overnight comfort buses', 'Safe government highway transit']
  },
  {
    orig: 'Pune', dest: 'Akola', dist: 500, dur: '10 hrs', hwy: 'via Ahmednagar & Mehkar',
    freq: 'Daily 10 departures', first: '06:00 AM', last: '09:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹580' }, { type: 'AC Shivshahi', price: '₹820' }],
    hl: ['Trunk Vidarbha connection', 'Departures from Shivajinagar', 'Overnight AC and ordinary options']
  },
  {
    orig: 'Akola', dest: 'Pune', dist: 500, dur: '10 hrs', hwy: 'via Mehkar & Ahmednagar',
    freq: 'Daily 10 departures', first: '06:30 AM', last: '09:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹580' }, { type: 'AC Shivshahi', price: '₹820' }],
    hl: ['Direct Akola Central to Pune', 'Night express service', 'Affordable fares']
  },
  {
    orig: 'Pune', dest: 'Chandrapur', dist: 720, dur: '14 hrs', hwy: 'via Solapur & Yavatmal',
    freq: 'Daily 4 departures', first: '04:00 PM', last: '08:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹830' }, { type: 'AC Shivshahi', price: '₹1180' }],
    hl: ['Long-distance Vidarbha trunk route', 'Overnight sleeper buses', 'Direct coal city connectivity']
  },
  {
    orig: 'Chandrapur', dest: 'Pune', dist: 720, dur: '14 hrs', hwy: 'via Yavatmal & Solapur',
    freq: 'Daily 4 departures', first: '03:30 PM', last: '07:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹830' }, { type: 'AC Shivshahi', price: '₹1180' }],
    hl: ['Direct Chandrapur to Pune Swargate', 'Overnight long-haul express', 'Comfortable AC sleeper options']
  },

  // Mumbai & MMR Corridors
  {
    orig: 'Mumbai', dest: 'Jalgaon', dist: 420, dur: '8.5 hrs', hwy: 'via Kasara & Nashik (NH-53)',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹485' }, { type: 'AC Shivshahi', price: '₹680' }],
    hl: ['Major Khandesh link', 'Departures from Mumbai Central and Parel', 'Day and night express coaches']
  },
  {
    orig: 'Jalgaon', dest: 'Mumbai', dist: 420, dur: '8.5 hrs', hwy: 'via Dhule & Nashik',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹485' }, { type: 'AC Shivshahi', price: '₹680' }],
    hl: ['Direct Jalgaon CBS to Mumbai Central and Dadar', 'Night sleeper services', 'Reliable ST operations']
  },
  {
    orig: 'Mumbai', dest: 'Dhule', dist: 330, dur: '7 hrs', hwy: 'via Nashik & Malegaon (NH-52)',
    freq: 'Every 30–45 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹385' }, { type: 'AC Shivshahi', price: '₹540' }],
    hl: ['Trunk North Maharashtra route', 'Mumbai Central and Dadar departures', 'Frequent ordinary and AC buses']
  },
  {
    orig: 'Dhule', dest: 'Mumbai', dist: 330, dur: '7 hrs', hwy: 'via Malegaon & Nashik',
    freq: 'Every 30–45 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹385' }, { type: 'AC Shivshahi', price: '₹540' }],
    hl: ['Direct Dhule Central to Mumbai', 'Overnight and daytime schedules', 'Affordable fares']
  },
  {
    orig: 'Mumbai', dest: 'Latur', dist: 470, dur: '9.5 hrs', hwy: 'via Pune & Solapur',
    freq: 'Daily 10 departures', first: '06:00 AM', last: '09:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹540' }, { type: 'AC Shivshahi', price: '₹770' }],
    hl: ['Marathwada express line', 'Departures from Mumbai Central and Parel', 'Overnight sleeper coaches']
  },
  {
    orig: 'Latur', dest: 'Mumbai', dist: 470, dur: '9.5 hrs', hwy: 'via Solapur & Pune',
    freq: 'Daily 10 departures', first: '06:30 AM', last: '09:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹540' }, { type: 'AC Shivshahi', price: '₹770' }],
    hl: ['Direct Latur to Dadar and Mumbai Central', 'Overnight comfort travel', 'Safe state transport']
  },
  {
    orig: 'Mumbai', dest: 'Nanded', dist: 580, dur: '11.5 hrs', hwy: 'via Pune & Latur',
    freq: 'Daily 8 departures', first: '06:00 AM', last: '08:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹670' }, { type: 'AC Shivshahi', price: '₹950' }],
    hl: ['Direct Hazur Sahib Nanded route', 'Overnight Shivshahi sleeper', 'Parel and Dadar departures']
  },
  {
    orig: 'Nanded', dest: 'Mumbai', dist: 580, dur: '11.5 hrs', hwy: 'via Latur & Pune',
    freq: 'Daily 8 departures', first: '06:00 AM', last: '08:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹670' }, { type: 'AC Shivshahi', price: '₹950' }],
    hl: ['Direct Nanded to Mumbai Central', 'Overnight express option', 'Reliable state transport']
  },
  {
    orig: 'Mumbai', dest: 'Satara', dist: 260, dur: '5.5 hrs', hwy: 'via Pune & NH-48',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹300' }, { type: 'AC Shivshahi', price: '₹425' }],
    hl: ['Expressway and NH-48 corridor', 'Departures from Dadar and Parel', 'Regular day and night buses']
  },
  {
    orig: 'Satara', dest: 'Mumbai', dist: 260, dur: '5.5 hrs', hwy: 'via NH-48 & Expressway',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹300' }, { type: 'AC Shivshahi', price: '₹425' }],
    hl: ['Direct Satara CBS to Dadar and Mumbai Central', 'Frequent express services', 'Fast highway transit']
  },
  {
    orig: 'Mumbai', dest: 'Sangli', dist: 380, dur: '7.5 hrs', hwy: 'via NH-48 & Karad',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹440' }, { type: 'AC Shivshahi', price: '₹620' }],
    hl: ['Major Western Maharashtra artery', 'Departures from Dadar Asiad & Mumbai Central', 'Overnight sleeper options']
  },
  {
    orig: 'Sangli', dest: 'Mumbai', dist: 380, dur: '7.5 hrs', hwy: 'via Karad & NH-48',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹440' }, { type: 'AC Shivshahi', price: '₹620' }],
    hl: ['Direct Sangli Central to Mumbai', 'Evening express buses', 'Smooth highway ride']
  },
  {
    orig: 'Mumbai', dest: 'Solapur', dist: 400, dur: '8 hrs', hwy: 'Expressway & NH-65',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹465' }, { type: 'AC Shivshahi', price: '₹660' }],
    hl: ['Major intercity connection', 'Departures from Dadar and Parel', 'Overnight sleeper & seater buses']
  },
  {
    orig: 'Solapur', dest: 'Mumbai', dist: 400, dur: '8 hrs', hwy: 'NH-65 & Expressway',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹465' }, { type: 'AC Shivshahi', price: '₹660' }],
    hl: ['Direct Solapur CBS to Dadar Asiad', 'Overnight express buses', 'Reliable schedule']
  },
  {
    orig: 'Thane', dest: 'Nashik', dist: 155, dur: '3.5 hrs', hwy: 'via Kasara Ghat (NH-160)',
    freq: 'Every 20 mins', first: '05:00 AM', last: '11:45 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹180' }, { type: 'AC Shivshahi', price: '₹260' }],
    hl: ['High-frequency MMR to Nashik link', 'Departures from Thane Vandana and CBS', 'Scenic Kasara ghat route']
  },
  {
    orig: 'Nashik', dest: 'Thane', dist: 155, dur: '3.5 hrs', hwy: 'via Kasara Ghat (NH-160)',
    freq: 'Every 20 mins', first: '05:30 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹180' }, { type: 'AC Shivshahi', price: '₹260' }],
    hl: ['Direct Nashik CBS to Thane Vandana', 'Buses every 20 minutes', 'Fast commuter route']
  },
  {
    orig: 'Kalyan', dest: 'Nashik', dist: 140, dur: '3 hrs', hwy: 'via Kasara Ghat (NH-160)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹165' }, { type: 'AC Shivshahi', price: '₹235' }],
    hl: ['Kalyan junction direct service', 'Departures right outside Kalyan Railway Station', 'Frequent express buses']
  },
  {
    orig: 'Nashik', dest: 'Kalyan', dist: 140, dur: '3 hrs', hwy: 'via Kasara Ghat (NH-160)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹165' }, { type: 'AC Shivshahi', price: '₹235' }],
    hl: ['Direct Nashik CBS to Kalyan Station stand', 'Convenient train connections', 'Fast 3-hour transit']
  },
  {
    orig: 'Borivali', dest: 'Shirdi', dist: 245, dur: '5.5 hrs', hwy: 'via Thane & Kasara Ghat',
    freq: 'Hourly departures', first: '06:00 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹415' }],
    hl: ['Western suburbs direct Shirdi express', 'Departures from Borivali Sukurwadi', 'Overnight AC buses']
  },
  {
    orig: 'Shirdi', dest: 'Borivali', dist: 245, dur: '5.5 hrs', hwy: 'via Kasara Ghat & Thane',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹415' }],
    hl: ['Direct pilgrimage return to Mumbai Western Suburbs', 'Stops at Thane, Malad, Borivali', 'Daily AC runs']
  },

  // Konkan & Coastal Corridors
  {
    orig: 'Mumbai', dest: 'Chiplun', dist: 250, dur: '5.5 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Heart of Konkan express', 'Departures from Mumbai Central, Parel, Borivali', 'Scenic Western Ghats descent']
  },
  {
    orig: 'Chiplun', dest: 'Mumbai', dist: 250, dur: '5.5 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Direct Chiplun CBS to Mumbai Central', 'Round-the-clock connectivity', 'Fast NH-66 corridor']
  },
  {
    orig: 'Mumbai', dest: 'Kankavli', dist: 440, dur: '9.5 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹510' }, { type: 'AC Shivshahi', price: '₹730' }],
    hl: ['Sindhudurg district trunk route', 'Overnight sleeper coaches', 'Stops at Parel, Kurla, Panvel']
  },
  {
    orig: 'Kankavli', dest: 'Mumbai', dist: 440, dur: '9.5 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Every 45 mins', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹510' }, { type: 'AC Shivshahi', price: '₹730' }],
    hl: ['Direct Sindhudurg to Mumbai service', 'Overnight sleeper and ordinary express', 'Daily departures']
  },
  {
    orig: 'Mumbai', dest: 'Sawantwadi', dist: 490, dur: '10.5 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹570' }, { type: 'AC Shivshahi', price: '₹810' }],
    hl: ['Southern Konkan gateway', 'Overnight AC Shivshahi sleeper', 'Departures from Mumbai Central & Parel']
  },
  {
    orig: 'Sawantwadi', dest: 'Mumbai', dist: 490, dur: '10.5 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Hourly departures', first: '06:00 AM', last: '09:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹570' }, { type: 'AC Shivshahi', price: '₹810' }],
    hl: ['Direct Sawantwadi to Mumbai Central', 'Overnight comfort express', 'Reliable ST service']
  },
  {
    orig: 'Pune', dest: 'Chiplun', dist: 200, dur: '4.5 hrs', hwy: 'via Kumbharli Ghat (SH-144)',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹235' }, { type: 'AC Shivshahi', price: '₹330' }],
    hl: ['Scenic Kumbharli Ghat crossing', 'Departures from Swargate', 'Direct Konkan link']
  },
  {
    orig: 'Chiplun', dest: 'Pune', dist: 200, dur: '4.5 hrs', hwy: 'via Kumbharli Ghat',
    freq: 'Hourly departures', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹235' }, { type: 'AC Shivshahi', price: '₹330' }],
    hl: ['Direct Chiplun to Pune Swargate', 'Scenic day route', 'Reliable government buses']
  },
  {
    orig: 'Pune', dest: 'Kankavli', dist: 350, dur: '7.5 hrs', hwy: 'via Kolhapur & Phonda Ghat',
    freq: 'Daily 10 departures', first: '06:00 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹410' }, { type: 'AC Shivshahi', price: '₹580' }],
    hl: ['Direct Pune to South Konkan', 'Swargate departures', 'Overnight sleeper available']
  },
  {
    orig: 'Kankavli', dest: 'Pune', dist: 350, dur: '7.5 hrs', hwy: 'via Phonda Ghat & Kolhapur',
    freq: 'Daily 10 departures', first: '06:30 AM', last: '09:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹410' }, { type: 'AC Shivshahi', price: '₹580' }],
    hl: ['Direct return to Pune Swargate', 'Night express coaches', 'Safe ghat navigation']
  },
  {
    orig: 'Pune', dest: 'Alibaug', dist: 140, dur: '3.5 hrs', hwy: 'via Khopoli & Pen',
    freq: 'Every 45 mins', first: '06:00 AM', last: '08:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹165' }, { type: 'AC Shivshahi', price: '₹235' }],
    hl: ['Popular weekend coastal getaway', 'Departures from Swargate and Wakad', 'Scenic Pen-Alibaug coastal highway']
  },
  {
    orig: 'Alibaug', dest: 'Pune', dist: 140, dur: '3.5 hrs', hwy: 'via Pen & Khopoli',
    freq: 'Every 45 mins', first: '06:30 AM', last: '08:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹165' }, { type: 'AC Shivshahi', price: '₹235' }],
    hl: ['Direct Alibaug beach stand to Pune Swargate', 'Convenient weekend return schedules', 'Comfortable AC coaches']
  },
  {
    orig: 'Mumbai', dest: 'Goa', dist: 560, dur: '12 hrs', hwy: 'Mumbai-Goa Hwy (NH-66)',
    freq: 'Daily 6 departures', first: '04:00 PM', last: '08:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹650' }, { type: 'AC Shivshahi', price: '₹940' }],
    hl: ['Iconic inter-state coastal route', 'Overnight Shivshahi AC Sleeper', 'Departures from Mumbai Central and Parel']
  },
  {
    orig: 'Goa', dest: 'Mumbai', dist: 560, dur: '12 hrs', hwy: 'NH-66 to Mumbai',
    freq: 'Daily 6 departures', first: '04:00 PM', last: '08:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹650' }, { type: 'AC Shivshahi', price: '₹940' }],
    hl: ['Departures from Panaji KTC and Mapusa', 'Overnight comfortable sleep', 'Direct to Mumbai Central']
  },
  {
    orig: 'Pune', dest: 'Goa', dist: 450, dur: '9.5 hrs', hwy: 'via Kolhapur & Belagavi / Amboli',
    freq: 'Daily 8 departures', first: '05:00 PM', last: '09:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹530' }, { type: 'AC Shivshahi', price: '₹760' }],
    hl: ['Direct Pune to Panaji & Mapusa', 'Swargate platform departures', 'Overnight sleeper coaches']
  },
  {
    orig: 'Goa', dest: 'Pune', dist: 450, dur: '9.5 hrs', hwy: 'via Amboli & Kolhapur',
    freq: 'Daily 8 departures', first: '05:30 PM', last: '09:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹530' }, { type: 'AC Shivshahi', price: '₹760' }],
    hl: ['Direct Panaji to Pune Swargate', 'Overnight AC service', 'Scenic Amboli Ghat route']
  },

  // Vidarbha & Marathwada Corridors
  {
    orig: 'Nagpur', dest: 'Chandrapur', dist: 150, dur: '3.5 hrs', hwy: 'NH-353B via Warora',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹175' }, { type: 'AC Shivshahi', price: '₹250' }],
    hl: ['Vidarbha industrial artery', 'Ganeshpeth departures every 30 mins', 'Fast highway connectivity']
  },
  {
    orig: 'Chandrapur', dest: 'Nagpur', dist: 150, dur: '3.5 hrs', hwy: 'via Warora (NH-353B)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹175' }, { type: 'AC Shivshahi', price: '₹250' }],
    hl: ['Direct Chandrapur to Nagpur Ganeshpeth', 'Frequent express buses', 'Reliable daily link']
  },
  {
    orig: 'Nagpur', dest: 'Wardha', dist: 75, dur: '1.5 hrs', hwy: 'via Butibori (NH-361)',
    freq: 'Every 15 mins', first: '05:00 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹90' }, { type: 'AC Shivshahi', price: '₹130' }],
    hl: ['High-frequency commuter link', 'Departures from Mor Bhavan and Ganeshpeth', 'Direct to Sevagram & Wardha']
  },
  {
    orig: 'Wardha', dest: 'Nagpur', dist: 75, dur: '1.5 hrs', hwy: 'via Butibori (NH-361)',
    freq: 'Every 15 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹90' }, { type: 'AC Shivshahi', price: '₹130' }],
    hl: ['Direct Wardha CBS to Nagpur', 'Buses every 15 minutes', 'Fast 90-minute commute']
  },
  {
    orig: 'Nagpur', dest: 'Bhandara', dist: 65, dur: '1.25 hrs', hwy: 'NH-53 Asian Highway',
    freq: 'Every 15 mins', first: '05:00 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹80' }],
    hl: ['Continuous suburban shuttle', 'Departures from Mor Bhavan & Ganeshpeth', 'Direct 4-lane highway']
  },
  {
    orig: 'Bhandara', dest: 'Nagpur', dist: 65, dur: '1.25 hrs', hwy: 'NH-53 Asian Highway',
    freq: 'Every 15 mins', first: '05:30 AM', last: '11:15 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹80' }],
    hl: ['Fast return to Nagpur city', 'Every 15 minutes', 'Affordable fares']
  },
  {
    orig: 'Nagpur', dest: 'Gondia', dist: 160, dur: '3.5 hrs', hwy: 'via Bhandara & Tirora',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹185' }, { type: 'AC Shivshahi', price: '₹265' }],
    hl: ['Eastern Vidarbha trunk route', 'Ganeshpeth platform departures', 'Regular express runs']
  },
  {
    orig: 'Gondia', dest: 'Nagpur', dist: 160, dur: '3.5 hrs', hwy: 'via Tirora & Bhandara',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹185' }, { type: 'AC Shivshahi', price: '₹265' }],
    hl: ['Direct Gondia Central to Nagpur Ganeshpeth', 'Day and night express coaches', 'Reliable ST transit']
  },
  {
    orig: 'Nagpur', dest: 'Yavatmal', dist: 150, dur: '3.5 hrs', hwy: 'via Wardha (NH-361)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹175' }, { type: 'AC Shivshahi', price: '₹250' }],
    hl: ['Major South Vidarbha corridor', 'Ganeshpeth departures', 'Fast travel via 4-lane highway']
  },
  {
    orig: 'Yavatmal', dest: 'Nagpur', dist: 150, dur: '3.5 hrs', hwy: 'via Wardha (NH-361)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹175' }, { type: 'AC Shivshahi', price: '₹250' }],
    hl: ['Direct Yavatmal to Nagpur Ganeshpeth', 'Regular daily departures', 'Reliable highway connectivity']
  },
  {
    orig: 'Nagpur', dest: 'Akola', dist: 250, dur: '5 hrs', hwy: 'NH-53 via Amravati',
    freq: 'Every 30 mins', first: '05:00 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Trunk Vidarbha east-west axis', 'Ganeshpeth departures', 'Frequent Shivshahi AC and ordinary buses']
  },
  {
    orig: 'Akola', dest: 'Nagpur', dist: 250, dur: '5 hrs', hwy: 'NH-53 via Amravati',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹410' }],
    hl: ['Direct Akola CBS to Nagpur Ganeshpeth', 'Buses every 30 minutes', 'High-speed highway travel']
  },
  {
    orig: 'Amravati', dest: 'Akola', dist: 100, dur: '2 hrs', hwy: 'NH-53 via Murtizapur',
    freq: 'Every 20 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹115' }, { type: 'AC Shivshahi', price: '₹165' }],
    hl: ['Inter-district twin city express', 'Departures every 20 minutes', 'Smooth 4-lane Asian Highway']
  },
  {
    orig: 'Akola', dest: 'Amravati', dist: 100, dur: '2 hrs', hwy: 'NH-53 via Murtizapur',
    freq: 'Every 20 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹115' }, { type: 'AC Shivshahi', price: '₹165' }],
    hl: ['Fast 2-hour transit to Amravati CBS', 'Frequent round-the-clock service', 'Budget government fares']
  },
  {
    orig: 'Aurangabad', dest: 'Jalna', dist: 65, dur: '1.25 hrs', hwy: 'via Jalna Road (NH-753F)',
    freq: 'Every 15 mins', first: '05:00 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹75' }, { type: 'AC Shivshahi', price: '₹110' }],
    hl: ['High-density twin city corridor', 'Departures from CIDCO & CBS', 'Every 15 minutes']
  },
  {
    orig: 'Jalna', dest: 'Aurangabad', dist: 65, dur: '1.25 hrs', hwy: 'via Jalna Road (NH-753F)',
    freq: 'Every 15 mins', first: '05:30 AM', last: '11:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹75' }, { type: 'AC Shivshahi', price: '₹110' }],
    hl: ['Direct Jalna CBS to CIDCO & Central Bus Stand', 'Continuous commuter frequency', 'Affordable fares']
  },
  {
    orig: 'Aurangabad', dest: 'Nanded', dist: 250, dur: '5.5 hrs', hwy: 'via Jalna & Parbhani',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹415' }],
    hl: ['Marathwada regional lifeline', 'Departures from Central Bus Stand (CBS)', 'Day and night express coaches']
  },
  {
    orig: 'Nanded', dest: 'Aurangabad', dist: 250, dur: '5.5 hrs', hwy: 'via Parbhani & Jalna',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹290' }, { type: 'AC Shivshahi', price: '₹415' }],
    hl: ['Direct Nanded to Chhatrapati Sambhajinagar', 'Regular express services', 'Reliable ST operations']
  },
  {
    orig: 'Solapur', dest: 'Kolhapur', dist: 235, dur: '5 hrs', hwy: 'via Sangli & Miraj (NH-166)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '11:00 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹275' }, { type: 'AC Shivshahi', price: '₹390' }],
    hl: ['South Maharashtra connecting corridor', 'Departures from Solapur Central', 'Direct access to Mahalaxmi Temple']
  },
  {
    orig: 'Kolhapur', dest: 'Solapur', dist: 235, dur: '5 hrs', hwy: 'via Miraj & Sangli (NH-166)',
    freq: 'Every 30 mins', first: '05:30 AM', last: '10:30 PM',
    f: [{ type: 'Ordinary Lal Pari', price: '₹275' }, { type: 'AC Shivshahi', price: '₹390' }],
    hl: ['Direct Kolhapur CBS to Solapur Central', 'Buses every 30 minutes', 'Connecting Western & Southern Maharashtra']
  },
];

// Combine existing with new
const existingSlugs = new Set(existingRoutes.map(r => r.slug));
const allRoutes = [...existingRoutes];

for (const c of NEW_CORRIDORS) {
  const origSlug = c.orig.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const destSlug = c.dest.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const id = `${origSlug}-to-${destSlug}`;
  const slug = `${id}-bus-time-table`;

  if (existingSlugs.has(slug)) {
    continue;
  }
  existingSlugs.add(slug);

  const origInfo = getDepotDetails(c.orig);
  const destInfo = getDepotDetails(c.dest);

  allRoutes.push({
    id,
    slug,
    stateId: 'maharashtra',
    corporation: 'MSRTC',
    originCity: c.orig,
    destinationCity: c.dest,
    originDepotSlug: origInfo.depotSlug,
    originStandName: origInfo.standName,
    originStandPhone: origInfo.standPhone,
    destinationDepotSlug: destInfo.depotSlug,
    destinationStandName: destInfo.standName,
    destinationStandPhone: destInfo.standPhone,
    distanceKm: c.dist,
    durationHours: c.dur,
    highway: c.hwy,
    frequency: c.freq,
    firstBus: c.first,
    lastBus: c.last,
    fares: c.f,
    highlights: c.hl,
    description: `MSRTC operates regular and express bus services connecting ${c.orig} and ${c.dest} over a distance of ${c.dist} km via ${c.hwy}. Departures run ${c.freq.toLowerCase()}, starting from ${c.first} until ${c.last}. Passengers can book online via npublic.msrtcors.com or consult station enquiry at ${origInfo.standPhone}.`,
  });
}

console.log(`Total routes after expansion: ${allRoutes.length}`);

// Write formatted file
const fileContent = `export const ROUTES = ${JSON.stringify(allRoutes, null, 2)};\n`;
fs.writeFileSync(path.join(ROOT, 'src/data/routes.data.mjs'), fileContent, 'utf8');
console.log('Successfully wrote src/data/routes.data.mjs');
