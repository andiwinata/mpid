$(function () {
    function generateData(value) {
        return [{
            "hc-key": "au-nt",
            "value": value[0],
            "AccessHealthService": {
                "IncomeIndex": 35,
                "PractitionerCoverageIndex": 38,
                "DistancetoPractitionerIndex": 99,
                "InsuranceCoverageIndex": 82
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 23,
                "ReferralsIndex": 62
            }
        },
        {
            "hc-key": "au-wa",
            "value": value[1],
            "AccessHealthService": {
                "IncomeIndex": 37,
                "PractitionerCoverageIndex": 93,
                "DistancetoPractitionerIndex": 80,
                "InsuranceCoverageIndex": 53
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 84,
                "ReferralsIndex": 55
            }
        },
        {
            "hc-key": "au-ct",
            "value": value[2],
            "AccessHealthService": {
                "IncomeIndex": 39,
                "PractitionerCoverageIndex": 82,
                "DistancetoPractitionerIndex": 40,
                "InsuranceCoverageIndex": 18
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 58,
                "ReferralsIndex": 63
            }
        },
        {
            "hc-key": "au-sa",
            "value": value[3],
            "AccessHealthService": {
                "IncomeIndex": 33,
                "PractitionerCoverageIndex": 29,
                "DistancetoPractitionerIndex": 58,
                "InsuranceCoverageIndex": 12
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 28,
                "ReferralsIndex": 28
            }

        },
        {
            "hc-key": "au-ql",
            "value": value[4],
            "AccessHealthService": {
                "IncomeIndex": 35,
                "PractitionerCoverageIndex": 38,
                "DistancetoPractitionerIndex": 99,
                "InsuranceCoverageIndex": 82
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 23,
                "ReferralsIndex": 62
            }
        },
        {
            "hc-key": "au-2557",
            "value": value[5],
            "AccessHealthService": {
                "IncomeIndex": 35,
                "PractitionerCoverageIndex": 38,
                "DistancetoPractitionerIndex": 99,
                "InsuranceCoverageIndex": 82
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 30,
                "ReferralsIndex": 60
            }
        },
        {
            "hc-key": "au-ts",
            "value": value[6],
            "AccessHealthService": {
                "IncomeIndex": 94,
                "PractitionerCoverageIndex": 91,
                "DistancetoPractitionerIndex": 49,
                "InsuranceCoverageIndex": 75
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 25,
                "ReferralsIndex": 36
            }

        },
        {
            "hc-key": "au-jb",
            "value": value[7],
            "AccessHealthService": {
                "IncomeIndex": 35,
                "PractitionerCoverageIndex": 38,
                "DistancetoPractitionerIndex": 99,
                "InsuranceCoverageIndex": 82
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 10,
                "ReferralsIndex": 50
            }
        },
        {
            "hc-key": "au-ns",
            "value": value[8],
            "AccessHealthService": {
                "IncomeIndex": 70,
                "PractitionerCoverageIndex": 40,
                "DistancetoPractitionerIndex": 30,
                "InsuranceCoverageIndex": 37
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 34,
                "ReferralsIndex": 71
            }
        },
        {
            "hc-key": "au-vi",
            "value": value[9],
            "AccessHealthService": {
                "IncomeIndex": 55,
                "PractitionerCoverageIndex": 22,
                "DistancetoPractitionerIndex": 95,
                "InsuranceCoverageIndex": 30
            },
            "PropensitytoGetSick": {
                "AgeingIndex": 58,
                "ReferralsIndex": 77
            }
        }];
    }

    // Prepare demo data
    var data1 = generateData([31, 65, 44, 33, 63, 5, 77, 7, 44, 50]);
    var data2 = generateData([41.75, 63.5, 77.25, 65.75, 31.5, 44.75, 50.5, 33, 41.75, 80]);
    var data3 = generateData([42.5, 69.5, 60.5, 28, 42.5, 45, 30.5, 39, 52.5, 67.5]);

    var mapBase = {

        subtitle: {
            text: 'Source map: <a href="./au-all.js">Australia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        chart: {
            backgroundColor: "#eee",
            color: '#DF242D'
        }
    }

    var map1 = Object.assign({}, mapBase, {
        series: [{
            data: data1,
            mapData: Highcharts.maps['countries/au/au-all'],
            joinBy: 'hc-key',
            name: 'Practitioner data',
            states: {
                hover: {
                    color: '#DF242D'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }],

        tooltip: {
            formatter: function () {
                var str = `
                <span>
                    <strong>Practitioner Index: ${this.point.value}</strong>
                    <br/>                 
                    Income Index: ${this.point.AccessHealthService.IncomeIndex}
                    <br/>
                    Practitioner Coverage Index: ${this.point.AccessHealthService.PractitionerCoverageIndex}
                    <br/>
                    DistancePractitionerIndex: ${this.point.AccessHealthService.DistancetoPractitionerIndex}
                    <br/>
                    InsuranceCoverageIndex: ${this.point.AccessHealthService.InsuranceCoverageIndex}
                </span>`;
                return str;
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#ffc9a2',
            maxColor: '#ff5b0a'
        },

        title: {
            text: 'Access Health Service Index'
        },
    });

    var map2 = Object.assign({}, mapBase, {
        series: [{
            data: data2,
            mapData: Highcharts.maps['countries/au/au-all'],
            joinBy: 'hc-key',
            name: 'Prospensity data',
            states: {
                hover: {
                    color: '#DF242D'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }],

        tooltip: {
            formatter: function () {
                var str = `
                <span>
                    <strong>Propensity of Sickness Index: ${this.point.value}</strong>
                    <br/>                 
                    Ageing Index: ${this.point.PropensitytoGetSick.AgeingIndex}
                    <br/>
                    Referrrals Index: ${this.point.PropensitytoGetSick.ReferralsIndex}
                </span>`;
                return str;
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#e4ffce',
            maxColor: '#347202'
        },

        title: {
            text: 'Sickness Prospensity Index'
        },
    });

    var map3 = Object.assign({}, mapBase, {
        series: [{
            data: data3,
            mapData: Highcharts.maps['countries/au/au-all'],
            joinBy: 'hc-key',
            name: 'Index data',
            states: {
                hover: {
                    color: '#DF242D'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }],

        tooltip: {
            formatter: function () {
                var str = `Health Index: ${this.point.value}`;
                return str;
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#fcd6ff',
            maxColor: '#e91ba1'
        },

        title: {
            text: 'Health Index of Australia'
        },
    });

    // Initiate the chart
    $('#container1').highcharts('Map', map1);
    $('#container2').highcharts('Map', map2);
    $('#container3').highcharts('Map', map3);
});


var hiddenClass = 'hidden';
// hide other charts than non default
$('.1, .2, .3').addClass(hiddenClass);
var selected = '.1';

// add listener
$("#indexSelect").on('change', function () {
    $(selected).addClass(hiddenClass);
    switch (this.value) {
        case 'practitionerIndex':
            $('.1').removeClass(hiddenClass);
            selected = '.1';
            break;
        case 'propensityIndex':
            $('.2').removeClass(hiddenClass);
            selected = '.2';
            break;
        case 'healthIndex':
            $('.3').removeClass(hiddenClass);
            selected = '.3';
            break;
        default:
            throw new Error("value does not exist");
    }
});

// show the selected
setTimeout(function () {
    $(selected).removeClass(hiddenClass);
}, 1000);

$(document).ready(function () {
    function generateInteger100() {
        return Math.floor(Math.random() * 100 + 1);
    }
    $("#lookupForm").submit(function () {
        $('.lookupResult').removeClass('hidden');
        $("#result").text(generateInteger100());
        $("#income").text(generateInteger100());
        $("#practioner").text(generateInteger100());
        $("#referrals").text(generateInteger100());
        $("#ageing").text(generateInteger100());
        $("#insurance").text(generateInteger100());
        $("#distance").text(generateInteger100());
        return false;
    });
});