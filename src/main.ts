
function noteTimeOnScreenSeconds(bpm: number): number {
    return ((-0.0222*bpm) + 382.6851)/(bpm + 1.1233)
}

function noteTimeOnScreenSecondsWithMini(bpm: number, mini: number): number {
    return noteTimeOnScreenSeconds(bpm) + ((mini/100.0)*noteTimeOnScreenSeconds(bpm))
}

function noteTimeOnScreenSecondsWithMiniAndRateMod(bpm: number, mini: number, rateMod: number): number {
    return rateMod*noteTimeOnScreenSecondsWithMini(bpm, mini)
}

function rateMod(bpm: number, mini: number, nts: number): number {
    return (((-4504.5*bpm)-5059.91)*nts)/((bpm-17238.1)*(mini+100))
}

function notesOnScreen(bpm: number, mini: number, nps: number): number {
    return nps * noteTimeOnScreenSecondsWithMini(bpm, mini)
}

function beatsPerMinute(nps: number, nos: number, mini: number): number {
    return ((nps*((3826851*mini)+382685100))-(1123300*nos))/((222*mini*nps)+(1000000*nos)+(22200*nps))
}

function mini(bpm: number, nps: number, nos: number): number {
    return ((4504.5*bpm*nos)+(100*bpm*nps)+(5059.91*nos)-(1723810*nps))/((17238.1*nps)-(bpm*nps))
}

function notesPerSecond(bpm: number, mini: number, nos: number): number {
    return (((-4504.5*bpm)-5059.91)*nos)/((bpm-17238.1)*(mini+100))
}

