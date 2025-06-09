# Simple Calculator with Memory Features – Instructions

**Step 1:** Unzip the folder.

**Step 2:** Inside the folder, you will find three files: `index.html`, `style.css`, and `scripts.js`.

**Step 3:** Right-click on the unzipped folder and select **"Open with Code"** to open it in Visual Studio Code.

**Step 4:** Open the `index.html` file, then right-click on the page and choose **"Open with Live Server"**.  
This will launch the calculator in your browser. Ensure the **Live Server** extension is installed in Visual Studio Code.

**Step 5:** The calculator interface will be displayed with a number pad, arithmetic operators, memory buttons (`M+`, `M-`, `MR`, `MC`), clear options (`AC`, `CE`), and a result button (`=`).

### Features and Functionalities

- **Basic Input:**
  - Click on any number or operator to enter a value in the display.
  - The display shows the ongoing input.

- **Arithmetic Operations:**
  - Supports addition `+`, subtraction `-`, multiplication `*`, and division `/`.
  - Use parentheses `(` and `)` for complex expressions.
  - Press `=` to evaluate the expression.

- **Memory Functions:**
  - `M+` – Adds the current displayed value to memory.
  - `M-` – Subtracts the current displayed value from memory.
  - `MR` – Recalls and displays the current value stored in memory.
  - `MC` – Clears the memory value.

- **Clear Options:**
  - `CE` – Clears only the current input.
  - `AC` – Clears both the current input and memory.

- **Decimal Point:**
  - `.` – Adds a decimal point to the current number if not already present.

- **Error Handling:**
  - Invalid expressions show `Error` on the display.
  - Division by zero shows `Infinity`.

 # Important Notes

- The calculator's background image loads from the file `simple-calculator-bg.jpg`, ensure this image is in the same directory.
- All styles are managed through the `style.css` file.
- JavaScript logic and button functionality are handled in the `scripts.js` file.
- Make sure your internet connection is active if your environment depends on any online dependencies (e.g., Google Fonts or favicon).
- This application is responsive and works across different device sizes.
