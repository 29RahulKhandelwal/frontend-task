let products = [
  {
    name: "Watch",
    category: "Accessories",
    price: "$ 20",
    company: "Google",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Mobile",
    category: "Telecommunication",
    price: "$ 500",
    company: "Webflow",
    status: "Out of stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Laptop",
    category: "Note Book",
    price: "$ 800",
    company: "Facebook",
    status: "Out of stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "TV",
    category: "Digital",
    price: "$ 250",
    company: "Twitter",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Camera",
    category: "Digital",
    price: "$ 100",
    company: "YouTube",
    status: "Out of stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Perfume",
    category: "Cosmetics",
    price: "$ 25",
    company: "Reddit",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Ear pods",
    category: "Digital",
    price: "$ 45",
    company: "Spotify",
    status: "Out of stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Wireless Charger",
    category: "Digital",
    price: "$ 10",
    company: "Pinterest",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Torch",
    category: "Light",
    price: "$ 20",
    company: "Twitch",
    status: "Out of stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Tablet",
    category: "Digital",
    price: "$ 400",
    company: "Google",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Speaker",
    category: "Sound",
    price: "$ 60",
    company: "Twitch",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Fan",
    category: "Electronics",
    price: "$ 35",
    company: "YouTube",
    status: "Out of stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
  {
    name: "Mouse",
    category: "Accessories",
    price: "$ 15",
    company: "YouTube",
    status: "In Stock",
    image:
      "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg",
  },
];

let filteredProducts = [...products];
let currentPage = 1;
let rowsPerPage = 10;
let currentSort = { key: "", order: "" };

function displayTable() {
  console.log(filteredProducts);
  const tableBody = document.querySelector("#product__table tbody");
  tableBody.innerHTML = "";

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + parseInt(rowsPerPage);
  const pageItems = filteredProducts.slice(start, end);

  pageItems.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td><input type="checkbox" class="row-checkbox"></td>
    <td class="product--cell d-flex-center">
    <div  class="product__table--product-img">
      <img src="${
        item.image ||
        "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/photo.svg"
      }" alt="Product Image"/>
    </div>
    <span class="product__table--product-name">${item.name}</span>
  </td>
    <td class="product__table--product-category">${item.category}</td>
    <td class="product__table--product-price">${item.price}</td>
    <td class="product__table--product-company d-flex-center"><img 
    src=${
      {
        google:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/Google.svg",
        webflow:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/Webflow.svg",
        facebook:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/facebook.svg",
        twitter:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/twitter.svg",
        youtube:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/youtube.svg",
        reddit:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/reddit.svg",
        spotify:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/spotify.svg",
        twitch:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/twitch.svg",
        pinterest:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/pinterest.svg",
        apple:
          "https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/Apple.svg",
      }[String(item.company).toLowerCase()] || ""
    } 
    alt="company-logo"
  />${item.company}</td>
    <td><div class=" product__table--product-status d-flex-center ${
      item.status === "In Stock"
        ? "product__table--product-status-in-stock"
        : "product__table--product-status-out-of-stock"
    }">&bull; ${item.status}</div></td>
    <td>
      <div class="product__table--product-action-icons">
        <div class="icon" title="Edit">
          <img src="https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/pencil.svg" alt="edit-product"><span class="tooltip">Edit Product</span>
        </div>
        <div class="icon delete-icon" title="Delete">
          <img src="https://29rahulkhandelwal.github.io/frontend-task/src/assets/product-list/icons/bin.svg" alt="delete-product"><span class="tooltip">Delete Product</span>
        </div>
      </div>
    </td>
  `;

    // 🔥 Add this block to attach the edit handler
    const editIcon = row.querySelectorAll(".icon")[0];
    const index = products.findIndex(
      (p) =>
        p.name === item.name &&
        p.category === item.category &&
        p.company === item.company &&
        p.price === item.price
    );
    editIcon.onclick = function () {
      openEditModal(item, index);
    };

    // Attach delete handler
    const deleteIcon = row.querySelector(".delete-icon");
    deleteIcon.onclick = () => {
      if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
        products.splice(index, 1);
        filteredProducts = [...products];
        const maxPage = Math.ceil(filteredProducts.length / rowsPerPage);
        if (currentPage > maxPage) currentPage = maxPage || 1;
        displayTable();
      }
    };

    tableBody.appendChild(row);
  });

  // Attach edit handlers
  document.querySelectorAll(".edit-icon").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      openEditModal(products[index], index);
    });
  });

  const total = filteredProducts.length;
  const rows = document.getElementsByClassName("product__table--rowInfo");
  for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML = `<span class="highlight">${start + 1}-${Math.min(
      end,
      total
    )}</span> of ${total}`;
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = end >= total;

  // Update path fill color based on disabled state
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = end >= total;

  const disabledColor = "#7E89AC";
  const activeColor = "white";

  // Update all paths inside prevBtn
  const prevPaths = prevBtn.querySelectorAll("svg path");
  prevPaths.forEach((path) => {
    path.setAttribute("fill", prevBtn.disabled ? disabledColor : activeColor);
  });

  // Update all paths inside nextBtn
  const nextPaths = nextBtn.querySelectorAll("svg path");
  nextPaths.forEach((path) => {
    path.setAttribute("fill", nextBtn.disabled ? disabledColor : activeColor);
  });
}

function sortTable(key, thElement) {
  const isAsc = currentSort.key === key && currentSort.order === "asc";
  currentSort = { key, order: isAsc ? "desc" : "asc" };

  document
    .querySelectorAll("th.sortable")
    .forEach((th) => th.classList.remove("asc", "desc"));
  thElement.classList.add(currentSort.order);

  filteredProducts.sort((a, b) => {
    let valA = a[key];
    let valB = b[key];

    if (key === "price") {
      valA = Number(valA.replace("$", ""));
      valB = Number(valB.replace("$", ""));
    }

    return currentSort.order === "asc"
      ? valA > valB
        ? 1
        : -1
      : valA < valB
      ? 1
      : -1;
  });

  displayTable();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayTable();
  }
}

function nextPage() {
  if (currentPage * rowsPerPage < filteredProducts.length) {
    currentPage++;
    displayTable();
  }
}

function toggleAll(source) {
  const checkboxes = document.querySelectorAll(".row-checkbox");
  checkboxes.forEach((cb) => (cb.checked = source.checked));
}

function changeRowsPerPage(value) {
  rowsPerPage = parseInt(value);
  currentPage = 1;
  displayTable();
}

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  currentPage = 1;
  displayTable();
}

window.onload = displayTable;

// Add New Product
document.addEventListener("DOMContentLoaded", function () {
  const categoryDropdownButton = document.getElementById(
    "categoryDropdownButton"
  );
  const categoryDropdownList = document.getElementById("categoryDropdownList");

  const companyDropdownButton = document.getElementById(
    "companyDropdownButton"
  );
  const companyDropdownList = document.getElementById("companyDropdownList");

  const statusDropdownButton = document.getElementById("statusDropdownButton");
  const statusDropdownList = document.getElementById("statusDropdownList");

  function openModal() {
    document.getElementById("productModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("productModal").style.display = "none";
  }

  let uploadedImageData = null;
  const imagePreview = document.getElementById("imagePreview");
  const fileInput = document.getElementById("fileInput");
  const productPrice = document.getElementById("productPrice");
  const productName = document.getElementById("productName");
  const saveBtn = document.getElementById("saveBtn");
  const selectedCompany = document.getElementById("selectedCompany");
  const selectedCategory = document.getElementById("selectedCategory");
  const selectedStatus = document.getElementById("selectedStatus");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageData = e.target.result;
      renderImagePreview(uploadedImageData);
      validateForm();
    };
    reader.readAsDataURL(file);
  });

  productPrice.addEventListener("input", validateForm);
  productName.addEventListener("input", validateForm);

  function renderImagePreview(src) {
    imagePreview.style.display = "block";
    document.querySelector("#uploadBox").style.display = "none";
    imagePreview.innerHTML = `
        <img src="${src}" alt="Preview">
        <div class="image-actions d-flex-center">
        <span onclick="openGallery()">Edit</span>
        <span>|</span>
          <span onclick="deleteImage()">Delete</span>
        </div>
      `;
  }

  window.deleteImage = function () {
    uploadedImageData = null;
    imagePreview.style.display = "none";
    document.querySelector("#uploadBox").style.display = "flex";
    imagePreview.innerHTML = "";
    fileInput.value = "";
    validateForm();
  };

  // Open Gallery
  window.openGallery = function () {
    document.getElementById("fileInput").click();
  };

  function validateForm() {
    const isValid =
      productName.value.trim() &&
      productPrice.value.trim() &&
      selectedCompany.textContent !== "Select Company" &&
      selectedCategory.textContent !== "Select Category" &&
      selectedStatus.textContent !== "Select Status" &&
      uploadedImageData;

    saveBtn.disabled = !isValid;
  }

  categoryDropdownButton.onclick = () => {
    categoryDropdownList.style.display =
      categoryDropdownList.style.display === "block" ? "none" : "block";
  };
  companyDropdownButton.onclick = () => {
    companyDropdownList.style.display =
      companyDropdownList.style.display === "block" ? "none" : "block";
  };
  statusDropdownButton.onclick = () => {
    statusDropdownList.style.display =
      statusDropdownList.style.display === "block" ? "none" : "block";
  };

  document
    .querySelectorAll("#categoryDropdownList .dropdown-option")
    .forEach((option) => {
      option.onclick = () => {
        selectedCategory.textContent = option.textContent;
        categoryDropdownList.style.display = "none";
        validateForm();
      };
    });

  document
    .querySelectorAll("#companyDropdownList .dropdown-option")
    .forEach((option) => {
      option.onclick = () => {
        selectedCompany.textContent = option.textContent;
        companyDropdownList.style.display = "none";
        validateForm();
      };
    });

  document
    .querySelectorAll("#statusDropdownList .dropdown-option")
    .forEach((option) => {
      option.onclick = () => {
        selectedStatus.textContent = option.textContent;
        statusDropdownList.style.display = "none";
        validateForm();
      };
    });

  const productTableBody = document.getElementById("product__table--body");

  saveBtn.addEventListener("click", () => {
    const newProduct = {
      name: productName.value.trim(),
      category: selectedCategory.textContent,
      price: `$ ${parseFloat(productPrice.value)}`,
      company: selectedCompany.textContent.trim(),
      status: selectedStatus.textContent,
      image: uploadedImageData,
    };

    products.push(newProduct);
    filteredProducts = [...products];
    displayTable();
    closeModal();
    resetForm();
  });

  function addProductToTable(product) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${
          product.image
        }" style="width: 40px; height: 40px; border-radius: 5px;" /></td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.company}</td>
        <td>${product.status}</td>
        <td>$${product.price.toFixed(2)}</td>
      `;
    productTableBody.appendChild(row);
  }

  function resetForm() {
    productName.value = "";
    productPrice.value = "";
    selectedCompany.textContent = "Select Company";
    selectedCategory.textContent = "Select Category";
    selectedStatus.textContent = "Select Status";
    deleteImage();
    validateForm();
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
});

