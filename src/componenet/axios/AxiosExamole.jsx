import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip , Legend } from 'recharts';

const AxiosExamole = () => {
    const [phone, setPhone] = useState([])

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const phoneData = data.data.data;
            const phoneWith = phoneData.map(phone => {
                const obj ={
                    name : phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])

                }
                return obj;
            })
            setPhone(phoneWith)

                })

    },[])
    return (
        <div>
            <BarChart
          width={500}
          height={300}
          data={phone}
       
        >
            <Bar dataKey="price" fill="#8884d8"></Bar>
         
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
    
        </BarChart>
            
        </div>
    );
};

export default AxiosExamole;