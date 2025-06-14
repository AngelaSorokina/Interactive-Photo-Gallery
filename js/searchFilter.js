/*
 * Filters gallery images based on the search input.
 * Shows only images whose captions include the search text (case-insensitive).
 * Triggered on every key release in the search field.
 */


//Declaring variables
const input = document.getElementById("search");
const images = document.querySelectorAll('.gallery a');

//Filters gallery images by search input, showing only matching captions (case-insensitive).
function searchFilter() {
  const filter = input.value.toLowerCase();

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const caption = img.getAttribute('data-caption').toLowerCase();

    if (caption.includes(filter)) {
      img.style.display = "block";  // показываем, если совпало
    } else {
      img.style.display = "none";   // прячем, если нет
    }
  }
}

//Triggers searchFilter on each key release.
input.addEventListener("keyup", searchFilter);