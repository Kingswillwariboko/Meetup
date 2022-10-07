import MeetupList from "../components/meetups/MeetupList"

const Homepage = () =>{

    const DUMMY_MEETUPS =[
        {
            id:'m1',
            title: 'A first meetup',
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
            address: 'some address 5, johnson street',
            description:'this is us'
        },
        {
            id:'m2',
            title: 'A second meetup',
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
            address: 'some address 5, johnson street',
            description:'this is uk'
        }
    ]
    return(
        <div>
            <MeetupList meetups={DUMMY_MEETUPS} />
        </div>
    )
}

export default Homepage