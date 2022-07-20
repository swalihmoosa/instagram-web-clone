const posts = [
    {
        id: 1,
        username: "loki",
        location: "Peaceful mind",
        likes: 702,
        isLiked: true,
        isSaved: true,
        name: "Reji Jacob",
        comments: [
            {
                id: 1,
                name: "id",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            },
            {
                id: 2,
                name: "quo vero",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
        ],
        post: "https://images.unsplash.com/photo-1610222034376-8dd1149e0e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMGxvb2tpbmd8ZW58MHx8MHx8&w=1000&q=80",
        profile_image:
            "https://images.unsplash.com/photo-1610222034376-8dd1149e0e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMGxvb2tpbmd8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
        id: 2,
        username: "rocky",
        location: "",
        likes: 70,
        isLiked: true,
        isSaved: false,
        comments: [
            {
                id: 1,
                name: "id",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            },
            {
                id: 2,
                name: "quo vero",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
        ],
        name: "Rocky",
        post: "https://images.unsplash.com/photo-1630481698276-300986062f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5hbmR8ZW58MHx8MHx8&w=1000&q=80",
        profile_image:
            "https://images.unsplash.com/photo-1630481698276-300986062f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5hbmR8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
        id: 3,
        username: "hamsa",
        location: "Unknown",
        likes: 720,
        isLiked: true,
        isSaved: false,
        comments: [
            {
                id: 1,
                name: "id",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            },
            {
                id: 2,
                name: "quo vero",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
        ],
        name: "Hamsa",
        post: "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80",
        profile_image:
            "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
        id: 4,
        username: "pavan",
        location: "Idukki",
        likes: 70,
        isLiked: true,
        isSaved: true,
        comments: [
            {
                id: 1,
                name: "id",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            },
            {
                id: 2,
                name: "quo vero",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
        ],
        name: "Pavan",
        post: "https://images.unsplash.com/photo-1595702419689-b64c73d36481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
        profile_image:
            "https://images.unsplash.com/photo-1595702419689-b64c73d36481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    },
    {
        id: 5,
        username: "appu",
        location: "Muttom",
        likes: 70,
        isLiked: true,
        isSaved: true,
        comments: [
            {
                id: 1,
                name: "id",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            },
            {
                id: 2,
                name: "quo vero",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
        ],
        name: "Appu",
        post: "https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80",
        profile_image:
            "https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
        id: 6,
        username: "ravi",
        location: "Gavi",
        likes: 810,
        isLiked: true,
        isSaved: false,
        name: "Ravi",
        post: "https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp",
        profile_image:
            "https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp",
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
    },
    {
        id: 7,
        username: "albin_royson",
        location: "Unknown",
        likes: 82,
        isLiked: true,
        isSaved: false,
        name: "Albin Royson",
        post: "https://thumbs.dreamstime.com/b/web-166076793.jpg",
        profile_image: "https://thumbs.dreamstime.com/b/web-166076793.jpg",
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
    },
    {
        id: 8,
        username: "lallu",
        location: "Error",
        likes: 672,
        isLiked: false,
        isSaved: false,
        name: "Naveen",
        post: "https://thumbs.dreamstime.com/z/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/z/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg",
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
    },
    {
        id: 9,
        username: "albin_royson",
        location: "Peaceful mind",
        likes: 58,
        isLiked: false,
        isSaved: false,
        name: "Albin",
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        post: "https://thumbs.dreamstime.com/b/free-happy-woman-praising-freedom-beach-sunset-arms-up-young-adult-enjoying-breathing-freely-fresh-air-49157481.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/free-happy-woman-praising-freedom-beach-sunset-arms-up-young-adult-enjoying-breathing-freely-fresh-air-49157481.jpg",
    },
    {
        id: 10,
        username: "ganesh",
        location: "Peace",
        likes: 108,
        isLiked: false,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isSaved: false,
        name: "Ganesh",
        post: "https://thumbs.dreamstime.com/b/free-thinking-nourish-your-mind-positive-thoughts-good-intentions-brain-power-concept-woman-head-silhouette-sunset-inside-157807698.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/free-thinking-nourish-your-mind-positive-thoughts-good-intentions-brain-power-concept-woman-head-silhouette-sunset-inside-157807698.jpg",
    },
    {
        id: 11,
        username: "thor",
        location: "Universe",
        likes: 99,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: false,
        name: "Thor",
        post: "https://thumbs.dreamstime.com/b/business-woman-relaxing-sitting-office-stress-free-time-management-concept-happy-young-her-65461487.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/business-woman-relaxing-sitting-office-stress-free-time-management-concept-happy-young-her-65461487.jpg",
    },
    {
        id: 12,
        username: "dolor_sit",
        location: "Amet",
        likes: 321,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: true,
        name: "Dolor Sit",
        post: "https://thumbs.dreamstime.com/b/freedom-people-living-free-happy-life-beach-carefree-silhouettes-couple-sunset-arms-raised-up-showing-happiness-52124196.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/freedom-people-living-free-happy-life-beach-carefree-silhouettes-couple-sunset-arms-raised-up-showing-happiness-52124196.jpg",
    },
    {
        id: 13,
        username: "anshab_ansh",
        location: "Thiruvananthapuram",
        likes: 202,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: false,
        name: "Anshab Ansh",
        post: "https://thumbs.dreamstime.com/b/woman-feeling-free-beautiful-natural-setting-what-field-sunset-chains-175907923.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/woman-feeling-free-beautiful-natural-setting-what-field-sunset-chains-175907923.jpg",
    },
    {
        id: 14,
        username: "motorider",
        location: "Ponmudi hills",
        likes: 458,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: false,
        name: "Rajesh Koppan",
        post: "https://thumbs.dreamstime.com/b/free-as-wind-5565107.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/free-as-wind-5565107.jpg",
    },
];

export default posts;
