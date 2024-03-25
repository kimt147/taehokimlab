document.addEventListener("DOMContentLoaded"), function () {
// Fetch JSON data
fetch ("data.json")
  .then((data) = response.json())
  .then ((data) =>{
    //Render HTML elements
    itmes.forEach(item => (
      console.log('item', item);
    ));
  })
  .catch((error) => console.error("Error fetching JSON:" error));
});