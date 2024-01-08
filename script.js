"use strict";

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  results = fruit.filter((word) => {
    return word.toLowerCase().includes(str);
  });

  return results;
}

function searchHandler(e) {
  const searchTerm = e.target.value.toLowerCase().trim();
  const results = search(searchTerm);

  if (results.length > 0 && searchTerm !== "") {
    showSuggestions(results, searchTerm);
    suggestions.style.display = "block";
  } else {
    suggestions.style.display = "none";
  }
}

function highligtMatch(word, searchTerm) {
  const startIndex = word.toLowerCase().indexOf(searchTerm);
  if (startIndex !== -1) {
    const highlightedWord =
      word.substring(0, startIndex) +
      "<span class='has-suggestions'>" +
      word.substring(startIndex, startIndex + searchTerm.length) +
      "</span>" +
      word.substring(startIndex + searchTerm.length);
    return highlightedWord;
  }
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = highligtMatch(result, inputVal);
    suggestions.appendChild(listItem);
  });
}

function useSuggestion(e) {
  const userClicked = e.target.textContent;
  input.value = userClicked;
  suggestions.style.display = "none";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
