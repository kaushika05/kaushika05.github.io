"""
Generate botanical / natural line ornaments for the portfolio.

Every form is computed parametrically (log spirals, bezier-guided stems, trig
radials) rather than hand-placed, so the curves stay organic and consistent.
Each ornament collapses into a handful of <path> elements with multiple
subpaths, which keeps the inlined markup small and lets one dash animation
draw the whole thing in.
"""

import math

# ── helpers ────────────────────────────────────────────────────────────────

def f(v):
    s = "%.2f" % v
    if "." in s:
        s = s.rstrip("0").rstrip(".")
    return s or "0"


def P(x, y):
    return "%s %s" % (f(x), f(y))


def rot(x, y, r):
    """Rotate by r radians clockwise (SVG y-down)."""
    c, s = math.cos(r), math.sin(r)
    return x * c - y * s, x * s + y * c


def cubic(p0, p1, p2, p3, t):
    mt = 1 - t
    a, b, c, d = mt ** 3, 3 * mt * mt * t, 3 * mt * t * t, t ** 3
    return (a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
            a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1])


def cubic_tan(p0, p1, p2, p3, t):
    mt = 1 - t
    dx = 3 * mt * mt * (p1[0] - p0[0]) + 6 * mt * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0])
    dy = 3 * mt * mt * (p1[1] - p0[1]) + 6 * mt * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1])
    n = math.hypot(dx, dy) or 1.0
    return dx / n, dy / n


def polyline(pts, close=False):
    d = "M " + " L ".join(P(x, y) for x, y in pts)
    return d + " Z" if close else d


def petal(cx, cy, ang_deg, L, wr=0.24, tip=0.78):
    """Teardrop petal, base at (cx,cy), pointing ang_deg clockwise from up."""
    w = wr * L
    local = [(0, 0), (-w, -0.30 * L), (-w * 0.75, -tip * L), (0, -L),
             (w * 0.75, -tip * L), (w, -0.30 * L), (0, 0)]
    r = math.radians(ang_deg)
    q = [tuple(v + o for v, o in zip(rot(x, y, r), (cx, cy))) for x, y in local]
    return "M %s C %s, %s, %s C %s, %s, %s" % (
        P(*q[0]), P(*q[1]), P(*q[2]), P(*q[3]), P(*q[4]), P(*q[5]), P(*q[6]))


def leaf(cx, cy, ang_deg, L, wr=0.34):
    """Pointed leaf/lanceolate blade."""
    w = wr * L
    local = [(0, 0), (-w, -0.35 * L), (-w * 0.5, -0.85 * L), (0, -L),
             (w * 0.5, -0.85 * L), (w, -0.35 * L), (0, 0)]
    r = math.radians(ang_deg)
    q = [tuple(v + o for v, o in zip(rot(x, y, r), (cx, cy))) for x, y in local]
    return "M %s C %s, %s, %s C %s, %s, %s" % (
        P(*q[0]), P(*q[1]), P(*q[2]), P(*q[3]), P(*q[4]), P(*q[5]), P(*q[6]))


def path(d, w=1.1, extra=""):
    return ('<path pathLength="1" d="%s" stroke-width="%s"%s/>' % (d, f(w), extra))


def dot(cx, cy, r):
    return '<circle class="o-dot" fill="currentColor" stroke="none" cx="%s" cy="%s" r="%s"/>' % (f(cx), f(cy), f(r))


_NUM = __import__("re").compile(r"-?\d+(?:\.\d+)?")


def _bbox(body):
    import re
    xs, ys = [], []
    for d in re.findall(r'\sd="([^"]*)"', body):
        nums = [float(n) for n in _NUM.findall(d)]
        xs += nums[0::2]
        ys += nums[1::2]
    for c in re.finditer(r'<circle[^>]*cx="([-\d.]+)"[^>]*cy="([-\d.]+)"[^>]*r="([-\d.]+)"', body):
        cx, cy, r = (float(g) for g in c.groups())
        xs += [cx - r, cx + r]
        ys += [cy - r, cy + r]
    return min(xs), min(ys), max(xs), max(ys)


