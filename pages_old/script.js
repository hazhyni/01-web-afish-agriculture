document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
  });
});

const scrollContainer = document.getElementById("card-container");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    top: 0,
    left: -300, // Adjust this value based on card width
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    top: 0,
    left: 300, // Adjust this value based on card width
    behavior: "smooth",
  });
});
// Supplier data
function closeBanner() {
  const banner = document.getElementById("banner");
  if (banner) {
    banner.remove(); // Remove the banner element from the DOM
  }
}

const suppliers = [
  {
    description:
      "Supplier A produces high-quality coffee from sustainable farms.",
    locations: ["Location A1", "Location A2", "Location A3"],
  },
  {
    description: "Supplier B specializes in organic tea production.",
    locations: ["Location B1", "Location B2", "Location B3"],
  },
  {
    description: "Supplier C provides premium spices with a rich aroma.",
    locations: ["Location C1", "Location C2", "Location C3"],
  },
];

// Function to change supplier details dynamically
function changeSupplier(index) {
  const supplierText = document.getElementById("supplier-text");
  const supplierLocations = document.getElementById("supplier-locations");

  // Update description
  supplierText.textContent = suppliers[index].description;

  // Update locations
  supplierLocations.innerHTML = suppliers[index].locations
    .map((location) => `<li>${location}</li>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const filterOptions = document.querySelectorAll(
    'input[name="color[]"], input[name="category[]"], input[name="size[]"]'
  );
  const products = document.querySelectorAll(".product-card"); // Use a consistent class for all product items.

  function filterProducts() {
    // Gather selected filters.
    const selectedFilters = {
      color: Array.from(
        document.querySelectorAll('input[name="color[]"]:checked')
      ).map((el) => el.value),
      category: Array.from(
        document.querySelectorAll('input[name="category[]"]:checked')
      ).map((el) => el.value),
      size: Array.from(
        document.querySelectorAll('input[name="size[]"]:checked')
      ).map((el) => el.value),
    };

    // Filter products based on selected criteria.
    products.forEach((product) => {
      const productColor = product.dataset.color; // Add `data-color` to your product elements.
      const productCategory = product.dataset.category; // Add `data-category` to your product elements.
      const productSize = product.dataset.size; // Add `data-size` to your product elements.

      // Check if the product matches the selected filters.
      const matchesColor =
        !selectedFilters.color.length ||
        selectedFilters.color.includes(productColor);
      const matchesCategory =
        !selectedFilters.category.length ||
        selectedFilters.category.includes(productCategory);
      const matchesSize =
        !selectedFilters.size.length ||
        selectedFilters.size.includes(productSize);

      // Show or hide the product based on the filters.
      if (matchesColor && matchesCategory && matchesSize) {
        product.style.display = ""; // Show the product.
      } else {
        product.style.display = "none"; // Hide the product.
      }
    });
  }

  // Attach event listeners to filter options.
  filterOptions.forEach((filter) => {
    filter.addEventListener("change", filterProducts);
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
