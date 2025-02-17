import { addCartData, updateCartCount } from "./cart.js";
import { api } from "./main.js";
const createProduct = (product) => {
  const { thumbnail, price, title, brand, rating, discountPercentage } =
    product;
  const prodcutCard = $(` <div class="product_card">
                <div class="product_img">
                    <img src=${thumbnail} />
                </div>
                <div class="product_content">
                    <p class="product_title">${title}</p>
                    <p class="product_brand">${brand}</p>
                    <p class="product_stats">
                        <span class="product_rating"> ${Math.ceil(
                          rating
                        )} ⭐ </span>
                        <span class="product_discout"> ${Math.ceil(
                          discountPercentage
                        )}% off </span>
                    </p>
                    <p class="product_price">${Math.ceil(price)} Rs.</p>
                </div>
                 <button class="add_cart_btn">Add to Cart</button>
            </div>`);

  const cartBtn = prodcutCard.find(".add_cart_btn");

  cartBtn.on("click", function (e) {
    cartBtn.html("Go to Cart");
    cartBtn.css({
      background: "teal",
    });

    addToCart(product);
  });

  return prodcutCard;
};

const showProducts = (products) => {
  const container = $("#products");

  const productCards = products.map((product) => createProduct(product));

  container.append(productCards);
};

const getProducts = async () => {
  try {
    const res = await api();
    if (res && res.data && res.data.length) {
      const products = res.data;

      showProducts(products);
      onSort(products);
      createCategoryFilter(products);
      onSearch(products);
    } else {
      //show no product avaialble
      showNotAvailable();
    }
  } catch (e) {
    // show error on screen
    showSomethingWrong();
  }
};

function showSomethingWrong() {
  $("#someting_wrong_product").show();
}

function showNotAvailable() {
  $("#no_product").show();
}
function hideNotAvailable() {
  $("#no_product").hide();
}

function onSort(products) {
  const sortFilter = $("#sort_filter");

  sortFilter.on("change", function (e) {
    const selected = e.target.value;

    // create an array of objects
    // every object should have a title and price
    // sort the array in ascd or desc according to price
    let sortedProducts;
    if (selected === "hl") {
      sortedProducts = products.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = products.sort((a, b) => a.price - b.price);
    }
    clearProducts();
    showProducts(sortedProducts);
  });
}

function onFilter(products) {
  const filter = $("#category_filter");

  filter.on("change", function (e) {
    const selected = e.target.value;

    let filteredProducts;
    if (selected === "all") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((i) => i.category === selected);
    }

    clearProducts();
    showProducts(filteredProducts);
  });
}

function getCategories(products) {
  // create an array of objects
  // every object has a title and a category
  // multiple objects in that array can have same category
  // return  an array of unique categories

  const set = new Set();

  products.forEach((i) => {
    set.add(i.category);
  });

  const categories = [...set];
  return categories;
}

function createCategoryFilter(products) {
  const categories = getCategories(products);

  const categoryFilter = $("#category_filter");

  const options = categories.map((i) =>
    $(`<option value="${i}">${i}</option>`)
  );

  categoryFilter.append(options);
  onFilter(products);
}

function clearProducts() {
  hideNotAvailable();
  $("#products").empty();
}

function onSearch(products) {
  const search = $("#search_filter");

  search.on("input", function (e) {
    let text = e.target.value;
    text = text.toLowerCase();
    let searchedProducts;
    if (text.length === "") {
      searchedProducts = products;
    } else {
      searchedProducts = products.filter(
        (i) =>
          i.title.toLowerCase().startsWith(text) ||
          i.title.toLowerCase().includes(text) ||
          i.brand.toLowerCase().startsWith(text)
      );
    }

    clearProducts();
    if (searchedProducts && searchedProducts.length) {
      showProducts(searchedProducts);
    } else {
      showNotAvailable();
    }
  });
}

function addToCart(product) {
  addCartData(product);
  updateCartCount();
}
getProducts();
updateCartCount();
