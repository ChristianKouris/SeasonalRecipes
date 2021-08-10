exports = async function(payload, response) {

  let query = {};
  if (payload.query.name) {
    query = { $text: { $search: payload.query.name } };
  }
  if(payload.query.season) {
    x = parseInt(payload.query.season);
    if(Math.floor(x/1000)%10 == 1) {
      query = {...query, "spring": { $eq: true }};
    }
    if(Math.floor(x/100)%10 == 1) {
      query = {...query, "summer": { $eq: true }};
    }
    if(Math.floor(x/10)%10 == 1) {
      query = {...query, "fall": { $eq: true }};
    }
    if(Math.floor(x)%10 == 1) {
      query = {...query, "winter": { $eq: true }};
    }
  }
  const collection = context.services.get("mongodb-atlas").db("seasonal_db").collection("fruits");
  let fruitsList = await collection.find(query).toArray();

  fruitsList.forEach(fruit => {
    fruit._id = fruit._id.toString();
  });

  const responseData = {
    produce: fruitsList,
    filters: {name: payload.query.name, season: payload.query.season},
    total_results: fruitsList.length.toString(),
  };
  
  return responseData;
};