def _fit(body, w, h, target):
    """Centre the drawing in the box and scale it to a common optical size.

    Stroke widths and dot radii are divided by the scale factor so the whole
    set keeps one line weight regardless of how much each form was scaled.
    """
    import re
    x0, y0, x1, y1 = _bbox(body)
    span = max(x1 - x0, y1 - y0) or 1.0
    s = target / span
    mx, my = (x0 + x1) / 2.0, (y0 + y1) / 2.0

    body = re.sub(r'stroke-width="([\d.]+)"',
                  lambda m: 'stroke-width="%s"' % f(float(m.group(1)) / s), body)
    body = re.sub(r'(<circle[^>]*\sr=")([\d.]+)(")',
                  lambda m: m.group(1) + f(float(m.group(2)) / s) + m.group(3), body)

    g = 'translate(%s %s) scale(%s) translate(%s %s)' % (
        f(w / 2.0), f(h / 2.0), f(s), f(-mx), f(-my))
    return '<g transform="%s">%s</g>' % (g, body)


def svg(body, w, h, cls="", target=66.0):
    if target:
        body = _fit(body, w, h, target)
    return ('<svg viewBox="0 0 %s %s" fill="none" stroke="currentColor" '
            'stroke-linecap="round" stroke-linejoin="round"%s>%s</svg>'
            % (f(w), f(h), (' class="%s"' % cls) if cls else "", body))


# ── 1. Nil Manel, the blue water lily — Sri Lanka (About) ─────────────────

def water_lily():
    cx, cy = 40, 64
    parts = []
    for ring, (n, L, wr, span) in enumerate([(9, 27, 0.20, 116),
                                             (7, 19, 0.24, 92),
                                             (5, 11.5, 0.30, 66)]):
        seg = []
        for i in range(n):
            a = -span + (2 * span) * i / (n - 1.0)
            # a touch of per-petal variation so it reads grown, not stamped
            jitter = 1 + 0.055 * math.sin(i * 2.3 + ring)
            seg.append(petal(cx, cy - ring * 1.4, a, L * jitter, wr))
        parts.append(path(" ".join(seg), 1.05 if ring else 1.15))

    # water line + a lily pad, so the bloom sits on a surface
    water = []
    for k, (yy, amp) in enumerate([(70.5, 1.5), (75.5, 1.1)]):
        pts = [(x, yy + amp * math.sin(x / 7.5 + k * 1.9)) for x in range(4, 77, 3)]
        water.append(polyline(pts))
    pad = "M %s C %s, %s, %s" % (P(46, 70), P(58, 67.5), P(70, 68.5), P(74, 71.5))
    parts.append(path(" ".join(water) + " " + pad, 0.95))
    parts.append(dot(cx, cy - 4, 1.7))
    return svg("".join(parts), 80, 80)


# ── 2. Sound ripples — spatial audio (Research) ───────────────────────────

def ripples():
    sx, sy = 14, 66
    parts = []
    for k in range(1, 6):
        base = 8 + k * 9.6
        pts = []
        a0, a1 = -80, 6
        steps = 28
        for i in range(steps + 1):
            a = math.radians(a0 + (a1 - a0) * i / steps)
            # organic wobble: ripples on water are never perfect arcs
            r = base * (1 + 0.030 * math.sin(3.1 * a + k * 1.4)
                          + 0.014 * math.sin(6.7 * a - k))
            pts.append((sx + r * math.cos(a), sy + r * math.sin(a)))
        parts.append(path(polyline(pts), 1.25 - k * 0.11))

    parts.append(dot(sx, sy, 2.1))
    return svg("".join(parts), 80, 80)


# ── 3. Cochlear spiral — the inner ear (Publications) ─────────────────────

def cochlea():
    cx, cy = 41, 40
    # r = a*e^(b*theta); tuned so the outermost turn lands at r ~= 29.5,
    # i.e. just inside the 80-unit box, and each turn grows by ~2.2x.
    a, b = 1.0, 0.130
    turns = 4.15
    pts = []
    steps = 210
    for i in range(steps + 1):
        th = turns * 2 * math.pi * i / steps
        r = a * math.exp(b * th)
        pts.append((cx + r * math.cos(th - math.pi / 2),
                    cy + r * math.sin(th - math.pi / 2)))
    parts = [path(polyline(pts), 1.2)]

    # radial hair-cell ticks along the outer turns
    ticks = []
    th = 2 * math.pi * 2.25
    while th < turns * 2 * math.pi - 0.15:
        r = a * math.exp(b * th)
        ux = math.cos(th - math.pi / 2)
        uy = math.sin(th - math.pi / 2)
        ticks.append("M %s L %s" % (P(cx + r * ux, cy + r * uy),
                                    P(cx + (r + 3.2) * ux, cy + (r + 3.2) * uy)))
        th += 0.42
    parts.append(path(" ".join(ticks), 0.8))
    parts.append(dot(cx, cy, 1.5))
    return svg("".join(parts), 80, 80)


