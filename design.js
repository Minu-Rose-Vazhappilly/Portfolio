
  const text = "Hi, I'm Minu Rose Vazhappilly";
  const typingElement = document.getElementById('typing');
  let i = 0;

  function typeText() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeText, 120);
    } else {
      // Wait, then erase and restart
      setTimeout(() => {
        typingElement.innerHTML = '';
        i = 0;
        typeText();
      }, 2000); // wait 2 seconds before restarting
    }
  }

  window.onload = typeText;

