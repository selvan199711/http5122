/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
window.onload = function () {
  const form = document.getElementById("shippingForm");
  const thankYouMsg = document.getElementById("thanks_msg");
  const myName = document.getElementById("in_Name");
  const myPost = document.getElementById("in_pc");
  const myCust = document.getElementById("thanksCustomer");
  const thankPC = document.getElementById("thanksPC");

  form.onsubmit = function (e) {
    e.preventDefault();

    const name = myName.value.trim();
    const postal = myPost.value.trim();

    // Validate name
    if (name === "") {
      myName.style.backgroundColor = "red";
      myName.focus();
      return false;
    } else {
      myName.style.backgroundColor = "";
    }

    // Validate postal code
    if (postal === "") {
      myPost.style.backgroundColor = "red";
      myPost.focus();
      return false;
    } else {
      myPost.style.backgroundColor = "";
    }

    // Show thank you message
    form.style.display = "none";
    thankYouMsg.style.display = "block";
    myCust.textContent = name;
    thankPC.textContent = postal;

    return false;
  };
};
//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

//WAIT FOR THE PAGE TO LOAD