# ── 4. Unfurling fern frond — a plan that opens up (Projects) ─────────────

def fern():
    p0, p1, p2, p3 = (15, 73), (11, 46), (30, 26), (48, 19)
    stem = "M %s C %s, %s, %s" % (P(*p0), P(*p1), P(*p2), P(*p3))

    # fiddlehead: the tip still coiled
    coil = []
    ccx, ccy = 52.5, 15.5
    for i in range(121):
        th = (2.15 * math.pi) * i / 120
        r = 1.1 * math.exp(0.30 * th)
        coil.append((ccx + r * math.cos(th + 2.4), ccy + r * math.sin(th + 2.4)))
    parts = [path(stem + " " + polyline(coil), 1.25)]

    # pinnae, alternating, shrinking toward the coiled tip
    pin = []
    n = 9
    for i in range(n):
        t = 0.10 + 0.74 * i / (n - 1.0)
        bx, by = cubic(p0, p1, p2, p3, t)
        tx, ty = cubic_tan(p0, p1, p2, p3, t)
        stem_ang = math.degrees(math.atan2(tx, -ty))
        L = 16.5 * (1 - t) ** 0.85 + 3.2
        for side in (-1, 1):
            pin.append(leaf(bx, by, stem_ang + side * 52, L, 0.30))
    parts.append(path(" ".join(pin), 0.95))
    return svg("".join(parts), 80, 80)


# ── 5. Feather — writing, and the birds of the FeederWatch counts ─────────

def feather():
    p0, p1, p2, p3 = (19, 74), (23, 52), (43, 34), (56, 11)
    parts = [path("M %s C %s, %s, %s" % (P(*p0), P(*p1), P(*p2), P(*p3)), 1.2)]

    barbs = []
    n = 17
    for i in range(n):
        t = 0.17 + 0.80 * i / (n - 1.0)
        bx, by = cubic(p0, p1, p2, p3, t)
        tx, ty = cubic_tan(p0, p1, p2, p3, t)
        ang = math.degrees(math.atan2(tx, -ty))
        # fullest through the middle, tapering at quill and tip
        u = (t - 0.17) / 0.80
        L = 14.5 * math.sin(math.pi * u) ** 0.62 + 1.4
        for side in (-1, 1):
            a = math.radians(ang + side * 46)
            ex, ey = rot(0, -L, a)
            mx, my = rot(side * L * 0.16, -L * 0.55, a)
            barbs.append("M %s Q %s, %s" % (P(bx, by), P(bx + mx, by + my),
                                            P(bx + ex, by + ey)))
    parts.append(path(" ".join(barbs), 0.8))
    return svg("".join(parts), 80, 80)


# ── 6. Rhododendron — the West Virginia state flower (Experience) ─────────

def rhododendron():
    cx, cy = 40, 38
    parts = []
    corolla = [petal(cx, cy, -90 + i * 72, 23, 0.60, 0.92) for i in range(5)]
    parts.append(path(" ".join(corolla), 1.15))

    # stamens arcing out of the throat, each tipped with an anther
    stam, anthers = [], []
    for i in range(9):
        a = math.radians(-64 + i * 16)
        L = 25 + 4.2 * math.sin(i * 1.3)
        ex, ey = rot(0, -L, a)
        mx, my = rot(-L * 0.30, -L * 0.52, a)
        stam.append("M %s Q %s, %s" % (P(cx, cy), P(cx + mx, cy + my), P(cx + ex, cy + ey)))
        anthers.append((cx + ex, cy + ey))
    parts.append(path(" ".join(stam), 0.78))
    for ax, ay in anthers:
        parts.append(dot(ax, ay, 1.15))

    # evergreen leaves below
    parts.append(path(leaf(cx - 3, cy + 20, -128, 20, 0.30)
                      + " " + leaf(cx + 3, cy + 20, 132, 18, 0.30), 0.95))
    parts.append(path("M %s C %s, %s, %s" % (P(cx, cy + 14), P(cx, cy + 24),
                                             P(cx, cy + 30), P(cx, cy + 38)), 1.0))
    return svg("".join(parts), 80, 80)


