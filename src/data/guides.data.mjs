/**
 * State-level utility guides for Maharashtra — the high-intent informational cluster
 * that captures statewide queries: "msrtc bus timetable", "msrtc bus fare",
 * "msrtc online ticket booking", "msrtc helpline number", "shivshahi bus ticket price",
 * "shivneri bus booking", "msrtc bus pass", and "msrtc parcel cargo booking".
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
    title: 'MSRTC Helpline Number 1800-22-1250 — Care & Complaints',
    description: 'MSRTC toll-free helpline 1800-22-1250 for Maharashtra ST bus enquiries, schedules, online booking refunds and passenger complaints, with who to call for what.',
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
        <tr><td>Online ticket booking & payment support</td><td><a href="tel:1800221250">1800-22-1250</a> or the support details on <a href="https://npublic.msrtcors.com" target="_blank" rel="noopener">the reservation portal</a></td></tr>
        <tr><td>Mumbai Central bus stand enquiry</td><td><a href="tel:02223024074">022-23024074</a></td></tr>
        <tr><td>Pune Swargate bus stand enquiry</td><td><a href="tel:02024449980">020-24449980</a></td></tr>
        <tr><td>Specific bus depot or station platform enquiry</td><td>See that station's directory page below</td></tr>
      </table>

      <h2>How to file an MSRTC bus complaint or claim refund</h2>
      <p>For service issues, conductor overcharging, bus breakdown, or ticket cancellation refunds:</p>
      <ol>
        <li><strong>Call Central Customer Care:</strong> Dial <a href="tel:1800221250">1800-22-1250</a> and keep your Ticket Number or PNR ready.</li>
        <li><strong>Official Web Portal:</strong> Submit an online grievance through the grievance portal on <a href="https://msrtc.maharashtra.gov.in" target="_blank" rel="noopener">msrtc.maharashtra.gov.in</a>.</li>
        <li><strong>Station Master Office:</strong> If you are physically at a bus terminal, record your complaint in the official Complaint Register available at the Station Master's room.</li>
      </ol>
      <p>For inquiries tied to a specific terminal, check the direct counter phone numbers in our <a href="/stations">Maharashtra ST bus station directory</a>.</p>`,
    faq: [
      { q: 'What is the MSRTC 24x7 toll-free customer care number?', a: 'The statewide MSRTC toll-free passenger helpline is 1800-22-1250, operated 24x7 across Maharashtra for bus enquiries, refunds, and complaints.' },
      { q: 'What is the phone number of Mumbai Central MSRTC bus depot?', a: 'The inquiry phone number for Mumbai Central ST Bus Depot is 022-23024074.' },
      { q: 'What is the Pune Swargate ST bus stand phone number?', a: 'The direct inquiry desks at Swargate Bus Station are 020-24449980 and 020-24441591.' },
      { q: 'How do I request a refund for a cancelled MSRTC ticket?', a: 'Tickets booked online can be cancelled directly on npublic.msrtcors.com or the official mobile app. For payment or transaction issues, call 1800-22-1250 and keep your PNR ready.' },
    ],
  },
  {
    slug: 'msrtc-bus-fare',
    navLabel: 'MSRTC bus fare & concessions',
    title: 'MSRTC Bus Fare: Shivshahi Ticket Price & Concessions',
    description: 'How MSRTC bus fares work across Parivartan, Hirkani, Shivshahi and Shivneri, plus the July 2026 fare revision, Mahila Samman and senior citizen concessions.',
    h1: 'MSRTC bus fare chart, Shivshahi ticket prices & concessions',
    bodyHtml: `
      <p>MSRTC (Maharashtra State Road Transport Corporation) determines ticket prices using a regulated distance-based tariff structure approved by the Maharashtra State Transport Authority. Your ticket fare depends on the distance travelled, the bus class, road toll charges, and government welfare concessions.</p>

      <h2>Latest MSRTC fare revision</h2>
      <p>The State Transport Authority approved a <strong>13.56% MSRTC fare hike effective 18 July 2026</strong>, and the earlier 10% seasonal surcharge was to be withdrawn (<a href="https://www.freepressjournal.in/mumbai/maharashtra-approves-1356-msrtc-bus-fare-hike-effective-july-18" target="_blank" rel="noopener noreferrer">PTI via Free Press Journal</a>). That report does not list fares by bus class, so use the reservation portal for the exact price.</p>

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
        <li><strong>Senior Citizens (about 65 to 74 Years):</strong> Passengers in this age group can get a <strong>50% fare concession</strong>. Published age boundaries and eligible bus classes vary, so confirm with MSRTC before you travel.</li>
        <li><strong>Divyangjan (Persons with Disabilities):</strong> Significant fare concessions ranging up to 75% for certified persons with benchmark disabilities.</li>
      </ul>

      <h2>Checking Live Fares</h2>
      <p>Because toll charges and distance stages update periodically, always verify live point-to-point ticket prices on the official reservation system <a href="https://npublic.msrtcors.com" target="_blank" rel="noopener">npublic.msrtcors.com</a> before your journey. Our <a href="/routes">Maharashtra route directory</a> gives indicative fares for planning.</p>`,
    faq: [
      { q: 'What is the Mahila Samman Yojana on MSRTC buses?', a: 'Under the Mahila Samman Yojana, all women passengers in Maharashtra are entitled to a 50% discount on ticket fares across all standard MSRTC buses including Parivartan, Hirkani, and Shivshahi.' },
      { q: 'Is MSRTC bus travel free for senior citizens?', a: 'Yes, citizens aged 75 and above travel 100% free on MSRTC buses under the Amrit Varishtha Nagrik Yojana with valid government age proof. Seniors aged about 65 to 74 can get a 50% concession; confirm the exact age limits with MSRTC.' },
      { q: 'How much is a Shivshahi bus ticket compared to Lal Pari?', a: 'A Shivshahi AC bus ticket typically costs approximately 40% to 50% more than a standard Parivartan Lal Pari ordinary express ticket for the same distance.' },
      { q: 'How much is a Shivneri ticket between Mumbai and Pune?', a: 'Shivneri fares between Mumbai and Pune have been revised more than once, including a fare hike effective 18 July 2026, so an older quoted fare may be too low. Check the current price for your date on npublic.msrtcors.com.' },
    ],
  },
  {
    slug: 'msrtc-online-ticket-booking',
    navLabel: 'MSRTC online ticket booking',
    title: 'MSRTC Online Ticket Booking: How to Book ST Bus Tickets',
    description: 'Step-by-step guide to booking MSRTC bus tickets online on the official reservation portal and mobile app, with seat selection, payment and cancellations.',
    h1: 'MSRTC online ticket booking guide',
    bodyHtml: `
      <p>MSRTC offers online advance seat reservation for intercity and long-distance buses through its official portal and mobile app. The portal shows the booking window and available seats for your travel date.</p>

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

      <h2>Cancellation & Refund Rules</h2>
      <p>E-tickets are cancelled through the reservation portal or app. The refund depends on how close to departure you cancel, and a passenger who does not board may not get one. Read the current rules on <a href="https://npublic.msrtcors.com" target="_blank" rel="noopener">npublic.msrtcors.com</a> before you cancel, or call <a href="tel:1800221250">1800-22-1250</a>.</p>`,
    faq: [
      { q: 'What is the official website for MSRTC ticket booking?', a: 'The official portal for booking Maharashtra ST bus tickets is msrtc.maharashtra.gov.in (reservation portal npublic.msrtcors.com).' },
      { q: 'Can I book an MSRTC ticket without creating an account?', a: 'The reservation portal shows whether you can check out as a guest or need to register. Keep a valid mobile number and email ID ready either way.' },
      { q: 'How many days in advance can I book an MSRTC bus?', a: 'The booking window varies, so search your travel date on npublic.msrtcors.com to see whether seats are open yet.' },
      { q: 'Is digital MSRTC ticket on phone accepted by conductors?', a: 'Yes, an official SMS with PNR or the PDF e-ticket on your smartphone along with a valid original photo identity card (Aadhaar, Voter ID, Driving Licence) is fully recognized.' },
    ],
  },
  {
    slug: 'msrtc-bus-timetable',
    navLabel: 'MSRTC bus timetable & schedules',
    title: 'MSRTC Bus Timetable: Maharashtra ST Schedule & Timings',
    description: 'MSRTC bus timetable guide: indicative departure frequencies for Shivneri, Shivshahi and Ordinary buses from Mumbai, Pune, Nashik, Shirdi and Nagpur.',
    h1: 'MSRTC bus timetable & Maharashtra ST bus schedule guide',
    bodyHtml: `
      <p>Maharashtra State Road Transport Corporation (MSRTC) is one of the largest public road transport undertakings in India, with over 14,000 buses and more than 55 lakh daily passengers (<a href="https://www.freepressjournal.in/mumbai/maharashtra-approves-1356-msrtc-bus-fare-hike-effective-july-18" target="_blank" rel="noopener noreferrer">PTI, July 2026</a>). This guide gives indicative frequencies on major corridors for planning. For exact departures, search your date on the official portal.</p>

      <h2>Key Intercity Travel Corridors & Schedules</h2>
      <table>
        <tr><th>Corridor</th><th>Primary Service Type</th><th>Indicative Frequency</th><th>Average Travel Time</th></tr>
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
      <p>For indicative first and last departures, fares and counter enquiry numbers on any corridor, explore our <a href="/routes">Maharashtra Route Timetables Directory</a>.</p>`,
    faq: [
      { q: 'How frequent are Shivneri buses between Pune and Mumbai?', a: 'Shivneri and E-Shivneri buses run round-the-clock every 15 to 20 minutes between Pune (Swargate, Railway Station, Wakad) and Mumbai (Dadar, Borivali, Thane).' },
      { q: 'What time is the first MSRTC bus from Pune to Shirdi?', a: 'Our indicative listing shows the first Pune to Shirdi departure around 05:00 AM. Confirm the exact time and departure stand on the MSRTC portal or helpline.' },
      { q: 'Where can I find Marathi ST bus timetable (एसटी बस वेळापत्रक)?', a: 'Detailed schedules in both English and Marathi keywords are cataloged on our Maharashtra routes directory and the official MSRTC mobile app.' },
      { q: 'Do MSRTC night buses run between major cities?', a: 'Yes, overnight ordinary express, Shivshahi, and sleeper buses operate continuously on routes such as Mumbai to Kolhapur, Pune to Nagpur, and Mumbai to Ratnagiri.' },
    ],
  },
  {
    slug: 'shivshahi-bus-ticket-price-time-table',
    navLabel: 'Shivshahi bus ticket price & timetable',
    title: 'Shivshahi Bus Ticket Price, Booking & Time Table — MSRTC',
    description: 'Complete guide to MSRTC AC Shivshahi bus ticket prices, timetable, seat booking, sleeper coaches, and popular routes like Nagpur-Pune and Solapur-Pune.',
    h1: 'MSRTC Shivshahi AC Bus Ticket Price, Timetable & Online Booking',
    bodyHtml: `
      <p><strong>MSRTC Shivshahi</strong> (शिवशाही बस) is Maharashtra State Transport's premier air-conditioned luxury bus service. Designed to provide comfortable intercity travel at affordable government tariffs, Shivshahi operates across all major district headquarters, connecting Pune, Mumbai, Nagpur, Solapur, Kolhapur, Nashik, and Chhatrapati Sambhajinagar.</p>

      <h2>Shivshahi Bus Features & Amenities</h2>
      <ul>
        <li><strong>Seating Configuration:</strong> 2x2 luxury reclining pushback seats with ample legroom.</li>
        <li><strong>Air Suspension:</strong> Smooth, vibration-free ride on national and state highways.</li>
        <li><strong>Passenger Utilities:</strong> Individual mobile charging sockets, reading lamps, and digital route displays.</li>
        <li><strong>Shivshahi Sleeper Coaches:</strong> 2x1 AC sleeper layout available on long-distance overnight routes (e.g. Pune–Nagpur, Mumbai–Kolhapur).</li>
      </ul>

      <h2>Popular Shivshahi Corridors & Indicative Fares</h2>
      <table>
        <tr><th>Corridor</th><th>Indicative Shivshahi Fare</th><th>Frequency</th><th>Average Duration</th></tr>
        <tr><td><strong>Solapur ⇄ Pune</strong></td><td>₹465</td><td>Every 45–60 mins</td><td>~5 hrs</td></tr>
        <tr><td><strong>Nagpur ⇄ Pune</strong></td><td>₹1,240 (Seater) / ₹1,480 (Sleeper)</td><td>Evening departures</td><td>~13–14 hrs</td></tr>
        <tr><td><strong>Mumbai ⇄ Nashik</strong></td><td>₹380</td><td>Every 30–45 mins</td><td>~4.5 hrs</td></tr>
        <tr><td><strong>Pune ⇄ Kolhapur</strong></td><td>₹430</td><td>Every 30 mins</td><td>~5 hrs</td></tr>
        <tr><td><strong>Mumbai ⇄ Shirdi</strong></td><td>₹490</td><td>Hourly departures</td><td>~5.5 hrs</td></tr>
        <tr><td><strong>Pune ⇄ Aurangabad</strong></td><td>₹450</td><td>Every 45 mins</td><td>~5 hrs</td></tr>
      </table>

      <h2>How to Book Shivshahi Bus Tickets</h2>
      <ol>
        <li>Visit the official booking portal <a href="https://npublic.msrtcors.com" target="_blank" rel="noopener">npublic.msrtcors.com</a>.</li>
        <li>Select origin, destination, and travel date. Filter bus type by selecting <strong>AC Shivshahi</strong>.</li>
        <li>Choose preferred seats on the digital seat chart.</li>
        <li>Enter passenger details. Female passengers can avail the <strong>50% Mahila Samman concession</strong> on eligible routes.</li>
        <li>Pay via UPI, credit/debit card, or net banking and receive your instant digital SMS/PDF ticket.</li>
      </ol>`,
    faq: [
      { q: 'How much is a Shivshahi bus ticket from Nagpur to Pune?', a: 'Shivshahi seater ticket price from Nagpur to Pune is approximately ₹1,240, while Shivshahi AC Sleeper fare starts around ₹1,480. Fares vary depending on route stages and toll revisions.' },
      { q: 'Is Mahila Samman 50% discount applicable on Shivshahi buses?', a: 'Yes, female passengers travelling within Maharashtra state borders receive a 50% fare concession on MSRTC Shivshahi AC buses under the Mahila Samman Yojana.' },
      { q: 'What is the ticket price for Solapur to Pune Shivshahi bus?', a: 'The indicative ticket price for an AC Shivshahi bus from Solapur to Pune is approximately ₹465.' },
      { q: 'Can I book Shivshahi sleeper seats online?', a: 'Yes, advance reservation for both Shivshahi 2x2 seater and 2x1 sleeper coaches is available on npublic.msrtcors.com and the MSRTC Bus Reservation mobile app.' },
    ],
  },
  {
    slug: 'shivneri-volvo-bus-timings-booking-fare',
    navLabel: 'Shivneri Volvo bus timings & booking',
    title: 'Shivneri Volvo Bus Timings, Ticket Price & Booking — MSRTC',
    description: 'Guide to MSRTC Shivneri & E-Shivneri Volvo buses: Mumbai to Pune timetable, Dadar-Swargate departures, ticket fares, amenities and online reservation.',
    h1: 'MSRTC Shivneri Volvo & E-Shivneri Bus Timings, Fares & Booking',
    bodyHtml: `
      <p><strong>MSRTC Shivneri</strong> (शिवनेरी बस) is the flagship multi-axle luxury coach service of Maharashtra State Road Transport Corporation. Running non-stop primarily along the Yashwantrao Chavan Mumbai–Pune Expressway, Shivneri Volvo, Scania, and new electric <strong>E-Shivneri</strong> buses represent the gold standard in premium intercity public transit in India.</p>

      <h2>Expressway Shivneri Terminals</h2>
      <p>Shivneri buses depart round-the-clock from multiple boarding points in Mumbai and Pune:</p>
      <ul>
        <li><strong>Pune Terminals:</strong> Swargate Bus Station, Pune Railway Station (Platform 1 Stand), Wakad Ginger Hotel Stand, and Hinjawadi Bridge.</li>
        <li><strong>Mumbai Terminals:</strong> Dadar Asiad Stand (Pritam Hotel), Borivali Sukurwadi, Thane Vandana, and Mumbai Central.</li>
      </ul>

      <h2>Shivneri Fares & Frequency</h2>
      <table>
        <tr><th>Route</th><th>Service Type</th><th>Frequency</th><th>Indicative Fare</th></tr>
        <tr><td><strong>Pune (Swargate) ⇄ Mumbai (Dadar)</strong></td><td>Volvo / E-Shivneri AC</td><td>Every 15–20 mins (24x7)</td><td>₹520</td></tr>
        <tr><td><strong>Pune (Station) ⇄ Thane (Vandana)</strong></td><td>Volvo / E-Shivneri AC</td><td>Every 30 mins</td><td>₹510</td></tr>
        <tr><td><strong>Pune (Wakad) ⇄ Borivali (Sukurwadi)</strong></td><td>Volvo / E-Shivneri AC</td><td>Every 30–45 mins</td><td>₹560</td></tr>
        <tr><td><strong>Pune ⇄ Kolhapur Central</strong></td><td>Shivneri Volvo Multi-Axle</td><td>Every 60 mins</td><td>₹680</td></tr>
      </table>

      <h2>E-Shivneri Electric Fleet</h2>
      <p>MSRTC has electrified a substantial portion of the Mumbai–Pune fleet with 12-meter air-conditioned electric buses. E-Shivneri provides a zero-emission, noiseless travel experience with identical fares, onboard CCTV surveillance, emergency SOS buttons, and high-speed USB-C fast charging at each seat.</p>`,
    faq: [
      { q: 'How frequent are Shivneri buses between Mumbai Dadar and Pune Swargate?', a: 'Shivneri buses depart every 15 to 20 minutes round-the-clock (24 hours a day, 7 days a week) between Dadar and Swargate via the Mumbai-Pune Expressway.' },
      { q: 'What is the ticket price of a Shivneri bus from Mumbai to Pune?', a: 'The indicative ticket price for a Shivneri Volvo or E-Shivneri electric bus between Dadar (Mumbai) and Pune is approximately ₹520.' },
      { q: 'Does Shivneri bus stop for refreshments?', a: 'Yes, Shivneri buses operating on the Mumbai-Pune Expressway stop for a designated 15–20 minute food break at food courts along the expressway.' },
      { q: 'Where do I book Shivneri tickets in advance?', a: 'Book directly on npublic.msrtcors.com or use the MSRTC Bus Reservation mobile app. Current seats are also bookable at Dadar Asiad and Swargate counter windows.' },
    ],
  },
  {
    slug: 'msrtc-bus-pass-concessions-students-senior-citizens',
    navLabel: 'MSRTC bus pass & travel concessions',
    title: 'MSRTC Bus Pass & Travel Concessions: Students & Seniors Guide',
    description: 'Complete guide to MSRTC bus passes, monthly student pass schemes, Mahila Samman 50% discount, and 100% free travel for 75+ senior citizens in Maharashtra.',
    h1: 'MSRTC Bus Pass Online, Student Passes & Travel Concession Schemes',
    bodyHtml: `
      <p>Maharashtra State Road Transport Corporation provides statutory social welfare concessions and subsidized bus passes for students, senior citizens, female commuters, persons with disabilities, and state awardees. Understanding the eligibility criteria and documentation requirements ensures seamless travel across Maharashtra.</p>

      <h2>Major MSRTC Travel Concession Schemes</h2>
      <table>
        <tr><th>Scheme Name</th><th>Eligible Beneficiaries</th><th>Discount Percentage</th><th>Permitted Bus Classes</th></tr>
        <tr><td><strong>Mahila Samman Yojana</strong></td><td>All female passengers in Maharashtra</td><td><strong>50% Concession</strong></td><td>Parivartan, Hirkani, Shivshahi</td></tr>
        <tr><td><strong>Amrit Varishtha Nagrik Yojana</strong></td><td>Senior citizens aged 75 years and above</td><td><strong>100% Free Travel</strong></td><td>All MSRTC bus classes except Volvo</td></tr>
        <tr><td><strong>Senior Citizens (65–74 Yrs)</strong></td><td>Senior citizens aged 65 to 74 years</td><td><strong>50% Concession</strong></td><td>Parivartan, Hirkani, Shivshahi</td></tr>
        <tr><td><strong>Ahilyabai Holkar Scheme</strong></td><td>Girl students up to 12th standard</td><td><strong>100% Free Travel</strong></td><td>Ordinary village/school buses</td></tr>
        <tr><td><strong>Monthly Student Pass</strong></td><td>School & college students</td><td><strong>66.67% Subsidized</strong></td><td>Ordinary district & rural routes</td></tr>
        <tr><td><strong>Divyangjan Concession</strong></td><td>Persons with 40%+ benchmark disabilities</td><td><strong>Up to 75% Discount</strong></td><td>All standard buses (with escort allowance)</td></tr>
      </table>

      <h2>How to Apply for an MSRTC Bus Pass</h2>
      <ol>
        <li><strong>Obtain the Form:</strong> Download the pass application form from <a href="https://msrtc.maharashtra.gov.in" target="_blank" rel="noopener">msrtc.maharashtra.gov.in</a> or collect it from your local bus depot pass counter.</li>
        <li><strong>Institutional Verification:</strong> Students must have the application signed and stamped by the school headmaster or college principal.</li>
        <li><strong>Required Documents:</strong> Attach photocopy of Aadhaar Card, bona fide student certificate or age proof, and two passport-size photographs.</li>
        <li><strong>Fee Submission:</strong> Submit the verified form at the depot pass window and pay the subsidized monthly or quarterly pass fee.</li>
        <li><strong>Smart Card Issuance:</strong> Collect your computerized MSRTC Smart Pass card for contactless validation during journeys.</li>
      </ol>`,
    faq: [
      { q: 'Is bus travel free for women in Maharashtra ST buses?', a: 'Under the Mahila Samman Yojana, all women passengers receive a 50% discount on ticket fares across all standard MSRTC buses including Parivartan, Hirkani, and Shivshahi.' },
      { q: 'What is the age requirement for free senior citizen bus travel in Maharashtra?', a: 'Citizens aged 75 years and above travel 100% free under the Amrit Varishtha Nagrik Yojana upon showing government age proof such as an Aadhaar card.' },
      { q: 'How do students get a monthly bus pass for MSRTC?', a: 'Students can collect the pass form from their nearest MSRTC depot, get it certified by their educational institution, and submit it with Aadhaar and school ID to obtain a subsidized pass.' },
      { q: 'Can I use a senior citizen pass on Shivneri Volvo buses?', a: 'Free travel schemes for 75+ seniors generally apply to Parivartan ordinary, Hirkani semi-luxury, and Shivshahi AC buses. Premium Shivneri Volvo services have specific separate tariff regulations.' },
    ],
  },
  {
    slug: 'msrtc-parcel-cargo-courier-booking',
    navLabel: 'MSRTC parcel & cargo booking',
    title: 'MSRTC Parcel & Cargo Service: Booking, Rates & Tracking Guide',
    description: 'How to send parcels via MSRTC bus cargo courier service across Maharashtra: booking counters, weight tariff slabs, delivery timelines and tracking.',
    h1: 'MSRTC Parcel & Goods Cargo Courier Booking Guide',
    bodyHtml: `
      <p>Maharashtra State Road Transport Corporation operates an extensive statewide parcel and courier network utilizing the luggage compartments of its 14,000+ daily buses. The <strong>MSRTC Parcel and Cargo Service</strong> provides affordable same-day and next-day point-to-point courier delivery connecting over 250 bus depots across Maharashtra.</p>

      <h2>Why Use MSRTC Cargo Service?</h2>
      <ul>
        <li><strong>Widespread Reach:</strong> Reaches remote talukas and rural villages where private courier companies have no distribution presence.</li>
        <li><strong>High Frequency:</strong> Consignments travel on the next scheduled express departure, ensuring rapid inter-district delivery.</li>
        <li><strong>Affordable Tariffs:</strong> Highly competitive government-regulated weight and volume slab rates compared to commercial air or surface couriers.</li>
        <li><strong>Safety & Reliability:</strong> Registered parcel booking with printed consignment notes and station master custody.</li>
      </ul>

      <h2>Step-by-Step Parcel Booking Process</h2>
      <ol>
        <li><strong>Package Securely:</strong> Pack your items in sturdy cartons or gunny bags with recipient details, contact phone number, and destination depot clearly marked.</li>
        <li><strong>Visit the Parcel Counter:</strong> Take your package to the official MSRTC Parcel Booking Office at the origin bus station (usually located adjacent to the parcel godown).</li>
        <li><strong>Weighing & Documentation:</strong> The parcel clerk inspects, weighs, and measures the consignment to determine the applicable rate slab.</li>
        <li><strong>Receive Consignment Note:</strong> Pay the freight charges and collect the stamped Parcel Booking Receipt (LR / Lorry Receipt) containing your tracking number.</li>
        <li><strong>Recipient Collection:</strong> The receiver visits the destination depot parcel godown with the LR number and valid photo identity card to claim the parcel.</li>
      </ol>`,
    faq: [
      { q: 'How long does an MSRTC parcel take to reach another city?', a: 'Parcels dispatched on direct intercity buses typically arrive on the same day (within 4 to 8 hours for routes like Mumbai-Pune or Pune-Nashik) or early next morning for overnight long-distance routes.' },
      { q: 'Where do I collect parcels sent via MSRTC ST bus?', a: 'Parcels must be collected from the official MSRTC Parcel Office / Godown located inside the destination bus stand upon presenting the consignment receipt number and photo ID.' },
      { q: 'Are perishable items or liquids permitted in MSRTC cargo?', a: 'Standard commercial items, spare parts, documents, dry goods, and luggage are accepted. Perishable goods must be booked on direct non-stop routes. Hazardous or inflammable materials are strictly prohibited.' },
      { q: 'Who do I contact for MSRTC parcel delivery inquiries?', a: 'Contact the Parcel Supervisor at the respective bus depot or call the statewide MSRTC helpline at 1800-22-1250.' },
    ],
  },
];
