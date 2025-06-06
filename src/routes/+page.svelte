<script>
  import { onMount } from 'svelte';

  // This function is taken from: https://ryanschiang.com/how-to-create-a-typewriter-effect-in-svelte
  // (rewritten from TypeScript to JS by ChatGPT)
  // it's lit
  export function animateTyping(node, texts) {
    let textsToType = texts;

    let textsIndex = 0;
    let charIndex = 0;
    let currentText = '';

    const updateInnerHTML = (isTyping) => {
        // Always include the zero-width space and conditionally add the text and cursor
        node.innerHTML = '&#8203;' + currentText + (isTyping ? '|' : '');
    };

    const blinkingCursor = () => {
        if (currentText.endsWith('|')) {
            currentText = currentText.slice(0, -1);
        } else {
            currentText += '|';
        }
        updateInnerHTML();
    };

    // Blinking cursor effect
    const waitingEffect = (delay) => {
        const interval = setInterval(blinkingCursor, 500);

        setTimeout(() => {
            clearInterval(interval); // Stop blinking
            if (currentText.endsWith('|')) {
                // Remove cursor if it's still there
                currentText = currentText.slice(0, -1);
            }
            updateInnerHTML();
        }, delay);
    };

    // Typing animation effect
    const typeEffect = () => {
        const currentString = textsToType[textsIndex];
        const delay = currentString[charIndex] === ' ' ? 75 : 100; // Faster delay for spaces

        if (charIndex < currentString.length) {
            currentText += currentString[charIndex++];
            setTimeout(typeEffect, delay);
        } else {
            waitingEffect(3000);
            setTimeout(deleteEffect, 3000); // Wait before starting to delete
        }

        updateInnerHTML(true);
    };

    // Deleting animation effect
    const deleteEffect = () => {
        if (charIndex > 0) {
            currentText = currentText.slice(0, --charIndex);
            setTimeout(deleteEffect, 50);
        } else {
            textsIndex = (textsIndex + 1) % textsToType.length;
            currentText = ''; // Clear text but keep zero-width space
            waitingEffect(3000);
            setTimeout(typeEffect, 3000);
        }

        updateInnerHTML();
    };

    // Start typing effect
    setTimeout(typeEffect, 500);

    return {
        onDestroy() {},
        update(newTexts) {
            textsToType = newTexts;
        }
    };
}




</script>

<style lang="postcss">
:global(html) {
    background-color: rgb(64 64 64);
    color: rgb(250 250 250);
}

@keyframes self-writing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

</style>

<div class="flex flex-col justify-center items-center">
    <div class="text-[30px] sm:text-[50px] text-center">
        Hi!
    </div>
    <div class="text-[30px] sm:text-[50px] text-center">
        My name is Tom, I am
    </div>
    <div class="text-[30px] sm:text-[50px] text-center">
        <span use:animateTyping={[
            "an Engineer",
            "an Open Source Enthusiast",
            "a Music Producer",
            "a non-stop Tea Drinker",
            "passionate about Dev(Sec)Ops"
        ]} />
    </div>
</div>