# ── 7. Seed head — dispersal, community science, service (Beyond) ─────────

def seed_head():
    hx, hy = 38, 32
    parts = [path("M %s C %s, %s, %s" % (P(38, 78), P(36.5, 62), P(38.5, 48), P(hx, hy + 6)), 1.1)]

    spokes, tufts = [], []
    n = 15
    for i in range(n):
        a = math.radians(-150 + 300 * i / (n - 1.0))
        L = 15.5 + 3.0 * math.sin(i * 1.7)
        ex, ey = rot(0, -L, a)
        spokes.append("M %s L %s" % (P(hx, hy), P(hx + ex, hy + ey)))
        for k in (-26, 0, 26):
            b = math.radians(-150 + 300 * i / (n - 1.0) + k)
            fx, fy = rot(0, -(L + 4.6), b)
            gx, gy = rot(0, -L, a)
            tufts.append("M %s L %s" % (P(hx + gx, hy + gy), P(hx + fx, hy + fy)))
    parts.append(path(" ".join(spokes), 0.72))
    parts.append(path(" ".join(tufts), 0.6))

    # three seeds already carried off
    drift = []
    for (dx, dy, ang, L) in [(63, 22, 34, 7.5), (69, 39, 20, 6.2), (58, 13, 48, 5.4)]:
        ex, ey = rot(0, -L, math.radians(ang))
        drift.append("M %s L %s" % (P(dx, dy), P(dx + ex, dy + ey)))
        for k in (-30, 30):
            fx, fy = rot(0, -(L + 3.6), math.radians(ang + k))
            drift.append("M %s L %s" % (P(dx + ex, dy + ey), P(dx + fx, dy + fy)))
    parts.append(path(" ".join(drift), 0.66))
    parts.append(dot(hx, hy, 1.5))
    return svg("".join(parts), 80, 80)


# ── 8. Flowering sprig — an open invitation (Contact) ─────────────────────

def sprig():
    p0, p1, p2, p3 = (18, 74), (20, 54), (34, 40), (44, 26)
    parts = [path("M %s C %s, %s, %s" % (P(*p0), P(*p1), P(*p2), P(*p3)), 1.15)]

    lv = []
    for i, t in enumerate((0.22, 0.44, 0.66)):
        bx, by = cubic(p0, p1, p2, p3, t)
        tx, ty = cubic_tan(p0, p1, p2, p3, t)
        ang = math.degrees(math.atan2(tx, -ty))
        side = -1 if i % 2 == 0 else 1
        lv.append(leaf(bx, by, ang + side * 55, 15 - i * 1.6, 0.34))
    parts.append(path(" ".join(lv), 0.95))

    # an open bloom at the tip, and one bud still closed
    bloom = [petal(46, 22, -90 + i * 60, 13, 0.38, 0.88) for i in range(6)]
    parts.append(path(" ".join(bloom), 1.0))
    parts.append(path(petal(35, 33, -34, 8.5, 0.34, 0.92), 0.9))
    parts.append(dot(46, 22, 1.6))
    return svg("".join(parts), 80, 80)


# ── 9. Appalachian ridgelines — Morgantown (footer) ───────────────────────

def ridges():
    """Layered Appalachian ridgelines.

    Each successive ridge is clamped to stay a minimum distance *below* the one
    behind it, so the layers read as receding hills rather than crossing
    squiggles, and the far ridges are drawn fainter for aerial perspective.
    """
    W, H = 1000, 132
    GAP = 12.0
    layers = [  # seed, amplitude, centre line, stroke width, stroke opacity
        (0.4, 12.0, 36, 0.95, 0.42),
        (2.1, 15.0, 76, 1.05, 0.66),
        (4.3, 17.0, 117, 1.15, 0.88),
    ]

    parts, prev = [], None
    for seed, amp, base, w, op in layers:
        pts = []
        for x in range(0, W + 1, 8):
            u = x / float(W)
            y = (base
                 - amp * 0.66 * math.sin(2.7 * u * math.pi + seed)
                 - amp * 0.24 * math.sin(5.9 * u * math.pi + seed * 1.9)
                 - amp * 0.10 * math.sin(13.3 * u * math.pi + seed * 2.7))
            pts.append([x, y])

        if prev is not None:
            for i in range(len(pts)):
                if pts[i][1] < prev[i] + GAP:
                    pts[i][1] = prev[i] + GAP

        prev = [p[1] for p in pts]
        parts.append(path(polyline([(x, y) for x, y in pts]), w,
                          ' stroke-opacity="%s"' % f(op)))

    return svg("".join(parts), W, H, cls="o-ridge", target=0)


