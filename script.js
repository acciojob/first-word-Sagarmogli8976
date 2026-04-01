function firstWord(s) {
  // your code here
	 if (!s) return "";

  s = s.trimStart();

  let index = s.indexOf(" ");

  if (index === -1) {
    return s;
  }

  // return substring till first space
  return s.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
