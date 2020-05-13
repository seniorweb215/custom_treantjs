
    // Another approach, same result
    // JSON approach


    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1',
                collapsable: true
            },

            rootOrientation: "NORTH",
            hideRootNode: false,
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            collapsable: false,
            stackChildren: true,
            sibling: [
                {
                    text:{
                        name: "Mark's wife1",
                        title: "Chief Customer Officer"
                    },
                    link: {
                        href: "http://www.google.com"
                    },
                    image: "../headshots/4.jpg"
                },
                {
                    text:{
                        name: "Mark's wife2",
                        title: "Chief Customer Officer"
                    },
                    link: {
                        href: "http://www.google.com"
                    },
                    image: "../headshots/7.jpg"
                }
            ],
            children: [
                {
                    pseudo: true,
                    children: [
                        {
                            text:{
                                name: "Joe Linux",
                                title: "Chief Technology Officer",
                            },
                            image: "../headshots/1.jpg",
                            stackChildren: true,
                            children: [
                                {
                                    text:{
                                        name: "Ron Blomquist",
                                        title: "Chief Information Security Officer"
                                    },
                                    image: "../headshots/8.jpg"
                                },
                                {
                                    text:{
                                        name: "Michael Rubin",
                                        title: "Chief Innovation Officer",
                                        contact: "we@aregreat.com"
                                    },
                                    image: "../headshots/9.jpg"
                                }
                            ]
                        },
                        {
                            text:{
                                name: "Linda May",
                                title: "Chief Business Officer",
                            },
                            image: "../headshots/5.jpg",
                            stackChildren: true,
                            children: [
                                {
                                    text:{
                                        name: "Alice Lopez",
                                        title: "Chief Communications Officer"
                                    },
                                    image: "../headshots/7.jpg"
                                },
                                {
                                    text:{
                                        name: "Mary Johnson",
                                        title: "Chief Brand Officer"
                                    },
                                    image: "../headshots/4.jpg",
                                    children: [
                                        {
                                            text:{
                                                name: "Linda May",
                                                title: "Chief Business Officer",
                                            },
                                            image: "../headshots/5.jpg",
                                        }
                                    ]
                                },
                                {
                                    text:{
                                        name: "Kirk Douglas",
                                        title: "Chief Business Development Officer"
                                    },
                                    image: "../headshots/11.jpg",
                                    spouse: [
                                        {
                                            text:{
                                                name: "Erica's wife33",
                                                title: "Chief accounting officer",
                                                contact: "Tel: 01 213 123 134",
                                            },
                                            image: "../headshots/4.jpg",
                                            children: [
                                                {
                                                    text:{
                                                        name: "Erica Son33",
                                                        title: "Chief Customer Officer"
                                                    },
                                                    link: {
                                                        href: "http://www.google.com"
                                                    },
                                                    image: "../headshots/1.jpg"
                                                },
                                                {
                                                    text:{
                                                        name: "Erica Son44",
                                                        title: "Chief Customer Officer"
                                                    },
                                                    link: {
                                                        href: "http://www.google.com"
                                                    },
                                                    image: "../headshots/2.jpg"
                                                }
                                            ]
                                        },
                                        {
                                            text:{
                                                name: "Erica's wife44",
                                                title: "Chief accounting officer",
                                                contact: "Tel: 01 213 123 134",
                                            },
                                            image: "../headshots/4.jpg",
                                            children: [
                                                {
                                                    text:{
                                                        name: "Erica Son5",
                                                        title: "Chief Customer Officer"
                                                    },
                                                    link: {
                                                        href: "http://www.google.com"
                                                    },
                                                    image: "../headshots/1.jpg"
                                                },
                                                {
                                                    text:{
                                                        name: "Erica Son6",
                                                        title: "Chief Customer Officer"
                                                    },
                                                    link: {
                                                        href: "http://www.google.com"
                                                    },
                                                    image: "../headshots/2.jpg"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text:{
                                name: "John Green",
                                title: "Chief accounting officer",
                                contact: "Tel: 01 213 123 134",
                            },
                            image: "../headshots/6.jpg",
                            spouse: [
                                {
                                    text:{
                                        name: "John Green's wife1",
                                        title: "Chief accounting officer",
                                        contact: "Tel: 01 213 123 134",
                                    },
                                    image: "../headshots/5.jpg",
                                    children: [
                                        {
                                            text:{
                                                name: "Erica Reel1",
                                                title: "Chief Customer Officer"
                                            },
                                            link: {
                                                href: "http://www.google.com"
                                            },
                                            image: "../headshots/1.jpg",
                                            spouse: [
                                                {
                                                    text:{
                                                        name: "Erica's wife1",
                                                        title: "Chief accounting officer",
                                                        contact: "134",
                                                    },
                                                    image: "../headshots/7.jpg",
                                                    children: [
                                                        {
                                                            text:{
                                                                name: "Erica Son1",
                                                                title: "Chief Customer Officer"
                                                            },
                                                            link: {
                                                                href: "http://www.google.com"
                                                            },
                                                            image: "../headshots/6.jpg"
                                                        },
                                                        {
                                                            text:{
                                                                name: "Erica Son2",
                                                                title: "Chief Customer Officer"
                                                            },
                                                            link: {
                                                                href: "http://www.google.com"
                                                            },
                                                            image: "../headshots/2.jpg"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    text:{
                                        name: "John Green's wife2",
                                        title: "Chief accounting officer",
                                        contact: "Tel: 01 213 123 134",
                                    },
                                    image: "../headshots/10.jpg",
                                    children: [
                                        {
                                            text:{
                                                name: "Erica Reel2",
                                                title: "Chief Customer Officer"
                                            },
                                            link: {
                                                href: "http://www.google.com"
                                            },
                                            image: "../headshots/11.jpg",
                                            spouse: [
                                                {
                                                    text:{
                                                        name: "Erica's wife2",
                                                        title: "Chief accounting officer",
                                                        contact: "Tel: 01 213 123 134",
                                                    },
                                                    image: "../headshots/4.jpg",
                                                    children: [
                                                        {
                                                            text:{
                                                                name: "Erica Son3",
                                                                title: "Chief Customer Officer"
                                                            },
                                                            link: {
                                                                href: "http://www.google.com"
                                                            },
                                                            image: "../headshots/11.jpg"
                                                        },
                                                        {
                                                            text:{
                                                                name: "Erica Son4",
                                                                title: "Chief Customer Officer"
                                                            },
                                                            link: {
                                                                href: "http://www.google.com"
                                                            },
                                                            image: "../headshots/1.jpg"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };
