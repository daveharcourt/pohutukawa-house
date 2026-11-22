{
// Paste the Airbnb listing link here once it's live, e.g. "https://www.airbnb.co.uk/rooms/123456"
const AIRBNB_URL = "";

const P = {
  hero:   {fix:"Retake at blue hour with the chandelier switched off and only the lamps on. Use a tripod and timer and step out of the window's reflection (you're faintly visible in the centre pane). Shoot about 10 minutes earlier so the railings keep their detail."},
};
P.front = {src:"house-front", alt:"The front of Pohutukawa House, a listed Rogue Baronial villa in sandstone with a turret; The Annex is the single-storey wing with the bay window on the right", cap:"The Annex is the bay-windowed wing on the right", fix:"This looks like a landscaping visualisation, with added planting, birds and retouched windows. Replace it with a real photo once the front garden is finished, so guests see the house as it really is."};
P.annexHero = {src:"hero-bay-bluehour", alt:"The Annex living room bay window at blue hour, looking over the promenade railings to the Firth of Forth", cap:"The bay window at blue hour, with the Forth beyond", fix:P.hero.fix};
P.annexAir = {src:"aerial-city", alt:"Aerial view of Pohutukawa House on Portobello promenade, with Arthur's Seat and the Pentland Hills behind", cap:"The Annex is the single-storey wing, right on the promenade", fix:"This aerial appears to predate the renovation: it shows a glass conservatory where the black timber extension now stands, and the garden before landscaping. Replace with a current drone shot from the same angle once the garden is finished."};
P.city = {src:"aerial-city", alt:"Aerial view of Pohutukawa House on Portobello promenade, with Arthur's Seat and the Pentland Hills behind", cap:"Beach in front, Arthur's Seat behind, Pohutukawa House in between", fix:"This aerial appears to predate the renovation: it shows a glass conservatory where the black timber extension now stands, and the garden before landscaping. Replace with a current drone shot from the same angle once the garden is finished."};
P.aerial = {src:"aerial-beach", alt:"Aerial view of Pohutukawa House with its turret, the promenade, Portobello beach and the Firth of Forth", cap:"Pohutukawa House, the promenade, the sea and two miles of sand", fix:"Lovely shot. Refly once the front garden is landscaped, ideally on a brighter day or at golden hour, so the bare soil by the promenade railings disappears."};
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
    {src:"bedroom-front", alt:"Bedroom with cane-headed bed, bedside lamps and framed jellyfish prints", cap:"Euro king bed under the jellyfish prints", big:1, fix:"Press or smooth the bedding so it looks crisp, and hang a few matching wooden hangers on the rail."},
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
const badge = (fix, head="Retake needed") => `<button type="button" class="ph" aria-label="Placeholder photo. ${esc(fix)}">Placeholder<span class="tip" role="tooltip"><b>${head}</b>${esc(fix)}</span></button>`;
const VER = (document.querySelector('meta[name="site-version"]')?.content || "").replace("v","");
const fig = (p, cls="") => `<figure class="${cls}${p.big?" big":""}${p.tall?" tall":""}${p.half?" half":""}${p.wide?" wide":""}"><div class="frame">${p.fix?badge(p.fix):""}<img loading="lazy"${p.top?' style="object-position:center 8%"':''} src="images/${p.src}.jpg?v=${VER}" alt="${esc(p.alt)}" data-cap="${esc(p.cap)}"></div><figcaption>${p.cap}</figcaption></figure>`;

for (const el of document.querySelectorAll("[data-set]")) el.innerHTML = SETS[el.dataset.set].map(p => fig(p)).join("");
for (const el of document.querySelectorAll("[data-photo]")) el.outerHTML = fig(P[el.dataset.photo]);

// Carousels: data-carousel="annex" — slides scroll and snap, with arrows and dots
const FIRE = {src:"fireplace", alt:"Marble fireplace with wood burner, log baskets and a wingback chair", cap:"A fire on in the original marble fireplace", fix:"Placeholder for a cosy shot with the wood burner lit. Shoot in the evening with the lamps on and the main lights off, fire burning well, from a little to one side so you're not reflected in the mirror above."};
const CAROUSELS = { annex: [P.annexHero, SETS.patio[1], P.annexAir, P.aerial, FIRE, P.front] };
for (const el of document.querySelectorAll("[data-carousel]")) {
  const slides = CAROUSELS[el.dataset.carousel];
  el.innerHTML = `<div class="ctrack" tabindex="0" aria-label="Photo carousel">${slides.map(p => fig(p, "cslide")).join("")}</div>
    <button type="button" class="cbtn prev" aria-label="Previous photo">&#8249;</button><button type="button" class="cbtn next" aria-label="Next photo">&#8250;</button>
    <div class="cdots">${slides.map((_, i) => `<button type="button" aria-label="Photo ${i + 1}"></button>`).join("")}</div>`;
  const track = el.querySelector(".ctrack"), dots = [...el.querySelectorAll(".cdots button")];
  const cur = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = i => track.scrollTo({left: ((i + slides.length) % slides.length) * track.clientWidth, behavior: "smooth"});
  el.querySelector(".prev").onclick = () => go(cur() - 1);
  el.querySelector(".next").onclick = () => go(cur() + 1);
  dots.forEach((b, i) => b.onclick = () => go(i));
  const mark = () => dots.forEach((b, i) => b.classList.toggle("on", i === cur()));
  track.addEventListener("scroll", () => requestAnimationFrame(mark)); mark();
  track.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(cur() + 1); if (e.key === "ArrowLeft") go(cur() - 1); });
}
// Page icons: add data-icon="castle|sea|turret|bay" to a heading
const ICONS = {
  castle: '<path d="M4 44c6-5 14-7 20-7s14 2 20 7"/><path d="M8 38V22h2v-3h2.5v3h2v-3H17v3h2v16"/><path d="M29 38V22h2v-3h2.5v3h2v-3H38v3h2v16"/><path d="M17.5 38V14h2v-3H22v3h4v-3h2.5v3h2v24"/><path d="M21 38v-6a3 3 0 0 1 6 0v6"/><path d="M24 11V4l5 1.5L24 7" fill="currentColor"/><path d="M12.5 28v3M35.5 28v3M24 20v3"/>',
  sea:    '<path d="M13 27a11 11 0 0 1 22 0"/><path d="M24 8v4M10.5 13.5l2.8 2.8M37.5 13.5l-2.8 2.8M5 27h4M39 27h4"/><path d="M4 33c3.3-2.4 6.7-2.4 10 0s6.7 2.4 10 0 6.7-2.4 10 0 6.7 2.4 10 0"/><path d="M4 40c3.3-2.4 6.7-2.4 10 0s6.7 2.4 10 0 6.7-2.4 10 0 6.7 2.4 10 0"/>',
  turret: '<path d="M24 2v3"/><path d="M15 19L24 5l9 14z"/><path d="M14 19h20"/><path d="M16 19v25M32 19v25"/><path d="M21 31v-4a3 3 0 0 1 6 0v4z"/><path d="M16 37h16"/><path d="M8 44h32"/>',
  bay:    '<path d="M4 44h40"/><path d="M6 44V18l8-6h20l8 6v26"/><path d="M9 23l5-2.5V39H9zM39 23l-5-2.5V39h5z"/><rect x="17" y="20" width="14" height="19"/><path d="M9 30.5h5M34 30.5h5M17 29.5h14M24 20v19"/>'
};
const icon = k => `<svg class="ico" viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">${ICONS[k]}</svg>`;
for (const h of document.querySelectorAll("[data-icon]")) h.insertAdjacentHTML("afterbegin", icon(h.dataset.icon));

