document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const radios = document.querySelectorAll('input[type="radio"]');
  const totalElement = document.querySelector(".total");
  const sizeSelects = document.querySelectorAll(".size-select");
  const colorSelects = document.querySelectorAll(".color-select");

  // Set initial total based on selected option
  updateTotal();

  // Add event listeners to radio buttons
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Remove selected class from all options
      options.forEach((opt) => {
        opt.classList.remove("selected");
      });

      // Add selected class to the parent option of the checked radio
      if (this.checked) {
        const parentOption = this.closest(".option");
        parentOption.classList.add("selected");
        updateTotal();
      }
    });
  });

  // Add event listeners to option headers for clicking
  document.querySelectorAll(".option-header").forEach((header) => {
    header.addEventListener("click", function (e) {
      // Don't trigger if clicking on the radio button itself
      if (
        e.target.classList.contains("radio-custom") ||
        e.target.type === "radio"
      ) {
        return;
      }

      const option = this.closest(".option");
      const radio = option.querySelector('input[type="radio"]');
      radio.checked = true;

      // Trigger the change event
      const event = new Event("change");
      radio.dispatchEvent(event);
    });
  });

  // Ensure independent size selection for each unit
  sizeSelects.forEach((select) => {
    select.addEventListener("change", function () {
      const selectedSize = this.value;
      console.log(`Size selected for ${this.id}: ${selectedSize}`);
      // Each size selection is now independent
    });
  });

  // Ensure independent color selection for each unit
  colorSelects.forEach((select) => {
    select.addEventListener("change", function () {
      const selectedColor = this.value;
      console.log(`Color selected for ${this.id}: ${selectedColor}`);
      // Each color selection is now independent
    });
  });

  function updateTotal() {
    const selectedValue = document.querySelector(
      'input[name="unit-option"]:checked'
    ).value;
    let total = "";

    switch (selectedValue) {
      case "1":
        total = "$10.00 USD";
        break;
      case "2":
        total = "$18.00 USD";
        break;
      case "3":
        total = "$24.00 USD";
        break;
    }

    totalElement.textContent = "Total : " + total;
  }

  // Add animation to the Add to Cart button
  const addToCartBtn = document.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});
