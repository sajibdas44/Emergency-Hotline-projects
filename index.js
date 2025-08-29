    const heartCount = document.getElementById("heartCount");
    const coinCounts = document.getElementById("coinCount");
    const copyBtn = document.getElementById("copyBtn");
    const copyCount = document.getElementById("copyCount");

    document.querySelectorAll("#coinCount, #copyBtn").forEach(el => {
      el.addEventListener("click", () => {
        heartCount.textContent = parseInt(heartCounts.textContent) + 1;
      });
    });

    copyBtn.addEventListener("click", () => {
      copyCount.textContent = parseInt(copyCount.textContent) + 1;
    });

    function copyText(text) {
      navigator.clipboard.writeText(text);
      alert("Copied: " + text);
      addHistory("Copied number: " + text);
    }

    function addHistory(entry) {
      const list = document.getElementById("historyList");
      const item = document.createElement("li");
      item.textContent = entry;
      list.prepend(item);
    }

    function clearHistory() {
      document.getElementById("historyList").innerHTML = "";
    }

  const heartCounts = document.getElementById("heartCounts");
  let count = parseInt(heartCounts.textContent);

  document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      count++;
      heartCount.textContent = count;
      btn.classList.add("text-red-500"); 
    });
  });





  let coins = 100; // starting coins
const coinCount = document.getElementById("coinCount");
const historyList = document.getElementById("callHistory");
const clearBtn = document.getElementById("clearHistory");

// Call Button Function
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const service = btn.dataset.service;
    const number = btn.dataset.number;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;
    alert(`Calling ${service} at ${number}... (-20 coins)`);

    // Add to history
    const li = document.createElement("li");
    li.textContent = `${service} - ${number}`;
    historyList.appendChild(li);
  });
});

// Clear History Function
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});


  


  
        











    

 

  
