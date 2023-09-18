import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "John Smith", marks: 80 },
        { id: 2, name: "Emily Johnson", marks: 75 },
        { id: 3, name: "Michael Davis", marks: 92 },
        { id: 4, name: "Sarah Wilson", marks: 88 },
        { id: 5, name: "James Brown", marks: 65 },
        { id: 6, name: "Sophia Lee", marks: 78 },
        { id: 7, name: "Olivia Miller", marks: 95 },
        { id: 8, name: "William Anderson", marks: 70 },
        { id: 9, name: "Emma Martinez", marks: 87 },
        { id: 10, name: "Daniel Taylor", marks: 81 }
      ];
      
    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
               <XAxis dataKey={name}></XAxis>
               <YAxis dataKey={name}></YAxis>
                <Line  dataKey="marks" stroke='red'></Line>

            </LChart>

            
        </div>
    );
};

export default LineChart;