# Website URL Structure Analysis

## Base Domain
**Domain:** `https://foreignescort.in`

---

## URL Structure Overview

### 1. **Homepage (Root Level)**
- **URL:** `https://foreignescort.in/`
- **File:** `src/app/page.tsx`
- **Priority:** 1.0 (Highest)
- **Type:** Static page
- **Content:** Chennai-focused homepage with city links

---

### 2. **Static Pages (Root Level)**
All static pages follow the pattern: `/{slug}/`

| URL | File Location | Priority | Change Frequency |
|-----|--------------|----------|------------------|
| `/about` | `src/app/about/page.tsx` | 0.8 | Monthly |
| `/contact` | `src/app/contact/page.tsx` | 0.8 | Monthly |
| `/gallery` | `src/app/gallery/page.tsx` | 0.7 | Weekly |
| `/blog` | `src/app/blog/page.tsx` | 0.7 | Weekly |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | 0.3 | Yearly |
| `/terms-of-service` | `src/app/terms-of-service/page.tsx` | 0.3 | Yearly |
| `/disclaimer` | `src/app/disclaimer/page.tsx` | 0.3 | Yearly |

---

### 3. **City Pages (Main Category)**
**Pattern:** `/{city-slug}/`

All city pages follow the format: `{city-name}-russian-escorts`

| City | URL | File Location | Priority |
|------|-----|---------------|----------|
| Goa | `/goa-russian-escorts` | `src/app/goa-russian-escorts/page.tsx` | 0.9 |
| Jaipur | `/jaipur-russian-escorts` | `src/app/jaipur-russian-escorts/page.tsx` | 0.9 |
| Chennai | `/chennai-russian-escorts` | (Homepage - `/` focuses on Chennai) | 0.9 |
| Bangalore | `/bangalore-russian-escorts` | `src/app/bangalore-russian-escorts/page.tsx` | 0.9 |
| Delhi NCR | `/delhi-ncr-russian-escorts` | `src/app/delhi-ncr-russian-escorts/page.tsx` | 0.9 |
| Mumbai | `/mumbai-russian-escorts` | `src/app/mumbai-russian-escorts/page.tsx` | 0.9 |
| Hyderabad | `/hyderabad-russian-escorts` | `src/app/hyderabad-russian-escorts/page.tsx` | 0.9 |
| Pune | `/pune-russian-escorts` | `src/app/pune-russian-escorts/page.tsx` | 0.9 |
| Kolkata | `/kolkata-russian-escorts` | `src/app/kolkata-russian-escorts/page.tsx` | 0.9 |

**Total:** 9 city pages

---

### 4. **Service Area Pages (Two-Level Structure)**

#### 4A. **Nested Service Areas (Most Cities)**
**Pattern:** `/{city-slug}/{service-area-slug}/`

**Example URLs:**
- `/goa-russian-escorts/candolim-escorts`
- `/goa-russian-escorts/calangute-escorts`
- `/bangalore-russian-escorts/koramangala-escorts`
- `/mumbai-russian-escorts/bandra-escorts`
- `/delhi-ncr-russian-escorts/aerocity-escorts`
- `/hyderabad-russian-escorts/jubilee-hills-escorts`
- `/pune-russian-escorts/koregaon-park-escorts`
- `/kolkata-russian-escorts/park-street-escorts`
- `/jaipur-russian-escorts/pink-city-escorts`

**File Pattern:** `src/app/{city-slug}/{service-area-slug}/page.tsx`

**Priority:** 0.8 | **Change Frequency:** Weekly

#### 4B. **Root-Level Service Areas (Chennai Only - Special Case)**
**Pattern:** `/{service-area-slug}/` (Direct root access)

These Chennai service areas are accessible at both root and nested levels:

| Service Area | Root URL | Nested URL (also works) |
|--------------|----------|------------------------|
| Adyar | `/adyar-escorts` | `/chennai-russian-escorts/adyar-escorts` |
| Anna Nagar | `/anna-nagar-escorts` | `/chennai-russian-escorts/anna-nagar-escorts` |
| Arumbakkam | `/arumbakkam-escorts` | `/chennai-russian-escorts/arumbakkam-escorts` |
| ECR | `/ecr-escorts` | `/chennai-russian-escorts/ecr-escorts` |
| Egmore | `/egmore-escorts` | `/chennai-russian-escorts/egmore-escorts` |
| Guindy | `/guindy-escorts` | `/chennai-russian-escorts/guindy-escorts` |
| Kilpauk | `/kilpauk-escorts` | `/chennai-russian-escorts/kilpauk-escorts` |
| Marina Beach | `/marina-beach-escorts` | `/chennai-russian-escorts/marina-beach-escorts` |
| Nungambakkam | `/nungambakkam-escorts` | `/chennai-russian-escorts/nungambakkam-escorts` |
| OMR | `/omr-escorts` | `/chennai-russian-escorts/omr-escorts` |
| Tidel Park | `/tidel-park-escorts` | `/chennai-russian-escorts/tidel-park-escorts` |
| T Nagar | `/t-nagar-escorts` | `/chennai-russian-escorts/t-nagar-escorts` |
| Velachery | `/velachery-escorts` | `/chennai-russian-escorts/velachery-escorts` |
| Airport Zone | `/airport-zone-escorts` | `/chennai-russian-escorts/airport-zone-escorts` |

**File Pattern:** `src/app/{service-area-slug}/page.tsx`

**Total Root-Level Service Areas:** 14 (Chennai-specific)

**Priority:** 0.8 | **Change Frequency:** Weekly

---

### 5. **Hotel Pages (Dynamic Route)**
**Pattern:** `/hotels/{city-name}/{hotel-slug}/`

