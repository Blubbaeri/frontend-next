"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Selamat Datang di Home</h1>

            <Link href="/Login">
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        backgroundColor: "#0070f3",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Ke Halaman Login
                </button>
            </Link>
        </div>
    );
}
