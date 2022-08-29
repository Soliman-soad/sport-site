const loadData = teamName => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchfilename.php?e=English_Premier_League_2015-04-26_Arsenal_vs_Chelsea`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
