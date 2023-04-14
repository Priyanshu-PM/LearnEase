import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  var studentData = sessionStorage.getItem("student");
  const sdata = (JSON.parse(studentData));

  console.log(sdata.student._id);

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const key = `${apiKey}/student/rooms`;

  console.log(sdata.tokem);

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        // Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjFmNTY4ZjYzOWZlNjk4OTNlMTFjZSIsImlhdCI6MTY3OTEyNjQ4OX0.RY5JsGWOaQTUY6cQr3ZMrx6b4FShbDs44GVe1UaXJMY`,
        Authorization: `${sdata.tokem}`,
      },
    };
    const newData ={
      classroom: "se11"
    }
      axios
      .get(key,newData,config)
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setRooms(JSON.parse(data.data))
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, [key]);

  // console.log(rooms);

      const gradientColors = [
        'from-purple-500/10 to-indigo-500/10',
        'from-green-500/10 to-teal-500/10',
        'from-yellow-500/10 to-green-500/10',
        'from-pink-500/10 to-red-500/10',
        'from-blue-500/10 to-gray-500/10',
        'from-red-500/10 to-orange-500/10',
        'from-teal-500/10 to-green-500/10',
        'from-indigo-500/10 to-purple-500/10',
        'from-gray-500/10 to-blue-500/10',
        'from-red-500/10 to-pink-500/10',
        'from-blue-500/10 to-teal-500/10',
        'from-yellow-500/10 to-orange-500/10',
        'from-purple-500/10 to-red-500/10',
        'from-green-500/10 to-blueGray-500/10',
        'from-pink-500/10 to-purple-500/10',
        'from-gray-500/10 to-teal-500/10',
        'from-blue-500/10 to-yellow-500/10',
        'from-red-500/10 to-gray-500/10',
        'from-teal-500/10 to-orange-500/10',
        'from-indigo-500/10 to-blue-500/10',
        'from-blue-500/10 to-gray-500/10',
        'from-purple-500/10 to-red-500/10',
        'from-green-500/10 to-yellow-500/10',
        'from-teal-500/10 to-blue-500/10',
        'from-pink-500/10 to-orange-500/10',
        'from-yellow-500/10 to-red-500/10',
        'from-gray-500/10 to-blue-500/10',
        'from-purple-500/10 to-green-500/10',
        'from-blue-500/10 to-indigo-500/10',
        'from-red-500/10 to-pink-500/10',
        'from-teal-500/10 to-green-500/10',
        'from-orange-500/10 to-yellow-500/10',
        'from-gray-500/10 to-red-500/10',
        'from-blue-500/10 to-teal-500/10',
        'from-purple-500/10 to-gray-500/10',
        'from-green-500/10 to-blue-500/10',
        'from-pink-500/10 to-teal-500/10',
        'from-red-500/10 to-orange-500/10',
        'from-yellow-500/10 to-gray-500/10',
        'from-blue-500/10 to-purple-500/10',
        'from-green-500/10 to-red-500/10',
        'from-teal-500/10 to-blueGray-500'        
      ];

      const navigate = useNavigate()

      const handleSessionClick = (sessionId) => {

        navigate(`/student/room/${sessionId}`);
      };
    
    
  return (
    <div className='bg-gradient-to-b from-gray-200 to-white min-h-screen'>
        <Navbar/>
        <div className='px-[5rem]'>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-8">
          {rooms.map((session, index) => (
            <div
              key={session._id}
              className={`bg-gradient-to-br h-[10rem] rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${gradientColors[index % gradientColors.length]}`}
              onClick={() => handleSessionClick(session._id)}
            >
              <div className="flex justify-between mb-4">
                <div className="text-black font-bold text-xl">{session.title}</div>
                <div className="text-black text-sm pl-1">{new Date(session.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="text-black">{session.id}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-200 rounded-md p-4 mt-8">
        <p className="text-gray-800 text-lg font-bold">
          No sessions available. Please create a new session.
        </p>
      </div>
      )}

      
    </div>

    </div>
  )
}

export default Home;