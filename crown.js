const suggestionsData = {
  short: {
    circle: [
      "Pixie Cut with Volume",
      "Textured Bob with Side Part",
      "Asymmetrical Crop",
      "Boyish Pixie with Bangs",
      "Side-Swept Fringe",
      "Chin-Length Curly Bob"
    ],
    heart: [
      "Angled Bob with Layers",
      "Side-Parted Pixie",
      "Short Shag with Volume",
      "Rounded Bob with Bangs",
      "Choppy Bob with Fringe",
      "Piecey Crop Cut"
    ],
    diamond: [
      "Tousled Pixie",
      "Cropped Layered Bob",
      "Tapered Sideswept Cut",
      "Soft Textured Bob",
      "Volumized Pixie",
      "Choppy Fringe Bob"
    ],
    square: [
      "Side-Part Bob with Soft Ends",
      "Short Cut with Wispy Fringe",
      "Curved Bob with Face-Framing Layers",
      "Rounded Pixie",
      "Bob with Long Side Bangs",
      "Feminine French Crop"
    ],
    oval: [
      "Classic Blunt Bob",
      "Short Curled Bob",
      "Sleek Pixie with Side Part",
      "Layered Crop with Bangs",
      "Short Wavy Bob",
      "Clean Tapered Pixie"
    ]
  },
  medium: {
    circle: [
      "Wavy Lob with Volume",
      "Curtain Bangs with Layers",
      "Mid-Length Shag",
      "Rounded Ends Lob",
      "Deep Side Part with Curls",
      "Collarbone-Length Waves"
    ],
    heart: [
      "Side-Swept Lob",
      "Feathered Shoulder Cut",
      "Layered Lob with Fringe",
      "Wavy Medium Cut with Soft Bangs",
      "Chin-to-Shoulder Blended Layers",
      "Tapered Mid-Length Curls"
    ],
    diamond: [
      "Shag Cut with Side Bangs",
      "Textured Medium Waves",
      "Choppy Lob with Layers",
      "Mid-Length Curtain Bangs",
      "Soft Razor Cut",
      "Layered Cut with Flipped Ends"
    ],
    square: [
      "Rounded Lob with Face-Framing Ends",
      "Volumized Medium Cut",
      "Side-Swept Mid Layers",
      "Soft Waves with Long Bangs",
      "Curled Under Bob",
      "Medium Cut with Light Fringe"
    ],
    oval: [
      "Blunt Lob with Center Part",
      "Wavy Shoulder-Length Shag",
      "Sleek Lob with No Layers",
      "Layered Medium Haircut with Volume",
      "Curtain Bangs and Tapered Ends",
      "Classic Shoulder Length Straight Cut"
    ]
  },
  long: {
    circle: [
      "Long Layers with Side Bangs",
      "Loose Beach Waves",
      "Cascading Curls",
      "Side-Parted Volume Cut",
      "Long Soft Waves with Tapered Ends",
      "Gentle Perm with Bounce"
    ],
    heart: [
      "Side-Parted Curls with Volume",
      "Long Layers with Fringe",
      "Face-Framing Curtain Bangs",
      "Textured Layers with Soft Waves",
      "Tapered Ends with Middle Part",
      "Half-Up Long Curls"
    ],
    diamond: [
      "Long Feathered Cut",
      "Voluminous Side-Part Waves",
      "Layers with Side-Swept Fringe",
      "Curly Ends with Face Frame",
      "Sleek Straight Long Hair with Flip",
      "V-Cut with Bounce Layers"
    ],
    square: [
      "Soft Curls with Middle Part",
      "Long Blended Layers",
      "Wispy Fringe with Tapered Ends",
      "Side-Swept Voluminous Curls",
      "Long Hair with Waves and Curtain Bangs",
      "Subtle C-Shape Layers"
    ],
    oval: [
      "Long Beach Waves",
      "Sleek Straight Cut with Blunt Ends",
      "Long Soft Curls",
      "Side-Parted Waves with Body",
      "Long Layers with Curtain Fringe",
      "Air-Dried Natural Flow Cut"
    ]
  }
};

document.getElementById("findStyles").addEventListener("click", () => {
  const lengths = [...document.querySelectorAll('input[name="length"]:checked')].map(el => el.value);
  const shapes = [...document.querySelectorAll('input[name="shape"]:checked')].map(el => el.value);

  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";

  if (lengths.length === 0 || shapes.length === 0) {
    suggestionBox.innerHTML = "<p>Please select at least one hair length and one face shape.</p>";
    return;
  }

  const results = new Set();

  lengths.forEach(length => {
    shapes.forEach(shape => {
      const styles = suggestionsData[length]?.[shape] || [];
      styles.forEach(style => results.add(style));
    });
  });

  if (results.size === 0) {
    suggestionBox.innerHTML = "<p>No suggestions found for the selected combination.</p>";
  } else {
    suggestionBox.innerHTML = "<h3>Suggested Hairstyles:</h3><ul>" +
      [...results].map(style => `<li>${style}</li>`).join("") +
      "</ul>";
  }
});
