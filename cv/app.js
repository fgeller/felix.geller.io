var el = function (id) {
    return document.getElementById(id);
};

var tech = [
    "akka",
    "android",
    "cassandra",
    "columnstore",
    "coreutils",
    "docker",
    "elasticsearch",
    "emacs",
    "gettext",
    "git",
    "go",
    "grafana",
    "java",
    "javascript",
    "jenkins",
    "json",
    "kafka",
    "kubernetes",
    "mariadb",
    "msaccess",
    "mssql",
    "oracledb",
    "php",
    "prometheus",
    "protobuf",
    "python",
    "redis",
    "ruby",
    "scala",
    "travis",
    "xml",
    "zmq"
];

tech.forEach(function (t) {
    d3
        .selectAll(".tech-"+t)
        .on("mouseover", function () { d3.selectAll(".tech-"+t).classed("selected", true);})
        .on("mouseout", function () { d3.selectAll(".tech-"+t).classed("selected", false);})
        .on("click", function () {
            d3.selectAll("span.tech").classed("selected", false);
            d3.selectAll(".tech-"+t).classed("selected", true);
        });
});

var drawTimeline = function() {
    var tlMarginTop = el("bar").clientHeight+5+8;
    var tlHeight =window.innerHeight-tlMarginTop;
    var tlWidth = 100;
    var margin = (window.innerWidth-580)/2;
    //parseInt(window.getComputedStyle(el("listing"))["margin-left"], 10);

    var right = (margin-tlWidth-10)+"px";
    var top = tlMarginTop+"px";
    el("timeline-container").style.top = top;
    el("timeline-container").style.right = right;

    var jobWidth = 5;
    var eduWidth = 5;
    var scl = d3.scaleTime().domain([new Date(), new Date(2003, 7, 1)]).range([0, tlHeight]);
    var ax = d3
        .axisRight(d3.select("#timeline"))
	      .scale(scl)
	      .ticks(d3.timeYear.every(1))
        .tickFormat(d3.timeFormat("%Y"))
	      .tickSize(3, 0)
    ;

    d3.select("#timeline").selectAll("*").remove();

    d3
        .select("#timeline")
        .append('g')
        .attr('id', 'timeline-labels')
        .attr('transform', 'translate(35, 0)')
        .call(ax)
    ;

    jobs.forEach(function(j) {
        d3.select("#timeline").append('rect')
            .attr('id', 'timeline-job-'+j.id)
            .attr('class', 'timeline-job')
            .attr('width', jobWidth)
            .attr('rx', 3)
            .attr('ry', 3)
            .attr('height', scl(j.start)-scl(j.end))
            .attr('transform', 'translate(17, '+scl(j.end)+')')
        ;
    });

    jobs.forEach(function(j) {
        d3.select("#job-"+j.id).on("click", function() {
            d3.selectAll("rect.selected").classed("selected", false);
            d3.select("#timeline-job-"+j.id).classed("selected", true);
        });
        d3.select("#job-"+j.id).on("mouseover", function() {
            d3.select("#timeline-job-"+j.id).classed("selected", true);
        });
        d3.select("#job-"+j.id).on("mouseout", function() {
            d3.select("#timeline-job-"+j.id).classed("selected", false);
        });
    });

    edus.forEach(function(e) {
        d3.select("#edu-"+e.id).on("click", function() {
            d3.selectAll("rect.selected").classed("selected", false);
            d3.select("#timeline-edu-"+e.id).classed("selected", true);
        });
        d3.select("#edu-"+e.id).on("mouseover", function() {
            d3.select("#timeline-edu-"+e.id).classed("selected", true);
        });
        d3.select("#edu-"+e.id).on("mouseout", function() {
            d3.select("#timeline-edu-"+e.id).classed("selected", false);
        });
    });

    edus.forEach(function(e) {
        d3.select("#timeline").append('rect')
            .attr('id', 'timeline-edu-'+e.id)
            .attr('class', 'timeline-edu')
            .attr('width', eduWidth)
            .attr('rx', 3)
            .attr('ry', 3)
            .attr('height', scl(e.start)-scl(e.end))
            .attr('transform', 'translate(25, '+scl(e.end)+')')
        ;
    });
};

var jobs = [
    {
        name: "Independent",
        start: new Date(2017, 7, 31),
        end: new Date(),
        id: "independent"
    },
    {
        name: "Movio",
        start: new Date(2012, 12, 10),
        end: new Date(2017, 7, 31),
        id: "movio"
    },
    {
        name: "IPTEGO",
        start: new Date(2011, 9, 1),
        end: new Date(2012, 10, 30),
        id: "iptego"
    },
    {
        name: "SAP Labs",
        start: new Date(2011, 2, 1),
        end: new Date(2011, 4, 30),
        id: "sap-labs"
    },
    {
        name: "Finnlabs",
        start: new Date(2008, 11, 1),
        end: new Date(2010, 2, 28),
        id: "finnlabs"
    },
    {
        name: "SAP Research",
        start: new Date(2008, 3, 1),
        end: new Date(2008, 9, 30),
        id: "sap-research"
    },
    {
        name: "Worcester Polytechnic Institute",
        start: new Date(2005, 3, 1),
        end: new Date(2006, 3, 30),
        id: "wpi"
    },
    {
        name: "Rotes Kreuz",
        start: new Date(2003, 9, 1),
        end: new Date(2004, 6, 1),
        id: "rotes-kreuz"
    },
    {
        name: "Charles River Laboratories",
        start: new Date(2003, 7, 1),
        end: new Date(2003, 8, 31),
        id: "charles-river-labs"
    },
];

var edus = [
    {
        name: "Hasso Plattner Institut",
        start: new Date(2010, 4, 1),
        end: new Date(2011, 2, 1),
        id: "phd"
    },
    {
        name: "Hasso Plattner Institut",
        start: new Date(2007, 10, 1),
        end: new Date(2010, 4, 1),
        id: "msc"
    },
    {
        name: "Hasso Plattner Institut",
        start: new Date(2009, 10, 1),
        end: new Date(2010, 3, 1),
        id: "ta"
    },
    {
        name: "Worcester Polytechnic Institute",
        start: new Date(2004, 8, 1),
        end: new Date(2007, 5, 1),
        id: "bsc"
    },
    {
        name: "Brown University",
        start: new Date(2006, 7, 1),
        end: new Date(2006, 8, 31),
        id: "ra"
    }
];

window.onresize = drawTimeline;
drawTimeline();
