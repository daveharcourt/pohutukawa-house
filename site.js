{
// Paste the Airbnb listing link here once it's live, e.g. "https://www.airbnb.co.uk/rooms/123456"
const AIRBNB_URL = "";

const P = {
  hero:   {fix:"Retake at blue hour with the chandelier switched off and only the lamps on. Use a tripod and timer and step out of the window's reflection (you're faintly visible in the centre pane). Shoot about 10 minutes earlier so the railings keep their detail."},
};
P.front = {src:"house-front", alt:"The front of Pohutukawa House, a listed Rogue Baronial villa in sandstone with a turret; The Annex is the single-storey wing with the bay window on the right", cap:"The Annex is the bay-windowed wing on the right", fix:"This looks like a landscaping visualisation, with added planting, birds and retouched windows. Replace it with a real photo once the front garden is finished, so guests see the house as it really is."};
P.city = {src:"aerial-city", alt:"Aerial view of Pohutukawa House on Portobello promenade, with Arthur's Seat and the Pentland Hills behind", cap:"Beach in front, Arthur's Seat behind"};
P.aerial = {src:"aerial-beach", alt:"Aerial view of Pohutukawa House with its turret, the promenade, Portobello beach and the Firth of Forth", cap:"Pohutukawa House, the promenade and two miles of sand", fix:"Lovely shot. Refly once the front garden is landscaped, ideally on a brighter day or at golden hour, so the bare soil by the promenade railings disappears."};
const ISLAND = {src:"living-island", alt:"Living room seen from the kitchen island, bay window beyond", cap:"From the island to the bay", fix:"The windows are blown out, so the sea disappears. Shoot with HDR on or on a duller day, and hide the TV and floor-lamp cables."};
const SETS = {
  living: [
    {src:"living-bay", alt:"Living room with sofa in the bay window, wingback chair and pendant lights", cap:"The bay, the fire and the island", big:1},
    {src:"fireplace", alt:"Marble fireplace with wood burner, log baskets and a wingback chair", cap:"Wood burner in the original marble fireplace", fix:"You're reflected in the mirror above the fireplace. Shoot from a little to one side, or crop and edit the reflection out."},
    {src:"kitchen-wide", alt:"Teal kitchen with island, breakfast stools and artwork", cap:"Kitchen with breakfast bar for three", fix:"You're reflected in the black glass splashback. Shoot from a different angle, and close the log basket lid."},
    {src:"kitchen-units", alt:"Teal kitchen units with built-in oven and sink", cap:"Oven, induction hob and plenty of storage"},
    ISLAND,
    {src:"skylight", alt:"High skylight above the hallway end of the living room, with original panelled doors below", cap:"High skylight over the hall end of the room", top:1}
  ],
  bedroom: [
    {src:"bedroom-front", alt:"Bedroom with cane-headed bed, bedside lamps and framed jellyfish prints", cap:"King-size bed under the jellyfish prints", big:1, fix:"Press or smooth the bedding so it looks crisp, and hang a few matching wooden hangers on the rail."},
    {src:"bedroom-lamps", alt:"Bedroom in warm lamplight with sash window and shutters", cap:"Lamplight and original shutters", fix:"Retake once the privacy coating is on the lower pane, so the garden works aren't visible. Smooth the bedding too."},
    {src:"bedroom-chair", alt:"Bedroom with armchair, kilim rug and mountain prints", cap:"Armchair and room to unpack", fix:"Smooth the bedding and throw before reshooting."}
  ],
  patio: [
    {src:"patio", alt:"Bistro table and two chairs on the stone-flagged patio against the old garden wall", cap:"Table for two against the old garden wall", half:1},
    {src:"patio-sea", alt:"The patio at sunset, with the promenade railings and the Firth of Forth beyond", cap:"Sunset over the Forth from the patio", half:1, fix:"Great angle with the sunset and the sea. Retake once the front garden is finished, so the covers, soil heaps and stacked flags are gone."}
  ],
  shower: [
    {src:"shower-vanity", alt:"Shower room with backlit round mirror, long white vanity and walk-in shower", cap:"Backlit mirror with demister", big:1},
    {src:"shower-walkin", alt:"Walk-in rainfall shower with tiled bench and LED light strip", cap:"Walk-in rainfall shower", tall:1},
    {src:"shower-mirror", alt:"Vanity with curved basin, sage tiles and heated towel rail", cap:"Heated towel rail and curved basin"},
    {src:"shower-bench", alt:"Level-access walk-in shower with rainfall head, built-in bench, LED strip and heated towel rail", cap:"The walk-in shower with built-in bench", wide:1, fix:"Close the bedroom door so it isn't in shot, and make sure the floor is spotless."}
  ]
};

const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const badge = fix => `<button type="button" class="ph" aria-label="Placeholder photo. ${esc(fix)}">Placeholder<span class="tip" role="tooltip"><b>Retake needed</b>${esc(fix)}</span></button>`;
const VER = (document.querySelector('meta[name="site-version"]')?.content || "").replace("v","");
const fig = (p, cls="") => `<figure class="${cls}${p.big?" big":""}${p.tall?" tall":""}${p.half?" half":""}${p.wide?" wide":""}"><div class="frame">${p.fix?badge(p.fix):""}<img loading="lazy"${p.top?' style="object-position:center 8%"':''} src="images/${p.src}.jpg?v=${VER}" alt="${esc(p.alt)}" data-cap="${esc(p.cap)}"></div><figcaption>${p.cap}</figcaption></figure>`;

for (const el of document.querySelectorAll("[data-set]")) el.innerHTML = SETS[el.dataset.set].map(p => fig(p)).join("");
for (const el of document.querySelectorAll("[data-photo]")) el.outerHTML = fig(P[el.dataset.photo]);
{ const h=document.querySelector(".hero"); if (h) h.insertAdjacentHTML("beforeend", badge(P.hero.fix)); }

// Airbnb buttons: live link if set, otherwise a placeholder note
for (const a of document.querySelectorAll(".airbnb")) {
  if (AIRBNB_URL) { a.href = AIRBNB_URL; a.target = "_blank"; a.rel = "noopener"; }
  else a.insertAdjacentHTML("beforeend", badge("Add the Airbnb listing link once it's live: paste it into AIRBNB_URL near the bottom of index.html and every Book on Airbnb button will use it."));
}

// badges shouldn't trigger links or the lightbox
document.addEventListener("click", e => {
  const ph = e.target.closest(".ph");
  if (ph) { e.preventDefault(); e.stopPropagation(); ph.focus(); return; }
  const img = e.target.closest("figure img");
  if (img) {
    const d = document.getElementById("lb");
    d.querySelector("img").src = img.src; d.querySelector("img").alt = img.alt;
    d.querySelector("p").textContent = img.dataset.cap || "";
    if (d.showModal) d.showModal();
  }
}, true);
const lb = document.getElementById("lb");
lb.querySelector("button").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
}
