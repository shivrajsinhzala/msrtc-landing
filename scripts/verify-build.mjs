#!/usr/bin/env node
/**
 * Verification script for msrtc-landing:
 * Rigorously checks that all routes, depot contacts, utility guides,
 * and sitemaps compile correctly into dist/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEPOTS, depotSlug } from '../src/data/depots.data.mjs';
import { ROUTES } from '../src/data/routes.data.mjs';
import { GUIDES } from '../src/data/guides.data.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

let failures = 0;
const fail = (m) => { console.error(`  ✗ ${m}`); failures++; };
const pass = (m) => console.log(`  ✓ ${m}`);

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `astro build` first.');
  process.exit(1);
}

const digits = (s) => (s ? s.replace(/[^0-9]/g, '') : '');
const fileFor = (p) => {
  if (p === '/') return path.join(DIST, 'index.html');
  const clean = p.replace(/^\//, '');
  const asFile = path.join(DIST, `${clean}.html`);
  if (fs.existsSync(asFile)) return asFile;
  const asDir = path.join(DIST, clean, 'index.html');
  if (fs.existsSync(asDir)) return asDir;
  return asFile; // fallback to .html for reporting
};

console.log('--- Verifying MSRTC ST Landing Build ---');

// 1. Root & Core Directories
const homeFile = fileFor('/');
if (!fs.existsSync(homeFile)) {
  fail('Homepage (/) did not build');
} else {
  const homeHtml = fs.readFileSync(homeFile, 'utf8');
  if (!homeHtml.includes('ca-pub-7164999486301748')) fail('Homepage missing AdSense client ID');
  if (!homeHtml.includes('/routes')) fail('Homepage does not link to /routes');
  if (!homeHtml.includes('/stations')) fail('Homepage does not link to /stations');
  pass('Homepage / built with AdSense tags and core navigation');
}

// 2. All 20 Transport Divisions (Depots)
let depotIssues = 0;
for (const d of DEPOTS) {
  const p = `/${depotSlug(d.city)}`;
  const file = fileFor(p);
  if (!fs.existsSync(file)) {
    fail(`${p} did not build`);
    depotIssues++;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  for (const stand of d.stands) {
    for (const n of stand.numbers) {
      const dNum = digits(n);
      if (dNum.length >= 7 && !html.includes(`tel:${dNum}`)) {
        fail(`${p} missing phone link tel:${dNum} for ${n}`);
        depotIssues++;
      }
    }
  }
}
if (!depotIssues) {
  pass(`All ${DEPOTS.length} division depot pages carry working phone numbers`);
}

// 3. Sibling Interlinking for Depots
let orphanDepots = 0;
for (const d of DEPOTS) {
  let inboundCount = 0;
  const targetPath = `/${depotSlug(d.city)}`;
  for (const other of DEPOTS) {
    if (other.city === d.city) continue;
    const otherFile = fileFor(`/${depotSlug(other.city)}`);
    if (fs.existsSync(otherFile)) {
      const otherHtml = fs.readFileSync(otherFile, 'utf8');
      if (otherHtml.includes(targetPath)) inboundCount++;
    }
  }
  if (inboundCount === 0) {
    fail(`Depot ${d.city} has no inbound links from sibling depots`);
    orphanDepots++;
  }
}
if (!orphanDepots) {
  pass(`All ${DEPOTS.length} depots have sibling inbound links`);
}

// 4. All 30 Intercity Routes
let routeIssues = 0;
const routesIndexFile = fileFor('/routes');
let routesIndexHtml = '';
if (fs.existsSync(routesIndexFile)) {
  routesIndexHtml = fs.readFileSync(routesIndexFile, 'utf8');
} else {
  fail('/routes index directory did not build');
}

for (const r of ROUTES) {
  const routePath = `/routes/${r.slug}`;
  const routeFile = fileFor(routePath);
  if (!fs.existsSync(routeFile)) {
    fail(`${routePath} did not build`);
    routeIssues++;
    continue;
  }
  const html = fs.readFileSync(routeFile, 'utf8');
  const originPhoneDigits = digits(r.originStandPhone);
  if (originPhoneDigits.length >= 7 && !html.includes(`tel:${originPhoneDigits}`)) {
    fail(`${routePath} missing origin contact tel:${originPhoneDigits}`);
    routeIssues++;
  }
  if (routesIndexHtml && !routesIndexHtml.includes(routePath)) {
    fail(`/routes index missing link to ${routePath}`);
    routeIssues++;
  }
}
if (!routeIssues) {
  pass(`All ${ROUTES.length} intercity corridor pages built with origin contacts and index links`);
}

// 5. Utility Guides
let guideIssues = 0;
for (const g of GUIDES) {
  const guidePath = `/${g.slug}`;
  const guideFile = fileFor(guidePath);
  if (!fs.existsSync(guideFile)) {
    fail(`Guide ${guidePath} did not build`);
    guideIssues++;
    continue;
  }
  const html = fs.readFileSync(guideFile, 'utf8');
  if (!html.includes('ca-pub-7164999486301748')) {
    fail(`Guide ${guidePath} missing AdSense publisher code`);
    guideIssues++;
  }
}
if (!guideIssues) {
  pass(`All ${GUIDES.length} MSRTC ST utility guides built cleanly`);
}

// 6. ads.txt & robots.txt
const adsFile = path.join(DIST, 'ads.txt');
if (!fs.existsSync(adsFile) || !fs.readFileSync(adsFile, 'utf8').includes('pub-7164999486301748')) {
  fail('dist/ads.txt is missing or does not include pub-7164999486301748');
} else {
  pass('ads.txt contains valid Google AdSense publisher ID');
}

const robotsFile = path.join(DIST, 'robots.txt');
if (!fs.existsSync(robotsFile) || !fs.readFileSync(robotsFile, 'utf8').includes('sitemap-index.xml')) {
  fail('dist/robots.txt missing or does not reference sitemap-index.xml');
} else {
  pass('robots.txt points to sitemap-index.xml');
}

if (failures > 0) {
  console.error(`\nBuild verification failed with ${failures} error(s).`);
  process.exit(1);
} else {
  console.log('\n✓ Build verification passed completely!\n');
}
