function typeline()
{
	const paragraph = "Starting my H journey with this page.Starting my HT journey with this page.Starting my HTM journey with this page.Starting my HTML journey with this page.Starting my  journey with this page.Starting my C journey with this page.Starting my CS journey with this page.Starting my CSS journey with this page. Starting my  journey with this page. Starting my J journey with this page.Starting my JS journey with this page.Starting my  journey with this page.Starting my H journey with this page.Starting my HT journey with this page.Starting my HTM journey with this page.Starting my HTML journey with this page.Starting my HTML/ journey with this page.Starting my HTML/C journey with this page.Starting my HTML/CS journey with this page.Starting my HTML/CSS journey with this page.Starting my HTML/CSS/ journey with this page.Starting my HTML/CSS/J journey with this page.Starting my HTML/CSS/JS journey with this page.";
      const lines = paragraph.split(".");
      const typewriter = document.getElementById("typewriter");
	  typewriter.style.textAlign = 'center';
	  typewriter.style.fontSize = '20px';
      let currentIndex = 0;

      const typeLine = () => {
        if (currentIndex == lines.length - 1) {
          return;
        }

        const currentLine = lines[currentIndex];
        typewriter.innerText = currentLine.trim();
        currentIndex++;
        setTimeout(() => {
          typeLine();
        }, 500);
      };

      typeLine();
}