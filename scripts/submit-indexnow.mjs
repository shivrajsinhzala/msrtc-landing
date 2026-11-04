#!/usr/bin/env node
/**
 * Submit all URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITEMAP = path.join(ROOT, 'dist', 'sitemap-0.xml');
const HOST = 'msrtc.shivrajsinh.in';
const KEY = '9f4c3a2b1e8d7c6b5a4f3e2d1c0b9a8f';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

if (!fs.existsSync(SITEMAP)) {
  console.error('dist/sitemap-0.xml not found! Run npm run build first.');
  process.exit(1);
}

const content = fs.readFileSync(SITEMAP, 'utf8');
const matches = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`Found ${matches.length} URLs in sitemap for ${HOST}.`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: matches,
};

const endpoints = [
  'https://yandex.com/indexnow',
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

async function submit() {
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`${ep} status: ${res.status} ${res.statusText}`);
      if (res.ok || res.status === 200 || res.status === 202) {
        console.log(`✓ Successfully submitted to ${ep}`);
      } else {
        const txt = await res.text();
        console.warn(`${ep} returned: ${txt}`);
      }
    } catch (err) {
      console.error(`Error submitting to ${ep}:`, err.message);
    }
  }
}

submit();
