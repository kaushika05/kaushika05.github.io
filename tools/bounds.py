"""Verify every generated ornament actually fits inside its own viewBox."""
import io, json, re

NUM = re.compile(r"-?\d+(?:\.\d+)?")

data = json.load(io.open("ornaments.json", encoding="utf-8"))
ok = True

for name, markup in data.items():
    vb = NUM.findall(re.search(r'viewBox="([^"]*)"', markup).group(1))
    vw, vh = float(vb[2]), float(vb[3])

    xs, ys = [], []

    # path coordinates come in x,y pairs across the whole d string
    for d in re.findall(r'\sd="([^"]*)"', markup):
        nums = [float(n) for n in NUM.findall(d)]
        xs += nums[0::2]
        ys += nums[1::2]

    # circles: centre +/- radius
    for c in re.finditer(r'<circle[^>]*cx="([-\d.]+)"[^>]*cy="([-\d.]+)"[^>]*r="([-\d.]+)"', markup):
        cx, cy, r = (float(g) for g in c.groups())
        xs += [cx - r, cx + r]
        ys += [cy - r, cy + r]

    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    # allow half a stroke width of slop at the edges
    bad = x0 < -1.5 or y0 < -1.5 or x1 > vw + 1.5 or y1 > vh + 1.5
    ok = ok and not bad
    print("%-13s viewBox %gx%g   x %6.1f..%6.1f   y %6.1f..%6.1f   %s"
          % (name, vw, vh, x0, x1, y0, y1, "OVERFLOW" if bad else "fits"))

print("\nALL FIT" if ok else "\nSOME OVERFLOW")
