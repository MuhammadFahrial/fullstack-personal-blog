import React from "react";
import Layout from "../../template/Layout";
import bgAbout from "../../../assets/bgAbout.jpg";

const About = () => {
  return (
    <Layout>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mt-12">About</h1>
            <div className="max-w-5xl text-justify">
              <p className="py-6 leading-8">
                Halo lagi... sekarang kamu ada di halaman tentang saya, di
                halaman sebelumnya saya sudah memperkenalkan diri tapi itu nama
                panggilan saja hehe..., kalau kamu benar-benar pengen tau nama
                saya, kamu baca dulu ya..., nanti saya akan sisipkan nama saya
                di dalam teks yang kamu baca, atau... kamu udah tau?, kalau kamu
                udah tau nama saya mungkin kamu udah kenal saya dan tau tentang
                saya hehe...., dan kembali lagi saya minta maaf kalau ada
                kata-kata yang membingunkan atau sedikit aneh, maklum masih
                mencoba belajar cara memperkenalkan diri dengan baik hehe...
              </p>
              <img src={bgAbout} alt="" className="min-w-full rounded-md" />
              <p className="py-6 leading-8">
                Hmmm... Bagaimana yah saya memulai untuk memperkenalkan diri?
                ok, mungkin saya mulai dari bagaimana bumi terbentuk. jadi, bumi
                itu terbentuk.....#@ij$@#, kepanjangan mungkin hehe..., ok jadi,
                saya mulai dari perkulihan mungkin ya, walaupun tidak
                penting-penting amat, tapi dari sini mungkin saya dapat lebih
                mudah memulai kedepannya agar ngga terlalu banyak pertanyaan
                nantinya. jadi, pada tahun
                <span className="font-bold"> 2019 </span> saya memulai menjadi
                mahasiswa di salah satu kampus swasta di{" "}
                <span className="font-bold"> Makassar </span> dengan jurusan{" "}
                <span className="font-bold"> Teknik Informatika </span> dan
                lulus tepat waktu, walaupun saya ngga pintar-pintar amat yah...
                dari situ mungkin kamu sudah mulai tau kenapa saya membuat blog
                ini.
              </p>
              <p className=" leading-8">
                Saat ini saya sedang menjalani fase{" "}
                <span className="italic">
                  "yang penting masih bernafas aja sih hehe..."{" "}
                </span>
                owh iya sampai sekarang saya belum tampilkan nama saya yah?
                semangatt hehe... sedikit lagi ketemu, jadi setelah saya lulus
                dan menjadi alumni. saya mendapatkan job yang sangat banyakkk
                dan menumpukk tapi.....
              </p>
              <p className="py-6 leading-8">
                Semua itu hilang saat saya bangun hehe..., yah maklum lulus
                sebagai<span className="italic"> "mahasiswa kupu-kupu"</span>{" "}
                setelah lulus saya langsung sadar bahwa saya ini tidak bod*h,
                tapi kurang pintar aja + pemalas hehe...
              </p>
              <p className="pb-6 leading-8">
                Sampai sini udah bosan yah? saya juga kalau udah baca teks
                sampai banyak begini pasti bosan itulah saya Muhammad Fahrial
                yang sekarang menjadi manusia yang biasa-biasa aja. semoga kamu
                tidak bosan membaca teks tentang saya hehe... jadi gimana mau
                lanjut membaca atau sampai sini aja?
              </p>
              <p className="pb-6 leading-8">
                Untuk selanjutnya kamu mungkin mau melihat artikel-artikel yang
                nantinya saya upload terkait tentang saya atau orang-orang
                terdekat. saya juga berterima kasih untuk kamu yang sudah
                sengaja ataupun tidak sengaja mengklik link ini, sampai jumpa di
                artikel selanjutnya.......
              </p>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
