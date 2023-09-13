import {  useNavigate } from 'react-router-dom';
import CaptureSignal from '../assets/capture-signal.png'
import { useState } from 'react';

function PerformAbcense() {
    const [rfid, setRfid] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    return <div>
        <img className='mb-3 mx-auto' width={250} height="auto" src={CaptureSignal} alt="capture signal" />
        <h1 className='mb-10 text-slate-700 text-center text-2xl font-bold'>Silahkan tempelkan kartu anda</h1>
        <div className='mb-10'>
            <input className='rounded-lg py-2 border border-1 border-slate-400 w-[350px]' type="number" name="id" autoFocus onChange={(event) => {
                setRfid(event.currentTarget.value)
            }} />
        </div>
        <div className='flex flex-row justify-center'>
            <button className="block text-bold bg-blue-500 text-white text-xl px-[100px] py-3 disabled:opacity-50" disabled={isLoading} onClick={() => {
                setIsLoading(true)
                console.log(JSON.stringify({ rfid }))
                fetch('http://localhost/attendance/submit', {
                    method: 'POST',
                    headers: {
                        Accept: 'appplication/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ rfid })
                }).then((res) => {
                    if (res.ok) {
                        navigate('/berhasil')
                    } else {
                        alert('Gagal melakukan presensi!')
                    }
                }).finally(() => {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 2000);
                })
            }}>{isLoading ? 'Memuat...' : 'Lanjut'}</button>
        </div>
    </div>
}

export default PerformAbcense;