    async function fetchPrices() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
        );
        const data = await response.json();

        document.getElementById("btc-price").innerText = `$${data.bitcoin.usd}`;
        document.getElementById("eth-price").innerText = `$${data.ethereum.usd}`;
        document.getElementById("doge-price").innerText = `$${data.dogecoin.usd}`;
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    }

    // Fetch initially and then every 10 seconds
    fetchPrices();
    setInterval(fetchPrices, 10000);