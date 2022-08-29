const loadLeague = () => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League")
    .then(res => res.json())
    .then( data => showData(data.teams))
    .catch(error => console.log(error))
}

const  showData = items => {
    const leagueDisplay = document.getElementById('league-section');
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
            <!-- The button to open modal -->
            <label for="${element.strTeam}" class="btn modal-button">Details</label>
            
            <!-- Put this part before </body> tag -->
            <input type="checkbox" id="${element.strTeam}" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box">
              <figure class="px-10 pt-10">
            <img
              src="${element.strStadiumThumb}"
              alt="Shoes"
              class="rounded-xl w-7/12"
            />
          </figure>
                <h3 class="font-bold text-lg">${element.strAlternate}</h3>
                <p class="py-4">${element.strStadiumDescription}</p>
                <div class="modal-action">
                  <label for="${element.strTeam}" class="btn">Cancel</label>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        `;
        const teamDetails = () => {

        }
        leagueDisplay.appendChild(div);
    });
}

loadLeague()