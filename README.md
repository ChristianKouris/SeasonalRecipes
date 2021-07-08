# Intro

As of now this Readme is an info dump of all the ideas I have for this project.
When this project gets more fleshed out the info may be organized better, fleshed out,
and improved on.

# General Info

Name: Seasonal Recipes (TBD)

Main Idea: Match fruit seasons to certain time of year and give recipies for said fruit

Question: Does anything other than fruit have seasons???

# Baseline Features

## Three Main Pages:

Homepage has a calendar that aligns with day of visitation:
	Shows what foods are in season

Page that searches database:
	- Fruit as a search query that returns it's seasons
	- Month as a search query that returns all fruits in season

Page that searches recipes by fruits in season today (API call to recipe website????)
 
# Database Layout

Food Database:
| Food (PK)  			| Season Start 				| Season End			|
| ----------------------------- | ------------------------------------- | ----------------------------- |
| String			| Int					| Int				|
| Name of the Food		| Start month of the season		| End month of the season	|
| Will be used in API calls	| Jan = 00, Dec = 11 			| Jan = 00, Dec = 11		|

# Tech Stack

MERN:
- MongoDB
- Express.js
- React.js
- Node.js

# Future Features/Ideas

- User Login: Can be used to favorite fruits and recipes
- Link to Wikipedia Page in Food DB
- Web hosting
