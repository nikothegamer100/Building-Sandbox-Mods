fetch('https://raw.githubusercontent.com/Voxelstice/niko-build-sandbox-mod-database/main/database.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
})

function openTab(tab) {
    window.open(tab)
}
