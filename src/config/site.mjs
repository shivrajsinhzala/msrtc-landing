export const SITE = 'https://msrtc.shivrajsinh.in';

// Bump when page content really changes: drives visible dates, dateModified and sitemap lastmod.
export const LAST_UPDATED = '2026-11-05';

// Latest fare revision we can cite. Route fares in routes.data.mjs have NOT been re-priced against it.
export const FARE_REVISION = {
  label: '13.56% fare revision approved by the State Transport Authority, effective 18 July 2026',
  sourceName: 'PTI via Free Press Journal',
  sourceUrl: 'https://www.freepressjournal.in/mumbai/maharashtra-approves-1356-msrtc-bus-fare-hike-effective-july-18',
};

export const SITE_CONFIG = {
  id: 'msrtc',
  name: 'Maharashtra',
  corporation: 'MSRTC',
  corporationFull: 'Maharashtra State Road Transport Corporation',
  brand: 'MSRTC ST Bus Info',
  tagline: 'Maharashtra ST Bus Timetables, Ticket Prices & Station Enquiry Directory',
  officialSite: 'https://msrtc.maharashtra.gov.in',
  bookingPortal: 'https://npublic.msrtcors.com',
  helpline: {
    primary: '1800-22-1250',
    label: '24x7 Toll-Free MSRTC Passenger Helpline',
  },
  // GA4 property "MSRTC ST Bus Info - msrtc.shivrajsinh.in" (created 5 Nov 2026), web stream 16273614500.
  gaId: 'G-TNMT12SWTM',
  adClient: 'ca-pub-7164999486301748',
  adSlot: '5213571252',
  htmlLang: 'en-IN',
};
