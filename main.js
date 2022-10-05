const billAmt = document.querySelector("#bill-amt");
const cashReceived = document.querySelector("#user-cash");
const submit = document.querySelector("#submit");
const msg = document.querySelector("#output");
const changeSection = document.querySelectorAll(".changeCount");

const availableChange = [2000, 500, 100, 20, 10, 5, 1];

const showMsg = (text, sound_selector) => {
  const infoSE = document.querySelector("#infoSE");
  const failSE = document.querySelector("#failSE");
  const successSE = document.querySelector("#successSE");

  switch (sound_selector) {
    case "info":
      msg.style.color = "blue";
      msg.innerText = text;
      infoSE.play();
      break;

    case "success":
      msg.style.color = "green";
      msg.innerText = text;
      successSE.play();
      break;

    case "fail":
      msg.style.color = "red";
      msg.innerText = text;
      failSE.play();
      break;

    default:
      console.log("No Message");
      break;
  }
};

submit.addEventListener("click", () => {
  bill = Number(billAmt.value);
  cashGiven = Number(cashReceived.value);

  const calculateChange = (changeAmt) => {
    for (let i = 0; i < availableChange.length; i++) {
      const changeCount = Math.trunc(changeAmt / availableChange[i]);
      changeAmt %= availableChange[i];
      changeSection[i].innerText = changeCount;
    }
  };

  if (isNaN(bill) || isNaN(cashGiven)) {
    showMsg("Please! Only enter number in the box.", "fail");
  } else {
    if (bill && cashGiven) {
      //   console.log("Bill Ammount" + bill);
      //   console.log("CashGiven" + cashGiven);
      if (bill > 0) {
        if (cashGiven >= bill) {
          const change = cashGiven - bill;
          calculateChange(change);
        } else {
          text = "🍽️ Plates are waiting for you to wash them";
          showMsg(text, "fail");
        }
      } else {
        text = "Invalid bill ammount";
        showMsg(text, "fail");
      }
    } else {
      showMsg("Enter both the numbers", "info");
    }
  }
});
