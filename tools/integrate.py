"""Inline the generated ornaments into site/index.html.

Idempotent: bails out if the markers are already present.
"""
import io, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(os.path.dirname(HERE), "site")

art = json.load(io.open(os.path.join(HERE, "ornaments.json"), encoding="utf-8"))

# section id -> (numeral, label text) exactly as they appear in the markup
BANDS = [
    ("about", "00", "About"),
    ("research", "01", "Research"),
    ("publications", "02", "Publications"),
    ("projects", "03", "Projects"),
    ("writing", "04", "Writing"),
    ("experience", "05", "Experience"),
    ("beyond", "06", "Beyond"),
    ("contact", "07", "Contact"),
]

path = os.path.join(SITE, "index.html")
html = io.open(path, encoding="utf-8").read()

if 'class="ornament"' in html:
    sys.exit("already integrated; nothing to do")

n = 0
for key, num, label in BANDS:
    old = ('<div class="band-label"><span class="num">%s</span><span>%s</span></div>'
           % (num, label))
    if old not in html:
        sys.exit("could not find band label for %r" % key)
    new = ('<div class="band-label"><span class="num">%s</span><span>%s</span>'
           '<span class="ornament" data-reveal aria-hidden="true">%s</span></div>'
           % (num, label, art[key]))
    html = html.replace(old, new, 1)
    n += 1

# masthead margin illustration, in the otherwise empty gutter cell
anchor = """        </figure>
      </section>"""
assert anchor in html, "masthead anchor missing"
html = html.replace(anchor, """        </figure>

        <div class="masthead-spray" data-reveal aria-hidden="true">%s</div>
      </section>""" % art["masthead"], 1)

# Appalachian ridgelines closing the page above the footer
anchor = '      <footer class="foot">'
assert anchor in html, "footer anchor missing"
html = html.replace(anchor, """      <div class="ridgeline" data-reveal aria-hidden="true">%s</div>

      <footer class="foot">""" % art["ridges"], 1)

io.open(path, "w", encoding="utf-8", newline="\n").write(html)
print("inlined %d band ornaments + masthead spray + ridgeline" % n)
print("index.html now %d bytes" % os.path.getsize(path))
