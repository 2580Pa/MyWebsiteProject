const { jsPDF } = require("jspdf");
function generatePDF() {
    const doc = new jsPDF();
    doc.text("خروجی PDF", 10, 10);
    doc.save("output.pdf");
    console.log("PDF ساخته شد");
}
