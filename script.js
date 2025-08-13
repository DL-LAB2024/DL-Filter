function searchBoutiques() {
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;
  const category = document.getElementById('category').value;

  // פה בעתיד נחבר ל-Google Places API
  document.getElementById('boutiqueResults').innerHTML =
    `<p>Searching boutiques in ${city}, ${country} for category "${category}"...</p>`;
}

function searchInfluencers() {
  const minFollowers = document.getElementById('minFollowers').value;
  const maxFollowers = document.getElementById('maxFollowers').value;
  const budget = document.getElementById('budget').value;

  // פה בעתיד נחבר ל-Instagram API / חיפוש
  document.getElementById('influencerResults').innerHTML =
    `<p>Searching influencers with ${minFollowers}-${maxFollowers} followers and budget ${budget}...</p>`;
}
