const explores = [
    {
        id: 1,
        username: "rocky_bhai",
        name: "Rocky",
        likes : 1002,
        profile_image:
            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
        thumbnail_image:
            "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
        explore_data: [
            {
                id: 1,
                data: "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
                id: 1,
                data: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
                id: 1,
                data: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
        ],
        comments: [
            {
                id: 1,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "amshad",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "ra_one",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "g_one",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "hamsa",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "rashid",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 2,
        username: "the_master_one",
        name: "Master",
        likes : 1002,
        profile_image:
            "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
        thumbnail_image:
            "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1600",
        explore_data: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        comments: [
            {
                id: 1,
                user: "don",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Superb 🍃☀️",
            },
            {
                id: 2,
                user: "lucky",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome ❤️❤️ 🔥",
            },
            {
                id: 3,
                user: "justin",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great one ❤️❤️ 🙌,✨",
            },
            {
                id: 4,
                user: "rony",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "Have a nice trip 🙌🔥",
            },
            {
                id: 5,
                user: "jaison",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "deepa",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "nice",
            },
        ],
    },
    {
        id: 3,
        username: "g_one",
        name: "G One",
        likes : 1002,
        profile_image:
            "https://www.whatsappimages.in/wp-content/uploads/2021/07/Very-Sad-Alone-Image-Wallpaper-Download.jpg",
        thumbnail_image:
            "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1600",
        explore_data: "https://youtu.be/oQjdSf0tlAc",
        comments: [
            {
                id: 1,
                user: "rocky",
                avatar: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 3,
                time : "2 d",
                comment: "one of the best",
            },
            {
                id: 2,
                user: "bhai",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "great work 🔥",
            },
            {
                id: 3,
                user: "levin",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "happy to  share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "jacob",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "jaison",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "reck",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "best of the best",
            },
        ],
    },
    {
        id: 4,
        username: "ra_one",
        name: "Ra One",
        likes : 456,
        profile_image:
            "https://www.whatsappimages.in/wp-content/uploads/2021/07/Very-Sad-Alone-Image.jpg",
        thumbnail_image:
            "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1600",
        explore_data: [
            {
                id: 1,
                data: "https://youtu.be/ZQsI6m66Xdo",
            },
            {
                id: 2,
                data: "https://youtu.be/x0MwXUNhXKc",
            },
            {
                id: 3,
                data: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
        ],
        comments: [
            {
                id: 1,
                user: "jos",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "dosth",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "lavd",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "tren",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "flex",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
            {
                id: 7,
                user: "grid",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 4,
                time : "5 w",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 8,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment: "Awesome work 🔥",
            },
            {
                id: 9,
                user: "_usman",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 4,
                time : "5 w",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 10,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 11,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 12,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment: "The only kinda child developers have",
            },
            {
                id: 13,
                user: "_usman",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 4,
                time : "5 w",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 14,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment: "Awesome work 🔥",
            },
            {
                id: 15,
                user: "_usman",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 4,
                time : "5 w",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 16,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 17,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 18,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 4,
                time : "5 w",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 5,
        username: "ultimate_loki",
        name: "Loki",
        likes : 7458,
        profile_image:
            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/09/unsplash_ex.png?q=50&fit=crop&w=1500&dpr=1.5",
        thumbnail_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU",
        explore_data:
            "https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&w=1600",
        comments: [
            {
                id: 1,
                user: "tr",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "fred",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "pranc",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "tyr",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "loki",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "thor",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 6,
        username: "great_racer",
        name: "Racer",
        likes : 12,
        profile_image:
            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/09/pexels_ex.png?q=50&fit=crop&w=1500&dpr=1.5",
        thumbnail_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXK9aErkNasw27BhsCRQwa1LurjFCwNjwnQ&usqp=CAU",
        explore_data: "https://youtu.be/ek2XsdApXQc",
        comments: [
            {
                id: 1,
                user: "hulk",
                avatar: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "caption",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "ant",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "jim",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "dim",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "love",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 7,
        username: "lucky_racer",
        name: "Lucky",
        likes : 121,
        profile_image:
            "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbnail_image:
            "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1600",
        explore_data: "https://youtu.be/VCvwy4dFUmw",
        comments: [
            {
                id: 1,
                user: "rose",
                avatar: "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "_usman",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "hyt",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "htyu",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "iouy",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "dfg",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 8,
        username: "green_hulk",
        name: "Hulk",
        likes : 540,
        profile_image:
            "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/09/pexels_ex.png?q=50&fit=crop&w=1500&dpr=1.5",
        thumbnail_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeAcbGLYtVaSSR9SaiRBAmxr94SxDIkHKeQ&usqp=CAU",
        explore_data: [
            {
                id: 1,
                data: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Very-Sad-Alone-Image.jpg",
            },
            {
                id: 2,
                data: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/09/flickr_ex.png?q=50&fit=crop&w=1500&dpr=1.5",
            },
            {
                id: 3,
                data: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Very-Sad-Alone-Image-Wallpaper-Download.jpg",
            },
        ],
        comments: [
            {
                id: 1,
                user: "trea",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "trf",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "oiuy",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "poli",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "hokli",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "don",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 9,
        username: "caption_america",
        name: "Caption",
        likes : 350,
        profile_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAMSOmvBpTbwTM2oDxWfeW1KXqpsSzlOKxQ&usqp=CAU",
        thumbnail_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAMSOmvBpTbwTM2oDxWfeW1KXqpsSzlOKxQ&usqp=CAU",
        explore_data: [
            {
                id: 1,
                data: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Very-Sad-Alone-Image-Wallpaper-Download.jpg",
            },
            {
                id: 2,
                data: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
            },
            {
                id: 3,
                data: "https://youtu.be/6ifngyPjQ3U",
            },
        ],
        comments: [
            {
                id: 1,
                user: "jim",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "lim",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "gty",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "gta",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "vice",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "san",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 10,
        username: "ant_man",
        name: "Ant Man",
        likes : 874,
        profile_image:
            "https://images.pexels.com/photos/1516036/pexels-photo-1516036.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbnail_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgQ3BUZPAQeJgWbu88weHk4X7rNTrcWgBSw&usqp=CAU",
        explore_data: [
            {
                id: 1,
                data: "https://images.pexels.com/photos/1516036/pexels-photo-1516036.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
                id: 2,
                data: "https://youtu.be/tXlhi0oXKiE",
            },
            {
                id: 3,
                data: "https://youtu.be/Y9srFJwojGA",
            },
        ],
        comments: [
            {
                id: 1,
                user: "amba",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "jutrs",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "jvir",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "musa",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "jol",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "pot",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 11,
        username: "explorer",
        name: "Hamsa",
        likes : 102,
        profile_image:
            "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbnail_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU",
        explore_data: [
            {
                id: 1,
                data: "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
                id: 2,
                data: "https://youtu.be/FU_LrZydhBE",
            },
            {
                id: 3,
                data: "https://youtu.be/WzKhvsUoXeI",
            },
        ],
        comments: [
            {
                id: 1,
                user: "hok",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "fyt",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "fitti",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "lik",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "polk",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "fren",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
    {
        id: 12,
        username: "exploring_soul",
        name: "Anshab Ansh",
        likes : 900,
        profile_image:
            "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbnail_image:
            "https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp",
        explore_data: [
            {
                id: 1,
                data: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
                id: 2,
                data: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
            },
            {
                id: 3,
                data: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
            },
        ],
        comments: [
            {
                id: 1,
                user: "doll",
                avatar: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 3,
                time : "2 d",
                comment: "Great work!🙌🏻 Enjoy your holiday🍃☀️",
            },
            {
                id: 2,
                user: "deepa",
                avatar: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 10,
                time : "5 m",
                comment: "Awesome work 🔥",
            },
            {
                id: 3,
                user: "ammu",
                avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600",
                likes : 8,
                time : "1 y",
                comment: "Great share🙌, Have a nice trip ✨",
            },
            {
                id: 4,
                user: "achu",
                avatar: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 15,
                time : "2 d",
                comment:
                    "This is an amazing review of the Dom, great part 2 🙌🔥",
            },
            {
                id: 5,
                user: "david",
                avatar: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 1,
                time : "now",
                comment:
                    "Good one 🔥 best of luck for your break 😍 enjoy your time 🔥",
            },
            {
                id: 6,
                user: "beckam",
                avatar: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                likes : 47,
                time : "7 d",
                comment: "The only kinda child developers have",
            },
        ],
    },
];

export default explores;
