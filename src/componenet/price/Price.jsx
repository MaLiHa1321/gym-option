import {AiFillCheckCircle} from 'react-icons/ai'

const Price = ({option}) => {
    const {name,price,features} = option
    return (
        <div className="bg-green-700 text-white lg:p-4 rounded-e-lg flex flex-col">
            <h1 className="text-2xl font-bold text-center m-4">{name}</h1>
            <h3 className="text-xl font-bold m-4 text-center">{price}</h3>
            <p className='mb-3 flex-grow'>{
                features.map(feature => <p className='flex item-center'> 
                <AiFillCheckCircle className='text-white mr-2'></AiFillCheckCircle> {feature}</p>)
                }</p>

            <button className='btn bg-white-500 text-black w-full p-4'>Buy now</button>

            
        </div>
    );
};

export default Price;