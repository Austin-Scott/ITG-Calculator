"use strict";
function bpmNosNpsRateMini(nos, nps, rate, mini) {
    return ((((17238.1 * mini) + 1723810) * nps * rate) - (5059.91 * nos)) / ((((mini + 100) * nps * rate) + (4504.5 * nos)) * rate);
}
function bpmNtsRateMini(nts, rate, mini) {
    return ((17238.1 * mini) - (5059.91 * nts) + 1723810) / ((mini * rate) + (4504.5 * rate * nts) + (100 * rate));
}
function miniNosNpsBpmRate(nos, nps, bpm, rate) {
    return ((4504.5 * bpm * nos * rate) + (100 * bpm * nps * rate * rate) + (5059.91 * nos) - (1723810 * nps * rate)) / ((17238.1 * nps * rate) - (bpm * nps * rate * rate));
}
function miniNtsBpmRate(nts, bpm, rate) {
    return ((bpm * rate * ((-4504.5 * nts) - 100)) - (5059.91 * nts) + 1723810) / ((bpm * rate) - 17238.1);
}
function npsNosNtsRate(nos, nts, rate) {
    return nos / (rate * nts);
}
function npsNosBpmRateMini(nos, bpm, rate, mini) {
    return (nos * ((-4504.5 * bpm * rate) - 5059.91)) / (((mini + 100) * rate * ((bpm * rate) - 17238.1)));
}
function nosNpsNtsRate(nps, nts, rate) {
    return nps * rate * nts;
}
function nosNpsBpmRateMini(nps, bpm, rate, mini) {
    return nps * rate * ((((-0.0222 * bpm * rate) + 382.6851) / (bpm * rate + 1.1233)) + (mini / 100) * (((-0.0222 * bpm * rate) + 382.6851) / (bpm * rate + 1.1233)));
}
function rateNosNpsNts(nos, nps, nts) {
    return nos / (nps * nts);
}
function rateNosNpsBpmMini(nos, nps, bpm, mini) {
    return (-0.00225225 * Math.sqrt(1000000000000 * bpm * bpm * nos * nos + bpm * (-7654699490400 * mini - 765469949040000) * nos * nps + (14644788576201 * mini * mini + 2928957715240200 * mini + 146447885762009984.0) * nps * nps) - 2252.25 * bpm * nos + 8619.03 * mini * nps + 861903 * nps) / (bpm * (mini + 100) * nps);
}
function rateNtsBpmMini(nts, bpm, mini) {
    return (17238.1 * mini - 5059.91 * nts + 1723810) / (bpm * mini + 4504.5 * bpm * nts + 100 * bpm);
}
function ntsNosNpsRate(nos, nps, rate) {
    return nos / (nps * rate);
}
function ntsBpmRateMini(bpm, rate, mini) {
    return (((-0.0222 * bpm * rate) + 382.6851) / (bpm * rate + 1.1233)) + (mini / 100) * (((-0.0222 * bpm * rate) + 382.6851) / (bpm * rate + 1.1233));
}
//# sourceMappingURL=main.js.map