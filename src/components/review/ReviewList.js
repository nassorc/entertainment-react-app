import Review from "./Review"

function ReviewList(props) {
    return(
        <>
            {props.items.map(item => 
                <Review 
                    key={item.id}
                    id={item.id}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    createdOn={item.createdOn}
                    type={item.type}
                    author={item.user}
                    commentsLength={item.commentLength}
                />
            )}
        </>
    )
}

export default ReviewList