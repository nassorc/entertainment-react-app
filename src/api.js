import poster1 from './images/poster-sm.jpg'
import poster2 from './images/poster-sm-2.jpg'
import poster3 from './images/poster-sm-3.jpg'
import poster4 from './images/poster-sm-4.jpg'
export const getReviews = async () => {
    return [
        {
            id: 'l3pfu09a',
            user: 'User123',
            icon: poster1,
            title: "Retro festival screening on May 16 - 22",
            description: "Collections of retro movies and videos will be shown throughout the event.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie',
            comments: [
                {
                    commentId: 1,
                    parentId: null,
                    content: 'This looks interesting!',
                    authorId: 1000
                },
                {
                    commentId: 2,
                    parentId: 1,
                    content: 'It does!',
                    authorId: 2000
                },
                {
                    commentId: 3,
                    parentId: 1,
                    content: 'You should come.',
                    authorId: 1000
                }
            ],
            commentsLength: 3
        }, 
        {
            id: 'l3pful6i',
            user: 'User321',
            icon: poster2,
            title: "Rescreening of Avengers Endgame",
            description: "Rewatch Avengers Endgame with other fans.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: 'l3pfuuew',
            user: 'User69',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: 'l3pfzzdz',
            user: 'anm12',
            icon: poster4,
            title: "Spy x Family",
            description: "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise Twilight fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war. In the bustling Ostanian city of Berlint, Twilight dons the alias of Loid Forger, an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as Thorn Princess—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        }
    
    ]
}

export const getTrendingMovies = async () => {
    return [
        {
            id: '123',
            icon: poster4,
            title: "Spy x Family",
            description: "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise Twilight fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war. In the bustling Ostanian city of Berlint, Twilight dons the alias of Loid Forger, an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as Thorn Princess—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster2,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster2,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster1,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster1,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster4,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '123',
            icon: poster4,
            title: "Spy x Family",
            description: "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise Twilight fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war. In the bustling Ostanian city of Berlint, Twilight dons the alias of Loid Forger, an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as Thorn Princess—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster2,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster2,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster1,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster3,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster1,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
        {
            id: '124',
            icon: poster4,
            title: "Lorem1",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            createdOn: new Date(Date.now()).toISOString(),
            type: 'movie'
        },
    ]
}
