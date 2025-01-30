const processJsonString = (jsonString) => {
    try {
        // Step 1: Trim unnecessary spaces and escape sequences
        jsonString = jsonString.trim();

        // Step 2: Handle JSON string wrapped in triple quotes (if any)
        if (jsonString.startsWith('```json') && jsonString.endsWith('```')) {
            jsonString = jsonString.slice(7, -3); // Remove the wrapping ```
        }

        // Step 3: Parse JSON String
        const jsonData = JSON.parse(jsonString);

        // Step 4: Validate the parsed data (optional)
        if (typeof jsonData !== "object") {
            throw new Error("Invalid JSON: Expected an object.");
        }

        // console.log("Successfully Processed JSON:", jsonData);
        return jsonData; // Return processed object
    } catch (error) {
        console.error("Error processing JSON:", error.message);
        return null;
    }
};

export default processJsonString;