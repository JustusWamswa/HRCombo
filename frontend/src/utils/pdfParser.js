import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const extractTextFromPDF = async (file) => {
  const reader = new FileReader()

  const textContent = await new Promise((resolve, reject) => {
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result)
      const pdf = await pdfjs.getDocument(typedArray).promise
      let text = ''

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        text += content.items.map(item => item.str).join(' ')
      }

      resolve(text)
    }
    reader.onerror = reject
    reader.readAsArrayBuffer(file)
  })

  return textContent
}
