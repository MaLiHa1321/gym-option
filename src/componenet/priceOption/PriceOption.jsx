import Price from '../price/Price';

const PriceOption = () => {

    const priceOption =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99 per month",
          "features": [
            "Access to cardio equipment",
            "Strength training area",
            "Locker room access",
            "Open during standard hours"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$49.99 per month",
          "features": [
            "Access to all gym equipment",
            "Group fitness classes included",
            "Personal trainer sessions",
            "Access to sauna and spa"
          ]
        },
        {
          "id": 3,
          "name": "Student Membership",
          "price": "$19.99 per month",
          "features": [
            "Access to cardio equipment",
            "Strength training area",
            "Locker room access",
            "Valid student ID required"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": "$79.99 per month",
          "features": [
            "Access for up to 4 family members",
            "Access to all gym equipment",
            "Group fitness classes included",
            "Childcare services available"
          ]
        },
        {
          "id": 5,
          "name": "Senior Membership",
          "price": "$24.99 per month",
          "features": [
            "Access to cardio equipment",
            "Senior fitness classes",
            "Access to swimming pool",
            "Social events for seniors"
          ]
        },
        {
          "id": 6,
          "name": "Corporate Membership",
          "price": "$39.99 per month (per employee)",
          "features": [
            "Discounted rates for corporate employees",
            "Access to all gym equipment",
            "Group fitness classes included",
            "Company-sponsored fitness challenges"
          ]
        }
      ]
      
    return (
        <div className='m-20'>
            <h2 className='text-4xl font-bold text-center m-4'>Best prices</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                priceOption.map(option => <Price key={option.id} option={option}></Price>)
            }
            </div>


           
            
        </div>
    );
};

export default PriceOption;