# ── 10. Tall botanical spray — the masthead margin ───────────────────────

def masthead_spray():
    """A slender margin illustration for the tall empty gutter beside the name.

    Not normalised: it is drawn to fill an 80x280 box directly, since fitting
    it to a square optical size would collapse it.
    """
    main = ((46, 272), (60, 198), (16, 116), (32, 34))
    parts = [path("M %s C %s, %s, %s" % tuple(P(*p) for p in main), 1.15)]

    lv = []
    n = 9
    for i in range(n):
        t = 0.07 + 0.74 * i / (n - 1.0)
        bx, by = cubic(*main, t=t)
        tx, ty = cubic_tan(*main, t=t)
        ang = math.degrees(math.atan2(tx, -ty))
        side = -1 if i % 2 == 0 else 1
        L = 19.5 - 8.0 * t
        lv.append(leaf(bx, by, ang + side * 58, L, 0.32))
    parts.append(path(" ".join(lv), 0.95))

    # a branch splitting off, so it reads as a growing plant not a garland
    br = ((cubic(*main, t=0.46)[0], cubic(*main, t=0.46)[1]), (48, 130), (58, 104), (56, 78))
    parts.append(path("M %s C %s, %s, %s" % tuple(P(*p) for p in br), 1.0))
    blv = []
    for t in (0.35, 0.68):
        bx, by = cubic(*br, t=t)
        tx, ty = cubic_tan(*br, t=t)
        ang = math.degrees(math.atan2(tx, -ty))
        blv.append(leaf(bx, by, ang + 60, 13, 0.32))
        blv.append(leaf(bx, by, ang - 60, 11, 0.32))
    parts.append(path(" ".join(blv), 0.9))

    # two open blooms and a closed bud
    top = [petal(32, 30, -90 + i * 60, 15, 0.36, 0.9) for i in range(6)]
    parts.append(path(" ".join(top), 1.05))
    parts.append(dot(32, 30, 1.9))

    side_bloom = [petal(56, 74, -90 + i * 72, 11.5, 0.40, 0.9) for i in range(5)]
    parts.append(path(" ".join(side_bloom), 1.0))
    parts.append(dot(56, 74, 1.5))

    parts.append(path(petal(22, 92, -22, 11, 0.34, 0.94), 0.95))

    return svg("".join(parts), 80, 280, target=0)


ORNAMENTS = {
    "about": ("Nil Manel water lily, Sri Lanka", water_lily),
    "research": ("Spatial sound ripples", ripples),
    "publications": ("Cochlear spiral", cochlea),
    "projects": ("Unfurling fern frond", fern),
    "writing": ("Feather", feather),
    "experience": ("Rhododendron, West Virginia", rhododendron),
    "beyond": ("Seed head dispersing", seed_head),
    "contact": ("Flowering sprig", sprig),
}

def bounds(markup):
    """Min/max of every coordinate pair actually emitted, for overflow checks."""
    import re
    nums = [float(n) for n in re.findall(r"-?\d+(?:\.\d+)?", re.sub(r'viewBox="[^"]*"', "", markup))]
    xs, ys = nums[0::2], nums[1::2]
    return (min(xs), min(ys), max(xs), max(ys))


if __name__ == "__main__":
    import io, json, os
    out = {k: fn() for k, (_, fn) in ORNAMENTS.items()}
    out["ridges"] = ridges()
    out["masthead"] = masthead_spray()
    here = os.path.dirname(os.path.abspath(__file__))
    with io.open(os.path.join(here, "ornaments.json"), "w", encoding="utf-8") as fh:
        json.dump(out, fh, indent=1)
    for k, v in out.items():
        # crude but effective: circles contribute r as a stray value, so treat
        # this as a smoke test for gross overflow rather than an exact bbox
        print("%-14s %5d bytes" % (k, len(v)))
