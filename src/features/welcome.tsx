import { Link } from "react-router-dom";

function Welcome() {
    return <div>
        <h1 className="text-center text-5xl mb-2 font-bold">Selamat Datang!</h1>
        <p className="text-center text-xl text-slate-600">Silahkan melakukan presensi untuk hari ini</p>
        <p className="text-center text-slate-600">(Absen: Masuk)</p>
        <div className="mt-28 flex flex-row justify-center">
            <Link to="/absensi" className="block text-bold bg-blue-500 text-white text-xl px-[100px] py-3">Lanjut</Link>
        </div>
    </div>;
}

export default Welcome;