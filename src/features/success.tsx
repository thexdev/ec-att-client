import { Link } from 'react-router-dom';
import Ok from '../assets/ok.png'

function Success() {
    return <div>
        <img width={250} height="auto" src={Ok} alt="" />
        <h1 className='mb-2 text-center text-3xl font-bold text-slate-700'>Terimakasih!</h1>
        <p className='mb-10 text-center text-xl text-slate-500'>Absen pagi berhasil.</p>
        <div className='flex flex-row justify-center'>
            <Link className='rounded-lg block font-bold bg-slate-400 text-slate-800 text-xl px-[100px] py-3' to="/">Kembali</Link>
        </div>
    </div>
}

export default Success;