**Dynamic Route:** `src/app/hotels/[city]/[hotel]/page.tsx`

**City Name Mapping (URL format vs. Internal slug):**
- `chennai` → `chennai-russian-escorts`
- `goa` → `goa-russian-escorts`
- `jaipur` → `jaipur-russian-escorts`
- `bangalore` → `bangalore-russian-escorts`
- `delhi-ncr` → `delhi-ncr-russian-escorts`
- `mumbai` → `mumbai-russian-escorts`
- `hyderabad` → `hyderabad-russian-escorts`
- `kolkata` → `kolkata-russian-escorts`
- `pune` → `pune-russian-escorts`

**Example URLs:**
- `/hotels/chennai/taj-coromandel-escorts`
- `/hotels/chennai/leela-palace-escorts`
- `/hotels/goa/taj-exotica-escorts`
- `/hotels/mumbai/taj-mahal-palace-escorts`

**Priority:** 0.7 | **Change Frequency:** Weekly

---

## URL Structure Patterns Summary

### Hierarchy:
```
/ (Homepage)
├── /about
├── /contact
├── /gallery
├── /blog
├── /privacy-policy
├── /terms-of-service
├── /disclaimer
├── /{city-slug}/ (City pages)
│   ├── /{city-slug}/{service-area-slug}/ (Nested service areas)
│   └── /hotels/{city-name}/{hotel-slug}/ (Hotel pages)
└── /{service-area-slug}/ (Chennai root-level service areas - 14 pages)
```

---

## URL Naming Conventions

### 1. **City Slugs**
- Format: `{city-name}-russian-escorts`
- Examples: `goa-russian-escorts`, `bangalore-russian-escorts`, `delhi-ncr-russian-escorts`
- All lowercase, hyphens for spaces
- Always ends with `-russian-escorts`

### 2. **Service Area Slugs**
- Format: `{area-name}-escorts`
- Examples: `candolim-escorts`, `koramangala-escorts`, `bandra-escorts`
- All lowercase, hyphens for spaces
- Always ends with `-escorts`

### 3. **Hotel Slugs**
- Format: `{hotel-name}-escorts`
- Examples: `taj-coromandel-escorts`, `leela-palace-escorts`
- All lowercase, hyphens for spaces
- Always ends with `-escorts`

### 4. **Static Page Slugs**
- Format: `{page-name}` or `{page-name}-{page-name}`
- Examples: `about`, `privacy-policy`, `terms-of-service`
- All lowercase, hyphens for spaces

---

## Special URL Patterns

### 1. **Chennai Service Areas - Dual Access**
Chennai service areas have **two URL paths** that both work:
- **Root level:** `/adyar-escorts` (Direct access)
- **Nested level:** `/chennai-russian-escorts/adyar-escorts` (Nested access)

This creates **14 duplicate URL paths** for Chennai service areas.

### 2. **Hotel Pages - City Name Conversion**
Hotel URLs use simplified city names:
- Internal slug: `delhi-ncr-russian-escorts`
- URL: `/hotels/delhi-ncr/...`

---

## URL Count Estimate

Based on sitemap structure:

1. **Static Pages:** 8 pages
2. **City Pages:** 9 pages
3. **Service Area Pages (Nested):** ~90+ pages (varies by city)
4. **Service Area Pages (Root - Chennai):** 14 pages
5. **Hotel Pages:** ~100+ pages (varies by city)

**Estimated Total:** 220+ pages

---

## SEO Considerations

### Current Issues:

1. **Duplicate URLs for Chennai Service Areas**
   - Same content accessible at two different URLs
   - Example: `/adyar-escorts` and `/chennai-russian-escorts/adyar-escorts`
   - **Recommendation:** Use canonical URLs to prevent duplicate content issues

2. **Inconsistent Service Area Structure**
   - Most cities use nested structure: `/{city}/{area}`
   - Chennai has root-level access: `/{area}`
   - **Recommendation:** Standardize to one structure for consistency

3. **Hotel URL Pattern**
   - Uses different city naming (`chennai` vs `chennai-russian-escorts`)
   - **Recommendation:** Consider aligning with city slug pattern for consistency

### Positive Aspects:

1. ✅ Clean, SEO-friendly URLs (lowercase, hyphens)
2. ✅ Descriptive slugs that include keywords
3. ✅ Hierarchical structure for better organization
4. ✅ Consistent naming patterns within each category
5. ✅ Proper sitemap generation

---

## Recommendations

### 1. **URL Consistency**
- Consider standardizing Chennai service areas to only use nested structure
- Or implement proper 301 redirects from root-level to nested URLs
- Add canonical tags to prevent duplicate content penalties

### 2. **Hotel URL Structure**
- Consider using: `/hotels/{city-slug}/{hotel-slug}` instead of simplified city names
- Example: `/hotels/chennai-russian-escorts/taj-coromandel-escorts`

### 3. **Internal Linking**
- Ensure consistent internal linking structure
- Use canonical URLs in all service area pages

### 4. **Sitemap Optimization**
- Verify all URLs in sitemap are accessible
- Check for broken links
- Ensure proper priority and change frequency settings

---

## Technical Implementation

### Next.js App Router Structure:
- Uses file-based routing
- Static routes: `src/app/{slug}/page.tsx`
- Dynamic routes: `src/app/{param}/[dynamic]/page.tsx`
- Nested routes: `src/app/{parent}/{child}/page.tsx`

### URL Generation:
- Cities: Defined in `src/lib/cities.ts`
- Service Areas: Defined in `src/lib/serviceAreas/`
- Hotels: Defined in `src/lib/hotels/`
- Sitemap: Auto-generated in `src/app/sitemap.ts`

