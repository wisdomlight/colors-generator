const form = document.querySelector('form')
const selectedColor = document.getElementById('color-picker')
const selectedScheme = document.getElementById('select-scheme-box')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const count = "&count=5"
    const baseUrl = 'https://www.thecolorapi.com/scheme?'
    let colorHex = 'hex=' + selectedColor.value.slice(1)
    let schemeValue = '&mode=' + selectedScheme.value

    let fetchUrl = baseUrl + colorHex + schemeValue + count
    // console.log('fetchUrl is:  ', '\n', fetchUrl)

    fetch(fetchUrl).
        then(res => res.json()).
        then(resData => {
            let colorsArrayLength = resData.colors.length
            let colorsArray = resData.colors //colorsArray is now an array [] with five objects {}
            const hexColor = []
            const nameColor = []
            for (let i = 0; i < colorsArrayLength; i++){
                hexColor[i] = resData.colors[i].hex.value
                const element = document.getElementById(`color-${i}`)
                element.style.backgroundColor = hexColor[i]
                let code = document.querySelectorAll(`.code-${i}`)
                console.log('code is:', code)
                console.log(`hex string is ${hexColor[i]}`)
                code[0].textContent = hexColor[i]
                code[0].style.color = hexColor[i]
            }
        })
})