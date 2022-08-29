const loadLeague = () => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League")
    .then(res => res.json())
    .then( data => showData(data.teams))
    .catch(error => console.log(error))
}

const  showData = items => {
    const leagueDisplay = document.getElementById('league-section');
    console.log(items);
    items.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 h-full bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="${element.strTeamBadge}"
              alt="Shoes"
              class="rounded-xl w-7/12"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${element.strTeam}</h2>
            <p>${element.strAlternate}</p>
            <div class="card-actions">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        `;
        leagueDisplay.appendChild(div);
    });
}

loadLeague()