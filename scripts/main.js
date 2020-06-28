
const elementBody = document.getElementById('element-body')
const atomicNumberDiv = document.getElementById('atomic-number-div')
const symbolDiv = document.getElementById('symbol-div')
const nameDiv = document.getElementById('name-div')

const knowledgeAtomicNumber = document.getElementById('knowledge-atomic-number')
const knowledgeSymbol = document.getElementById('knowledge-symbol')
const knowledgeName = document.getElementById('knowledge-name')
const knowledgeGroupBlock = document.getElementById('knowledge-group-block')
const knowledgeStandardState = document.getElementById('knowledge-standard-state')
const knowledgeAtomicMass = document.getElementById('knowledge-atomic-mass')
const knowledgeAtomicRadius = document.getElementById('knowledge-atomic-radius')
const knowledgeDensity = document.getElementById('knowledge-density')
const knowledgeYearDiscovered = document.getElementById('knowledge-year-discovered')
const knowledgeWiki = document.getElementById('knowledge-wiki')

function createWikiUrl(string) {
    return "https://www.wikipedia.org/wiki/" + string
}

function updateKnowledgePanel(e) {
    knowledgeAtomicNumber.innerHTML = e.atomicNumber
    knowledgeSymbol.innerHTML = e.symbol
    knowledgeName.innerHTML = e.name
    knowledgeAtomicMass.innerHTML = e.atomicMass
    knowledgeGroupBlock.innerHTML = e.groupBlock
    knowledgeStandardState.innerHTML = e.standardState
    knowledgeAtomicRadius.innerHTML = e.vanDelWaalsRadius
    knowledgeDensity.innerHTML = e.density
    knowledgeYearDiscovered.innerHTML = e.yearDiscovered
    knowledgeWiki.innerHTML = "<a href='" + createWikiUrl(e.name) + "' target='_blank'>" + e.name + " <i class='fas fa-external-link-alt'></a>"
}


var request = new XMLHttpRequest()

request.open('GET', 'https://neelpatel05.pythonanywhere.com/', true)

request.onload = function () {
    var data = JSON.parse(this.responseText)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(element => {
            const pAtomicNumber = document.createElement('p')
            pAtomicNumber.setAttribute('id', 'atomic-number')
            pAtomicNumber.setAttribute('data-toggle', 'modal')
            pAtomicNumber.setAttribute('data-target', '#knowledge-modal')
            pAtomicNumber.textContent = element.atomicNumber
            atomicNumberDiv.appendChild(pAtomicNumber)
            pAtomicNumber.onclick = function () {
                updateKnowledgePanel(element)
                console.log(element.atomicNumber)
            }

            const pSymbol = document.createElement('p')
            pSymbol.setAttribute('id', 'symbol')
            pSymbol.setAttribute('data-toggle', 'modal')
            pSymbol.setAttribute('data-target', '#knowledge-modal')
            pSymbol.textContent = element.symbol
            symbolDiv.appendChild(pSymbol)
            pSymbol.onclick = function () {
                updateKnowledgePanel(element)
                console.log(element.symbol)
            }

            const pName = document.createElement('p')
            pName.setAttribute('id', 'name')
            pName.setAttribute('data-toggle', 'modal')
            pName.setAttribute('data-target', '#knowledge-modal')
            pName.textContent = element.name
            nameDiv.appendChild(pName)
            pName.onclick = function () {
                updateKnowledgePanel(element)
                console.log(element.name)
            }


        });
    }
    else {
        console.log('error')
    }

}

request.send()