// Edinburgh feature photos, from Wikimedia Commons under Creative Commons licences: keep the credits
const NEED = {
  fringeWide: {src:"edinburgh-fringe-wide", alt:"The Royal Mile packed during the Edinburgh Festival Fringe", cap:"The Royal Mile and the Tron Kirk in festival season", by:"Iain Lees", lic:"CC BY-SA 2.0", licUrl:"https://creativecommons.org/licenses/by-sa/2.0", page:"https://commons.wikimedia.org/wiki/File:Edinburgh%E2%80%99s_Royal_Mile_and_the_Tron_Kirk,_during_the_International_Festival_-_geograph.org.uk_-_8122239.jpg"},
  fringeCrowd: {src:"edinburgh-fringe-crowd", alt:"A street performer and crowd on the Royal Mile", cap:"A fire performer draws the crowd on the Royal Mile", by:"marsupium photography", lic:"CC BY-SA 2.0", licUrl:"https://creativecommons.org/licenses/by-sa/2.0", page:"https://commons.wikimedia.org/wiki/File:On_the_Royal_Mile_(28674848014).jpg"},
  hogmanayWide: {src:"edinburgh-hogmanay-wide", alt:"Midnight fireworks over Edinburgh Castle at Hogmanay", cap:"Midnight fireworks over the city from Calton Hill", by:"Robbie Shade", lic:"CC BY 2.0", licUrl:"https://creativecommons.org/licenses/by/2.0", page:"https://commons.wikimedia.org/wiki/File:EdinburghNYE.jpg"},
  hogmanayCrowd: {src:"edinburgh-hogmanay-crowd", alt:"Revellers at the Hogmanay street party", cap:"The torchlight procession", by:"photojenni", lic:"CC BY 2.0", licUrl:"https://creativecommons.org/licenses/by/2.0", page:"https://commons.wikimedia.org/wiki/File:Procession_Calton_Hill.jpg"},
  castleWide: {src:"edinburgh-castle-wide", alt:"Edinburgh Castle on its rock above Princes Street Gardens", cap:"Edinburgh Castle on its volcanic rock", by:"Nacckers", lic:"CC BY-SA 4.0", licUrl:"https://creativecommons.org/licenses/by-sa/4.0", page:"https://commons.wikimedia.org/wiki/File:Edinburgh_Castle_Autumn.jpg"},
  castleCrowd: {src:"edinburgh-castle-crowd", alt:"Visitors on the Castle ramparts looking out over the city", cap:"Visitors climbing through the Castle", by:"Lewis Clarke", lic:"CC BY-SA 2.0", licUrl:"https://creativecommons.org/licenses/by-sa/2.0", page:"https://commons.wikimedia.org/wiki/File:Edinburgh_,_Edinburgh_Castle_-_geograph.org.uk_-_4947497.jpg"},
};
for (const el of document.querySelectorAll("[data-need]")) {
  const n = NEED[el.dataset.need];
  const credit = n.by ? ` Photo: ${n.by}, ${n.lic}, cropped` : "";
  el.innerHTML = n.src ? `<figure style="margin:0"><img loading="lazy" src="images/${n.src}.jpg?v=${VER}" alt="${esc(n.alt)}" data-cap="${esc(n.cap + "." + credit)}"></figure>` : `<span class="need">${n.label}</span>${badge(n.fix, "Image needed")}`;
}
// photo credits under each pair (required by the Creative Commons licences)
for (const pair of document.querySelectorAll(".pair")) {
  const ns = [...pair.querySelectorAll("[data-need]")].map(e => NEED[e.dataset.need]).filter(n => n.by);
  if (ns.length) pair.insertAdjacentHTML("afterend", `<p class="credit">Photos: ${ns.map(n => `<a href="${n.page}" target="_blank" rel="noopener">${n.by}</a> (<a href="${n.licUrl}" target="_blank" rel="noopener">${n.lic}</a>)`).join(", ")}, cropped</p>`);
}
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
