# Feature 001: Layout & Navigation - Testing Checklist

## Prerequisites
- [ ] Upgrade Node.js to version 18+ or 20 LTS
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Start dev server: `npx nuxt dev`
- [ ] Verify server starts on http://localhost:3000

---

## T033: Layout Rendering Performance (<50ms)

**Goal**: Verify layout renders in under 50ms (Success Criteria SC-005)

**Steps**:
1. Open Chrome DevTools (F12)
2. Navigate to Performance tab
3. Click Record button
4. Load homepage (http://localhost:3000)
5. Stop recording
6. Find "Layout" events in the timeline
7. Verify total layout time < 50ms

**Expected**: Layout time < 50ms
**Actual**: ___ ms

---

## T034: Responsive Breakpoints

**Goal**: Test layout at various breakpoints

**Breakpoints to test**:
- [ ] 375px (Mobile - iPhone SE)
- [ ] 414px (Mobile - iPhone Pro Max)
- [ ] 768px (Tablet - iPad) ← **Critical breakpoint**
- [ ] 1024px (Desktop)
- [ ] 1280px (Large Desktop)

**Steps**:
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test each breakpoint above

**At < 768px (Mobile)**:
- [ ] Hamburger menu icon visible
- [ ] Desktop menu hidden
- [ ] Footer: 1 column layout

**At ≥ 768px (Desktop)**:
- [ ] Hamburger menu hidden
- [ ] Desktop horizontal menu visible
- [ ] Footer: 4 column grid layout

---

## T035: Cumulative Layout Shift (CLS = 0)

**Goal**: Verify no layout shift during page load

**Steps**:
1. Open Chrome DevTools (F12)
2. Navigate to Lighthouse tab
3. Select "Performance" category
4. Click "Analyze page load"
5. Check CLS metric

**Expected**: CLS = 0 (no layout shift)
**Actual**: CLS = ___

---

## T036: Navigation Links

**Goal**: Test all navigation links navigate correctly

**Menu Items** (test from any page):
- [ ] Home → / (index page)
- [ ] About → /about
- [ ] Courses → /courses
- [ ] Coaches → /coaches
- [ ] Contact → /contact

**Steps for each link**:
1. Click menu link
2. Verify correct page loads
3. Check URL matches expected route
4. Verify content displays

---

## T037: Footer External Links

**Goal**: Verify external links open in new tab with security attributes

**Footer Links to Check**:
- [ ] Email Us (mailto:info@inneracademy.com)
- [ ] Privacy Policy → /privacy (internal, same tab)
- [ ] Terms of Service → /terms (internal, same tab)

**Social Links** (all should open in new tab):
- [ ] Facebook → https://facebook.com/inneracademy
- [ ] Instagram → https://instagram.com/inneracademy
- [ ] Line → https://line.me/ti/p/@inneracademy

**Verification**:
1. Right-click link → Inspect
2. Verify attributes:
   - `target="_blank"` (opens new tab)
   - `rel="noopener noreferrer"` (security)
3. Click link
4. Verify new tab opens (for external) or same tab (for internal)

---

## T038: Mobile Menu Auto-Close

**Goal**: Test hamburger menu closes automatically on navigation

**Steps**:
1. Resize browser to < 768px (mobile view)
2. Click hamburger icon to open menu
3. Verify menu is open and visible
4. Click any menu item (e.g., "About")
5. Verify menu closes automatically
6. Verify page navigates to correct route

**Expected**: Menu closes immediately after link click

---

## T039: Active Link Highlighting

**Goal**: Verify active link highlights on all pages

**Steps**:
1. Navigate to homepage (/)
2. Verify "Home" link has:
   - Blue text color (`text-blue-600`)
   - Bottom border (`border-b-2 border-blue-600`)
3. Navigate to /about
4. Verify "About" link is now highlighted
5. Repeat for all pages: /courses, /coaches, /contact

**Desktop**: Check horizontal menu
**Mobile**: Check hamburger menu (should show `bg-blue-50 text-blue-600 font-semibold`)

---

## T040: Logo Returns to Homepage

**Goal**: Test logo click from any page returns to homepage

**Steps**:
1. Navigate to /about
2. Click "Inner Academy" logo
3. Verify navigation to / (homepage)
4. Repeat from /courses, /coaches, /contact

**Expected**: Logo always returns to homepage

---

## T029 & T041: Lighthouse Audit

**Goal**: Run comprehensive Lighthouse audit

**Steps**:
1. Open Chrome DevTools (F12)
2. Navigate to Lighthouse tab
3. Select all categories:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. Device: Desktop
5. Click "Analyze page load"

**Expected Scores**:
- [ ] Performance ≥ 90
- [ ] Accessibility = 100
- [ ] Best Practices ≥ 90
- [ ] SEO (informational)

**Actual Scores**:
- Performance: ___ / 100
- Accessibility: ___ / 100
- Best Practices: ___ / 100
- SEO: ___ / 100

**If scores are low**:
- Review Lighthouse recommendations
- Fix issues and re-test

---

## T029: Keyboard Navigation Testing

**Goal**: Test keyboard-only navigation (Tab, Enter)

**Setup**:
1. Disconnect mouse or don't use it
2. Load homepage (http://localhost:3000)
3. Press Tab repeatedly

**Expected Tab Order**:
1. [ ] Logo ("Inner Academy")
2. [ ] Home link
3. [ ] About link
4. [ ] Courses link
5. [ ] Coaches link
6. [ ] Contact link
7. [ ] Main content (if interactive)
8. [ ] Footer "Quick Links" section links
9. [ ] Footer "Contact" section links
10. [ ] Footer "Legal" section links
11. [ ] Footer social links (Facebook, Instagram, Line)

**Verification**:
- [ ] All links have visible focus indicator (blue outline)
- [ ] Focus order is logical (top to bottom, left to right)
- [ ] No focus traps (can Tab through entire page)
- [ ] Pressing Enter on focused link navigates correctly

**Mobile Menu** (< 768px):
- [ ] Tab to hamburger button
- [ ] Press Enter to open menu
- [ ] Tab through menu items
- [ ] Press Enter on menu item to navigate
- [ ] Menu closes after navigation

---

## T042: Mobile Menu Outside Click (Optional Enhancement)

**Goal**: Test if clicking outside menu closes it

**Steps**:
1. Resize to < 768px (mobile)
2. Click hamburger to open menu
3. Click anywhere outside the menu area (e.g., on page content)
4. Check if menu closes

**Note**: This is optional - current implementation closes menu on:
- Menu item click
- Route change
- Manual hamburger click

**If implementing**:
- Add click handler on overlay/backdrop
- Or add `@clickOutside` directive

---

## T043: Screen Reader Testing

**Goal**: Verify ARIA labels work with screen readers

**Screen Readers**:
- Windows: NVDA (free) or JAWS
- Mac: VoiceOver (built-in)
- Linux: Orca

**Steps (NVDA on Windows)**:
1. Download and install NVDA
2. Start NVDA
3. Load homepage
4. Use arrow keys to navigate

**Expected Announcements**:
- [ ] "Inner Academy, link" (logo)
- [ ] "Main navigation, navigation" (desktop menu)
- [ ] "Home, link"
- [ ] "Toggle mobile menu, button" (mobile)
- [ ] "Quick Links navigation" (footer section)
- [ ] "Social media links navigation"
- [ ] "Visit our Facebook page, link" (social links)

**Verification**:
- All interactive elements announced
- ARIA labels read correctly
- Navigation regions identified
- Button states announced (expanded/collapsed)

---

## T044: HTML Semantics Validation

**Goal**: Verify proper semantic HTML elements

**Steps**:
1. Right-click page → View Page Source
2. Check for proper semantic structure

**Expected Structure**:
```html
<body>
  <div id="__nuxt">
    <div class="min-h-screen flex flex-col">
      <header>          <!-- TheHeader component -->
        <nav aria-label="Main navigation">
          ...
        </nav>
      </header>
      
      <main class="flex-1">  <!-- Page content -->
        ...
      </main>
      
      <footer>          <!-- TheFooter component -->
        <nav aria-label="...navigation">
          ...
        </nav>
      </footer>
    </div>
  </div>
</body>
```

**Verification**:
- [ ] `<header>` wraps header component
- [ ] `<nav>` wraps navigation menus
- [ ] `<main>` wraps page content
- [ ] `<footer>` wraps footer component
- [ ] ARIA labels on navigation elements
- [ ] Proper heading hierarchy (h1, h2, h3)

---

## Additional Testing

### Cross-Browser Testing
Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)

### Mobile Device Testing
Test on actual devices:
- [ ] iPhone/iOS Safari
- [ ] Android Chrome
- [ ] Tablet (iPad)

### Network Throttling
Test with slow connection:
1. DevTools → Network tab
2. Set throttle to "Slow 3G"
3. Reload page
4. Verify layout doesn't shift during load
5. Check perceived performance

---

## Sign-Off

**Tester**: ___________________
**Date**: ___________________

**All Tests Passed**: [ ] Yes [ ] No

**Issues Found**:
_____________________________________________
_____________________________________________
_____________________________________________

**Notes**:
_____________________________________________
_____________________________________________
_____________________________________________
