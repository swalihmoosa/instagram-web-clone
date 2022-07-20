const posts = [
    {
        id: 1,
        username: "junior_moosa",
        location: "Peaceful mind",
        likes: 70,
        isLiked: true,
        isSaved: true,
        name: "Swalih Moosa",
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
        id: 2,
        username: "albin_royson",
        location: "Peaceful mind",
        likes: 82,
        isLiked: true,
        isSaved: true,
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
        id: 3,
        username: "lallu",
        location: "Peaceful mind",
        likes: 67,
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
        id: 4,
        username: "albin_royson",
        location: "Peaceful mind",
        likes: 58,
        isLiked: false,
        isSaved: false,
        name: "Swalih Moosa",
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
        id: 5,
        username: "albin_royson",
        location: "Peaceful mind",
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
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/b/free-thinking-nourish-your-mind-positive-thoughts-good-intentions-brain-power-concept-woman-head-silhouette-sunset-inside-157807698.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/free-thinking-nourish-your-mind-positive-thoughts-good-intentions-brain-power-concept-woman-head-silhouette-sunset-inside-157807698.jpg",
    },
    {
        id: 6,
        username: "albin_royson",
        location: "Peaceful mind",
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
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/b/business-woman-relaxing-sitting-office-stress-free-time-management-concept-happy-young-her-65461487.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/business-woman-relaxing-sitting-office-stress-free-time-management-concept-happy-young-her-65461487.jpg",
    },
    {
        id: 7,
        username: "albin_royson",
        location: "Peaceful mind",
        likes: 451,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: false,
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/b/free-range-chickens-farm-outdoor-91178223.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/free-range-chickens-farm-outdoor-91178223.jpg",
    },
    {
        id: 8,
        username: "albin_royson",
        location: "Peaceful mind",
        likes: 321,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: false,
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/b/freedom-people-living-free-happy-life-beach-carefree-silhouettes-couple-sunset-arms-raised-up-showing-happiness-52124196.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/freedom-people-living-free-happy-life-beach-carefree-silhouettes-couple-sunset-arms-raised-up-showing-happiness-52124196.jpg",
    },
    {
        id: 9,
        username: "albin_royson",
        location: "Peaceful mind",
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
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/b/woman-feeling-free-beautiful-natural-setting-what-field-sunset-chains-175907923.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/woman-feeling-free-beautiful-natural-setting-what-field-sunset-chains-175907923.jpg",
    },
    {
        id: 10,
        username: "albin_royson",
        location: "Peaceful mind",
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
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/b/free-as-wind-5565107.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/b/free-as-wind-5565107.jpg",
    },
    {
        id: 11,
        username: "albin_royson",
        location: "Peaceful mind",
        likes: 745,
        comments: [
            {
                id: 1,
                user: "david",
                comment: "Wonderfull",
            },
        ],
        isLiked: false,
        isSaved: false,
        name: "Swalih Moosa",
        post: "https://thumbs.dreamstime.com/z/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg",
        profile_image:
            "https://thumbs.dreamstime.com/z/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg",
    },
];

export default posts;
