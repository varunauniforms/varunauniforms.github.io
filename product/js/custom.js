var slider = tns({
    "container": '.team-slider',
    "items": 5,
    "controlsContainer": "#customize-controls",
    "navContainer": "#customize-thumbnails",
    "navAsThumbnails": true,
    "autoplay": true,
    "autoplayTimeout": 1000,
    "autoplayButton": "#customize-toggle",
    "swipeAngle": true,
    "speed": 400,
    "responsive": {
        "768": {
            "items": 5
        },
        "425": {
            "items": 3
        },
        "200": {
            "items": 1
        }
    },
});