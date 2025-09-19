import './dashboard.css';
import StudentBox from '../components/StudentBox';
function Dashboard () {

    const Array = [
        {
            name: "Noyan", age: 24, city: "Dhaka"
        },
        {
            name: "Ayan", age: 26, city: "Chittagong"
        },
        {
            name: "Rony", age: 25, city: "Sylhet"
        }
    ]

    return (
        <div>
            {
                Array.map((el,index)=>{
                    return (
                        <StudentBox el={el} idx={index} />
                    )
                })
            }
            
        </div>
    )
}

export default Dashboard;