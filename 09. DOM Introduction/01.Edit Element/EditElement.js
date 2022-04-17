function editElement(reference, string, replacer) {
    const text = reference.textContent;
    const newText = text.split(string).join(replacer);
    reference.textContent = newText;
}