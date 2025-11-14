// Function to render sermons
function renderSermons() {
  const container = document.getElementById('sermons');
  if (!window.sermons || !container) return;

  container.innerHTML = ''; // clear existing content

  sermons.forEach(sermon => {
    const sermonEl = document.createElement('article');
    sermonEl.className = 'sermon';
    sermonEl.style.cssText = `
      background-color: #fdf5e6;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    `;

    // Audio/Video buttons
    let mediaHTML = '';
    if (sermon.audio && !sermon.video) {
      mediaHTML = `<audio controls style="width:100%; margin-top:10px;"><source src="${sermon.audio}" type="audio/mpeg">Your browser does not support audio.</audio>`;
    } else if (!sermon.audio && sermon.video) {
      mediaHTML = `<video controls style="width:100%; margin-top:10px;"><source src="${sermon.video}" type="video/mp4">Your browser does not support video.</video>`;
    } else if (sermon.audio && sermon.video) {
      mediaHTML = `
        <audio controls style="width:100%; margin-top:10px;"><source src="${sermon.audio}" type="audio/mpeg">Your browser does not support audio.</audio>
        <video controls style="width:100%; margin-top:10px;"><source src="${sermon.video}" type="video/mp4">Your browser does not support video.</video>
      `;
    }

    sermonEl.innerHTML = `
      <h3 style="color:#b00000; margin-bottom:10px;">${sermon.title}</h3>
      <p><strong>Preacher:</strong> ${sermon.preacher}</p>
      <p><strong>Date:</strong> ${sermon.date}</p>
      <p><strong>Scripture:</strong> <em>${sermon.scripture}</em></p>
      <p style="margin-top:10px; line-height:1.6;">${sermon.content}</p>
      ${mediaHTML}
    `;

    container.appendChild(sermonEl);
  });
}
