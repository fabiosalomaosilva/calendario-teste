import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { calendarApi } from './api';

export interface Calendar {
  id: number;
  date: string | null;
  content: string;
  color: string;
}

function App() {
  const [calendar, setCalendar] = useState<Calendar>()

  const getCurrentCalendar = async () => {
    setInterval(() => {
      callApi();
    }, 3000)
  }

  const callApi = async () => {
    let date = new Date();
    const dateString = date.toLocaleDateString();
    const horaArray = date.toLocaleTimeString().split(':');
    const horaFinal = horaArray[0] + ':' + horaArray[1] + ':00'
    const cal = await calendarApi.get('calendar?date=' + '2022-22-12T' + horaFinal);
    setCalendar(cal.data[0]);
  }
  useEffect(() => {
    getCurrentCalendar();
  }, [])
  useEffect(() => {
    console.log(calendar);
  }, [calendar])



  const dataHtml = () => {
    if (calendar) {
      return (
        <div style={{ backgroundColor: calendar?.color, padding: '20px' }}>
          <h3 style={{ color: '#c3c3c3' }}>Data: {calendar?.date}</h3>
          <h3 style={{ color: '#c3c3c3' }}>{calendar?.content}</h3>
        </div>
      )
    }
  }

  return (
    <div className="App">

      <h1>Calendário</h1>
      <div style={{ borderColor: '#fff', backgroundColor: '#fff', borderRadius: '5px', borderWidth: '2px', padding: '20px', width: '300px' }}>
        <h2 style={{ color: '#c3c3c3' }}>Tarefas do momento</h2>
        {dataHtml()}

      </div>

    </div>
  )
}

export default App
