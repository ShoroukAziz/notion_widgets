"use strict";
var worlddataUrl = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json";
var width = document.getElementById("k1").height;
var height = document.getElementById("k1").width;
var countries = ["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "VGB", "BRN", "BGR", "BFA", "BDI", "CPV", "KHM", "CMR", "CAN", "CYM", "CAF", "TCD", "CHL", "CHN", "HKG", "MAC", "CXR", "CCK", "COL", "COM", "COG", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "PRK", "COD", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "SWZ", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "KOR", "MDA", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "PSE", "SDN", "SUR", "SJM", "SWE", "CHE", "SYR", "TJK", "THA", "MKD", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "TZA", "UMI", "USA", "VIR", "URY", "UZB", "VUT", "VEN", "VNM", "WLF", "ESH", "YEM", "ZMB", "ZWE"];

d3.json(worlddataUrl, function (datas) {
    var bubblesA = [];
    var maxr = countries.length;
    var range = 0;

    var color = d3.scale.linear(d3.interpolate).domain([0, maxr]).range(["rgb(0, 20,50)", "rgb(114, 247, 210)"]);
    var colorbuble = d3.scale.ordinal(d3.interpolateSpectral(11)).domain([0, maxr]).range(d3.schemeSpectral[11]);

    var bubble_map = new Datamap({
        element: document.getElementById('k1'),
        scope: 'world',
        height: height,
        width: width,        
        responsive: true,
        geographyConfig: {
            popupOnHover: true,
            highlightOnHover: true,
           
        }, fills: {
            defaultFill: '#6bfa9d'
        } 
    });
    const svg = d3.select(document.getElementById('k1'))
        .append("svg")
        .attr("width", width)
        .attr("height", height);

        ;
    countries.forEach((element, i) => {

        bubble_map.options.fills[element] = colorbuble(i);
        var obj = {};
        obj[element] = color(i);
        bubble_map.updateChoropleth(obj);
    });
    //

});