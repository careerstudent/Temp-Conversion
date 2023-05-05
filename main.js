// get fahrenheit value

// activate button

// conversion

// show result


document.querySelector('#button').addEventListener('click', tempConversion)

function tempConversion () {

    let fahrenheit = document.querySelector('#input').value

    const celsius = (( fahrenheit - 32 ) * ( 5/9 ))

    document.querySelector('#result').innerHTML = celsius
}

