export default function Dashboard() {
    return (
        <>
            {/* Statistik */}
            <section className="stat-grid">
                <div className="stat-card blue">
                    <h3>Total Barang</h3>
                    <p>256</p>
                </div>
                <div className="stat-card green">
                    <h3>Barang Masuk</h3>
                    <p>45</p>
                </div>
                <div className="stat-card orange">
                    <h3>Barang Keluar</h3>
                    <p>32</p>
                </div>
                <div className="stat-card purple">
                    <h3>Pendapatan Hari Ini</h3>
                    <p>Rp 2.450.000</p>
                </div>
            </section>

            {/* History Transaksi */}
            <section className="history-section">
                <h2>History Transaksi</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>ID Transaksi</th>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15 Okt 2025</td>
                            <td>TRX001</td>
                            <td>Keyboard Mechanical</td>
                            <td>2</td>
                            <td>Rp 700.000</td>
                            <td className="success">Selesai</td>
                        </tr>
                        <tr>
                            <td>15 Okt 2025</td>
                            <td>TRX002</td>
                            <td>Mouse Logitech</td>
                            <td>1</td>
                            <td>Rp 250.000</td>
                            <td className="pending">Pending</td>
                        </tr>
                        <tr>
                            <td>14 Okt 2025</td>
                            <td>TRX003</td>
                            <td>Monitor 24”</td>
                            <td>1</td>
                            <td>Rp 1.500.000</td>
                            <td className="success">Selesai</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
