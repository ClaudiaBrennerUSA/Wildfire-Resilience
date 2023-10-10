function generateStandardFooter()
{
  let footerMarkup = `
    <div class="bg-system-pallette-a w-100 h-100">
      <h2>Common Footer</h2>
    </div>
    `;
  footer = document.getElementById("footer-container");
  footer.innerHTML = footerMarkup;

  return;
  
}