// Edit Product
let editUploadedImageData = "";
const categoryDropdownButton = document.getElementById(
  "editCategoryDropdownButton"
);
const categoryDropdownList = document.getElementById(
  "editCategoryDropdownList"
);

const companyDropdownButton = document.getElementById(
  "editCompanyDropdownButton"
);
const companyDropdownList = document.getElementById("editCompanyDropdownList");

const statusDropdownButton = document.getElementById(
  "editStatusDropdownButton"
);
const statusDropdownList = document.getElementById("editStatusDropdownList");

// Open the edit modal with pre-filled values
function openEditModal(product, index) {
  const modal = document.getElementById("editModal");
  modal.classList.add("show");
  document.getElementById("editUploadBox").style.display = "none";
  const previews = document.getElementsByClassName("image-preview");
  for (let i = 0; i < previews.length; i++) {
    previews[i].style.display = "block";
  }

  console.log(product);

  // Prefill text/number fields
  document.getElementById("editProductName").value = product.name;
  document.getElementById("editProductPrice").value = Number(
    product.price.replace("$", "")
  );

  // Prefill category dropdown
  document.getElementById("editSelectedCategory").innerText = product.category;

  // Prefill company dropdown
  document.getElementById("editSelectedCompany").innerText = product.company;

  // Prefill status dropdown
  document.getElementById("editSelectedStatus").innerText = product.status;

  // Set uploaded image data if available
  editUploadedImageData = product.image || "";
  if (editUploadedImageData) {
    document.getElementById("editImagePreview").innerHTML = `
      <img src="${editUploadedImageData}" alt="Preview" />
      <div class="image-actions d-flex-center">
      <span onclick="handleOpenGallery()">Edit</span>
    <span>|</span>
        <span onclick="deleteEditImage()">Delete</span>
      </div>
    `;
  } else {
    document.getElementById("editImagePreview").innerHTML = "";
  }

  // Enable Save button
  const saveBtn = document.getElementById("editSaveBtn");
  saveBtn.disabled = false;

  // Save button click handler (using dataset.index)
  saveBtn.dataset.index = index;
}

