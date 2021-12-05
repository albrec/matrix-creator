const COLS = [
    "Mixer Channel 1",
    "Mixer Channel 2",
    "Mixer Channel 3",
    "Mixer Channel 4",
    "Mixer Channel 5",
    "Mixer Channel 6",
    "Mixer Channel 7",
    "Mixer Channel 8",
    "Mixer Channel 9",
    "Mixer Channel 10",
    "Mixer Channel 11",
    "Mixer Channel 12",
    "Mixer Channel 13",
    "Mixer Channel 14",
    "Mixer Channel 15",
    "Mixer Channel 16",
    "Mixer RTN 1 L",
    "Mixer RTN 1 R",
    "Mixer RTN 2 L",
    "Mixer RTN 2 R",
    "Mixer RTN 3 L",
    "Mixer RTN 3 R",
    "Mixer RTN 4 L",
    "Mixer RTN 4 R",
    "Mixer Tape In L",
    "Mixer Tape In R",
    "Eurorack L",
    "Eurorack R",
    "Collider L",
    "Collider L",
    "DAW 1",
    "DAW 2",
    "DAW 3",
    "DAW 4",
    "MPC One L",
    "MPC One R",
    "Octatrack 1",
    "Octatrack 2",
    "Octatrack 3",
    "Octatrack 4",
    "Analog Four L",
    "Analog Four R",
    "Analog Rytm L",
    "Analog Rytm R",
    "Patchbay",
]

const ROWS = [
    "Eurorack L",
    "Eurorack R",
    "Microfreak",
    "Sub 37",
    "MPC One L",
    "MPC One R",
    "Deepmind 12 L",
    "Deepmind 12 R",
    "K2000 L",
    "K2000 R",
    "Analog Four L",
    "Analog Four R",
    "Analog Rytm L",
    "Analog Rytm R",
    "Octatrack L",
    "Octatrack R",
    "iPad L",
    "iPad R",
    "DAW 1",
    "DAW 2",
    "DAW 3",
    "DAW 4",
    "Collider L",
    "Collider R",
    "Mixer Send 1",
    "Mixer Send 2",
    "Mixer Send 3",
    "Mixer Send 4",
    "CNTL L",
    "CNTL R",
    "Mixer Sub1 1",
    "Mixer Sub1 2",
    "Mixer Sub2 3",
    "Mixer Sub2 4",
    "Mixer Sub1 5",
    "Mixer Sub1 6",
    "Mixer Sub2 7",
    "Mixer Sub2 8",
    "Patchbay",
]

const tableEl = document.getElementsByTagName('table')[0]

const headerRow = document.createElement('tr')
tableEl.appendChild(headerRow)
headerRow.appendChild(document.createElement('th'))

COLS.forEach(v => {
    const cell = document.createElement('th')
    const label = document.createElement('span')
    label.innerHTML = v
    cell.appendChild(label)
    headerRow.appendChild(cell)
})

ROWS.forEach((v, i) => {
    const row = document.createElement('tr')
    const th = document.createElement('th')
    const label = document.createElement('span')
    label.innerHTML = v
    th.appendChild(label)
    row.appendChild(th)
    for (let i = 0; i < COLS.length; i++) {
        row.appendChild(document.createElement('td'))
    }
    tableEl.appendChild(row)
})