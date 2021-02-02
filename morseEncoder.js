
  const morseData = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }

 

  const encode = (string) => {
    string = string.split('')
    let newString = []
    const keys = Object.keys(morseData);
    const values = Object.values(morseData);
    
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < keys.length; j++){
            if(string[i] == keys[j]) newString.push(values[j]+' ')
        }
        if(string[i] == ' ') newString.splice(i, 0, '  ')
    }
    return newString.join('')
  }

  console.log(encode("hello world"))
