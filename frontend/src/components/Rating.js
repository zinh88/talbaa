const Rating = ({ rating }) => {
    const stars = [1,2,3,4,5]

    const getScore = (rating) => {
        const nearest = Math.floor(rating);
        const remainder = rating - nearest;
        const round = remainder > 0.5 ? 1 : 0;
        return nearest + round;
    }

    const getColor = (i) =>{
        return i <= getScore(rating) ? "orange":"gray"
    }

    return (
        <div>
        {
        stars.map((n) => 
            <span 
            key={n} 
            style={{ color: getColor(n) }}
            >
            ★
            </span>
        )
        }
        </div>
    );
}

export default Rating;