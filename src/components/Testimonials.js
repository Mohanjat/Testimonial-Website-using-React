import Card from './Card';

function Testimonials({reviews}){

    return (
        <div className='reviews' >
           {
            <Card review={reviews} ></Card>
            }
        </div>
    )
    
}

export default Testimonials;