// Close the edit modal
function closeEditModal() {
  document.getElementById("editModal").classList.remove("show");
  // Clear the image preview and uploaded image data on close
  deleteEditImage();
}

// Image upload preview
document
  .getElementById("editFileInput")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById("editUploadBox").style.display = "none";
    const previews = document.getElementsByClassName("image-preview");
    for (let i = 0; i < previews.length; i++) {
      previews[i].style.display = "block";
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      editUploadedImageData = event.target.result;
      document.getElementById("editImagePreview").innerHTML = `
        <img src="${event.target.result}" alt="Preview" />
        <div class="image-actions d-flex-center">
        <span onclick="handleOpenGallery()">Edit</span>
    <span>|</span>
          <span onclick="deleteEditImage()">Delete</span>
        </div>
      `;
      validateEditForm();
    };
    reader.readAsDataURL(file);
  });

function deleteEditImage() {
  editUploadedImageData = "";
  document.getElementById("editUploadBox").style.display = "flex";
  const previews = document.getElementsByClassName("image-preview");
  for (let i = 0; i < previews.length; i++) {
    previews[i].style.display = "none";
  }
  document.getElementById("editImagePreview").innerHTML = "";
  document.getElementById("editFileInput").value = null;
  validateEditForm();
}

// Open Gallery
function handleOpenGallery() {
  document.getElementById("editFileInput").click();
}

