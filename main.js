"use strict";
function noteTimeOnScreenSeconds(bpm) {
    return ((-0.0222 * bpm) + 382.6851) / (bpm + 1.1233);
}
function noteTimeOnScreenSecondsWithMini(bpm, mini) {
    return noteTimeOnScreenSeconds(bpm) + ((mini / 100.0) * noteTimeOnScreenSeconds(bpm));
}
function noteTimeOnScreenSecondsWithMiniAndRateMod(bpm, mini, rateMod) {
    return noteTimeOnScreenSecondsWithMini(bpm, mini) - ((rateMod - 1.0) * noteTimeOnScreenSecondsWithMini(bpm, mini));
}
function rateMod(bpm, mini, nts) {
    return ((bpm * ((2 * mini) + (4504.5 * nts) + 200) - ((34476.1 * mini) + (5059.91 * nts) - 3447610))) / ((bpm - 17238.1) * (mini + 100));
}
function notesOnScreen(bpm, mini, nps) {
    return nps * noteTimeOnScreenSecondsWithMini(bpm, mini);
}
function beatsPerMinute(nps, nos, mini) {
    return ((nps * ((3826851 * mini) + 382685100)) - (1123300 * nos)) / ((222 * mini * nps) + (1000000 * nos) + (22200 * nps));
}
function mini(bpm, nps, nos) {
    return ((4504.5 * bpm * nos) + (100 * bpm * nps) + (5059.91 * nos) - (1723810 * nps)) / ((17238.1 * nps) - (bpm * nps));
}
function notesPerSecond(bpm, mini, nos) {
    return (((-4504.5 * bpm) - 5059.91) * nos) / ((bpm - 17238.1) * (mini + 100));
}
//# sourceMappingURL=main.js.map