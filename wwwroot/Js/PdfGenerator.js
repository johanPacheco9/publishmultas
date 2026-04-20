function saveAsFile(filename, bytesBase64) {
    console.log("Llamando SaveAsFile");
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/octet-stream;base64," + bytesBase64;
    document.body.appendChild(link);  // Corregido: 'document.body' en lugar de 'document'
    link.click();
    document.body.removeChild(link);
}
