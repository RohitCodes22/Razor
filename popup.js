document.getElementById("send").addEventListener("click", async () => {
    let userInput = document.getElementById("userInput").value;
    let responseElement = document.getElementById("response");

    if (userInput.trim() === "") {
        responseElement.textContent = "Please enter text.";
        return;
    }

    responseElement.textContent = "Processing...";

    try {
        let response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_OPENAI_API_KEY"
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: `Summarize: ${userInput}` }]
            })
        });

        let data = await response.json();
        responseElement.textContent = data.choices[0].message.content;
    } catch (error) {
        responseElement.textContent = "Error fetching response.";
    }
});
