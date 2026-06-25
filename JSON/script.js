// WHAT IS JSON?
// >>(JAVASCRIPT OBJECT NOTATION) DATA-INTERCHANGE FORMAT
// >> USED FOR EXCHANGING DATA BETWEEN A SERVER AND A WEB APPLICATION
// >> JSON FILES {KEY:VALUE} OR [VALUE1, VALUE2, VALUE3]
// >> JSON.STRINGIFY() = CONVERTS A JS OBJECT TO A JSON STRING.
// >> JSON.PARSE() = CONVERTS A JSON STRING TO A JS OBJECT
// >> FETCH() = WEB API USED TO REQUEST DATA FROM A SERVER (RETURNS A PROMISE)

// fetch('person.json').then(response => response.json())
//                     .then(values => values.forEach((value) => {
//                       console.log(value)}))
//                     .catch((error) => console.error(error));


async function fetchData() {
  try {
    // 1. Mag-request ng data
    const response = await fetch('person.json');
    
    // Check kung success ang response
    if (!response.ok) {
      throw new Error("File not found!");
    }

    // 2. I-convert ang response sa JSON object
    const values = await response.json();
    
    // 3. I-loop ang resulta
    values.forEach((value) => {
      console.log(value);
    });
    
  } catch (error) {
    // Dito mapupunta ang error kung may problema sa fetch o json parsing
    console.error("Error:", error);
  }
}

fetchData();