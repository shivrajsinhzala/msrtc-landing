/**
 * State-level utility guides for Maharashtra — the high-intent informational cluster
 * that captures statewide queries: "msrtc bus timetable", "msrtc bus fare",
 * "msrtc online ticket booking", "msrtc helpline number", and "shivshahi bus ticket price".
 *
 * Sourced directly from official Maharashtra State Road Transport Corporation (MSRTC) records:
 * - msrtc.maharashtra.gov.in
 * - npublic.msrtcors.com (Official Online Passenger Reservation System)
 * - MSRTC Central Helpline: 1800-22-1250 (24x7 Toll-Free)
 */

export const GUIDES = [
  {
    slug: 'msrtc-helpline-number',
    navLabel: 'MSRTC helpline & customer care',
    title: 'MSRTC Helpline Number — 24x7 Customer Care, Complaint & Enquiry',
    description: 'MSRTC 24x7 toll-free helpline 1800-22-1250 for Maharashtra ST bus enquiries, Shivneri and Shivshahi schedules, online booking refunds, and passenger complaints.',
    h1: 'MSRTC helpline number & 24x7 passenger customer care',
    bodyHtml: `
      <div class="card">
        <p style="margin:0 0 .5rem;font-weight:600;">MSRTC 24x7 Statewide Passenger Toll-Free Helpline</p>
        <div class="call-btns"><a href="tel:1800221250">Call 1800-22-1250</a></div>
      </div>
      <p>The primary statewide contact number for Maharashtra State Road Transport Corporation (MSRTC / ST Mahamandal) — covering bus timings, delays, cancellations, ticket refunds, and general grievances across Maharashtra — is the toll-free <a href="tel:1800221250">1800-22-1250</a>, available 24 hours a day, 7 days a week.</p>
      
      <h2>Which contact desk to use for what</h2>
      <table>
        <tr><th>Requirement</th><th>Contact Desk / Channel</th></tr>
        <tr><td>Statewide 24x7 bus enquiry & complaints</td><td><a href="tel:1800221250">1800-22-1250</a> (Toll-Free)</td></tr>
        <tr><td>Online ticket booking & payment support</td><td>msrtc.support@maharashtra.gov.in</td></tr>
        <tr><td>Central Control Room (Mumbai Central)</td><td><a href="tel:02223024074">022-23024074</a></td></tr>
        <tr><td>Pune Swargate Divisional Control Desk</td><td><a href="tel:02024449980">020-24449980</a></td></tr>
        <tr><td>Specific bus depot or station platform enquiry</td><td>See that station's directory page below</td></tr>
      </table>

      <h2>How to file an MSRTC bus complaint or claim refund</h2>
      <p>For service issues, conductor overcharging, bus breakdown, or ticket cancellation refunds:</p>
      <ol>
        <li><strong>Call Central Customer Care:</strong> Dial <a href="tel:1800221250">1800-22-1250</a> and keep your Ticket Number or PNR ready.</li>
        <li><strong>Official Web Portal:</strong> Submit an online grievance through the grievance portal on <a href="https://msrtc.maharashtra.gov.in" target="_blank" rel="noopener">msrtc.maharashtra.gov.in</a>.</li>
        <li><strong>Station Master Office:</strong> If you are physically at a bus terminal, record your complaint in the official Complaint Register available at the Station Master's room.</li>
      </ol>
      <p>For inquiries tied to a specific terminal, check the direct counter phone numbers in our <a href="/maharashtra">Maharashtra ST bus station directory</a>.</p>`,
    faq: [
      { q: 'What is the MSRTC 24x7 toll-free customer care number?', a: 'The statewide MSRTC toll-free passenger helpline is 1800-22-1250, operated 24x7 across Maharashtra for bus enquiries, refunds, and complaints.' },
      { q: 'What is the phone number of Mumbai Central MSRTC bus depot?', a: 'The inquiry phone number for Mumbai Central ST Bus Depot is 022-23024074.' },
      { q: 'What is the Pune Swargate ST bus stand phone number?', a: 'The direct inquiry desks at Swargate Bus Station are 020-24449980 and 020-24441591.' },
      { q: 'How do I request a refund for a cancelled MSRTC ticket?', a: 'Tickets booked online can be cancelled directly on npublic.msrtcors.com or the official mobile app. For payment or transaction issues, call 1800-22-1250 or email msrtc.support@maharashtra.gov.in with your PNR.' },
    ],
  },
  {
    slug: 'msrtc-bus-fare',
    navLabel: 'MSRTC bus fare & concessions',
    title: 'MSRTC Bus Fare — Rates, Shivshahi Ticket Price & Concessions',
    description: 'How MSRTC bus fares are calculated: distance x per-km slab for Parivartan, Hirkani, Shivshahi, and Shivneri, plus Mahila Samman 50% discount and Senior Citizen travel schemes.',
    h1: 'MSRTC bus fare chart, Shivshahi ticket prices & concessions',
    bodyHtml: `
      <p>MSRTC (Maharashtra State Road Transport Corporation) determines ticket prices using a regulated distance-based tariff structure approved by the Maharashtra State Transport Authority. Your ticket fare depends on the distance travelled, the bus class, road toll charges, and government welfare concessions.</p>

      <h2>MSRTC Bus Service Classes & Fare Hierarchy</h2>
      <table>
        <tr><th>Service Class</th><th>Description & Amenities</th><th>Starting Base Rate</th></tr>
        <tr><td><strong>Parivartan / Lal Pari (Ordinary)</strong></td><td>Standard non-AC red buses; backbone of district and rural connectivity</td><td>Standard baseline tariff</td></tr>
        <tr><td><strong>Hirkani (Asiad)</strong></td><td>Semi-luxury 2x2 pushback seating; non-AC intercity express</td><td>~1.25x Ordinary fare</td></tr>
        <tr><td><strong>Shivshahi (AC 2x2)</strong></td><td>Air-conditioned luxury coach with air suspension and charging ports</td><td>~1.45x Ordinary fare</td></tr>
        <tr><td><strong>Shivshahi Sleeper</strong></td><td>Air-conditioned sleeper coach for overnight intercity routes</td><td>~1.65x Ordinary fare</td></tr>
        <tr><td><strong>Shivneri (Volvo / Scania)</strong></td><td>Premium multi-axle AC Volvo coaches on express corridors (Mumbai–Pune)</td><td>Premium fixed-slab pricing</td></tr>
        <tr><td><strong>E-Shivneri (Electric AC)</strong></td><td>100% electric premium AC coaches operating on the Mumbai–Pune Expressway</td><td>Same as Shivneri Volvo</td></tr>
      </table>

      <h2>Government Welfare Concessions & Travel Schemes</h2>
      <p>Maharashtra Government offers notable statutory travel concessions on MSRTC buses:</p>
      <ul>
        <li><strong>Mahila Samman Yojana (50% Concession for Women):</strong> All female passengers travelling within Maharashtra state borders receive an automatic <strong>50% discount</strong> on standard ticket fares across all bus classes (Parivartan, Hirkani, and Shivshahi).</li>
        <li><strong>Amrit Varishtha Nagrik Yojana (Free Travel for 75+):</strong> Senior citizens aged 75 and above travel <strong>100% free</strong> in all MSRTC buses within the state upon producing valid Aadhaar or government age proof.</li>
        <li><strong>Senior Citizens (65 to 74 Years):</strong> Passengers aged 65 to 74 receive a <strong>50% fare concession</strong> on ordinary and semi-luxury services.</li>
        <li><strong>Divyangjan (Persons with Disabilities):</strong> Significant fare concessions ranging up to 75% for certified persons with benchmark disabilities.</li>
      </ul>

      <h2>Checking Live Fares</h2>
      <p>Because toll charges and distance stages update periodically, always verify live point-to-point ticket prices on the official reservation system <a href="https://msrtc.maharashtra.gov.in" target="_blank" rel="noopener">msrtc.maharashtra.gov.in</a> or through our <a href="/maharashtra/routes">Maharashtra route timetable directory</a> before your journey.</p>`,
    faq: [
      { q: 'What is the Mahila Samman Yojana on MSRTC buses?', a: 'Under the Mahila Samman Yojana, all women passengers in Maharashtra are entitled to a 50% discount on ticket fares across all standard MSRTC buses including Parivartan, Hirkani, and Shivshahi.' },
      { q: 'Is MSRTC bus travel free for senior citizens?', a: 'Yes, citizens aged 75 and above travel 100% free on MSRTC buses under the Amrit Varishtha Nagrik Yojana with valid government age proof. Seniors aged 65 to 74 get a 50% discount.' },
      { q: 'How much is a Shivshahi bus ticket compared to Lal Pari?', a: 'A Shivshahi AC bus ticket typically costs approximately 40% to 50% more than a standard Parivartan Lal Pari ordinary express ticket for the same distance.' },
      { q: 'How much is a Shivneri ticket between Mumbai and Pune?', a: 'A Shivneri / E-Shivneri AC Volvo ticket between Dadar/Borivali and Pune Swargate/Station is approximately ₹520 including Expressway toll charges.' },
    ],
  },
  {
    slug: 'msrtc-online-ticket-booking',
    navLabel: 'MSRTC online ticket booking',
    title: 'MSRTC Online Ticket Booking — How to Book Maharashtra ST Bus Tickets',
    description: 'Step-by-step guide to book MSRTC bus tickets online: official reservation portal msrtc.maharashtra.gov.in, mobile app, guest booking, seat selection, and cancellation rules.',
    h1: 'MSRTC online ticket booking guide (msrtc.maharashtra.gov.in)',
    bodyHtml: `
      <p>MSRTC provides official online advance seat reservation for over 3,000 intercity and long-distance bus routes across Maharashtra, Goa, Gujarat, Karnataka, and Telangana. Reservations can be made up to 30 days in advance via the official portal and mobile app.</p>

      <h2>Official Booking Channels</h2>
      <ul>
        <li><strong>Official Web Portal:</strong> Bookings are processed on <a href="https://msrtc.maharashtra.gov.in" target="_blank" rel="noopener">msrtc.maharashtra.gov.in</a> and the reservation engine <code>npublic.msrtcors.com</code>.</li>
        <li><strong>Official Mobile App:</strong> "MSRTC Bus Reservation" app available on Google Play Store for Android and Apple App Store for iOS.</li>
        <li><strong>Bus Stand Reservation Counters:</strong> Advance reservation windows operated at major depots like Swargate, Mumbai Central, Dadar, CBS Nashik, and Ganeshpeth Nagpur.</li>
      </ul>

      <h2>Step-by-Step Online Booking Process</h2>
      <ol>
        <li><strong>Visit the Portal:</strong> Navigate to the official booking site <a href="https://msrtc.maharashtra.gov.in" target="_blank" rel="noopener">msrtc.maharashtra.gov.in</a>.</li>
        <li><strong>Search Journey:</strong> Enter your departure station (e.g. Pune Swargate), arrival station (e.g. Dadar Asiad), journey date, and bus service class.</li>
        <li><strong>Select Service:</strong> Review available buses, departure timings, route type (Shivneri, Shivshahi, Ordinary), and available seat layout.</li>
        <li><strong>Choose Seats & Enter Passenger Info:</strong> Select seat numbers (separate quota indicators apply for ladies). If eligible for female passenger discount, select the Mahila Samman option.</li>
        <li><strong>Make Payment:</strong> Pay securely using UPI (Google Pay, PhonePe, Paytm), debit/credit card, or net banking.</li>
        <li><strong>Download E-Ticket:</strong> An SMS with PNR details and a PDF ticket will be issued. Present the SMS or digital PDF to the conductor alongside your Aadhaar or government ID.</li>
      </ol>

      <h2>Cancellation & Refund Policy</h2>
      <table>
        <tr><th>Cancellation Window</th><th>Deduction / Refund Rate</th></tr>
        <tr><td>More than 24 hours before departure</td><td>10% cancellation fee deducted (90% refunded)</td></tr>
        <tr><td>Between 12 and 24 hours before departure</td><td>25% cancellation fee deducted (75% refunded)</td></tr>
        <tr><td>Between 2 and 12 hours before departure</td><td>50% cancellation fee deducted (50% refunded)</td></tr>
        <tr><td>Less than 2 hours before scheduled departure</td><td>No refund admissible</td></tr>
      </table>`,
    faq: [
      { q: 'What is the official website for MSRTC ticket booking?', a: 'The official portal for booking Maharashtra ST bus tickets is msrtc.maharashtra.gov.in (reservation portal npublic.msrtcors.com).' },
      { q: 'Can I book an MSRTC ticket without creating an account?', a: 'Yes, the official portal supports Guest Booking where you can book tickets by providing a valid mobile number and email ID without mandatory registration.' },
      { q: 'How many days in advance can I book an MSRTC bus?', a: 'Advance reservation for MSRTC long-distance routes opens up to 30 days prior to the date of travel.' },
      { q: 'Is digital MSRTC ticket on phone accepted by conductors?', a: 'Yes, an official SMS with PNR or the PDF e-ticket on your smartphone along with a valid original photo identity card (Aadhaar, Voter ID, Driving Licence) is fully recognized.' },
    ],
  },
  {
    slug: 'msrtc-bus-timetable',
    navLabel: 'MSRTC bus timetable & schedules',
    title: 'MSRTC Bus Timetable — Maharashtra ST Bus Schedule & Timings',
    description: 'Comprehensive MSRTC bus timetable guide: departure frequencies for Shivneri, Shivshahi, and Ordinary buses from Mumbai, Pune, Nashik, Shirdi, and Nagpur.',
    h1: 'MSRTC bus timetable & Maharashtra ST bus schedule guide',
    bodyHtml: `
      <p>Maharashtra State Road Transport Corporation (MSRTC) is one of the largest public road transport undertakings in India, operating over 16,000 buses across more than 250 depots. Commuters looking for daily point-to-point departure times can access verified schedule references across major trunk corridors.</p>

      <h2>Key Intercity Travel Corridors & Schedules</h2>
      <table>
        <tr><th>Corridor</th><th>Primary Service Type</th><th>Departure Frequency</th><th>Average Travel Time</th></tr>
        <tr><td><strong>Pune ⇄ Mumbai</strong></td><td>Shivneri Volvo &amp; E-Shivneri</td><td>Every 15 to 20 minutes (24x7)</td><td>3 to 3.5 hrs via Expressway</td></tr>
        <tr><td><strong>Pune ⇄ Nashik</strong></td><td>Shivshahi AC &amp; Hirkani</td><td>Every 30 to 45 minutes</td><td>4.5 to 5 hrs via NH-60</td></tr>
        <tr><td><strong>Mumbai ⇄ Shirdi</strong></td><td>Shivshahi AC &amp; Ordinary</td><td>Hourly departures (morning &amp; night)</td><td>5 to 6 hrs via Samruddhi / Kasara</td></tr>
        <tr><td><strong>Pune ⇄ Shirdi</strong></td><td>Ordinary Express &amp; Shivshahi</td><td>Every 30 to 40 minutes</td><td>4 to 4.5 hrs via Ahmednagar</td></tr>
        <tr><td><strong>Pune ⇄ Kolhapur</strong></td><td>Shivneri &amp; Shivshahi AC</td><td>Every 20 to 30 minutes</td><td>4.5 to 5.5 hrs via NH-48</td></tr>
        <tr><td><strong>Nagpur ⇄ Amravati</strong></td><td>Ordinary &amp; Shivshahi AC</td><td>Every 15 to 20 minutes</td><td>2.5 to 3.5 hrs via NH-53</td></tr>
        <tr><td><strong>Pune ⇄ Solapur</strong></td><td>Parivartan Ordinary &amp; Shivshahi</td><td>Every 30 minutes</td><td>4.5 to 5.5 hrs via NH-65</td></tr>
      </table>

      <h2>How MSRTC Bus Timetables Are Organized</h2>
      <p>MSRTC schedules are arranged into three operational tiers:</p>
      <ul>
        <li><strong>Non-Stop Point-to-Point Express (Point-to-Point):</strong> High-speed direct services like the Dadar–Swargate Shivneri that do not pick up local passengers en route.</li>
        <li><strong>Rapid Intercity Ordinary (जलद / Express):</strong> Inter-district buses connecting major taluka and district headquarters with designated stops at division depots.</li>
        <li><strong>Rural & Village Services (मुक्कामी / Ordinary):</strong> Essential passenger services providing connectivity to remote rural villages and farming centers.</li>
      </ul>

      <h2>Check Specific Route Timetables</h2>
      <p>To inspect exact departure times, earliest morning buses, late-night departures, and counter inquiry numbers for any corridor, explore our dedicated <a href="/maharashtra/routes">Maharashtra Route Timetables Directory</a>.</p>`,
    faq: [
      { q: 'How frequent are Shivneri buses between Pune and Mumbai?', a: 'Shivneri and E-Shivneri buses run round-the-clock every 15 to 20 minutes between Pune (Swargate, Railway Station, Wakad) and Mumbai (Dadar, Borivali, Thane).' },
      { q: 'What time is the first MSRTC bus from Pune to Shirdi?', a: 'The earliest regular MSRTC express bus departs Pune Shivajinagar terminal at 05:00 AM heading to Shirdi Saibaba Temple.' },
      { q: 'Where can I find Marathi ST bus timetable (एसटी बस वेळापत्रक)?', a: 'Detailed schedules in both English and Marathi keywords are cataloged on our Maharashtra routes directory and the official MSRTC mobile app.' },
      { q: 'Do MSRTC night buses run between major cities?', a: 'Yes, overnight ordinary express, Shivshahi, and sleeper buses operate continuously on routes such as Mumbai to Kolhapur, Pune to Nagpur, and Mumbai to Ratnagiri.' },
    ],
  },
];