// Enable Save if all fields are filled
function validateEditForm() {
  const name = document.getElementById("editProductName").value.trim();
  const price = document.getElementById("editProductPrice").value.trim();
  const category = document
    .getElementById("editSelectedCategory")
    .textContent.trim();
  const company = document
    .getElementById("editSelectedCompany")
    .textContent.trim();
  const status = document
    .getElementById("editSelectedStatus")
    .textContent.trim();

  const isValid =
    name &&
    price &&
    category !== "Select Category" &&
    company !== "Select Company" &&
    status !== "Select Status";

  document.getElementById("editSaveBtn").disabled = !isValid;
}

// Toggle dropdown visibility
categoryDropdownButton.onclick = () => {
  categoryDropdownList.style.display =
    categoryDropdownList.style.display === "block" ? "none" : "block";
};
companyDropdownButton.onclick = () => {
  companyDropdownList.style.display =
    companyDropdownList.style.display === "block" ? "none" : "block";
};
statusDropdownButton.onclick = () => {
  statusDropdownList.style.display =
    statusDropdownList.style.display === "block" ? "none" : "block";
};

// Setup dropdown option click handlers to update selected text and close dropdown
function setupDropdown(dropdownListId, selectedSpanId) {
  const dropdownList = document.getElementById(dropdownListId);
  const selectedSpan = document.getElementById(selectedSpanId);

  dropdownList.querySelectorAll(".dropdown-option").forEach((option) => {
    option.addEventListener("click", () => {
      selectedSpan.innerText = option.innerText;
      dropdownList.style.display = "none";
      validateEditForm();
    });
  });
}

setupDropdown("editCategoryDropdownList", "editSelectedCategory");
setupDropdown("editCompanyDropdownList", "editSelectedCompany");
setupDropdown("editStatusDropdownList", "editSelectedStatus");

// Input listeners to validate form on user input
["editProductName", "editProductPrice"].forEach((id) => {
  document.getElementById(id).addEventListener("input", validateEditForm);
});

// Save updated product on Save button click
document.getElementById("editSaveBtn").addEventListener("click", function () {
  const index = this.dataset.index;

  const updatedProduct = {
    name: document.getElementById("editProductName").value.trim(),
    price:
      "$ " +
      parseFloat(document.getElementById("editProductPrice").value.trim()),
    category: document
      .getElementById("editSelectedCategory")
      .textContent.trim(),
    company: document.getElementById("editSelectedCompany").textContent.trim(),
    status: document.getElementById("editSelectedStatus").textContent.trim(),
    image: editUploadedImageData,
  };

  // Update in main product list
  products[index] = updatedProduct;
  filteredProducts = [...products];
  displayTable();
  closeEditModal();
});
