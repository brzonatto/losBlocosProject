const Jimp = require('jimp')

function Gols(nome, qntGols) {
    this.nome = nome,
        this.qntGols = qntGols
}

function Assists(nome, qntAssists) {
    this.nome = nome,
        this.qntAssists = qntAssists
}

function addGols(gols) {
    const golsOfMatch = []
    for (let i = 0; i < gols.length; i++) {
        golsOfMatch.push(new Gols(gols[i].author, gols[i].amount))               
    }

    golsOfMatch.sort(ordenarPorQntGols)
    return golsOfMatch
}

function addAssists(assists) {
    const assistsOfMatch = []
    for (let i = 0; i < assists.length; i++) {
        assistsOfMatch.push(new Assists(assists[i].author, assists[i].amount))               
    }

    assistsOfMatch.sort(ordenarPorQntAssists)
    return assistsOfMatch
}

function ordenarPorQntGols(a, b) {
    return a.qntGols - b.qntGols;
}
function ordenarPorQntAssists(a, b) {
    return a.qntAssists - b.qntAssists;
}

async function resizeGameImage(golsPro, golsContra, golsEndMatch, assistsEndMatch, image) {
    const gameImage = await Jimp.read(image)
    const background = await Jimp.read('src/assets/templates/afterGame/2021/background.png')
    const rectEndGame = await Jimp.read('src/assets/templates/afterGame/2021/retangulo-fim-de-jogo.png')
    const symbolTeam = await Jimp.read('src/assets/templates/afterGame/2021/los-blocos.png')
    const symbolOpponent = await Jimp.read('tmp/uploads/symbolOpponent.png')
    const versus = await Jimp.read('src/assets/templates/afterGame/2021/versus.png')
    const textEndGame = await Jimp.read('src/assets/templates/afterGame/2021/text-end-game.png')
    const golBall = await Jimp.read('src/assets/templates/afterGame/2021/ball.png')
    const assistFooter = await Jimp.read('src/assets/templates/afterGame/2021/assist.png')
    const separator = await Jimp.read('src/assets/templates/afterGame/2021/separator.png')
    const win = await Jimp.read('src/assets/templates/afterGame/2021/win.png')
    const loss = await Jimp.read('src/assets/templates/afterGame/2021/loss.png')
    const draw = await Jimp.read('src/assets/templates/afterGame/2021/draw.png')
   
    const font = await Jimp.loadFont('src/assets/fonts/MYRIAD_PRO_BOLD_96_BLACK.fnt')
    const fontGolsAssists = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK)

    const gols = addGols(golsEndMatch)
    const assists = addAssists(assistsEndMatch)
    let golsMoreAssists = gols.length + assists.length

    gameImage.resize(994, 724)
    background.composite(gameImage, 43, 0)
    background.composite(rectEndGame, 37, 641)
    symbolTeam.resize(Jimp.AUTO, 195)
    background.composite(symbolTeam, 250, 740)
    symbolOpponent.resize(Jimp.AUTO, 195)
    background.composite(symbolOpponent, 665, 740)
    background.composite(versus, 520, 830)
    background.print(font, 470, 790, {
        text: golsPro,
        alignmentX: Jimp.HORIZONTAL_ALIGN_RIGHT,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 50, -115)
    background.print(font, 555, 790, {
        text: golsContra,
        alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 50, -115)
    background.composite(textEndGame, 420, 668)
    golBall.resize(16, 16)
    let posX = 745
    let posX2 = 744
    if (gols.length >= 1) {
        for (let i = 0; i < gols.length; i++) {
            background.composite(golBall, 70, posX)
            posX = posX + 20
            background.print(fontGolsAssists, 58, posX2, {
                text: gols[i].qntGols == 1 ? '' : `${gols[i].qntGols}`
            })
            background.print(fontGolsAssists, 95, posX2, {
                text: gols[i].nome
            })            
            posX2 += 20
        }
    }
    if (assists.length >= 1) {
        for (let i = 0; i < assists.length; i++) {
            background.composite(assistFooter, 70, posX)
            posX = posX + 20
            background.print(fontGolsAssists, 58, posX2, {
                text: assists[i].qntAssists == 1 ? '' : `${assists[i].qntAssists}`
            })
            background.print(fontGolsAssists, 95, posX2, {
                text: assists[i].nome
            })            
            posX2 += 20
        }
    }
    if (golsMoreAssists > 0 && golsMoreAssists <= 2) {
        separator.resize(Jimp.AUTO, 85)
        background.composite(separator, 73, 720)
    } else if (golsMoreAssists > 2 && golsMoreAssists <= 3) {
        separator.resize(Jimp.AUTO, 100)
        background.composite(separator, 69, 725)
    } else if (golsMoreAssists > 3 && golsMoreAssists <= 5) {
        separator.resize(Jimp.AUTO, 140)
        background.composite(separator, 62, 720)
    } else if (golsMoreAssists > 5 && golsMoreAssists <= 7) {
        separator.resize(Jimp.AUTO, 190)
        background.composite(separator, 51, 725)
    } else if (golsMoreAssists > 7 && golsMoreAssists <= 9) {
        separator.resize(Jimp.AUTO, 220)
        background.composite(separator, 45, 725)
    } else if (golsMoreAssists > 9 && golsMoreAssists <= 11) {
        separator.resize(Jimp.AUTO, 250)
        background.composite(separator, 39, 725)
    }
    if (Number(golsPro) < Number(golsContra)) {
        background.composite(loss, 5.64, 1051)
    } else if (Number(golsPro) > Number(golsContra)) {
        background.composite(win, 5.64, 1049)
    } else {
        background.composite(draw, 5.64, 1052)
    }
    background.writeAsync('tmp/composite.png')
}


module.exports = { resizeGameImage }