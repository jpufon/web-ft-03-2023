



// const Getchar= async()=>{
//     try{
//     let allData = [];

//     let page = 1;
//     let totalPages = [] ;
//     do{
//         let response = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`);
//          totalPages = await response.json();
         

//         allData = [...allData, ...totalPages];
//         page++;
       
  
//    }
    
//     while (totalPages.length > 0) 

//     allData.forEach((character) => {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(character.name));
//         myList.appendChild(li);
//         li.addEventListener("click", async () => {
//             let houses = await Promise.all(
//               character.allegiances.map(async (houseUrl) => {
//                 let response = await fetch(houseUrl);
//                 let house = await response.json();
//                 return house.name;
//               })
//             );
//             alert(`${character.name} belongs to the following houses: ${houses.join(", ")}`);
//           });
//         });
    
//     console.log(allData);
//      // return allData;
//     } catch (error) {
//         console.error(error);
//     }
    
// }






const Getchar = async () => {
    try {
      let allData = [];
  
      let page = 1;
      let totalPages = [];
      do {
        let response = await fetch(
          `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`
        );
        totalPages = await response.json();
  
        allData = [...allData, ...totalPages];
        page++;
      } while (totalPages.length > 0);
  
      const searchInput = document.createElement("input");
      searchInput.type = "text";
      searchInput.placeholder = "Enter character name";
      searchInput.style.width = "600px"; // set the width to 300 pixels
      searchInput.style.height = "40px"; // set the width to 40 pixels
      document.body.insertBefore(searchInput, myList);
  
      const searchButton = document.createElement("button");
      searchButton.textContent = "Search";
      document.body.insertBefore(searchButton, myList);
  
      const filterData = (searchText) => {
        myList.innerHTML = "";
        allData
          .filter((character) =>
            character.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .forEach((character) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(character.name));
            myList.appendChild(li);
  
            // add click event to each character's name
            li.addEventListener("click", async () => {
              let houses = await Promise.all(
                character.allegiances.map(async (houseUrl) => {
                  let response = await fetch(houseUrl);
                  let house = await response.json();
                  return house.name;
                })
              );
              alert(`${character.name} belongs to the following houses: ${houses.join(", ")}`);
            });
          });
      };
  
      searchButton.addEventListener("click", () => {
        filterData(searchInput.value);
      });
  
      searchInput.addEventListener("input", () => {
        filterData(searchInput.value);
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  Getchar();

Getchar()






// const getPage = async (pageNumber) => {
//     const pageInfo = await fetch(`https://anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=50`)
//      .then(res => res.json())
//     return pageInfo
//    }
   
//    const getHousePage = async (houseId) => {
//     const pageInfo = await fetch(`https://anapioficeandfire.com/api/house/${houseId}}`)
//      .then(res => res.json())
//     return pageInfo
//    }
   
//    const getCharacters = async () => {
   
//     let characters = []
//     let count = 1;
//     while (true) {
//      const page = await getPage(count)
//      characters = [...characters, ...page];
//      if (characters.length % 50)
//       break;
//      else
//       count++;
//     }
//     characters = characters.map(({ name, allegiances }, index) => {
//      return { name, allegiances }
//     })
//     console.log(characters)
   
//     //Run the function on click and load data
//     // getHousePage(362)
   
//     return characters
//    }
//    getCharacters();